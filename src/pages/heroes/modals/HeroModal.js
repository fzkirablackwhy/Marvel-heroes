import React, { PropTypes } from 'react';
import HeroModalContent from './HeroModalContent';
import HeroModalFooter from './HeroModalFooter';
import './styles.sass';

const HeroModal = ({ hero }) => (
    <div className='md-body'>
        <HeroModalContent
            key={hero.id}
            id={hero.id}
            name={hero.name}
            src={hero.src}
            description={hero.description}
        />
        <HeroModalFooter hero={hero}/>
    </div>
)

HeroModal.propTypes = {
    hero: PropTypes.object.isRequired
}

export default HeroModal;
