import { Container } from 'postcss'
import React from 'react'
import Image from 'next/image'


const Home = () => {
  return (

    <div className='flex flex-col md:flex-row gap-8 items-center justify-between p-4'>
      <div className='md:w-[50%] flex flex-col justify-between p-4 gap-6'>
        <div>
          <h1 className='text-3xl md:text-6xl text-yellow-500 font-bold'>Welcome to: <br /> The A.I. Coders!</h1>
          <p className='text-2xl text-pretty text-justify indent-20'>At The A.I. Coders, we are passionate about unlocking the transformative power of artificial intelligence and coding. Our mission is to bridge the gap between complex AI concepts and practical applications, enabling innovators, developers, and enthusiasts to create smarter solutions.</p>
        </div>
        <div className='hidden md:flex flex-col'>
          <h2 className='text-4xl font-bold opacity-60'>Who We Are</h2>
          <p className='text-xl text-justify indent-20'>We are a community of AI enthusiasts, programmers, and thought leaders dedicated to exploring the limitless potential of artificial intelligence. Whether you’re a seasoned developer or a curious beginner, our platform is your go-to resource for insights, tutorials, and tools to harness the power of AI.</p>
        </div>

        <div className='hidden md:flex flex-col'>
          <h2 className='text-4xl font-bold opacity-60' >What We Do</h2>
          <ul>
            <li className='flex flex-col gap-2 items-start'>
              <h4 className=' text-xl font-bold underline opacity-50'>Educational Content:</h4>
              <p className='indent-20 text-center'>Dive into detailed tutorials, guides, and resources tailored for AI enthusiasts and developers</p>
            </li>
            <li className='flex flex-col gap-2 items-start'>
              <h4 className=' text-xl font-bold underline opacity-50'>AI News and Trends:</h4>
              <p className='indent-20 text-center'>Stay updated with the latest advancements in artificial intelligence and machine learning.</p>
            </li>
            <li className='flex gap-2 items-start flex-col'>
              <h4 className=' text-xl font-bold underline opacity-50'>Community Engagement:</h4>
              <p className='indent-20 text-center'>Connect with like-minded individuals, share ideas, and collaborate on AI-powered projects.</p>
            </li>
            <li className='flex gap-2 items-start flex-col'>
              <h4 className=' text-xl font-bold underline opacity-50'>Innovative Solutions:</h4>
              <p className='indent-20 text-center'>Explore real-world applications of AI to solve challenges across industries.
                Join us in shaping the future of technology, one line of code at a time!</p>
            </li>

          </ul>
        </div>

      </div>
      <div>
        <Image src="/home.jpeg" alt='' width={600} height={600} className='rounded-full' />
      </div>

    </div>
  )
}

export default Home