import React from 'react';
import { Link } from 'react-router';
import './styles.sass';

const HomePage = () => (
    <div className='home__container'>
        <h2>Create your own marvel team by choosing your favorite heroes</h2>
        <div className="home__buttons">
            <div className="home__buttons__background"></div>
            <div className="line-link">
                <span className="line-link__line"/>
                <Link to='/heroes'>I'm ready</Link>
            </div>
        </div>
    </div>
)

HomePage.path = '/';

export default HomePage;
