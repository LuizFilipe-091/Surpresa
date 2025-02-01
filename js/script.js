function start(){
    setInterval(updateTimer, 1000);
}

function updateTimer() {
    const start = new Date('2023-06-03T10:30');
    const now = new Date();
    
    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();

    if (seconds < 0){
        minutes -= 1;
        seconds += 60;
    }

    if (minutes < 0){
        hours -= 1;
        minutes += 60;
    }

    if (hours < 0) {
        days -= 1;
        hours += 24;
    }

    if (days < 0){
        months -= 1;
        let lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0){
        years -= 1;
        months += 12;
    }

    if (seconds == 1) {
        var textSeconds = ` e ${seconds} segundo`
    } else {
        var textSeconds = ` e ${seconds} segundos`
    }

    if (minutes == 1) {
        var textMinutes = `${minutes} minuto`
    }else {
        var textMinutes = `${minutes} minutos`
    }
    if (hours == 1) {
        var textHours = `${hours} hora, `
    }else {
        var textHours = `${hours} horas, `
    }

    if (days == 1) {
        var textDays = `${days} dia`
    }else {
        var textDays = `${days} dias`
    }

    if (months == 1) {
        var textMonths = `${months} mês, `
    }else {
        var textMonths = `${months} meses, `
    }

    if (years == 1) {
        var textYears = `${years} ano, `
    }else {
        var textYears = `${years} anos, `
    }

    document.getElementById("timer").innerHTML = '<p>' +textYears + textMonths + textDays +  '</p><div></div><p>' + textHours + textMinutes + '</p><div></div><p>' + textSeconds + '</p>'
}