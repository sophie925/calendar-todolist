import { useState } from "react";
import { addMonths, getMonth, isFuture, isPast, isSameDay, subMonths } from "date-fns";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarBody from "./CalenderBody";
import CalendarFooter from "./CalendarFooter";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dateState } from "../../recoil/atoms/date";

const Calendar = () => {
    const dateList = useRecoilValue(dateState);
    const setSelectDate = useSetRecoilState(dateState);
    const { currDate, selectDate } = dateList;

    const [currentMonth, setCurrentMonth] = useState<Date>(currDate);
    const [todayShow, setTodayShow] = useState<boolean>(false);
    
    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };

    const onClickDate = (day: Date) => {
        checkToday(day);
        setSelectDate({ ...dateList, selectDate: day });
        if (isPast(day) && getMonth(day) < getMonth(currentMonth)) {
            prevMonth();
        } else if (isFuture(day) && getMonth(day) > getMonth(currentMonth)) {
            nextMonth();
        }
    };

    const onClickToday = () => {
        if (todayShow) {
            setSelectDate({ ...dateList, selectDate: currDate });
            checkToday(currentMonth);
            setCurrentMonth(currDate);
        }
    };

    const checkToday = (date: Date) => {
        if (!isSameDay(currentMonth, date)) {
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
                selectedDate={selectDate}
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