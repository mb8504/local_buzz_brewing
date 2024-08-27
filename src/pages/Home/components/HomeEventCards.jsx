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
                            <img src="/event_card1.png" alt="" />
                        </div>
                        <div className='w-full pl-10 pr-10 pt-7 pb-6 bg-white'>
                            <p className='text-footerGray font-bold'>2019 July 19, 2019</p>
                            <h2 className='uppercase font-bold mt-2.5 mb-2.5 text-xl'>Summerfest Concert Series</h2>
                            <p className='text-[#777]'>Add-in an option except to describe your event. This text will only display on the event listing page.</p>
                        </div>
                    </div>
                    <div id='eventCard2' className='mt-8 md:mt-0'>
                        <div className='w-full'>
                            <img src="/event_card2.png" alt="" />
                        </div>
                        <div className='w-full pl-10 pr-10 pt-7 pb-6 bg-white'>
                            <p className='text-footerGray font-bold'>2019 July 19, 2019</p>
                            <h2 className='uppercase font-bold mt-2.5 mb-2.5 text-xl'>Summerfest Concert Series</h2>
                            <p className='text-[#777]'>Add-in an option except to describe your event. This text will only display on the event listing page.</p>
                        </div>
                    </div>
                    <div id='eventCard3' className='mt-8 md:mt-8 lg:mt-0'>
                        <div className='w-full'>
                            <img src="/event_card3.png" alt="" />
                        </div>
                        <div className='w-full pl-10 pr-10 pt-7 pb-6 bg-white'>
                            <p className='text-footerGray font-bold'>2019 July 19, 2019</p>
                            <h2 className='uppercase font-bold mt-2.5 mb-2.5 text-xl'>Summerfest Concert Series</h2>
                            <p className='text-[#777]'>Add-in an option except to describe your event. This text will only display on the event listing page.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeEventCards