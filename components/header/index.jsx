import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

function Header() {
    const router = useRouter()
   const path = router.pathname
    

  const data = [
    {
      id: 1,
      title: 'Home',
      path: '/'
    },
    {
      id: 2,
      title: 'About',
      path: '/about'
    },
    {
      id: 3,
      title: 'Contact',
      path: '/contact'
    }
  ]


  return (
    <>
    <header >
      <nav className='container'>
        <ul className=' flex items-center justify-around py-3 bg-gray-500'>
          {
            data.map(item => (
              <li key={item.id}>
                <Link href={item.path} className={path == item.path ? "text-[18px] font-medium bg-white text-gray-500 py-1 px-2 rounded-md" : "text-[18px] font-medium text-white py-1 px-2"}>
                  {item.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
    </>
  )
}

export default Header