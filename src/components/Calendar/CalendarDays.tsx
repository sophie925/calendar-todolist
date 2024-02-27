const CalendarDays = () => {
    const days: any[] = [];
    const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat'];

    date.forEach((d, i) => {
        days.push(
            <div className="day" key={i}>{d}</div>
        );
    });

    return <div className="days">{days}</div>;
}

export default CalendarDays;