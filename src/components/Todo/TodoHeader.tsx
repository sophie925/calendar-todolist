import { useRecoilValue } from "recoil";
import { todoSortState } from "../../recoil/selectors/todoSortState";

const TodoHeader = () => {
    const sortList = useRecoilValue(todoSortState);

    return (
        <div className="todo__header">
            <div className="date">
                11
                <span className="day">월요일</span>
            </div>
            <div className="tasks">할 일 {sortList.length}개 남음</div>
        </div>
    );
};

export default TodoHeader;