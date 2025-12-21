import React from 'react'
import SchoolBus from '../assets/all-images/school-bus.gif'


function WelcomeSection() {
    return (
        <>

            <div className='flex flex-row justify-center items-center w-full gap-5  '>
                <div className='w-[50%] border h-[70vh] pt-4' >
                    <h2 className='text-3xl text-blue-500 font-bold  font-sans'>Welcome To <span className='text-red-500'>ABBS</span> <br /> Best Education In Our <br /> <span className='border-b '>Kindergarden</span></h2>

                    <p className='text-blue-900 text-2xl font-medium pt-5 pb-5'>Lorem ipsum dolor sit, amet consectetur Lorem ipsum <br /> loem emroo  dolor sit adipisicing elit. Impedit, illo!</p>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quidem officiis unde, veniam iste enim! Repellat illum, sed molestias optio dolores placeat. Natus officiis quidem maiores iusto ratione ut aperiam nisi perferendis. Dignissimos non, error odio provident recusandae quasi nemo atque, earum similique eum distinctio quo suscipit, illo ut ullam itaque amet rerum labore accusantium? Facere nemo quibusdam eveniet fugit, accusantium id expedita reprehenderit iste illum harum, nesciunt maiores saepe.</p>

                </div>



                <div className='w-[40%] border'>
                    <img src={SchoolBus} className='h-120' alt="Alpha beta boarding school bus gif  " />

                </div>





            </div>





        </>)
}

export default WelcomeSection