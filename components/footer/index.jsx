import React from 'react'

function Footer() {
  return (
    <>
    <footer className='comtainer bg-gray-500 '>
        <div className='flex items-center justify-center py-3'>
            <p className='text-[18px] text-white font-medium'>Copyright &copy; {new Date().getFullYear()}</p>
        </div>

    </footer>
    </>
  )
}

export default Footer