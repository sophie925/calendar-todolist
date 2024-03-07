import { startOfMonth, startOfWeek, endOfMonth, endOfWeek, format, isSameMonth, isSameDay, addDays } from "date-fns";

type DateType = {
    currentMonth: Date;
    selectedDate: Date;
    onClickDate: (day: Date) => void;
}

const CalendarBody = ({ currentMonth, selectedDate, onClickDate }: DateType) => {
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
                className={`col ${
                    !isSameMonth(date, monthStart)
                        ? 'disabled'
                        : isSameDay(date, selectedDate)
                        ? 'selected' : ''
                }`}
                key={i}
                onClick={() => onClickDate(cloneDate)}
                >
                    <span>{formattedDate}</span>
                </div>
            );
            date = addDays(date, 1);
        }
        rows.push(
            <div className="row">{days}</div>
        );
        days = [];
    }

    return <div className="body">{rows}</div>;
}

export default CalendarBody;