import React from 'react'

const Cards = () => {
  return (
    <section className='bg-navBlack pb-28 pt-28'>
      <div className='siteContainer text-white flex flex-col items-center'>
        <div className='flex flex-col md:flex-row'>
          <div className='img1 mb-8 md:mr-8'>
            <img src="/foodtruck.png" alt="" />
          </div>
          <div className='img2 mb-8 md:mr-8'>
            <img src="/happyhour.png" alt="" />
          </div>
          <div className='img3'>
            <img src="/livemusic.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cards