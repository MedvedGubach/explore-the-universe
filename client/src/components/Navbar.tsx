import { Fragment } from 'react'
import logo from '../assets/uiImages/CosmicAtlasLogo.webp'
import GlitchText from './GlitchText';
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <Fragment>
            <div className="top-0 z-50 py-6 flex items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                    <img height={40} width={40} className="mx-2 w-10 rounded-xl" src={logo} alt="logo" />
                </div>

                <div className="hidden sm:flex sm:space-x-12">
                    <Link to="/" className="inline-block  text-black font-semibold py-2 px-6 rounded-xl ">
                        <GlitchText text="Home" className="text-2xl text-white hover:text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]" />
                    </Link>
                    <Link to="/" className="inline-block  text-black font-semibold py-2 px-6 rounded-xl ">
                        <GlitchText text="About" className="text-2xl text-white hover:text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]" />
                    </Link>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar