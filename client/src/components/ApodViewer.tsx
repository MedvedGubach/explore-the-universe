import { Fragment } from 'react'
import { useQuery } from '@apollo/client'
import { GET_APOD } from '../graphql/queries/apodClient'

const Apod = () => {

    const { loading, error, data } = useQuery(GET_APOD, {
        /* Prevents from unecessary repeated request */
        fetchPolicy: 'cache-first',
    })

    if (loading) return <p>Loading</p>
    if (error) return <p>Something went wrong {error.message} </p>
    console.log(data.apod);
    return (
        <Fragment>
            <div className="pb-4">
                <h1 className='drop-shadow-[0_0_20px_rgba(0,255,255,0.6)] mt-6 font-orbitron text-4xl'>Astronomy Picture of The Day</h1>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-center mt-12">
                            <img src={data.apod.url} width={300} height={500} alt="Astronomy Picture of The Day" className="ring-1 rounded-xl drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex justify-center"></div>
                        <article className="text-start">
                            <h2 className="drop-shadow-[0_0_20px_rgba(0,255,255,0.6)]">{data.apod.title} - {data.apod.date}</h2>
                            <p className=' text-gray-300'>{data.apod.explanation}</p>
                        </article>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Apod