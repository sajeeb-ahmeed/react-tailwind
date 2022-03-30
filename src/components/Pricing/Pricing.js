import React from 'react';
import Prices from '../PricingOpstion/Prices';

// import Price from './Price';

const Pricing = () => {

    const pricings = [
        { id: 1, name: ' free', price: 0 },
        { id: 2, name: ' Premimum', price: 9.99 },
        { id: 3, name: ' Pro', price: 19.99 }
    ]
    return (
        <div className='bg-cyan-600 py-5 grid md:grid-cols-3 grid-cols-1 gap-4 mt-5'>
            {
                pricings.map(opstion => <Prices key={opstion.id} opstion={opstion}></Prices>)
            }
        </div>
    );
};

export default Pricing;