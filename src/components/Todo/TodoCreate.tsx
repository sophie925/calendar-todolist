import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../recoil/atoms/todos";

let id = 0;
const getId = () => id++;

const TodoCreate = () => {
    const setTodo = useSetRecoilState(todoListState);
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);

    const onToggle = () => setOpen(!open);
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value);
    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!text) {
            alert('할 일을 입력해주세요.');
            return;
        }
        setTodo(todos => todos.concat({ id : getId(), text, done: false }))
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