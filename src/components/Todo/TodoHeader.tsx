import { useRecoilValue } from "recoil";
import { todoSortState } from "../../recoil/selectors/todoSortState";
import { dateState } from "../../recoil/atoms/date";
import { format } from "date-fns";

const TodoHeader = () => {
    const dateList = useRecoilValue(dateState);
    const sortList = useRecoilValue(todoSortState);
    const { selectDate } = dateList;

    const date = format(selectDate, 'dd');
    const day = format(selectDate, 'EEE');

    return (
        <div className="todo__header">
            <div className="date">
                {date}
                <span className="day">{day}</span>
            </div>
            <div className="tasks">할 일 {sortList.length}개 남음</div>
        </div>
    );
};

export default TodoHeader;