import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash';

import { getHeroesByName } from './actions';


class HeroSearch extends React.Component {
    static path = '/';

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        heroes: PropTypes.object.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            error: ''
        };
    }

    componentWillMount() {
        this.debounceSearch = debounce(()=> {
            this.searchHero();
        }, 100);
    }

    onChangeHandler = (e) => {
        let { value } = e.target;
        this.setState({ name: value });
        this.debounceSearch();
    }

    searchHero() {
        const { name } = this.state;

        if (!name) {
            this.setState({error : 'The value must not be empty'});
            return
        }

        this.props.dispatch( getHeroesByName(name) );
        this.setState({error : ''})
    }

    render() {
        return (
            <div>
                <span className='help-block'>Try searching a super hero (ex. hulk, spider-man, iron-man) :</span>
                <input type='search'
                       onChange={this.onChangeHandler}
                       value={this.state.name}
                       placeholder='Search for a hero'
                       className='search-input'
                />
                { this.state.error ? <span className='help-block'> {this.state.error} </span> : null}
            </div>
        );
    }
}

const mapStateToProps = ({ heroes }) => ({
    heroes
});

export default connect(mapStateToProps)(HeroSearch);

