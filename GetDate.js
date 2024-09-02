function getDate() {
    var currentDate = new Date();

    // YYYY-MM-DD format
    var formattedDate = currentDate.getFullYear() + '-' +
        ('0' + (currentDate.getMonth() + 1)).slice(-2) + '-' +
        ('0' + currentDate.getDate()).slice(-2);
    
    return formattedDate;
}