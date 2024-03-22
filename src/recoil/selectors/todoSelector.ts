import { selector } from "recoil";
import { TodoType } from "../atoms/todos";
import { dateState } from "../atoms/date";

// 선택된 날짜에 따라 할 일 목록을 가져오는 selector
export const todoListBySelectedDate = selector<TodoType[]>({
    key: 'todoListBySelectedDate',
    get: ({ get }) => {
        const selectedDate = get(dateState).selectDate.toString();
        const TODOS_KEY = new Date(selectedDate).toString();
        const savedValue = localStorage.getItem(TODOS_KEY);

        return savedValue ? JSON.parse(savedValue) : [];
    }
});

// 남은 할 일 개수를 세는 함수
export const todoSortState = selector({
    key: 'todoSortState',
    get: ({ get }) => {
        const selectedDate = get(dateState).selectDate;
        const TODOS_KEY = new Date(selectedDate).toString();
        const todoListString = localStorage.getItem(TODOS_KEY);
        let result = [];

        if (todoListString !== null) {
            const todoList = JSON.parse(todoListString);
            result = todoList.filter((todo: TodoType) => todo.done !== true);
        }

        return result;
    }
});

// 할 일 목록을 로컬 스토리지에 저장하는 함수
export const saveTodoListToLocalStorage = (selectedDate: Date, todoList: TodoType[]) => {
    const TODOS_KEY = new Date(selectedDate).toString();
    
    localStorage.setItem(TODOS_KEY, JSON.stringify(todoList));
};

// 할 일 id 생성하는 함수
export const getId = (selectedDate: Date) => {
    const TODOS_KEY = new Date(selectedDate).toString();
    const todoListString = localStorage.getItem(TODOS_KEY);
    let id = 0;
    
    if (todoListString) {
        const todoList = JSON.parse(todoListString);;
        id = todoList.length;
    }
    return id;
}

// 새로운 할 일을 추가하는 함수
export const addTodo = (todoItem: TodoType, selectedDate: Date) => {
    const TODOS_KEY = new Date(selectedDate).toString();
    const todoListString = localStorage.getItem(TODOS_KEY);
    let todoList = [];

    if (todoListString) {
        todoList = JSON.parse(todoListString);
    }
    todoList.push(todoItem);
    
    saveTodoListToLocalStorage(selectedDate, todoList);
};

// 할 일을 완료 상태로 변경하는 함수
export const toggleTodo = (todoId: number, selectedDate: Date) => {
    const TODOS_KEY = new Date(selectedDate).toString();
    const todoListString = localStorage.getItem(TODOS_KEY);

    if (todoListString !== null) {
        const todoList = JSON.parse(todoListString);
        const updatedTodoList = todoList.map((todo: TodoType) => {
            if (todo.id === todoId) {
                return { ...todo, done: !todo.done }
            }
            return todo;
        });

        saveTodoListToLocalStorage(selectedDate, updatedTodoList);
    }
};

// 선택된 할 일을 제거하는 함수
export const removeTodo = (todoId: number, selectedDate: Date) => {
    const TODOS_KEY = new Date(selectedDate).toString();
    const todoListString = localStorage.getItem(TODOS_KEY);

    if (todoListString !== null) {
        const todoList = JSON.parse(todoListString);
        const updatedTodoList = todoList.filter((todo: TodoType) => todo.id !== todoId);

        saveTodoListToLocalStorage(selectedDate, updatedTodoList);
    }
};