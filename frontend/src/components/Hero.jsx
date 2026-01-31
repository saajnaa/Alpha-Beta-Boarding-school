import React, { useState } from 'react'
import SantaFest from '../assets/images/santa-festival.jpg'
import TikaFest from '../assets/images/tika.jpg'
import BhaitikaFest from '../assets/images/bhaitika.jpg'
import KrishnaFest from '../assets/images/krishna.jpg'
import Krishna1Fest from '../assets/images/krishna1.jpg'


const HeroImg = [SantaFest, TikaFest, BhaitikaFest, KrishnaFest, Krishna1Fest]


function Hero() {

  const [index, setindex] = useState(0)



  setTimeout(() => {

    if (index === 4) {

      setindex(0)

    } else {

      setindex(index + 1)
    }

    console.log(index)
  }, 2000)





  return (
    <>

      <div className=' w-full flex flex-col relative justify-center items-center p-4'>
        <img className='w-[98%] rounded ' src={HeroImg[index]} alt="Hero Images" />

        <div className='absolute  border w-[90%] bottom-77 font-bold'> 
          <p className='text-center text-3xl text-lime-600 p-5'> Alpha Beta Boarding School</p>

        </div>

        

      </div>




    </>)
}

export default Hero