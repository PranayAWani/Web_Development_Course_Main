document.getElementById('bkcco.csv').addEventListener('change', function(e) {
    Papa.parse(e.target.files[0], {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            console.log(results.data); // Log parsed data
            createGraphs(results.data);
        },
        error: function(error) {
            alert("Error parsing CSV file: " + error.message);
        }
    });
});

function createGraphs(parsedData) {
    // Extract labels and data from CSV
    const labels = parsedData.map(row => row['Day']); // Change 'Day' to match your CSV column
    const data1 = parsedData.map(row => row['Carbon Monoxide']); // Adjust as per CSV column
    const data2 = parsedData.map(row => row['Carbon Dioxide']); // Adjust as per CSV column

    // Graph 1: Carbon Monoxide
    const ctx1 = document.getElementById('graph1').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Carbon Monoxide',
                data: data1,
                borderColor: 'rgba(255, 99, 132, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { display: true },
                y: { display: true }
            }
        }
    });

    // Graph 2: Carbon Dioxide
    const ctx2 = document.getElementById('graph2').getContext('2d');
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Carbon Dioxide',
                data: data2,
                borderColor: 'rgba(54, 162, 235, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: { display: true },
                y: { display: true }
            }
        }
    });
}
