"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation'
import {useState , useEffect} from 'react'

import Head from 'next/head'

function Index() {

    const [contacts, setContacts] = useState([]) 
    const router = useRouter()

    const singlePage = (id) => {
        router.push(`/contact/${id}`)
    }

    const userGetData = async()=>{
       try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        setContacts(res.data)
        console.log(res.data);

       }catch(err){
         console.log(err);
       }
    }

    useEffect(() => {
        userGetData()
    }, [])

    return <>
        <div className='container  mx-auto px-10'>
            <Head>
                <title>Contact page</title>
            </Head>
            <div className='py-2'>
                <h1 className='text-[20px] font-medium py-2'>This is the users page</h1>
                <div className='grid grid-cols-3 gap-5'>
                    {contacts?.map((item, index) => {
                        return (
                            <div key={index} onClick={()=>singlePage(item?.id)}  className='bg-gray-200 cursor-pointer p-3 rounded-md shadow-md'>
                                <h1 className="text-center py-2 font-medium text-[18px]">{item?.name}</h1>
                                <p className="flex items-center justify-between px-3 py-1 font-medium">Email: <span>{item?.email}</span></p>
                                <p className="flex items-center justify-between px-3 py-1 font-medium">Phone: <span>{item?.phone}</span></p>
                                <p className="flex items-center justify-between px-3 py-1 font-medium">Website: <span>{item?.website}</span></p>
                                <p className="flex items-center justify-between px-3 py-1 font-medium">Company: <span>{item?.company?.name}</span></p>
                                <p className="flex items-center justify-between px-3 py-1 font-medium">Address: <span>{item?.address?.city}</span></p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </>
}

export default Index