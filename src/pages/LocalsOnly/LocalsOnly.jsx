import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Newsletter from '../../components/Newsletter'

const LocalsOnly = () => {
  return (
    <>
        <Navbar/>
        <section>
            <img src="public/locals.png" alt="" />
            <div className='bg-[#0f739a] text-white text-center pt-8 pb-8 text-3xl md:text-5xl'>
                <h1>The beer tastes even better when you're a local!</h1>
            </div>
            <div className='siteContainer'>
                <div className='flex flex-col md:flex-row md:justify-between mt-28 mb-28'>
                    <div className='md:w-1/2 text-lg'>
                        <h1 className='text-4xl text-left mb-5 font-bold'>
                            The Number One Craft Beer Experience in Philadelphia 
                        </h1>
                        <p className='md:mr-20 text-xl leading-8 mb-8'>
                            The Locals Only mug club is the chance to share your love for beer with others in the community. This is a full year membership with perks, prizes, suprise and delights, and member-only specials throughout the year. <br /><br />

                            Once a quarter, we'll invite you to our brewery for a special members only night where you'll taste exclusive freshly brewed craft beers. This is a great opportunity to chat with our brew masters and drink tasty beers with other community members.
                        </p>
                        {/* <p className='md:mr-20 mt-8 text-xl text-[#0f739a] font-bold'>When you're a local, your family!</p> */}
                    </div>
                    <div className='md:w-auto'>
                        <img className='w-full h-auto md:max-w-xs lg:max-w-sm' src="public/cheers2.png" alt="Cheers" />
                    </div>
                </div>
            </div>
            <div id='iconSection' className='bg-navBlack pt-8 pb-20 text-white'>
                <h2 className='text-center text-3xl text-white mb-10'>Tap into the fun. Your taste buds will thank you!</h2>
                <div className='siteContainer flex flex-col md:flex-row md:justify-between'>
                    <div className='flex flex-col w-32 md:mt-4 items-center'>
                        <div className='w-14 bg-navBlack'>
                            <img src="/beer_can.png" alt="" />
                        </div>
                        <p className='text-center'>Eight 16oz of craft beer exclusively brewed for members</p>
                    </div>
                    <div className='w-12 bg-navBlack mt-8 md:mt-0'>
                        <img src="/plus_sign_blue.png" alt="" />
                    </div>
                    <div className='flex flex-col w-32 items-center mt-8'>
                        <div className='w-14 bg-navBlack'>
                            <img src="/pint_glass.png" alt="" />
                        </div>
                        <p className='text-center'>Two exclusive members only pint glasses</p>
                    </div>
                    <div className='w-12 bg-navBlack mt-10 md:mt-0'>
                        <img src="/plus_sign_blue.png" alt="" />
                    </div>
                    <div className='flex flex-col w-32 mt-10 items-center'>
                        <div className='w-20 bg-navBlack'>
                            <img src="/notebook.png" alt="" />
                        </div>
                        <p className='text-center'>A journal to document all the beers you taste</p>
                    </div>
                    <div className='w-12 bg-navBlack mt-10 md:mt-0'>
                        <img src="/plus_sign_blue.png" alt="" />
                    </div>
                    <div className='flex flex-col w-32 items-center mt-8'>
                        <div className='w-28 bg-navBlack'>
                            <img src="/cash.png" alt="" />
                        </div>
                        <p className='text-center'>$20 in rewards when you become a member</p>
                    </div>
                </div>
            </div>
        </section>
        <Newsletter/>
        <Footer/>
    </>
  )
}

export default LocalsOnly