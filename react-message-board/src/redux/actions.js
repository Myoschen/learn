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
            img: "https://static.fotor.com.cn/assets/stickers/18531/77a12b1f-90d4-41ff-92d3-e134a081e18c_medium_thumb.jpg",
            name: name,
            content: content
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
        type: REMOVE_MESSAGE,
        payload: {
            id: id,
            content: content
        }
    }
}