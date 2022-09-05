

$(function () {
    const API_KEY = '3365108dd91adb418699f57649cd2389';

    const ZIP = 64132;
    $.ajax({

        url: `http://api.openweathermap.org/data/2.5/weather?zip=${ZIP}&units=imperial&appid=${API_KEY}`,
        method: 'GET',
        dataType: 'json',

        success: function (data) {
            console.log(data);

            var weatherResults = document.getElementById('weatherResults');

            weatherResults.innerHTML += `
            <h3>${data.main.temp}&#8451;</h3>
            <p>Feels Like: ${data.main.feels_like} &#8451;</p>
            <p>Wind Speed: ${data.wind.speed} mph</p>`;
        }
    });
});
