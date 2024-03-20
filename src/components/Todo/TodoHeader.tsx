import { useRecoilValue } from "recoil";
import { todoSortState } from "../../recoil/selectors/todoSelector";
import { format } from "date-fns";

const TodoHeader =  ({ selectDate }: { selectDate : Date}) => {
    const sortList = useRecoilValue(todoSortState);
    
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