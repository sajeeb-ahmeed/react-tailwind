import React from 'react';

const Link = (props) => {
    const { name, link } = props.route
    return (
        <nav>
            <a className='mr-20 align-right' href={link}> {name}</a>
        </nav>
    );
};

export default Link;