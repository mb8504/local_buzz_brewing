import React from 'react'
import Navbar from '../../components/Navbar'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

const Contact = () => {
  return (
    <>
    <Navbar/>
    <h1 className='text-4xl text-center mt-8 font-bold'>Contact Us</h1>
    <section className='bg-white pt-8 pb-8'>
            <div className='siteContainer flex flex-col md:flex-row md:justify-between mb-28'>
                <div className='md:w-1/2'>
                    <h2 className='text-3xl text-left mb-2'>
                        Drop by and get to know us! 
                    </h2>
                    <p className='mb-2 md:mr-20'>
                       Hours of Operation
                    </p>
                    <ul className='list-disc ml-6 mb-8'>
                        <li>Monday Closed</li>
                        <li>Tuesday Closed</li>
                        <li>Wednesday 4 p.m. – 10 p.m.</li>
                        <li>Thursday 4 p.m. – 10 p.m.</li>
                        <li>Friday 3 p.m. – 11 p.m.</li>
                        <li>Saturday 12 p.m. – 11 p.m.</li>
                        <li>Sunday 12 p.m. – 8 p.m.</li>
                    </ul>
                </div>
                <div className='md:w-auto'>
                    <img className='w-full h-auto md:max-w-xs lg:max-w-sm' src="/contact.png" alt="Cheers" />
                </div>
            </div>
        </section>
        <section className='bg-navBlack text-white pt-28'>
            <div className='siteContainer'>
                <h2 className='text-3xl text-center mb-8'>
                    Still have questions? Drop us a line.
                </h2>
                <form className='md:w-3/4' action="">
                    <div className='flex flex-col mb-4'>
                        <span className='text-[#ddd]'>Name*</span>
                        <input className='bg-navBlack border-b-2 border-b-[#c1c1c1] placeholder-[#c1c1c1] placeholder-text-2xl h-12' id='name' type="text" placeholder='Name' />
                    </div>

                    <div className='flex flex-col mb-4'>
                        <span className='text-[#ddd]'>Email*</span>
                        <input className='bg-navBlack border-b-2 border-b-[#c1c1c1] placeholder-[#c1c1c1] placeholder-text-2xl h-12' id='name' type="text" placeholder='Email' />
                    </div>

                    <div className='flex flex-col'>
                        <span className='text-[#ddd]'>Message*</span>
                        <textarea className='bg-navBlack placeholder-[#c1c1c1]' name="message" id="message" placeholder='Type here.. '></textarea>
                        {/* <input className='bg-black border-b-2 border-[#c1c1c1] placeholder-[#c1c1c1] placeholder-text-2xl h-24' id='name' type="text" placeholder='Type here..' /> */}
                    </div>
                    <button className='bg-white text-black rounded-lg p-1.5 mb-8 mt-8' type='submit'>Send message</button>
                </form>
            </div>
        </section>
        <Newsletter/>
        <Footer/>
    </>
  )
}

export default Contact