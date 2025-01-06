import { MailIcon } from 'lucide-react'
import React from 'react'

const Contect = () => {
  return (
    <div className='flex flex-col items-center gap-10 justify-around p-12'>
        <h1 className='text-3xl md:text-8xl text-amber-500'>Rizwan Ahmed</h1>
        <p className='flex flex-row items-center gap-2 md:gap-8 md:text-4xl text-2xl opacity-60 font-bold'><MailIcon/>
        <a href="mailto:razykan.ra@gmail.com?subject=Contact%20Us&body=Hi%20there,%20I%20have%20a%20question%20about..."
        style={{
          display: 'inline-block',
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
        }}
      >
        razykan.ra@gmail.com
      </a></p>
    </div>
  )
}

export default Contect