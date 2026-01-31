import React from 'react'


// ========== img ============
import vaiTikaImg from '../assets/images/vai-tika.jpg'


function OurFeatures() {
  return (
    <>
      <div>
        <div className="title flex flex-col items-center">

          <h2 className='font-bold font-[cursive] text-5xl text-center '>Our <span className='text-[#FF5252]'>Features</span></h2>
          <p className='text-center pl-5 pr-5 w-[50%] mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dicta voluptate repudiandae quo explicabo voluptas alias,sit amet consectetur adipisicing elit. Quiaaut!</p>

        </div>

        <div className="main flex gap-3 items-center  justify-center ">

          <div className="box-left flex flex-col gap-2 w-[30%]">
            <div className="container flex justify-center items-center gap-4  ">

              <div className="main w-[70%]">
                <h2 className='text-right text-[#5D2999] font-[cursive] text-2xl font-bold'>Active Learning</h2>
                <p className='text-right'>Lorem ipsum dolor sit amet consectetur adipisicing Fugiat eius facere aut sit error! Rerum.</p>
              </div>

              <div className="circle rounded-full w-18 h-18 bg-[#ff5252]">
              </div>

            </div>


            <div className="container flex justify-center items-center gap-4 ">

              <div className="main w-[70%]">
                <h2 className='text-right text-[#00BCD4] font-[cursive] text-2xl font-bold'>Multimedia Class</h2>
                <p className='text-right'>Lorem ipsum dolor sit amet consectetur adipisicing Fugiat eius facere aut sit error! Rerum.</p>
              </div>

              <div className="circle rounded-full w-18 h-18 bg-[#FF9800]">
              </div>

            </div>

            <div className="container flex justify-center items-center gap-4 ">

              <div className="main w-[70%]">
                <h2 className='text-right text-[#ff5252] font-[cursive] text-2xl font-bold'>Full Day Program</h2>
                <p className='text-right'>Lorem ipsum dolor sit amet consectetur adipisicing Fugiat eius facere aut sit error! Rerum.</p>
              </div>

              <div className="circle rounded-full w-18 h-18 bg-[#00BCD4]">
              </div>

            </div>

          </div>

          <div className="mid-box w-[30%]"><img className='w-2xl' src={vaiTikaImg} alt="Features vai tika img" /></div>


          <div className="box-right flex flex-col gap-2 w-[30%]">
            <div className="container flex flex-row-reverse justify-center items-center gap-4 ">

              <div className="main w-[70%]">
                <h2 className='text-left text-[#5D2999] font-[cursive] text-2xl font-bold'>Expert Teachers</h2>
                <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing Fugiat eius facere aut sit error! Rerum.</p>
              </div>

              <div className="circle rounded-full w-18 h-18 bg-[#ff5252]">
              </div>

            </div>


            <div className="container flex flex-row-reverse justify-center items-center gap-4 ">

              <div className="main w-[70%]">
                <h2 className='text-left text-[#00BCD4] font-[cursive] text-2xl font-bold'>Monitoring class</h2>
                <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing Fugiat eius facere aut sit error! Rerum.</p>
              </div>

              <div className="circle rounded-full w-18 h-18 bg-[#FF9800]">
              </div>

            </div>

            <div className="container flex flex-row-reverse justify-center items-center gap-4">

              <div className="main w-[70%]">
                <h2 className='text-left text-[#ff5252] font-[cursive] text-2xl font-bold'>Full day love</h2>
                <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing Fugiat eius facere aut sit error! Rerum.</p>
              </div>

              <div className="circle rounded-full w-18 h-18 bg-[#00BCD4]">
              </div>

            </div>

          </div>


        </div>

      </div>



    </>)
}

export default OurFeatures