import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import  { bindAll } from 'lodash';
import { closeModalWithTimeout } from './actions';
import './styles.sass';

class Modal extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        modal: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        bindAll(this, ['handleClickOutside', 'closeModal', 'handleOnKeyDown'])
    }

    componentWillMount() {
        document.addEventListener('keydown', this.handleOnKeyDown);
        document.addEventListener('click', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleOnKeyDown);
        document.removeEventListener('click', this.handleClickOutside);
    }

    closeModal() {
        this.props.dispatch( closeModalWithTimeout() );
    }

    handleOnKeyDown(e) {
        if (e.key === 'Escape') {
            this.closeModal()
        }
    }

    handleClickOutside(e) {
        const modalDialog = ReactDOM.findDOMNode(this.refs.modal);
        if (modalDialog && modalDialog.contains(e.target)) return;
        this.closeModal()
    }

    render() {
        const { isOpen, isClosing, title, content } = this.props.modal;
        const modalClasses = classnames('md-modal', {
            'md-hide': isClosing
        });
        if (!isOpen) return null;
        return (
            <div>
                <div className={modalClasses} ref='modal'>
                    <div className='md-content'>
                        <div className='md-header'>
                            <button type='button' className='md-header__btn--close' onClick={this.closeModal}>
                                <span>&times;</span></button>
                            <h4 className='md-header__title'>{ title }</h4>
                        </div>
                        { content }
                    </div>
                </div>
                <div className='md-overlay'></div>
            </div>
        )
    }
}

const mapStateToProps = ({ modal }) => ({
    modal
});

export default connect(mapStateToProps)(Modal);
