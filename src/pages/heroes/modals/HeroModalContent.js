import React, { PropTypes } from 'react';

const HeroModalContent = ({ src, name, description }) =>
        <div className='md-body__image-wrapper'>
            <img
                className=''
                src={src}
                alt={name}
            />
            <div className='caption'>
                <div className='blur'></div>
                <div className="caption-text">
                    <p>
                        { description ? description : 'There\'s no description available' }
                    </p>
                </div>
            </div>
        </div>

HeroModalContent.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    description: PropTypes.string,
};

export default HeroModalContent;
