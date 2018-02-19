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
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [0, 10, 5, 2, 20, 30, 45],
        }]
    },

    // Configuration options go here
    options: {cutoutPercentage:[90]}
});