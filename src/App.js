import React, { PropTypes } from 'react';
import Header from './components/header/Header';

import './styles/app.sass';

const App = ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
)

App.path = '/';
App.propTypes = {
    children: PropTypes.any.isRequired
};

export default App;