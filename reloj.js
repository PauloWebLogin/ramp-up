const myClock = {
hour: 6,
minute: 3,
isPm: true,
};

if (myClock.isPm) {
    console.log((myClock.hour + 12) + ":" + (myClock.minute * 5));
} else {
    console.log(myClock.hour) + ":" + (myClock.minute);
}

if (myClock.hour === 12 && myClock.isPm) {
    miClock.hour = '0';
}

if (myClock.minute === 12) {
    myClock.minute
}