import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import Loader from '../../components/loader/Loader';
import HeroModal from './modals/HeroModal'
import HeroList from './components/HeroesList';
import HeroSearch from './HeroSearch';
import Modal from '../../components/modalDialog/Modal';
import { openModal } from '../../components/modalDialog/actions';
import { getHeroesIfNeeded } from './actions';
import './styles.sass';

class HeroesPage extends React.Component {
    static path = '/heroes';

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        heroes: PropTypes.object.isRequired,
        modal: PropTypes.object.isRequired
    };

    componentWillMount() {
        this.props.dispatch( getHeroesIfNeeded() );
    }

    openModalWindow = (hero) => {
        this.props.dispatch(openModal({
            id: hero.id,
            content: <HeroModal hero={hero}/>,
            title: hero.name,
        }));
    }

    render() {
        const { heroes, isLoading } = this.props.heroes;
        const { isOpen } = this.props.modal;
        return (
            <div className='heroes-page__container'>
                <h1>Heroes</h1>
                <HeroSearch />
                { isLoading
                    ? <Loader />
                    : <HeroList
                        heroes={heroes}
                        showDetails={this.openModalWindow}/>
                }
                { isOpen
                    ? <Modal />
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = ({heroes, modal}) => ({
    heroes, modal
});

export default connect(mapStateToProps)(HeroesPage);


