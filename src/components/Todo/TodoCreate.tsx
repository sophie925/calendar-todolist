import { FaPlus } from "react-icons/fa6";

const TodoCreate = () => {
    const onClickAdd = () => {
        alert("할일 추가!");
    }
    return (
        <div className="create"> 
            <button className="add" onClick={onClickAdd}>
                <FaPlus className="plus" />
                추가
            </button>
        </div>
    );
};

export default TodoCreate;