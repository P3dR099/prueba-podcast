import moment from 'moment';
import { Episode } from '../models/Episode';

export const formattedDate = (date: any) => {
    const newDate = moment(date, 'YYYY-MM-DD HH:mm:ss', 'UTC').format();
    const todayDate = new Date();

    const getPrevious = () => {
        if (moment(todayDate).isSame(newDate, 'day')) {
            return moment(newDate)
        }
        const isSameYear = moment(newDate).isSame(new Date(), 'year');
        if (isSameYear) {
            return moment(newDate).format('MM/DD')
        }
        else {
            return moment(newDate).format('MM/DD/YYYY')
        }
    }

    const dateFormat = moment(newDate).calendar(todayDate, {
        lastDay : '[Yesterday]',
        sameDay : `[${moment(newDate).fromNow()}]`,
        nextDay : '[Tomorrow at] LT',
        lastWeek : '[last] dddd',
        nextWeek : '[next] dddd [at] LT',
        sameElse : `${getPrevious()}`
    })

    return (dateFormat);
};

export const getDuration = (episode: Episode) => {
    const milliseconds = episode?.trackTimeMillis;
    let seconds: any = Math.floor((milliseconds / 1000) % 60)
    let minutes: any = Math.floor((milliseconds / (1000 * 60)) % 60)
    let hours: any = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    const formattedTime = `${hours !== '00' ? `${hours}:` : ''}${minutes}:${seconds}`;

    return formattedTime;
};
  

const str_pad_left = (string: any, pad: any, length: any) => {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  };
  
export const formatTimeAudio = (timeAudio: any) => {
  let d = Number(timeAudio);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);
  const hours = h === 0 ? "" : str_pad_left(h, "0", 2) + ":";
  const currentTime =
    hours + str_pad_left(m, "0", 2) + ":" + str_pad_left(s, "0", 2);
  return currentTime;
};