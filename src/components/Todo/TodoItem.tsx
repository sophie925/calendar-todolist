import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";

type ItemType = {
    text: string;
    done: boolean;
}

const TodoItem = ({ text, done } : ItemType) => {
    return (
        <div className="item">
            <div className="check">
                {done ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            </div>
            <span className="text">{text}</span>
            <div className="remove">
                <MdDelete />
            </div>
        </div>
    );
};

export default TodoItem;