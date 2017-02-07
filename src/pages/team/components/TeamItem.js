import React, { PropTypes } from 'react';

const TeamItem = ({ name, src }) => (
    <div className='team-item__wrapper'>
        <img
            src={src}
            alt={name}
        />
        <div className='caption'>
            <div className='blur'></div>
            <div className="caption-text">
                <p>{name}</p>
            </div>
        </div>
    </div>
)

TeamItem.propTypes = {
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
};

export default TeamItem;