// if / else
if (7 < 5) {
    console.log(true);
} else {
    console.log(false);
}

if (5 < 7) {
    console.log(5 < 7); // true
} else if (7 > 8) {
    console.log('7 > 8'); //'7>8' String
} else {
    console.log("Nothing");
}

console.clear();
//switch

var currentDay = 'Mon';
var currentDay = 'Fri';

switch (currentDay) {
    case 'Mon':
        console.log('Monday Timings: 10:00 - 06:00');
        break;
    case 'Tue':
        console.log('Tuesday Timings: 09:00 - 05:00');
        break;
    case 'Wed':
        console.log('Wednesday Timings: 09:00 - 05:00');
        break;
    case 'Thu':
        console.log('Thursday Timings: 09:00 - 05:00');
        break;
    case 'Fri':
        console.log('Friday Timings: 09:00 - 05:00');
        break;
    case 'Sat':
        console.log('Saturday Timings: 10:00 - 06:00');
        break;
    case 'Sun':
        console.log('Sunday Timings: 10:00 - 06:00');
        break;

}