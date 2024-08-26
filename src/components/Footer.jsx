import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaUntappd } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa";
// import { FaUntappd } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <section className='bg-navBlack w-full'>
            <div className='siteContainer'>
                <div className='flex flex-col md:flex-row pt-16 pb-16'>
                    <div className='w-full'>
                        <h3 className='text-white text-3xl'>OUR LOCATION</h3>
                        <p className='text-footerGray'>
                            <strong>Local Buzz Brewing</strong> <br />
                            5555 1st St. Philadelphia, PA 55555
                        </p>
                        <p className='text-footerGray mt-8'>
                            <strong>Call for Reservations:</strong> 1(800) 123-4567 <br />
                            E-mail: admin@e-mail.com
                        </p>
                        <div className='text-white flex flex-row mt-8 text-2xl'>
                        <FaFacebookF />
                        <FaInstagram className='ml-6'/>
                        <FaTiktok className='ml-6' />
                        <FaUntappd className='ml-6' />
                        </div>
                    </div>
                    <div className='w-full mt-8 md:mt-0'>
                        <h3 className='text-white text-3xl mb-5'>BREWERY HOURS</h3>
                        <section className='text-footerGray flex flex-row justify-between border-b-2 border-opacity-footer'>
                            <div className=''>
                                Monday
                            </div>
                            <div className=''>
                                Closed
                            </div>
                        </section>
                        <section className='text-footerGray flex flex-row justify-between border-b-2 border-opacity-footer'>
                            <div className=''>
                                Tuesday
                            </div>
                            <div className=''>
                                Closed
                            </div>
                        </section>
                        <section className='text-footerGray flex flex-row justify-between border-b-2 border-opacity-footer'>
                            <div className=''>
                                Wednesday
                            </div>
                            <div className=''>
                                4 p.m. - 10 p.m.
                            </div>
                        </section>
                        <section className='text-footerGray flex flex-row justify-between border-b-2 border-opacity-footer'>
                            <div className=''>
                                Thursday
                            </div>
                            <div className=''>
                                4 10 p.m. - 10 p.m.
                            </div>
                        </section>
                        <section className='text-footerGray flex flex-row justify-between border-b-2 border-opacity-footer'>
                            <div className=''>
                                Friday
                            </div>
                            <div className=''>
                                3 p.m. - 11 p.m.
                            </div>
                        </section>
                        <section className='text-footerGray flex flex-row justify-between border-b-2 border-opacity-footer'>
                            <div className=''>
                                Saturday
                            </div>
                            <div className=''>
                                12 p.m. - 11 p.m.
                            </div>
                        </section>
                        <section className='text-footerGray flex flex-row justify-between border-b-2 border-opacity-footer'>
                            <div className=''>
                                Sunday
                            </div>
                            <div className=''>
                                12 p.m. - 8 p.m.
                            </div>
                        </section>
                    </div>
                    <div className='w-full'>
                        <div className=' flex flex-col items-center justify-center md:justify-end mt-8 md:mt-0'>
                            <img className='w-52' src="public/test_logo.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className='bg-[#212121] text-white text-center pt-4 pb-4'>
            <p>© Copyright  2024 | Local Buzz Brewing | All Rights Reserved | Terms and Conditions</p>
        </div>
    </footer>
  )
}

export default Footer