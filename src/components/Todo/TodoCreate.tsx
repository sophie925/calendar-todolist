import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { addTodo, getId } from "../../recoil/selectors/todoSelector";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../recoil/atoms/todos";

const TodoCreate = ({ selectDate }: { selectDate : Date}) => {
    const setTodo = useSetRecoilState(todoListState);
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);

    const onToggle = () => setOpen(!open);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value.trim());
    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!text) {
            alert('할 일을 입력해주세요.');
            return;
        }
        setTodo(todos => {
            const todoItem = { id: getId(selectDate), text, done: false };
            const updatedTodoList = [...todos, todoItem ];
            addTodo(todoItem, selectDate);
            return updatedTodoList;
        });
        setText('');
        setOpen(false);
    };

    return (
        <div className="todo__create">
            {open && (
                <form onSubmit={onSubmit}>
                    <input
                        className="input-box"
                        placeholder="할 일을 입력하세요"
                        onChange={onChange}
                    />
                </form>
            )}
            <button className={`add ${open ? 'open' : ''}`} onClick={onToggle}>
                <FaPlus />
            </button>
        </div>
    );
};

export default TodoCreate;