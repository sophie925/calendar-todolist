import { useState } from "react";
import { addMonths, subMonths } from "date-fns";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarBody from "./CalenderBody";

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
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
            />
        </div>
    );
};

export default Calendar;