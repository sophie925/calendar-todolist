import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import { ITodo, todoListState } from "../../recoil/atoms/todos";
import { removeTodo, toggleTodo } from "../../recoil/selectors/todoSelector";

type PropsType = {
    data: ITodo,
    selectDate : Date
}

const TodoItem = ({ data, selectDate } : PropsType) => {
    const setTodos = useSetRecoilState(todoListState);
    const { id, text, done } = data;

    const onToggle = () => {
        setTodos(todos =>
            todos.map(todo => {
                if(todo.id === id) {
                    return  { ...data, done: !done };
                }
                return todo;
            })
        );
        toggleTodo(id, selectDate);
    };
    const onRemove = () => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
        removeTodo(id, selectDate);
    }

    return (
        <div className="todo__item">
            <div className={`check ${done ? 'done' : ''}`} onClick={onToggle}>
                {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </div>
            <span className="text">{text}</span>
            <div className="remove" onClick={onRemove}>
                <MdDelete />
            </div>
        </div>
    );
};

export default TodoItem;