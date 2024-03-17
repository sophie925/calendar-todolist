import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import { TodoType, todoListState } from "../../recoil/atoms/todos";

const TodoItem = ({ data } : { data: TodoType }) => {
    const setTodos = useSetRecoilState(todoListState);

    const toggleTodo = () => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === data.id ? { ...data, done: !data.done } : todo
            )
        )
    }

    const removeTodo = () => {
        setTodos(todos => todos.filter(todo => todo.id !== data.id));
    }

    return (
        <div className="todo__item">
            <div className={`check ${data.done ? 'done' : ''}`} onClick={toggleTodo}>
                {data.done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </div>
            <span className="text">{data.text}</span>
            <div className="remove" onClick={removeTodo}>
                <MdDelete />
            </div>
        </div>
    );
};

export default TodoItem;