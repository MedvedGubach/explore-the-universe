import { Fragment } from 'react'
import ApodViewer from '../components/ApodViewer';
import ImageAndVideoCard from '../components/ImageAndVideoCard';
const Overview = () => {
    return (
        <Fragment>
            <section id="overview" className="">
                <div className="container mx-auto mt-12">
                    <div className="bg-neutral-900 bg-opacity-50 rounded-2xl">
                        <h1 className="text-4xl text-white mb-6 font-orbitron drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">About</h1>
                        <h2 className='text-2xl text-gray-300 mb-4'>What is Cosmic Atlas?</h2>
                        <article className="text-gray-200 text-base leading-relaxed mb-8 text-justify">
                            <p>
                                <strong>Cosmic Atlas</strong> is an interactive web platform that offers a gateway into the vast wonders our universe.
                                Designed for space enthusiasts and curious minds, it combines real-time data from NASA with modern technologies like GraphQL to showcase daily
                                astronomical phenomena, celestial events, and educational content. Whether you're looking to explore nebulae, understand the life cycle of stars,
                                or simply admire the Astronomy Picture of the Day, Cosmic Atlas provides an immersive, sci-fi-inspired experience from your browser.
                            </p>
                        </article>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        <div className="bg-neutral-900 rounded-2xl bg-opacity-50">
                            <ApodViewer></ApodViewer>
                        </div>
                        <div className="bg-neutral-900 rounded-2xl bg-opacity-50">
                            <ImageAndVideoCard></ImageAndVideoCard>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Overview