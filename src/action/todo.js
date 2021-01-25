export function todoDataList(payload) {
    return {
        type: 'TODO_DATA',
        payload
    };
}

export function addTodoAction(payload) {
    return {
        type: 'ADD_TODO',
        payload
    };
}