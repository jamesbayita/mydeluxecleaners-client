function getTimeStamp() {
    const date = new Date();
    // DATE
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
    let dn, da ,mo, ye;
        dn = days[date.getDay()];
        da = date.getDate();
        mo = months[date.getMonth()];
        ye = date.getFullYear();

    // TIME
    const 
        standardTime = n => n > 12 ? n - 12 : n === 0 ? n = 12 : n,
        addZero = n => n < 10 ? '0' + n : n;

    let h, m, s, ampm;
        h = standardTime(date.getHours());
        m = addZero(date.getMinutes());
        s = addZero(date.getSeconds());
        ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    const time = {
        h,
        m,
        s,
        ampm,
        dn,
        da,
        mo,
        ye
    }  

    return time;
}
export default getTimeStamp;