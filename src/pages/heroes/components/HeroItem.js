import React, { PropTypes } from 'react'

const HeroItem = ({ id, src, name, description, showDetails }) => (
    <div className='hero-item'>
        <div className='hero-item__wrapper'>
            <img
                className='image'
                src={src}
                alt={name}
                onClick={ () => showDetails({ id, src, name, description }) }
            />
            <div className='caption'>
                <div className='caption-text'>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    </div>
);

HeroItem.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
};

export default HeroItem;