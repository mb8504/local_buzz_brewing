import { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
    const [nav, setNav] = useState(false)

    function handleClick() {
        setNav(!nav);
    }


  return (
    <nav className='bg-navBlack pt-5 pb-5 md:text-2xl sm:text-xl'>
        <div className='siteContainer flex flex-row justify-between'>
            <div>
                <img className='logo' src="public/logo.png" alt="" />
            </div>
            <div id='desktopNav'>
                <ul className='text-white flex flex-row'>
                    <li className='border-2 border-transparent hover:border-solid hover:border-white p-2 rounded'><a href="">Home</a></li>
                    <li className='ml-4 border-2 border-transparent hover:border-solid hover:border-white p-2 rounded'><a href="">Beers</a></li>
                    <li className='ml-4 border-2 border-transparent hover:border-solid hover:border-white p-2 rounded'><a href="">Locals Only</a></li>
                    <li className='ml-4 border-2 border-transparent hover:border-solid hover:border-white p-2 rounded'><a href="">Events</a></li>
                    <li className='ml-4 border-2 border-transparent hover:border-solid hover:border-white p-2 rounded'><a href="">About Us</a></li>
                    <li className='ml-4 border-2 border-transparent hover:border-solid hover:border-white p-2 rounded'><a href="">Contact</a></li>
                </ul>
            </div>

            <button id='mobileNavButton' onClick={handleClick}>
                {!nav ? <TiThMenu size={40} className='text-white'/> : <IoClose size={40} className='text-white'/>}
            </button>

        </div>

        <div id='mobileNav' className={`${nav ? 'max-h-screen' : 'max-h-0'} overflow-hidden transform transition-all duration-700 ease-in-out`}>
            <ul className='text-white flex flex-col text-left transition-all divide-y divide-slate-700'>
                <li className='pl-4 pt-8'><a href="">Home</a></li>
                <li className='pl-4 pt-8 border-b-2'><a href="">Beers</a></li>
                <li className='pl-4 pt-8 border-b-2'><a href="">Locals Only</a></li>
                <li className='pl-4 pt-8 border-b-2'><a href="">Events</a></li>
                <li className='pl-4 pt-8 border-b-2'><a href="">About Us</a></li>
                <li className='pl-4 pt-5'><a href="">Contact</a></li>
            </ul>
        </div> 
    </nav>
  )
}

export default Navbar