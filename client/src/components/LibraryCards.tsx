import { Fragment, useState } from 'react';
import LibraryDetailsDialog from './LibraryDetailsDialog';
import { useQuery } from '@apollo/client';
import { GET_NIVL } from '../graphql/queries/nivlClient';
import GlitchText from './GlitchText';
import { Button } from '@headlessui/react';
import { Nivl } from '../interfaces/Nivl';

const LibraryDetails = ({ query }: { query: string }) => {
    const [dialogDetailsOpen, setDialogDetailsOpen] = useState(false);
    const [selectedCardDetails, setSelectedCardDetails] = useState<Nivl | undefined>();
    const { data, loading, error } = useQuery(GET_NIVL, { variables: { query: query || "Mars" }, skip: query.trim().length === 0 });

    if (!query) return <p className="font-orbitron text-3xl drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">Awaiting instructions, Captain</p>;
    if (loading) return <p className="font-orbitron text-3xl drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">Heading into infinity...</p>;
    if (error) return <p className="font-orbitron text-3xl drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">Critical failure in mission - Returning to Earth...: {error.message}</p>;


    const handleOpenDetails = (item: Nivl) => {
        setSelectedCardDetails(item);
        setDialogDetailsOpen(true);
    }

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
                                <Button onClick={() => { handleOpenDetails(item); console.log('item:', item) }}>
                                    <GlitchText text="View Details" className="text-2xl text-white hover:text-cyan-400 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]" />
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {selectedCardDetails && (
                <LibraryDetailsDialog
                    item={selectedCardDetails}
                    open={dialogDetailsOpen}
                    onClose={() => setDialogDetailsOpen(false)}
                />
            )}
        </Fragment >
    );
};

export default LibraryDetails;