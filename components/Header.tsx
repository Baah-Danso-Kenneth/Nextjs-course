import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggler } from './desney/ThemeToggler'
import SearchInput from './desney/SearchInput'
import GenreDropDown from '@/GenreDropDown'


function Header() {
  return (
    <header className='flex sticky w-full top-0 justify-between items-center z-50'>
        <Link href="/">
          <Image src="https://links.papareact.com/a943ae" 
           alt="disney logo"
           width={120}
           height={100}
           className='cursor-pointer  invert-0 dark:invert '
          />
        </Link>

        <div className='flex space-x-2'>
          <GenreDropDown/>
          <SearchInput/>
          <ThemeToggler/>
        </div>
    
        </header>
  )
}

export default Header