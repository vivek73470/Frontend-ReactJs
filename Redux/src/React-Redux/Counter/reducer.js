import { loadData, saveData } from '../../utils/accessLocalStorage';
import * as types from './actionType'

const initialState = { 
    count: loadData("count") || 10, 
 
    };

const reducer = (oldState = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.ADD:
            const newCount = oldState.count + payload
            console.log('hi1',newCount)
            saveData ('count',newCount)
            return { ...oldState, count:newCount }

        case types.REDUCE:
            return { ...oldState, count: oldState.count - payload }

        // case types.POST_TODOS_REQUEST:
        //     return { ...oldState, isLoading: true };

        // case types.POST_TODOS_SUCCESS:
        //     return { ...oldState, isLoading: false, todos: [...oldState.todos, payload] };

        // case types.POST_TODOS_ERROR:
        //     return { ...oldState, isLoading: false, isError: true };
        default:
            return oldState;
    }
}

export { reducer }