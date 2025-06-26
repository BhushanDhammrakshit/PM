const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('donut');
const ctx3 = document.getElementById('barChart');
const ctx4 = document.getElementById('pieChart');
const ctx5 = document.getElementById('polarAreaChart');
const ctx6 = document.getElementById('radarChart');

// Line chart
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [22, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    animations: {
      tension: {
        duration: 2000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax: 30, // Set the maximum value for the y-axis
        ticks: {
          color: 'rgb(255, 99, 132)',
          stepSize: 1 // Change the color of the y-axis labels
        }
      }
    }
  }
});

// Doughnut chart
new Chart(ctx2, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 10],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 2
    }]
  },
  options: {
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Doughnut Chart'
      }
    }
  }
});


// Bar chart
new Chart(ctx3, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // example labels
    datasets: [{
      label: 'Sales',
      data: [10, 20, 30, 40, 50, 60, 70],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(ctx4, {
  type: 'pie',
  data : {
    datasets: [{
      data: [10, 20, 30]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Red',
      'Yellow',
      'Blue'
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Pie Chart'
      }
    }
  }
});

new Chart(ctx5, {
  type: 'polarArea',
  data: {
    datasets: [{
      data: [10, 20, 30],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',  // Red
        'rgba(255, 205, 86, 0.8)',  // Yellow
        'rgba(54, 162, 235, 0.8)'   // Blue
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(255, 205, 86, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1
    }],
    labels: ['Red', 'Yellow', 'Blue']
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Polar Area Chart'
      }
    }
  }
});

new Chart(ctx6, {
  type: 'radar',
  data: {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [{
      label: 'My Activities',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Chart.js Radar Chart'
      }
    },
    scales: {
      r: {
        angleLines: {
          display: true
        },
        suggestedMin: 0,
        suggestedMax: 100
      }
    }
  }
});