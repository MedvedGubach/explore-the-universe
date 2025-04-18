import { Fragment } from 'react'
import ApodViewer from '../components/ApodViewer';
import ImageAndVideoCard from '../components/ImageAndVideoCard';
const Overview = () => {
    return (
        <Fragment>
            <section id="overview" className="min-h-screen py-12">
                <div className="container mx-auto space-y-12 px-4">
                    <div className="bg-neutral-900 bg-opacity-50 rounded-2xl">
                        <h1 className="text-4xl text-white mb-6 font-orbitron drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">About</h1>
                        <h2 className='text-2xl text-gray-300 mb-4'>What is Cosmic Atlas?</h2>
                        <article className="text-gray-200 text-base leading-relaxed mb-8 text-justify">
                            <p>
                                <strong>Cosmic Atlas</strong> is more than a platform — it's a starbound voyage. An interactive gateway
                                forged for explorers of the unknown, it merges NASA's live data with cutting-edge tech like GraphQL to unveil
                                the cosmos in all its glory. Witness the fiery birth of stars, the haunting dance of nebulae, and the celestial
                                rhythms that shape our universe. From the radiant pulse of distant galaxies to the stillness of a moonlit crater,
                                each visit is a journey — a cinematic dive into the epic narrative written in stardust and light.
                            </p>

                            {/*  <p>
                                <strong>Cosmic Atlas</strong> is your portal to the infinite — an interactive web odyssey that invites curious minds
                                and cosmic dreamers to wander the stars. Fusing real-time data from NASA with the elegance of GraphQL, it unveils the
                                universe in motion: from daily celestial wonders to the quiet birth and death of stars. Whether you're tracing the
                                swirling depths of a nebula or marveling at the Astronomy Picture of the Day, Cosmic Atlas transforms your browser
                                into a window to the stars — a sci-fi symphony at your fingertips.
                            </p> */}

                        </article>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {/* APOD */}
                        <div className="bg-neutral-900 rounded-2xl bg-opacity-50 p-6 shadow-md space-y-6">
                            <ApodViewer></ApodViewer>
                        </div>

                        <div>
                            {/* NIVL */}
                            <div className="bg-neutral-900 rounded-2xl bg-opacity-50 mb-8">
                                <ImageAndVideoCard></ImageAndVideoCard>
                            </div>

                            {/* Otro apartado */}
                            <div className="bg-neutral-900 bg-opacity-50 rounded-2xl p-6 shadow-md pt-12">
                                <h2 className="text-white text-2xl font-semibold mb-4">Otro apartado</h2>
                                <p className="text-gray-300">Contenido adicional o descripción aquí.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Overview