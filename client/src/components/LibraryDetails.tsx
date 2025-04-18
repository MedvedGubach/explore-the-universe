import { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { GET_NIVL } from '../graphql/queries/nivlClient';

const LibraryDetails = ({ query }: { query: string }) => {

    interface Nivl { title: string, description: string, nasa_id: string, preview_url: string, date_created: string; }
    const { data, loading, error } = useQuery(GET_NIVL, { variables: { query: query || "Mars" }, skip: query.trim().length === 0 });

    if (!query) return <p className="font-orbitron text-3xl drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">Awaiting instructions, Captain</p>;
    if (loading) return <p className="font-orbitron text-3xl drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">Heading into infinity...</p>;
    if (error) return <p className="font-orbitron text-3xl drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">Critical failure in mission - Returning to Earth...: {error.message}</p>;

    return (
        <Fragment>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                {data?.nivl?.map((item: Nivl, idx: number) => (
                    <div className="bg-black bg-opacity-60 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition duration-300 border border-cyan-500 flex flex-col h-full"
                        key={idx}>
                        <img src={item.preview_url} alt={item.title} className="w-full h-48 object-cover" />
                        <div className="p-4 flex-grow-0">
                            {/* <p className="text-sm text-cyan-400 mb-1 font-orbitron">{new Date(item.date_created).toISOString().split("T")[0]}</p> */}
                            <h3 className="text-white font-bold text-md font-orbitron">{item.title}</h3>
                        </div>

                        <div className="mt-auto">
                            <hr className="border-cyan-700 mx-4" />
                            <div className="p-4 text-center">
                                <a href={item.description} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-200 font-orbitron underline">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default LibraryDetails;