// script.js
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    search(query);
});

function search(query) {
    // Simulação de resultados de busca
    const results = [
        "Resultado 1 para " + query,
        "Resultado 2 para " + query,
        "Resultado 3 para " + query,
        "Resultado 4 para " + query,
        "Resultado 5 para " + query,
    ];

    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    results.forEach(result => {
        const div = document.createElement('div');
        div.textContent = result;
        div.classList.add('result-item');
        resultsContainer.appendChild(div);
    });
}