import { OPEN_MODAL, CLOSE_MODAL, ON_CLOSING_MODAL } from './actions';

const initialState = {
    isClosing: false,
    isOpen: false,
    title: 'Modal Window',
    content: null
}

function modalReducer(state = initialState, action) {
    switch(action.type) {
        case OPEN_MODAL:
            return {...state,
                isOpen: true,
                id: action.id,
                title: action.title,
                content: action.content,
                footer: action.footer
            };
        case ON_CLOSING_MODAL:
            return {...state,
                isClosing: true
            };
        case CLOSE_MODAL:
            return initialState;
        default:
            return state
    }
}

const ModalReducer = {
    modal: modalReducer
};

export default ModalReducer;
