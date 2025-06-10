 function updateTable() {
            var industry = document.getElementById("industrySelect").value;
            var table = document.getElementById("resultTable");
            var rows = table.rows;
            for (var i = 1; i < rows.length; i++) {
                var cells = rows[i].cells;
                for (var j = 1; j < cells.length; j++) {
                    cells[j].innerHTML = resultados[industry][i-1];
                }
            }
        }

        var resultados = {
            "CPG": [3.6, 3.4, 3.1, 2.8, 2.9, 2.9],
            "Banca": [4.4, 4.3, 4.1, 4.5, 4.4, 4.5],
            "Retail": [3.8, 3.5, 3.2, 3.0, 3.1, 3.3],
            "Energía": [3.5, 3.2, 2.9, 2.7, 2.8, 2.7],
            "Salud": [3.3, 3.0, 2.8, 2.6, 2.7, 2.8],
            "Educación": [3, 2.9, 2.6, 2.5, 2.6, 2.7]
        };

/* tabla de comparación */

 function calculateResults() {
            const form = document.getElementById('evaluationForm');
            const formData = new FormData(form);
            const categories = {};

            const puntaje_0 = formData.get('puntaje_0');
            if (!categories['Roadmap']) {
                categories['Roadmap'] = [];
            }
            categories['Roadmap'].push(parseInt(puntaje_0));
    
            const puntaje_1 = formData.get('puntaje_1');
            if (!categories['Roadmap']) {
                categories['Roadmap'] = [];
            }
            categories['Roadmap'].push(parseInt(puntaje_1));
    
            const puntaje_2 = formData.get('puntaje_2');
            if (!categories['Roadmap']) {
                categories['Roadmap'] = [];
            }
            categories['Roadmap'].push(parseInt(puntaje_2));
    
            const puntaje_3 = formData.get('puntaje_3');
            if (!categories['Roadmap']) {
                categories['Roadmap'] = [];
            }
            categories['Roadmap'].push(parseInt(puntaje_3));
    
            const puntaje_4 = formData.get('puntaje_4');
            if (!categories['Talent']) {
                categories['Talent'] = [];
            }
            categories['Talent'].push(parseInt(puntaje_4));
    
            const puntaje_5 = formData.get('puntaje_5');
            if (!categories['Talent']) {
                categories['Talent'] = [];
            }
            categories['Talent'].push(parseInt(puntaje_5));
    
            const puntaje_6 = formData.get('puntaje_6');
            if (!categories['Talent']) {
                categories['Talent'] = [];
            }
            categories['Talent'].push(parseInt(puntaje_6));
    
            const puntaje_7 = formData.get('puntaje_7');
            if (!categories['Talent']) {
                categories['Talent'] = [];
            }
            categories['Talent'].push(parseInt(puntaje_7));
    
            const puntaje_8 = formData.get('puntaje_8');
            if (!categories['Operating Model']) {
                categories['Operating Model'] = [];
            }
            categories['Operating Model'].push(parseInt(puntaje_8));
    
            const puntaje_9 = formData.get('puntaje_9');
            if (!categories['Operating Model']) {
                categories['Operating Model'] = [];
            }
            categories['Operating Model'].push(parseInt(puntaje_9));
    
            const puntaje_10 = formData.get('puntaje_10');
            if (!categories['Operating Model']) {
                categories['Operating Model'] = [];
            }
            categories['Operating Model'].push(parseInt(puntaje_10));
    
            const puntaje_11 = formData.get('puntaje_11');
            if (!categories['Operating Model']) {
                categories['Operating Model'] = [];
            }
            categories['Operating Model'].push(parseInt(puntaje_11));
    
            const puntaje_12 = formData.get('puntaje_12');
            if (!categories['Technology']) {
                categories['Technology'] = [];
            }
            categories['Technology'].push(parseInt(puntaje_12));
    
            const puntaje_13 = formData.get('puntaje_13');
            if (!categories['Technology']) {
                categories['Technology'] = [];
            }
            categories['Technology'].push(parseInt(puntaje_13));
    
            const puntaje_14 = formData.get('puntaje_14');
            if (!categories['Technology']) {
                categories['Technology'] = [];
            }
            categories['Technology'].push(parseInt(puntaje_14));
    
            const puntaje_15 = formData.get('puntaje_15');
            if (!categories['Technology']) {
                categories['Technology'] = [];
            }
            categories['Technology'].push(parseInt(puntaje_15));
    
            const puntaje_16 = formData.get('puntaje_16');
            if (!categories['Data']) {
                categories['Data'] = [];
            }
            categories['Data'].push(parseInt(puntaje_16));
    
            const puntaje_17 = formData.get('puntaje_17');
            if (!categories['Data']) {
                categories['Data'] = [];
            }
            categories['Data'].push(parseInt(puntaje_17));
    
            const puntaje_18 = formData.get('puntaje_18');
            if (!categories['Data']) {
                categories['Data'] = [];
            }
            categories['Data'].push(parseInt(puntaje_18));
    
            const puntaje_19 = formData.get('puntaje_19');
            if (!categories['Data']) {
                categories['Data'] = [];
            }
            categories['Data'].push(parseInt(puntaje_19));
    
            const puntaje_20 = formData.get('puntaje_20');
            if (!categories['Adoption & Scaling']) {
                categories['Adoption & Scaling'] = [];
            }
            categories['Adoption & Scaling'].push(parseInt(puntaje_20));
    
            const puntaje_21 = formData.get('puntaje_21');
            if (!categories['Adoption & Scaling']) {
                categories['Adoption & Scaling'] = [];
            }
            categories['Adoption & Scaling'].push(parseInt(puntaje_21));
    
            const puntaje_22 = formData.get('puntaje_22');
            if (!categories['Adoption & Scaling']) {
                categories['Adoption & Scaling'] = [];
            }
            categories['Adoption & Scaling'].push(parseInt(puntaje_22));
    
            const puntaje_23 = formData.get('puntaje_23');
            if (!categories['Adoption & Scaling']) {
                categories['Adoption & Scaling'] = [];
            }
            categories['Adoption & Scaling'].push(parseInt(puntaje_23));
    
            const averageScores = {};
            for (const category in categories) {
                const scores = categories[category];
                const average = scores.reduce((a, b) => a + b, 0) / scores.length;
                averageScores[category] = average;
            }

            // Update the results table
            const resultsTable = document.getElementById('resultsTable');
            resultsTable.innerHTML = '<tr><th>Categoría</th><th>Promedio</th></tr>';
            for (const category in averageScores) {
                const row = document.createElement('tr');
                const categoryCell = document.createElement('td');
                categoryCell.textContent = category;
                const averageCell = document.createElement('td');
                averageCell.textContent = averageScores[category].toFixed(2);
                row.appendChild(categoryCell);
                row.appendChild(averageCell);
                resultsTable.appendChild(row);
            }

            // Update the radar chart
            const ctx = document.getElementById('resultsChart').getContext('2d');
            const labels = Object.keys(averageScores);
            const data = Object.values(averageScores);
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Promedio por Categoría',
                        data: data,
                        backgroundColor: 'rgb(39, 104, 221)',
                        borderColor: 'rgb(39, 104, 221)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        r: {
                            beginAtZero: true,
                            max: 5
                        }
                    }
                }
            });
			
			
        }



        /* Borrar */

        function limpiarCache() {
    window.location.reload(true);
}
