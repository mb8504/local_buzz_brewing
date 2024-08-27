import React from 'react'

const HomeEventCards = () => {
  return (
    <section className='bg-eventCardWhite pt-16 pb-16'>
        <div className='siteContainer'>
            <h2 className='text-4xl pb-8'>EVENTS</h2>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div id='eventCard1'>
                        <div className='w-full'>
                            <img src="/event_band.png" alt="" />
                        </div>
                        <div className='w-full pl-10 pr-10 pt-7 pb-6 bg-white'>
                            <p className='text-footerGray font-bold'>September 20, 2024</p>
                            <h2 className='uppercase font-bold mt-2.5 mb-2.5 text-xl'>Summerfest Concert Series</h2>
                            <p className='text-[#777]'>Our summer concert series is your Friday night get away! Don't miss this week's featured band, brews, and BBQ.</p>
                        </div>
                    </div>
                    <div id='eventCard2' className='mt-8 md:mt-0'>
                        <div className='w-full'>
                            <img src="/event_cheers.png" alt="" />
                        </div>
                        <div className='w-full pl-10 pr-10 pt-7 pb-6 bg-white'>
                            <p className='text-footerGray font-bold'>September 21, 2024</p>
                            <h2 className='uppercase font-bold mt-2.5 mb-2.5 text-xl'>Oktoberfest 2024</h2>
                            <p className='text-[#777]'>Fall is our favorite time of the year and Bucks County has the best foliage. Bike with friends and grab a beer at the end.</p>
                        </div>
                    </div>
                    <div id='eventCard3' className='mt-8 md:mt-8 lg:mt-0'>
                        <div className='w-full'>
                            <img src="/event_bikes.png" alt="" />
                        </div>
                        <div className='w-full pl-10 pr-10 pt-7 pb-6 bg-white'>
                            <p className='text-footerGray font-bold'>September 28, 2024</p>
                            <h2 className='uppercase font-bold mt-2.5 mb-2.5 text-xl'>Bikes and Brews</h2>
                            <p className='text-[#777]'>Fall is our favorite time of the year and Bucks County has the best foliage. Bike with friends and grab a beer at the end.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeEventCards


{/* <div className='w-full pl-10 pr-10 pt-7 pb-6 bg-white'>
<p className='text-footerGray font-bold'>October 4, 2024</p>
<h2 className='uppercase font-bold mt-2.5 mb-2.5 text-xl'>Bikes and Brews</h2>
<p className='text-[#777]'>Fall is our favorite time of the year and Bucks County has the best foliage. Bike with friends and grab a beer at the end.</p>
</div> */}