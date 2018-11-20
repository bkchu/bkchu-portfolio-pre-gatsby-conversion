const HIDE_MODAL = 'HIDE_MODAL';
const PROJECT_MODAL = 'PROJECT_MODAL';
const CONTACT_MODAL = 'CONTACT_MODAL';

const initialState = {
    currentModal: ''
};

export function projectModal(projectInfo) {
    return {
        type: PROJECT_MODAL,
        payload: { modalType: 'PROJECT_MODAL', modalMeta: projectInfo }
    };
}

export function contactModal() {
    return {
        type: CONTACT_MODAL,
        payload: { modalType: 'CONTACT_MODAL' }
    };
}

export function hideModal() {
    return {
        type: HIDE_MODAL,
        payload: { modalType: 'HIDE_MODAL' }
    };
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case PROJECT_MODAL:
            return { ...state, currentModal: payload };

        case CONTACT_MODAL:
            return { ...state, currentModal: payload };

        case HIDE_MODAL:
            return { ...state, currentModal: payload };

        default:
            return state;
    }
}
