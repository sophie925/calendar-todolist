import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type TodayType = {
    todayShow: boolean;
    isCheckTime: boolean;
    onClickToday: () => void;
}

const CalendarFooter = ({ todayShow, isCheckTime, onClickToday } : TodayType) => {
    return (
        <div className="calendar__footer">
        {todayShow
            ? (
                <div className="calendar__footer__btn" onClick={onClickToday}>
                    <div className="today">
                        {!isCheckTime && <IoIosArrowBack />}
                        <span>오늘</span>
                        {isCheckTime && <IoIosArrowForward />}
                    </div>
                </div>
               )
            : null
        }
        </div>
    );
}

export default CalendarFooter;