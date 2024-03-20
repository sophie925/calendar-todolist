import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import { todoListState } from "../../recoil/atoms/todos";

const TodoList =  ({ selectDate }: { selectDate : Date }) => {
    const todos = useRecoilValue(todoListState);

    return (
        <div className="todo__list">
            {todos.map(todo => (
                <TodoItem key={todo.id} data={todo} selectDate={selectDate} />
            ))}
        </div>
    );
};

export default TodoList;