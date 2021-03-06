var digitialWatch = document.querySelector('.digital');
var sElement = document.querySelector('.p_s');
var mElement = document.querySelector('.p_m');
var hElement = document.querySelector('.p_h');

var updateClock = function () {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    digitialWatch.innerHTML = formatToZero(hour) + " : " + formatToZero(minute) + " : " + formatToZero(second);
    //End of Digital Watch

    let sDeg = (( 360 / 60)  * second ) - 90;
    let mDeg = (( 360 / 60 ) * minute ) - 90;
    let hDeg = (( 360 / 12 ) * hour ) - 90; 

    sElement.style.transform = ` rotate(${sDeg}deg) `;
    mElement.style.transform = ` rotate(${mDeg}deg) `;
    hElement.style.transform = ` rotate(${hDeg}deg) `;

};
var formatToZero = function (time) {
    return time < 10 ? '0' + time : time;
};
setInterval(updateClock, 1000);
updateClock()