import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addToTeam, removeFromTeam } from '../../team/actions';

class HeroModalFooter extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        myTeam: PropTypes.object.isRequired,
        hero: PropTypes.object.isRequired
    };

    addToTeamHandler(hero) {
        this.props.dispatch( addToTeam(hero) );
    }

    removeFromTeamHandler(hero) {
        this.props.dispatch( removeFromTeam(hero.id) );
    }

    render() {
        const { hero } = this.props;
        let selected = false;

        if (hero.id in this.props.myTeam) {
            selected = true
        }
        return (
            <div>
                { !selected ?
                    <button
                        className='btn btn--modal btn--modal-add'
                        onClick={this.addToTeamHandler.bind(this, hero)}>
                        Add hero
                    </button>
                    : <button
                        className='btn btn--modal btn--modal-remove'
                        onClick={this.removeFromTeamHandler.bind(this, hero)}>
                        Remove hero
                    </button>
                }
            </div>
        )
    }

}

const mapStateToProps = ({ myTeam }) => ({
    myTeam
});

export default connect(mapStateToProps)(HeroModalFooter);
