import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

const Todo = () => {
    return (
        <div className="todo">
            <TodoHeader />
            <TodoList />
            <TodoCreate />
        </div>
    );
};

export default Todo;