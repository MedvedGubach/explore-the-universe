import { Fragment, useState } from 'react';
import { Input, Button } from '@headlessui/react'
import LibraryDetails from '../components/LibraryDetails';


const Library = () => {

    const [search, setSearch] = useState('');
    const [submitSearch, setSubmitSearch] = useState('');

    const handleSearch = () => { setSubmitSearch(search); }

    return (
        <Fragment>
            <div className="mx-auto px-4 py-6 bg-neutral-900 bg-opacity-50">
                <div className="pb-4 space-x-4">
                    <Input className="bg-black text-cyan-400 border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-300 p-2 rounded font-orbitron"
                        onChange={(e) => { setSearch(e.target.value); }} value={search} name="search" type="text" placeholder="Search the universe..."
                        onKeyDown={(e) => { if (e.key === 'Enter') { handleSearch(); } }} />

                    <Button onClick={handleSearch} className="ml-2 bg-cyan-500 text-black font-bold px-4 py-2 rounded shadow hover:bg-cyan-400 transition font-orbitron">
                        Launch
                    </Button>
                </div>

                <div>
                    <LibraryDetails query={submitSearch} />
                </div>
            </div>
        </Fragment>
    )
}

export default Library