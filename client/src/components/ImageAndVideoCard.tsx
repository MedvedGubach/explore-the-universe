import { Fragment } from 'react'

const ImageAndVideoCard = () => {
    return (
        <Fragment>
            <div className="pb-4">
                <h1 className='drop-shadow-[0_0_20px_rgba(0,255,255,0.6)] mt-6 font-orbitron text-4xl'>Image and Video Library</h1>
                <div className="flex flex-wrap">

                    <div className="w-full lg:w-1/2">
                        <div className="flex flex-col items-center mt-12">
                            <img src="" alt="" />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 lg:p-8">
                        <div className="flex justify-center">
                            <article>
                                <p></p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ImageAndVideoCard