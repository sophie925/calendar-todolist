import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import { todoListState } from "../../recoil/atoms/todos";

const TodoList = () => {
    const todos = useRecoilValue(todoListState);

    return (
        <div className="todo__list">
            {todos.map(todo => (
                <TodoItem key={todo.id} data={todo} />
            ))}
        </div>
    );
};

export default TodoList;