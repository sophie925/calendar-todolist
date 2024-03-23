import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { format } from 'date-fns';

type MonthType = {
    currentMonth : Date;
    prevMonth: React.MouseEventHandler<HTMLButtonElement>;
    nextMonth: React.MouseEventHandler<HTMLButtonElement>;
}

const CalendarHeader = ({ currentMonth, prevMonth, nextMonth } : MonthType) => {
    return (
        <div className="calendar__header">
            <div className="calendar__header__content">
                <button onClick={prevMonth}>
                    <IoIosArrowBack/>
                </button>
                <span className="date">
                    <span className="month">
                        {format(currentMonth, 'M')}월
                    </span>
                    {format(currentMonth, 'yyyy')}
                </span>
                <button onClick={nextMonth}>
                    <IoIosArrowForward />
                </button>
            </div>
        </div>
    );
};

export default CalendarHeader;