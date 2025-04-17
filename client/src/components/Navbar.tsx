import { Fragment } from 'react'
import logo from '../assets/CosmicAtlasLogo.webp'
const Navbar = () => {
    return (
        <Fragment>
            <div className="top-0 z-50 py-6 flex items-center justify-between">
                <div className="flex flex-shrink-0 items-center">
                    <img height={40} width={40} className="mx-2 w-10 rounded-xl" src={logo} alt="logo" />
                </div>

                <div className="hidden sm:flex sm:space-x-12">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar