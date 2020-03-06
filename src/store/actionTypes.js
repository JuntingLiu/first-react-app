// 针对 action.type 抽离出来成常量或变量，利于排查问题
// 页面里 action.type 等比一个字符串的话，字符串写错了的话很难排查出问题

export const CHANGE_INPUT_VALUE = 'change_input_value';
export const ADD_TODO_ITEM = 'add_todo_item';
export const DELETE_TODO_ITEM = 'delete_todo_item';
export const INIT_LIST_ACTION = 'init_list_action';
export const GET_INIT_LIST = 'get_init_list';
