import React, { useState } from 'react';
import Link from '../Link/Link';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
const Route = () => {

    const [open, setOpen] = useState(false)
    const Routes = [
        { id: 1, name: 'Home', link: '/home' },
        { id: 2, name: 'Shop', link: '/Shop' },
        { id: 3, name: 'Deals', link: '/Deals' },
        { id: 4, name: 'Contact', link: '/Contact' },
        { id: 5, name: 'About', link: '/About' },
    ]

    return (




        <nav className='bg-slate-900 text-white '>
            <div onClick={() => setOpen(!open)} className='w-6 h-6 bg-slate-900 text-white md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}

            </div>
            <ul className={`md:flex justify-end md:static absolute duration-500 ease-in w-full bg-slate-900 text-white ${open ? 'top-6' : 'top-[-350px]'} `}>
                {
                    Routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Route;