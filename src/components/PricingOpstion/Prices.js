import React from 'react';

const Prices = (props) => {
    const { name, price } = props.opstion

    return (
        <div className='py-3 bg-slate-300  '>
            <h1 className=' bg-cyan-600 text-xl text-white rounded py-2 gap-3'>{name}</h1>
            <span className=''> ${price}</span> <span className='text-xl inline font-bold'>/mo</span>
        </div>
    );
};

export default Prices;