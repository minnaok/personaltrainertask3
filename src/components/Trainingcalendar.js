import React from 'react';
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const TrainingCalendar = () => {

    moment.locale('en-GB');
    const localizer = momentLocalizer(moment);
    const [trainings, setTrainings] = React.useState([]);

        React.useEffect(() => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
        .then(res => res.json())
        .then(data => {
            for(let i = 0; i < data.length; i++) {
                let date = moment.utc(data[i].date).toDate();
                let dateAfter = moment.utc(date).add(data[i].duration, 'm').toDate()
                let training = {title: data[i].activity + ' - ' + data[i].customer.firstname + ' ' + data[i].customer.lastname, start: date, end: dateAfter};
                setTrainings(trainings => [...trainings, training])
            };
        },[])
        .catch(err => console.error(err));
        }, []);

    return (
        <div>
            <Calendar
                style={{ height: 500 }}
                localizer={localizer}
                events={trainings}
                who={trainings.who}
                startAccessor="start"
                endAccessor="end"
            />
        </div>
    )
};

export default TrainingCalendar;