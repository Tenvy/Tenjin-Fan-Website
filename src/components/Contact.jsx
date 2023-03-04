import React from 'react'
import tenjinlogo from '../assets/scrollworks.png'
import location from '../assets/location.svg'

export const Contact = () => {
  return (
    <div id="contact" className='flex w-full justify-around py-24 md:px-20'>
        <div className='flex flex-col gap-1 min-[425px]:w-[420px] md:w-[400px] mx-3'>
            <div className='font-bold text-3xl md:text-5xl'>
                Contact Us
            </div>
            <div className='md:text-lg'>
                Actually dont have their email so visit their store!
            </div>
            <a href='https://www.google.com/maps/place/Tenjin+Style+%26+Scrollworks/@-6.2605912,106.6295331,15z/data=!4m2!3m1!1s0x0:0x91fac4150d2224b6?sa=X&ved=2ahUKEwjs4MzC5cH9AhUtxTgGHUCvAc8Q_BJ6BAh4EAg' className='flex items-center gap-2 md:text-lg text-gray-400 cursor-pointer hover:text-gray-500'>
                <div>
                    <img width={50} src={location} alt="" />
                </div>
                Pisa Grande, Gading Serpong, Blok L/23, Curung Sangereng, Kelapa Dua, Tangerang, Banten. 15811
            </a>
            <div className='flex justify-center md:justify-start my-3 md:my-2'>
                <a href='https://www.tokopedia.com/tenjinstyle' className='border py-2 px-3 cursor-pointer hover:text-gray-400'>
                    View Store
                </a>
            </div>
        </div>
        <div className='hidden md:block'>
            <img width={250} src={tenjinlogo} alt="" />
        </div>
    </div>
  )
}
