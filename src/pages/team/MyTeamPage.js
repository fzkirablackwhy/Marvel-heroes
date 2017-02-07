import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { map } from 'lodash';
import TeamItem from './components/TeamItem';
import Modal from '../../components/modalDialog/Modal';
import ConfirmModal from './modal/ConfirmModal';
import { openModal } from '../../components/modalDialog/actions';
import { removeFromTeam } from './actions';
import './styles.sass';

class MyTeamPage extends React.Component {
    static path = '/team';

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        myTeam: PropTypes.object.isRequired
    };

    onClickHandler(hero) {
        this.props.dispatch( openModal({
            content: <ConfirmModal id={hero.id} name={hero.name} onSuccess={removeFromTeam} />,
            title: 'Remove hero?'
        }) );
    }

    renderTeam() {
        if (Object.keys(this.props.myTeam).length > 0) {
            // creates an array of values by running each element in collection
            return map(this.props.myTeam, (hero) => (
                    <div key={hero.id} className='team-item'>
                        <TeamItem name={hero.name} src={hero.src}/>
                        <button className='btn team__btn--remove icon-remove' onClick={this.onClickHandler.bind(this, hero)}>
                            <span>Remove</span>
                        </button>
                    </div>
                )
            );
        }
        return (
            <div className='team__no-results'>
                <h3>No superheroes yep!</h3>
                Add heroes on <Link to='/heroes'>heroes page!</Link>
            </div>
        );
    }

    render() {
        const { isOpen } = this.props.modal;
        return (
            <div className='team__container'>
                {this.renderTeam()}
                { isOpen
                    ? <Modal />
                    : null
                }
            </div>

        );
    }
}

const mapStateToProps = ({ myTeam, modal }) => ({
    myTeam,
    modal
});

export default connect(mapStateToProps)(MyTeamPage);
