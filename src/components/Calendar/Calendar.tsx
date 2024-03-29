import { useState } from "react";
import { addMonths, isPast, isSameDay, startOfMonth, subMonths } from "date-fns";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarBody from "./CalenderBody";
import CalendarFooter from "./CalendarFooter";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dateState, setDate } from "../../recoil/atoms/date";
import { getTodoListForMonth } from "../../recoil/selectors/todoSelector";

const Calendar = () => {
    const dateList = useRecoilValue(dateState);
    const setSelectDate = useSetRecoilState(dateState);
    const getTodos = useRecoilValue(getTodoListForMonth);
    const { currDate, selectDate } = dateList;

    const [currentMonth, setCurrentMonth] = useState<Date>(currDate);
    const [todayShow, setTodayShow] = useState<boolean>(false);
    const [isCheckTime, setIsCheckTime] = useState<boolean>(false);
    
    // 이전 달 이동 시
    const onClickPrevMonth = () => {
        const prevMonth = subMonths(currentMonth, 1);
        setCurrentMonth(prevMonth);
        setSelectDate({ ...dateList, selectDate: setDate(startOfMonth(prevMonth)) });
        checkToday(prevMonth);
    };

    // 다음 달 이동 시
    const onClickNextMonth = () => {
        const nextMonth = addMonths(currentMonth, 1);
        setCurrentMonth(nextMonth);
        setSelectDate({ ...dateList, selectDate: setDate(startOfMonth(nextMonth)) });
        checkToday(nextMonth);
    };

    // 캘린더에서 날짜 클릭 시
    const onClickDate = (date: Date) => {
        setCurrentMonth(date);
        setSelectDate({ ...dateList, selectDate: setDate(date) });
        checkToday(date);
    };

    // 오늘 버튼 클릭 이벤트
    const onClickToday = () => {
        if (todayShow) {
            setSelectDate({ ...dateList, selectDate: setDate(currDate) });
            checkToday(currDate);
            setCurrentMonth(currDate);
        }
    };

    // 오늘인지 확인하는 함수
    const checkToday = (date: Date) => {
        if (!isSameDay(currDate, date)) {
            setTodayShow(true);
            setIsCheckTime(isPast(date))
        } else {
            setTodayShow(false);
        }
    };

    return (
        <div className="calendar">
            <CalendarHeader
                currentMonth={currentMonth}
                prevMonth={onClickPrevMonth}
                nextMonth={onClickNextMonth}
            />
            <CalendarDays />
            <CalendarBody
                currentMonth={currentMonth}
                currDate={currDate}
                selectedDate={selectDate}
                todos={getTodos}
                onClickDate={onClickDate}
            />
            <CalendarFooter
                todayShow={todayShow}
                isCheckTime={isCheckTime}
                onClickToday={onClickToday}
            />
        </div>
    );
};

export default Calendar;