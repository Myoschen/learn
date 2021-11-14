import { ADD_MESSAGE, REMOVE_MESSAGE, EDIT_MESSAGE } from "./actions";
import { combineReducers } from "redux";

const initialData = [{
    id: '1',
    date: '2021/11/14',
    img: "https://static.fotor.com.cn/assets/stickers/18531/77a12b1f-90d4-41ff-92d3-e134a081e18c_medium_thumb.jpg",
    name: 'Ryan Chen',
    content: '測試用'
}];

function messages(state = initialData, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            const { id, date, img, name, content } = action.payload;
            return [
                ...state,
                {
                    id: id,
                    date: date,
                    img: img,
                    name: name,
                    content: content
                }
            ];
        case REMOVE_MESSAGE:
            return state.filter(message => message.id !== action.id)
        // case EDIT_MESSAGE:
        //     return
        default:
            return state;
    }
}

const messageBoard = combineReducers({
    messages
});

export default messageBoard;