export const OPEN_MODAL = 'OPEN_MODAL';
export const ON_CLOSING_MODAL = 'ON_CLOSING_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

const closeModal = () => ({
    type: CLOSE_MODAL
})

const onClosingModal = () => ({
    type: ON_CLOSING_MODAL
})

export const openModal = ({ title, content, id }) => ({
    type: OPEN_MODAL,
    id, title, content
})

export const closeModalWithTimeout = () => {
    return (dispatch) => {
        dispatch( onClosingModal() )
        setTimeout (() => {
            dispatch( closeModal() )
        }, 250);
    };
}