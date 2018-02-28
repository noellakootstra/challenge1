var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        datasets: [{
            label: "My First dataset",
            backgroundColor: ['#707070', '#FFFFFF'] ,
            borderColor: ['#707070','#FFFFFF'],
            data: [50,50],
            borderWidth: [5,0],
        }]
    },

    // Configuration options go here
    options: {cutoutPercentage:[90]}
});

var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        datasets: [{
            
            backgroundColor: ['#707070', '#FFFFFF'],
            borderColor: ['#707070', '#FFFFFF'],
            data: [70,30],
            borderWidth: [5,0],
        }]
    },

    // Configuration options go here
    options: {cutoutPercentage:[90]}
});

    
//linechart

var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"],
        datasets: [{
            label: "Gemeten Gforce",
            backgroundColor: '#707070)',
            borderColor: '#707070',
            data: [0, 4, 3, 6, 9, 7, 3],
        }]
    },

    // Configuration options go here
    options: {}
});