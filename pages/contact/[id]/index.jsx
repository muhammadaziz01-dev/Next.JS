"use client"
import Head from "next/head"
import { useParams } from "next/navigation"

function Index() {
  const {id}  = useParams()
  

  return <>
  <Head>
    <title>Contact {id}</title>
  </Head>
  <div className=" container mx-auto px-10">
      <h1 className="tezt-[20px] font-medium py-2">Contact {id}</h1>
     
  </div>
   </>
}

export default Index