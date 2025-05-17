import { Fragment, useEffect } from 'react';
import GlitchText from '../components/GlitchText';
import blackHoleVideo from '../assets/videos/BlackHoleBackground.webm';
import fallBackVideo from '../assets/videos/BlackHoleBackground.mp4';
import { Link } from 'react-router-dom';
const Home = () => {


    const fetchPlanets = async () => {
        try {
            const response = await fetch('https://api.le-systeme-solaire.net/rest/bodies/');
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchPlanets();
    }, [])


    return (
        <Fragment>
            <section id="home" className="relative z-10 border-b-2">
                <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-[-1]">
                    <source src={blackHoleVideo} type="video/webm" />
                    <source src={fallBackVideo} type="video/mp4" />
                    Your browser doesn't support HTML5.
                </video>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2 lg:ml-auto lg:p-8">
                        <div className="text-right font-orbitron mt-28">
                            <h1 className="text-8xl mb-4">Explore the Universe</h1>
                            <article className='text-2xl text-justify'>
                                <p>
                                    The never-ending discovery and exploration of celestial structures
                                    in outer space by means of continuously evolving and growing space technology.
                                </p>
                            </article>

                            <Link to={'/Solar-System'}>
                                <GlitchText
                                    text="Enter the wormhole"
                                    className="text-2xl text-white hover:text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]"
                                />
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Home
