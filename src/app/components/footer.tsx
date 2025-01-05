import React from 'react'
import FooterContactForm from './FooterContactForm'
import Link from 'next/link'
import SocialMedia from './SocialMedia'
import { Copyright } from 'lucide-react'


const Footer = () => {
    return (
        <div>

        <div className='flex flex-col md:flex-row items-center justify-between py-2 bg-orange-800'>
            <div className='flex flex-col items-center p-6 justify-between gap-8 xs:gap-16'>
                <Link href={'/'} className=' xs:text-4xl text-xl font-bold text-center '>The A.I. Coders</Link>
                <SocialMedia/>
            </div>
            <FooterContactForm />
        </div>
        <div className='flex flex-col xs:flex-row items-center justify-between py-4 px-6 bg-lime-600'>

        <p>Designed and Developed  by Rizwab Ahmed;</p>
        <p className='flex items-center justify-between gap-4'><Copyright/> ALL RIGHTS RESERVED</p>
        </div>
        </div>
    )
}

export default Footer