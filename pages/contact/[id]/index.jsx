"use client"
import Head from "next/head"
import axios from "axios"
import {useState , useEffect} from "react"
import { useParams } from "next/navigation"

function Index() {

  const {id}  = useParams();
  const [user, setUser] = useState(null)
  
  const userGetData = async()=>{
     try{
       const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
       setUser(data)
     }catch(err){
       console.log(err)
     }
  }

  useEffect(()=>{
    userGetData()
  },[])

  return <>
  <Head>
    <title>User {id}</title>
  </Head>
  <div className=" container mx-auto px-10">
      <h1 className="tezt-[20px] font-medium py-2 text-center">User</h1>
      <div className="flex flex-col items-center justify-center w-full mt-[50px]">
        <div className="flex items-start  gap-[30px] justify-center">
        <div>
          <img  src={`https://picsum.photos/id/2${id}/350/400`} alt={user?.name} />
        </div>
        <div className="min-w-[500px]">
          <h1 className="text-center text-[20px] font-medium">{user?.name}</h1>
          <p className="flex items-center justify-between px-3 py-1 border-b text-[16px] font-medium">User name : <span>{user?.username}</span></p>
          <p className="flex items-center justify-between px-3 py-1 border-b text-[16px] font-medium">Email : <span>{user?.email}</span></p>
          <p className="flex items-center justify-between px-3 py-1 border-b text-[16px] font-medium">Phone : <span>{user?.phone}</span></p>
          <p className="flex items-center justify-between px-3 py-1 border-b text-[16px] font-medium">Website : <span>{user?.website}</span></p>
          <p className="flex items-center justify-between px-3 py-1 border-b text-[16px] font-medium">Address city : <span>{user?.address?.city}</span></p>
          <p className="flex items-center justify-between px-3 py-1 border-b text-[16px] font-medium">Address street : <span>{user?.address?.street}</span></p>
          <p className="flex items-center justify-between px-3 py-1 border-b text-[16px] font-medium">Address suite : <span>{user?.address?.suite}</span></p>
          <p className="flex items-center justify-between px-3 py-1 border-b text-[16px] font-medium">Address zipcode : <span>{user?.address?.zipcode}</span></p>
          <p className="flex items-center justify-between px-3 py-1 border-b text-[16px] font-medium">Company name : <span>{user?.company?.name}</span></p>
          <p className="flex items-center justify-between px-3 py-1 border-b text-[16px] font-medium">Company catchPhrase : <span>{user?.company?.catchPhrase}</span></p>
          <p className="flex items-center justify-between px-3 py-1 border-b text-[16px] font-medium">Company bs : <span>{user?.company?.bs}</span></p>
        </div>
        </div>
      </div>

     
  </div>
   </>
}

export default Index