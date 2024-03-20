import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dateState } from "../../recoil/atoms/date";
import { todoListState } from "../../recoil/atoms/todos";
import { todoListBySelectedDate } from "../../recoil/selectors/todoSelector";

const Todo = () => {
    const selectDate = useRecoilValue(dateState).selectDate; // 선택된 날짜
    const selectTodos = useRecoilValue(todoListBySelectedDate);
    const setTodo = useSetRecoilState(todoListState);
    setTodo(selectTodos);

    return (
        <div className="todo">
            <TodoHeader selectDate={selectDate} />
            <TodoList selectDate={selectDate} />
            <TodoCreate selectDate={selectDate} />
        </div>
    );
};

export default Todo;