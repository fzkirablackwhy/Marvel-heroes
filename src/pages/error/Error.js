import React from 'react';
import { Link } from 'react-router';
import './styles.sass';

const ErrorPage = () => (
    <div className='error-page__container'>
        <h3>Page Not found</h3>
        <p>Go to<Link to='/'> main</Link></p>
    </div>
)

export default ErrorPage;
