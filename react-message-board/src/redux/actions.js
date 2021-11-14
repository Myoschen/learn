const { v4: uuid_v4 } = require('uuid');
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';

export const addMessage = (name, content) => {
    const id = uuid_v4();
    const D = new Date();
    const date = [
        D.getFullYear().toString(),
        (D.getMonth() + 1).toString(),
        D.getDate().toString()
    ];
    return {
        type: ADD_MESSAGE,
        payload: {
            id: id,
            date: date.join('-'),
            name: name,
            content: content,
            isEditing: false
        }
    }
}

export const removeMessage = (id) => {
    return {
        type: REMOVE_MESSAGE,
        id
    }
}

export const editMessage = (id, content) => {
    return {
        type: EDIT_MESSAGE,
        payload: {
            eID: id,
            eContent: content
        }
    }
}