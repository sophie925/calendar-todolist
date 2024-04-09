import { selector } from "recoil";
import { ITodo, todoListState } from "../atoms/todos";
import { dateState } from "../atoms/date";

// 선택된 날짜에 따라 할 일 목록을 가져오는 selector
export const todoListBySelectedDate = selector<ITodo[]>({
    key: 'todoListBySelectedDate',
    get: ({ get }) => {
        const selectedDate = get(dateState).selectDate.toString();
        const TODOS_KEY = new Date(selectedDate).toString();
        const savedValue = localStorage.getItem(TODOS_KEY);

        return savedValue ? JSON.parse(savedValue) : [];
    }
});

// 남은 할 일 개수를 세는 함수
export const todoSortState = selector<ITodo[]>({
    key: 'todoSortState',
    get: ({ get }) => {
        const todoData = get(todoListState);
        let result = todoData.filter(todo => !todo.done);

        return result;
    }
});

// 현재 달에 할 일 등록된 날짜 가져오는 함수
export const getTodoListForMonth = selector<string[]>({
    key: 'getTodoListForMonth',
    get: ({ get }) => {
        const currentMonth = new Date(get(dateState).selectDate).getMonth() + 1;
        const todoDateKeyList = Object.keys(localStorage);
        let todoDateList = [];
        todoDateList = todoDateKeyList.filter((date) => new Date(date).getMonth() + 1 === currentMonth);

        return todoDateList;
    }
});

// 할 일 목록을 로컬 스토리지에 저장하는 함수
export const saveTodoListToLocalStorage = (selectedDate: Date, todoList: ITodo[]) => {
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
export const addTodo = (todoItem: ITodo, selectedDate: Date) => {
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

    if (todoListString) {
        const todoList = JSON.parse(todoListString);
        const updatedTodoList = todoList.map((todo: ITodo) => {
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
        const updatedTodoList = todoList.filter((todo: ITodo) => todo.id !== todoId);

        if (updatedTodoList.length === 0) {
            localStorage.removeItem(TODOS_KEY);
        } else {
            saveTodoListToLocalStorage(selectedDate, updatedTodoList);
        }
    }
};