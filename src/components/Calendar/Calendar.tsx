import { useState } from "react";
import { addMonths, format, subMonths } from "date-fns";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarBody from "./CalenderBody";
import CalendarFooter from "./CalendarFooter";

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [todayShow, setTodayShow] = useState(false);

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
    const onClickDate = (day: Date) => {
        checkToday(day);
        setSelectedDate(day);
    };
    const onClickToday = () => {
        if (todayShow) {
            setSelectedDate(currentMonth);
            checkToday(currentMonth);
        }
    };
    const checkToday = (date: Date) => {
        let formatCurrentDate = format(currentMonth, 'yyMMdd');
        let formatSelectedDate = format(date, 'yyMMdd');
        if (formatCurrentDate !== formatSelectedDate) {
            setTodayShow(true);
        } else {
            setTodayShow(false);
        }
    };

    return (
        <div className="calendar">
            <CalendarHeader
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}
            />
            <CalendarDays />
            <CalendarBody
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                onClickDate={onClickDate}
            />
            <CalendarFooter
                todayShow={todayShow}
                onClickToday={onClickToday}
            />
        </div>
    );
};

export default Calendar;