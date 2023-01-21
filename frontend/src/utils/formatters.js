import Moment from 'moment';


export class DateFormatter {
    static datetime(datetimeString, formt="YYYY-MM-DD HH:mm:ss") {
        return Moment(datetimeString).format('YYYY-MM-DD HH:mm:ss')
    };
}
