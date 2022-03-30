import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'
const Prices = (props) => {
    const { name, price } = props.opstion

    return (
        <div className='py-3 bg-slate-300  '>
            <h1 className=' bg-cyan-600 text-xl text-white rounded py-2 gap-3'>{name}</h1>
            <h3 className='inline'> ${price}</h3> <span className='text-xl inline font-bold'>/mo</span>
            <div className='justify-center align-middle'>
                <p>Features : </p>
                <CheckCircleIcon className='text-green-500 w-4 h-4 inline mr-2'></CheckCircleIcon>
                <p className='inline'>Awesome features avaiable</p> <br />
                <CheckCircleIcon className='text-green-500 w-4 h-4 inline mr-2'></CheckCircleIcon>
                <p className='inline'>Awesome features avaiable 2</p> <br />
                <CheckCircleIcon className='text-green-500 w-4 h-4 inline mr-2'></CheckCircleIcon>
                <p className='inline'>Awesome features avaiable 3</p> <br />
                <CheckCircleIcon className='text-green-500 w-4 h-4 inline mr-2'></CheckCircleIcon>
                <p className='inline'>Awesome features avaiable 4</p>
            </div>
        </div>
    );
};

export default Prices;