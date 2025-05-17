import { useCubeTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

const SceneSkybox = () => {
    const cubeTexture = useCubeTexture(
        ['px.webp', 'nx.webp', 'py.webp', 'ny.webp', 'pz.webp', 'nz.webp'],
        { path: '/assets/3dScenes/' }
    );


    const { scene } = useThree();
    useEffect(() => {
        scene.background = cubeTexture;
    }, [scene, cubeTexture]);

    return null;
};

export default SceneSkybox