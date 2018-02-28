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
            backgroundColor: ['#707070', '#FFFFFF'],
            borderColor: ['#707070', '#FFFFFF'],
            data: [70,30],
            borderWidth: [5,0],
        }]
    },

    // Configuration options go here
    options: {cutoutPercentage:[90]}
});

    
