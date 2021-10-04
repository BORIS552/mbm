

module.exports = function ExcelDateToJSDate(serial) {
    var utc_days  = Math.floor(serial - 25569);
    var utc_value = utc_days * 86400;                                        
    var date_info = new Date(utc_value * 1000);
    formatted_date = date_info.getDate()+"/"+date_info.getMonth()+"/"+date_info.getFullYear();
    return formatted_date;
 }

 module.exports = function randomString() {
    var result = '';
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (var i = 6; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}