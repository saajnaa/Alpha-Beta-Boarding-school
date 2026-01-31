

// ======images===============
import DhanRopniImg from '../assets/images/dhan.jpg'



function WhychooseUsSection() {
    return (
        <>
            <div className='flex p-5'>

                <div className="left w-[50%] m-10">

                    <img className='rounded w-xl  ' src={DhanRopniImg} alt="" />

                </div>
                <div className="right w-[50%] flex justify-center items-center flex-col">

                    <h2 className='text-5xl font-mono font-semibold text-[#092a49]'>Why Choose Us ?</h2>
                    <p className='p-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, vitae dolor voluptatem doloribus distinctio corporis eos voluptate optio cumque? Quia id hic molestiae maiores iusto. Placeat impedit inventore id, alias quod voluptate nulla omnis quisquam fugiat architecto pariatur hic volu </p>

                    <div className=''>

                        <div className='flex flex-row gap-10'>
                            <div className='  flex justify-center items-center flex-col  cursor-pointer hover:text-green-800 '>
                                <div className=' p-6 w-[70px] h-[70px] rounded-[100%] bg-amber-700 hover:border'></div>
                                <h3>Responsibility</h3>
                            </div>
                            <div className='  flex justify-center items-center flex-col cursor-pointer hover:text-green-800'>
                                <div className=' p-6 w-[70px] h-[70px] rounded-[100%] bg-blue-700 hover:border'></div>
                                <h3>Responsibility</h3>
                            </div>
                            <div className='cursor-pointer hover:text-green-800'>
                                <div className=' flex justify-center items-center flex-col p-6 w-[70px] h-[70px] rounded-[50%] bg-green-700 hover:border'></div>
                                <h3>Responsibility</h3>
                            </div>
                        </div>

                    </div>


                </div>

            </div>




        </>)
}

export default WhychooseUsSection