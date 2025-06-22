'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useTheme } from '../context/ThemeContext'
const Footer = () => {
    const { isDarkMode } = useTheme()
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image
        src={isDarkMode? assets.logo_dark:assets.logo}
        alt='logo'
        className='w-36 mx-auto mb-2'
        />
        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image
            src={isDarkMode? assets.mail_icon_dark:assets.mail_icon}
            alt='mail icom'
            className='w-6'
            />
            sufyanjatts199@gamil.com
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-between border-t
      border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Sufyan Ali. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target= "_blank" href="https://instagram.com/sufyan578">Instagram</a></li>
            <li><a target= "_blank" href="https://linkedin.com/in/sufyan-ali">LinkedIn</a></li>
            <li><a target= "_blank" href="https://github.com/Sufyan-Ali1/">Github</a></li>

        </ul>
      </div>
    </div>
  )
}

export default Footer
