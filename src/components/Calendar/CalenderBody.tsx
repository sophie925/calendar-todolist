import { startOfMonth, startOfWeek, endOfMonth, endOfWeek, format, isSameMonth, isSameDay, addDays } from "date-fns";

type PropsType = {
    currentMonth: Date;
    currDate: Date;
    selectedDate: Date;
    todos: string[];
    onClickDate: (day: Date) => void;
}

const CalendarBody = ({ currentMonth, currDate, selectedDate, todos, onClickDate }: PropsType) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    
    const rows = [];
    let days = [];
    let date = startDate;
    let formattedDate = '';

    while (date <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(date, 'd');
            let cloneDate = date;
            days.push(
                <div
                    key={i}
                    className={`col ${
                        isSameDay(date, currDate) ? 'today' : ''
                    } ${
                        !isSameMonth(date, monthStart)
                            ? 'disabled'
                            : isSameDay(date, selectedDate)
                            ? 'selected' : ''
                    }`}
                    onClick={() => onClickDate(cloneDate)}
                >
                    <span>{formattedDate}</span>
                    {todos.map((todo) => {
                        if (isSameDay(date, new Date(todo))) {
                            return <div className="todo"></div>
                        }
                    } )}
                </div>
            );
            date = addDays(date, 1);
        }
        rows.push(
            <div className="row">{days}</div>
        );
        days = [];
    }

    return <div className="calendar__body">{rows}</div>;
}

export default CalendarBody;