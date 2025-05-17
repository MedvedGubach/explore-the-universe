import { Loader } from "@react-three/drei";

const SceneLoader = () => {
    return (
        <Loader
            containerStyles={{ backgroundColor: '#000', color: '#fff' }}
            innerStyles={{ color: '#0ff' }}
            barStyles={{ backgroundColor: '#0ff' }}
            dataInterpolation={(p) => `Cargando: ${p.toFixed(2)}%`}
            initialState={(active) => active}
        />)
}

export default SceneLoader