import { Fragment } from 'react'
import { Button, Dialog, DialogPanel, DialogTitle, Transition } from '@headlessui/react'
import { Nivl } from '../interfaces/Nivl';

const LibraryDetailsDialog = ({ item, open, onClose }: { item: Nivl, open: boolean, onClose: () => void; }) => {


    console.log('item in dialog-', item);
    if (!item) return null;

    return (
        <Fragment>
            <Dialog open={open} onClose={onClose} as="div" className="relative z-10 focus:outline-none">
                <div className="fixed inset-0 z-10 max-w-screen">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <Transition.Child as={Fragment} enter="ease-out duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
                        >
                            <DialogPanel transition
                                className="w-full max-w-7xl h-[90vh] rounded-xl bg-neutral-800 bg-opacity-90 p-6 backdrop-blur-2xl duration-300 ease-out 
                                data-closed:transform-[scale(95%)] data-closed:opacity-0"
                            >
                                <div className="overflow-y-auto h-full overflow-x-hidden">
                                    <div className="text-center space-y-4">
                                        <DialogTitle as="h1" className="text-center text-2xl font-bold text-white font-orbitron drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">Details About:</DialogTitle>
                                        <h2 className="text-white font-semibold font-orbitron drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">{item.title}</h2>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-8">
                                        <div className="pl-1">
                                            <img src={item.preview_url} alt="Detailed Image Info" className="rounded-xl drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]" />
                                        </div>
                                        <div className="">
                                            <article className="text-gray-200">
                                                <p className="font-semibold text-center font-orbitron" >{item.nasa_id}</p>
                                                <p className=" font-mono">{item.description}</p>
                                            </article>
                                        </div>

                                        <div className="text-white absolute bottom-6 left-6 z-10">
                                            <Button className="ml-2 bg-cyan-500 text-black font-bold px-4 py-2 rounded shadow hover:bg-cyan-400 transition font-orbitron" >Back to Cosmic Archive</Button>
                                        </div>
                                    </div>
                                </div>
                            </DialogPanel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Fragment>
    )
}

export default LibraryDetailsDialog