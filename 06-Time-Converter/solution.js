function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds'); 

    document.querySelector('main').addEventListener('click', onConvert);

    let ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function onConvert(event) {
        if (event.target.type == 'button') {
            let input = event.target.parentElement.querySelector('input[type= "text"]');

            let inputInDays = Number(input.value) / ratios[input.id];

            let daysToDisplay = inputInDays;
            let hoursToDisplay = daysToDisplay * ratios.hours;
            let minutesToDisplay = daysToDisplay * ratios.minutes;
            let secondsToDisplay = daysToDisplay * ratios.seconds;

            daysInput.value = daysToDisplay;
            hoursInput.value = hoursToDisplay;
            minutesInput.value = minutesToDisplay;
            secondsInput.value = secondsToDisplay;
        }
    }
}