import { AiFillYoutube } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import React from 'react'
import { Link } from 'react-router-dom'


// photos
import logo from '../assets/logo/abbs-logo-transparent.png'


function FooterSection() {
    return (
        <>
            <div>

                <div className="main flex ">
                    <div className="flex flex-col justify-center items-center">
                        <img src={logo} className="h-45" alt="abbs school logo" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, nam.</p>
                        <div className="p-3 flex justify-center items-center gap-3 text-2xl text-blue-600">
                            <Link><FaFacebook /></Link>
                            <Link><FaWhatsappSquare /></Link>
                            <Link><FaTiktok /></Link>
                            <Link><AiFillYoutube /></Link>

                        </div>
                    </div>

                    <div>
                        <h2>Abous School</h2>

                    </div>

                    <div>
                        <h2>Recent Posts</h2>

                    </div>

                    <div>
                        <h2>Keeep in touch</h2>

                    </div>

                </div>

            </div>


        </>
    )
}

export default FooterSection