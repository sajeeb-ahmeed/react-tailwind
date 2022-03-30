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




        <nav>
            <div onClick={() => setOpen(!open)} className='w-6 h-6  md:hidden'>
                {open ? <XIcon></XIcon> : <MenuIcon></MenuIcon>}

            </div>
            <ul className={`md:flex justify-end md:static m-5 absolute ${open ? 'top-6' : 'top-[-150px]'} `}>
                {
                    Routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Route;