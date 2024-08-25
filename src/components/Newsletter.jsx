import React from 'react'

const Newsletter = () => {
  return (
    <section className='bg-[#cc5b44] pt-10 pb-10'>
        <div className='siteContainer md:flex md:flex-row md:items-center md:justify-between'>
            <div className='md:flex md:flex-row md:items-center'>
                <h2 className='text-3xl text-white'>NEWSLETTER</h2>
                <div className='text-white opacity-70 mb-4 md:mb-0 md:ml-4'>
                    <p>The beer news you can't miss. In your inbox every Friday!</p>
                </div>
            </div>
            <form action="" method='POST'>
                <div className='border-b-2'>
                    <input className='inputColor bg-[#cc5b44] text-white opacity-70 outline-none w-60' type="email" name='email' placeholder='Drop your email here!' />
                    <button className='text-white'>Send</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Newsletter