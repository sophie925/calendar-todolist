import TodoCreate from "./TodoCreate";
import TodoItem from "./TodoItem";

const TodoBody = () => {
    return (
        <div className="body">
            <TodoItem text="프로젝트 계획세우기" done={true} />
            <TodoItem text="투두리스트 완성하기" done={false} />
            <TodoItem text="저녁 고구마,달걀 먹기" done={false} />
            <TodoCreate />
        </div>
    );
};

export default TodoBody;