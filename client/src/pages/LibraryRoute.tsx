import { Fragment } from 'react'
import { useParams, useLocation } from 'react-router-dom'

const LibraryRoute = (/* { description, preview_url, files, nasa_id }: { description: string, preview_url: string, files: string, nasa_id: string } */) => {
    const { nasa_id } = useParams();
    const location = useLocation();
    const item = location.state;

    console.log('item:', item);

    return (
        <Fragment>
            <div className="m-auto p-6">
                <h1 className="text-2xl font-orbitron text-cyan-400">Details for NASA ID: {nasa_id} </h1>
                <div className="">
                    <img src={item.preview_url} alt={item.title} width={640} height={360} />
                </div>

                <div className="">
                    <article>
                        <p>{item.description}</p>
                    </article>
                </div>
            </div>
        </Fragment>
    )
}

export default LibraryRoute