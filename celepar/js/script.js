document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('data-atual').textContent = "Data: " + new Date().toLocaleDateString('pt-BR');

  const chartData = {
    labels: ['Concluído', 'Em Andamento', 'Atrasado'],
    data: [45, 83, 5],
    colors: ['#28a745', '#ffc107', '#dc3545']
  };

  renderBarChart('statusChart', chartData);
  renderDoughnutChart('statusChart1', chartData);
});

function renderBarChart(canvasId, { labels, data, colors }) {
  new Chart(document.getElementById(canvasId), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors,
        borderRadius: 8,
        barThickness: 30
      }]
    },
    options: {
      indexAxis: 'y',
      plugins: { legend: { display: false }, tooltip: tooltipOptions() },
      scales: {
        x: { beginAtZero: true, grid: { color: '#eee' } },
        y: { ticks: { color: '#444', font: { size: 14 } }, grid: { display: false } }
      }
    }
  });
}

function renderDoughnutChart(canvasId, { labels, data, colors }) {
  new Chart(document.getElementById(canvasId), {
    type: 'doughnut',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: colors,
        borderColor: '#fff',
        borderWidth: 2,
        hoverOffset: 10
      }]
    },
    options: {
      cutout: '60%',
      plugins: {
        legend: {
          position: 'right',
          labels: {
            usePointStyle: true,
            pointStyle: 'circle',
            color: '#333',
            font: { size: 14 }
          }
        },
        tooltip: tooltipOptions()
      }
    }
  });
}

function tooltipOptions() {
  return {
    backgroundColor: '#222',
    titleColor: '#fff',
    bodyColor: '#fff',
    padding: 10,
    cornerRadius: 4
  };
}

function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('collapsed');
}

function printMain() {
  window.print();
}
