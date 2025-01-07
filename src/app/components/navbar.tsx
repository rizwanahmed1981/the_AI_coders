import Link from 'next/link'
import React from 'react'
import SocialMedia from './SocialMedia'
import ThemeToggle from './ThemeToggle'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from 'lucide-react'


const Navbar = () => {
  return (
    <header className='xs:bg-lime-600 font-bold flex items-center justify-between py-2 px-4 border-2 sticky top-0 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10'>
      <nav>
        <Link href={'/'} className='text-sky-200 xs:text-4xl text-2xl text-center '>The<span className='text-violet-900'> A.I. Coders</span></Link>
      </nav>
      <div className='hidden md:flex items-center justify-between gap-8'>
        <Link href={'/'}>Home</Link>
        <Link href={'/blog'}>Blog</Link>
        <Link href={'/contect'}>Contact</Link>
      </div>
      <div className='flex'>
        <div className='xs:flex items-center justify-center hidden '>
          <SocialMedia />
        </div>
        <ThemeToggle />
      </div>

      <div className='md:hidden flex flex-col items-center justify-between gap-8'>
        <Sheet>
          <SheetTrigger>
            <MenuIcon/>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>The A.I. Coders</SheetTitle>
              <SheetDescription className='flex flex-col items-center gap-6'>

                <Link href={'/'}>Home</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/contect'}>Contact</Link>
                <SocialMedia />
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

    </header>
  )
}

export default Navbar