import React, { PropTypes } from 'react';
import HeroItem from './HeroItem';

const HeroList = ({ heroes, showDetails }) => {
    const nodes = Array.isArray(heroes) && heroes.length !== 0
        ? (
            heroes.map(hero =>
                <HeroItem
                    id={hero.id}
                    description={hero.description}
                    name={hero.name}
                    src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    key={hero.id}
                    showDetails={showDetails}
                />
            )
        )
        : <p className='error'> Could not find this hero, try again.</p>

    return (
        <div className='heroes__container'> {nodes}</div>
    );
}

HeroList.propTypes = {
    heroes: PropTypes.array,
    showDetails: PropTypes.func.isRequired
};

export default HeroList;
