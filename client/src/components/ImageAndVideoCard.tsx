import { Fragment } from 'react';
import nivlImage from '../assets/uiImages/NivlImage.webp';
import GlitchText from './GlitchText';
import { Link } from "react-router-dom";

const ImageAndVideoCard = () => {
    return (
        <Fragment>
            <div className="pb-4">
                <h1 className='drop-shadow-[0_0_20px_rgba(0,255,255,0.6)] mt-6 font-orbitron text-4xl'>Image and Video Library</h1>
                <div className="flex flex-wrap">

                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-center mt-12">
                            <img src={nivlImage} alt="nivlImage1" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex justify-center">
                            <article className="text-start pt-7">
                                <p className="text-gray-300">
                                    Dive into a celestial archive of over 140,000 images from NASA's official database — a vast collection of awe-inspiring,
                                    high-resolution glimpses into the cosmos. Witness the silent poetry of space: astronauts adrift in the void,
                                    rockets igniting dreams, and the infinite beauty of the universe captured in stillness and motion.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
                <hr className="border-t border-white opacity-100" />
                <div className="text-center">
                    <Link to="/Library" className="inline-block  text-black font-semibold py-2 px-6 rounded-xl ">
                        <GlitchText text="Venture Into Endlessness" className="text-2xl text-white hover:text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]" />
                    </Link>
                </div>

            </div>
        </Fragment>
    )
}

export default ImageAndVideoCard