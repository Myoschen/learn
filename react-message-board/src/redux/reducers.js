import { ADD_MESSAGE, REMOVE_MESSAGE, EDIT_MESSAGE } from "./actions";
import { combineReducers } from "redux";

const initialData = [{
    id: '1',
    date: '2021/11/14',
    name: 'Ryan Chen',
    content: '測試用',
    isEditing: false
}];

function messages(state = initialData, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            const { id, date, img, name, content, isEditing } = action.payload;
            return [
                ...state,
                {
                    id: id,
                    date: date,
                    name: name,
                    content: content,
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
        default:
            return state;
    }
}

const messageBoard = combineReducers({
    messages
});

export default messageBoard;