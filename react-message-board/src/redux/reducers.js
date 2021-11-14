import { ADD_MESSAGE, REMOVE_MESSAGE, EDIT_MESSAGE, LIKE_MESSAGE, DISLIKE_MESSAGE } from "./actions";
import { combineReducers } from "redux";

const initialData = [{
    id: '1',
    date: '2021/11/14',
    name: 'Ryan Chen',
    content: '測試用',
    like: 5,
    dislike: 101,
    isEditing: false
}];

function messages(state = initialData, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            const { id, date, name, content, like, dislike, isEditing } = action.payload;
            return [
                ...state,
                {
                    id: id,
                    date: date,
                    name: name,
                    content: content,
                    like: like,
                    dislike: dislike,
                    isEditing: isEditing
                }
            ];
        case REMOVE_MESSAGE:
            return state.filter(message => message.id !== action.id);
        case EDIT_MESSAGE:
            const { eID, eContent } = action.payload;
            return state.map(message => {
                let edit = message.isEditing;
                if (edit && message.id === eID) {
                    return {
                        ...message,
                        content: eContent,
                        isEditing: !edit
                    }
                } else if (message.id === eID) {
                    return {
                        ...message,
                        isEditing: !edit
                    }
                }
                return message;
            });
        case LIKE_MESSAGE:
            return state.map(message => {
                if (message.id === action.id) {
                    let count = message.like + 1;
                    return {
                        ...message,
                        like: count
                    }
                }
                return message;
            });
        case DISLIKE_MESSAGE:
            return state.map(message => {
                if (message.id === action.id) {
                    let count = message.dislike + 1;
                    return {
                        ...message,
                        dislike: count
                    }
                }
                return message;
            });
        default:
            return state;
    }
}

const messageBoard = combineReducers({
    messages
});

export default messageBoard;