import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindAll } from 'lodash';
import { closeModalWithTimeout } from '../../../components/modalDialog/actions';


class ConfirmModal extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        onSuccess: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        bindAll(this, ['cancel', 'deleteHero', 'handleOnKeyDown']);
    }

    componentWillMount() {
        document.addEventListener('keydown', this.handleOnKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleOnKeyDown);
    }

    cancel() {
        this.props.dispatch( closeModalWithTimeout() );
    }

    handleOnKeyDown(e) {
        if (e.key === 'Enter') {
            this.deleteHero()
        }
    }

    deleteHero() {
        const { onSuccess, id } = this.props;
        this.props.dispatch( onSuccess(id) );
        this.cancel();
    }

    render() {
        return (
            <div>
                <div className='md-body'>
                    <h3>Are you sure you want to remove
                        <span> {this.props.name} </span>
                        from your team?
                    </h3>
                </div>
                <div className='md-footer'>
                    <button className='btn btn__confirm--remove' onClick={this.deleteHero}>Remove</button>
                    <button className='btn btn__confirm--cancel' onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default connect()(ConfirmModal);