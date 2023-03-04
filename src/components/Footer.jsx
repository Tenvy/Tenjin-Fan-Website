import React from 'react'
import tenjin from '../assets/tenjintxt.png'
import yt from '../assets/youtube.svg'
import insta from '../assets/instagram.svg'
import shop from '../assets/shop.svg'

export const Footer = () => {
  return (
    <div>
        <div className='flex flex-col md:flex-row justify-around pt-5 pb-2 mx-8 md:mx-0 gap-4'>
            <div className='flex flex-col gap-2'>
                <div>
                    <img width={100} src={tenjin} alt="" />
                </div>
                <div className='w-[200px] md:w-[160px] text-gray-400'>
                    By Tenvy © 2023. All right reserved.
                </div>
                <div className='flex gap-2 items-center mt-2'>
                    <a href="https://www.youtube.com/@tenjinscrollworks">
                        <img width={30} src={yt} alt="" />
                    </a>
                    <a href="https://www.instagram.com/tenjin.scrollworks/">
                        <img width={30} src={insta} alt="" />
                    </a>
                    <a href="https://www.tokopedia.com/tenjinstyle">
                        <img width={25} src={shop} alt="" />
                    </a>
                </div>
            </div>
            <div>
                <div className='font-bold text-xl'>
                    Learn More
                </div>
                <div className='flex flex-col'>
                    <a className='text-gray-400 hover:text-gray-500' href='https://www.tokopedia.com/tenjinstyle'>Store</a>
                    <a className='text-gray-400 hover:text-gray-500' href='https://discord.com/invite/PswrwzmW?utm_source=Discord%20Widget&utm_medium=Connect'>Discord Community</a>
                    <a className='text-gray-400 hover:text-gray-500' href='https://github.com/tenvy'>Credit</a>
                </div>
            </div>
        </div>
        <div className='mx-auto bg-white h-[1px] w-[80%] my-5'>

        </div>
    </div>
  )
}
