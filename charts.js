let canvas = document.querySelector('#bridges-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['Verrazano-Narrows Bridge', 'Golden Gate Bridge', 'Mackinac Bridge', 'George Washington Bridge', 'Tacoma Narrows Bridge'],         // Add elements- Add attributes like data and colors
        datasets: [ {
            label: 'Span Length in meters',
            data: [1298.4, 1280.2, 1158.0, 1067.0, 	853.44],
            backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange']
        }]
    },
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

})