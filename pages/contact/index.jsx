import Head from 'next/head'
import React from 'react'

function Index() {
    return <>
        <div className='container  mx-auto px-10'>
            <Head>
                <title>Contact page</title>
            </Head>
            <div className='py-2'>
                <h1 className='text-[20px] font-medium py-2'>This is the contact page</h1>
                <div className='grid grid-cols-2 gap-5'>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
                        return (
                            <div key={index} className='bg-gray-200 p-3 rounded-md shadow-md'>
                                <p>
                                   {item} )  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio ea quam fugiat, officia fugit voluptatem voluptates doloremque eligendi, minima commodi laboriosam aperiam magnam? Doloribus explicabo et, numquam dolorem dignissimos autem ex ea, ut cumque porro esse voluptatum architecto rem blanditiis eveniet nisi? Dolores deserunt libero quod? Nesciunt itaque illum quibusdam?
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
}

export default Index