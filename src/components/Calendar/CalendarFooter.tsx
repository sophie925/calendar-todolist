type TodayType = {
    todayShow: boolean;
    onClickToday: () => void;
}

const CalendarFooter = ({ todayShow, onClickToday } : TodayType) => {
    return (
        <div className="footer">
        {todayShow
            ? <div className="move-today" onClick={onClickToday}>오늘</div>
            : null
        }
        </div>
    );
}

export default CalendarFooter;