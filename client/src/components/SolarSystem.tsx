import { useRef, useState, Fragment, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';
import SceneLoader from './SceneLoader';
import SceneSkybox from './SceneSkybox';

interface PlanetData {
    name: string;
    color: string;
    size: number;
    distance: number;
    info: string;
    hasRing?: boolean;
}

const planets: PlanetData[] = [
    { name: "Mercury", color: "#a9a9a9", size: 0.3, distance: 10, info: "Mercury is the closest planet to the Sun." },
    { name: "Venus", color: "#f5deb3", size: 0.5, distance: 14, info: "Venus has a thick, toxic atmosphere and extreme heat." },
    { name: "Earth", color: "#1e90ff", size: 0.6, distance: 20, info: "Earth is the only known planet with liquid water." },
    { name: "Mars", color: "#ff4500", size: 0.4, distance: 26, info: "Mars is known as the Red Planet due to its iron oxide surface." },
    { name: "Jupiter", color: "#d2b48c", size: 2.5, distance: 34, info: "Jupiter is the largest planet in our Solar System.", hasRing: true },
    { name: "Saturn", color: "#f5deb3", size: 2.2, distance: 50, info: "Saturn is famous for its large ring system.", hasRing: true },
    { name: "Uranus", color: "#add8e6", size: 1.7, distance: 64, info: "Uranus rotates on its side, unlike any other planet.", hasRing: true },
    { name: "Neptune", color: "#4169e1", size: 1.6, distance: 78, info: "Neptune has the strongest winds in the Solar System.", hasRing: true },
    { name: "Pluto", color: "#aaaaaa", size: 0.5, distance: 92, info: "Pluto is a dwarf planet known for its icy surface." },
];

const Planet = ({ name, color, size, distance, info, hasRing, speed, onClick }: PlanetData & { speed: number; onClick: (planet: { name: string; info: string }) => void }) => {

    const groupRef = useRef<THREE.Group>(null);

    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += speed;
        }
    });

    return (
        <group ref={groupRef}>
            <mesh
                position={[distance, 0, 0]}
                onClick={() => onClick({ name, info })}
            >
                <sphereGeometry args={[size, 32, 32]} />
                <meshStandardMaterial color={color} />
                <Html position={[0, size + 0.5, 0]} center>
                    <div className="text-white text-sm">{name}</div>
                </Html>
            </mesh>

            {hasRing && (
                <mesh position={[distance, 0, 0]} rotation={[Math.PI / 2.5, 0, 0]}>
                    <ringGeometry
                        args={[
                            size + 0.1,
                            size + (name === "Saturn" ? 1.5 : 0.3),
                            64,
                        ]}
                    />
                    <meshBasicMaterial
                        color={name === "Saturn" ? 0xd2b48c : 0xffffff}
                        transparent
                        opacity={name === "Saturn" ? 0.5 : 0.15}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            )}
        </group>
    );
};

/* Planets visible orbit rings */
const OrbitRing = ({ radius }: { radius: number }) => (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.05, radius + 0.05, 64]} />
        <meshBasicMaterial
            color={0x00ffff}
            side={THREE.DoubleSide}
            transparent
            opacity={0.2}
        />
    </mesh>
);

const SolarSystemScene = ({ onPlanetClick }: { onPlanetClick: (planet: any) => void }) => {


    const { scene } = useThree();
    useEffect(() => {
        const loader = new THREE.CubeTextureLoader();
        const starfieldTexture = loader.load([
            new URL('../assets/3dScenes/px.webp', import.meta.url).href,
            new URL('../assets/3dScenes/nx.webp', import.meta.url).href,
            new URL('../assets/3dScenes/py.webp', import.meta.url).href,
            new URL('../assets/3dScenes/ny.webp', import.meta.url).href,
            new URL('../assets/3dScenes/pz.webp', import.meta.url).href,
            new URL('../assets/3dScenes/nz.webp', import.meta.url).href,
        ]);

        scene.background = starfieldTexture;
        return () => {
            starfieldTexture.dispose();
        };
    }, [scene]);

    return (
        <>
            <ambientLight intensity={3} />
            <pointLight position={[0, 0, 0]} intensity={2} />
            {/* <SceneSkybox /> */}
            {/* Sun */}
            <mesh>
                <sphereGeometry args={[5, 32, 32]} />
                <meshBasicMaterial color="yellow" />
            </mesh>

            {/* Orbit Rings */}
            {planets.map((planet) => (<OrbitRing key={`orbit-${planet.name}`} radius={planet.distance} />))}

            {/* Planets */}
            {planets.map((planet, index) => (
                <Planet
                    key={planet.name}
                    {...planet}
                    speed={0.01 / (index + 1)}
                    onClick={onPlanetClick}
                />
            ))}

            <OrbitControls enableDamping />
        </>
    );
};

const SolarSystem = () => {
    const [selectedPlanet, setSelectedPlanet] = useState<null>(null);

    useEffect(() => {
        return () => {
            THREE.Cache.clear();
        };
    }, []);

    return (
        <Fragment>
            <Canvas
                className="fixed top-0 left-0 w-screen h-screen z-0"
                camera={{ position: [0, 20, 40], fov: 75 }}
                onCreated={({ gl }) => {
                    return () => {
                        gl.dispose();
                    };
                }}
            >
                {/*<div className="fixed inset-0 flex items-center justify-center bg-black z-50"><h1 className="text-white text-2xl animate-pulse">Heading into orbit...</h1></div>*/}
                <Suspense fallback={null}>
                    <SolarSystemScene onPlanetClick={setSelectedPlanet} />
                </Suspense>
            </Canvas>
            <SceneLoader />

            {selectedPlanet && (
                <div className="fixed top-20 right-20 bg-black text-white p-6 rounded-lg z-10 border border-cyan-500">
                    <h2 className="text-xl font-bold">{selectedPlanet.name}</h2>
                    <p>{selectedPlanet.info}</p>
                    <button
                        onClick={() => setSelectedPlanet(null)}
                        className="mt-4 bg-cyan-500 hover:bg-cyan-700 text-white py-2 px-4 rounded"
                    >
                        Close
                    </button>
                </div>
            )}
        </Fragment>
    );
};

export default SolarSystem