import { Fragment, useEffect, useState, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloProvider } from '@apollo/client';
import client from './graphql/apolloClient';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Overview from './pages/Overview';
import Library from './pages/Library';
import LibraryRoute from './pages/LibraryRoute';
import './App.css'

function App() {

  const stars = useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => {
      return {
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 1.5 + Math.random() * 2
      };
    });
  }, []);

  interface Comet { id: number; top: number; size: number; duration: number; intense?: boolean; }

  const [comets, setComets] = useState<Comet[]>([]);
  useEffect(() => {
    const interval = setInterval(() => {
      const id = Date.now();
      const top = Math.random() * 60;
      const size = 40 + Math.random() * 40;
      const duration = 6 + Math.random() * 4;

      const newComet: Comet = {
        id,
        top,
        size,
        duration,
        intense: Math.random() < 0.6,
      };

      setComets(prev => [...prev, newComet]);

      setTimeout(() => {
        setComets(prev => prev.filter(c => c.id !== id));
      }, duration * 1000);
    }, 9000);

    return () => clearInterval(interval);
  }, []);


  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Fragment>
          <div className=" text-white antialiased selection:bg-cyan-300 selection:text-cyan-900">
            {/* Starry background with astronomical object images */}
            <div className="fixed top-0 left-0 -z-10 w-full h-full">
              <div className="starry-bg">
                <div className="stars">
                  {stars.map(star => (
                    <div
                      key={star.id}
                      className="star"
                      style={{
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        animationDuration: `${star.duration}s`
                      }}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 z-[-3] pointer-events-none">
                  {/* Ringed planet background image */}
                  <img src="client\src\assets\background\BackgroundRingedPlanet.webp" className="absolute w-40 opacity-60 blur-sm animate-pulse-slow" style={{ top: '20%', left: '5%', transform: 'rotate(-15deg)', }} alt="Planet with rings" />

                  {/* Spiral galaxy background image */}
                  <img src="client\src\assets\background\BackgroundGalaxy.webp" className="absolute w-60 opacity-40 animate-spin-slow" style={{ bottom: '10%', right: '10%', }} alt="Galaxy" />

                  {/* Nebulae background image */}
                  <img src="client\src\assets\background\BackgroundNebulae.webp" className="absolute w-72 opacity-30 mix-blend-screen animate-float-slow" style={{ top: '35%', left: '50%', }} alt="Nebula" />
                </div>
                <div className="absolute inset-0 z-[-3] bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-40 mix-blend-screen"></div>
              </div>

              <div className="absolute inset-0 z-[-1] pointer-events-none">
                {comets.map(comet => (
                  <div
                    key={comet.id}
                    className={`comet ${comet.intense ? 'comet-intense' : ''}`}
                    style={{
                      top: `${comet.top}%`,
                      right: `-10%`,
                      width: `${comet.size}px`,
                      height: '2px',
                      animation: `flyComet ${comet.duration}s linear forwards`
                    }}
                  />
                ))}
              </div>
            </div>

            {/* UI */}
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 overflow-x-clip">
              <Navbar />
              <div className="overflow-x-hidden">
                <Routes>
                  <Route path="/" element={<Fragment><Home /><Overview /></Fragment>} />
                  <Route path="/Library" element={<Library />} />
                  <Route path="/library/:nasa_id" element={<LibraryRoute />} />
                </Routes>
              </div>
            </div>
          </div>
        </Fragment>
      </BrowserRouter>
    </ApolloProvider >
  )
}

export default App
