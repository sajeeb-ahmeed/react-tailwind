import React from 'react';

const Link = (props) => {
    const { name, link } = props.route
    return (
        <nav className='bg-slate-900 text-white font-mono py-3'>
            <a className='mr-20 align-right ' href={link}> {name}</a>
        </nav>
    );
};

export default Link;