async function getCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    return countries
}

async function search() {
    const countries = await getCountries();
    const searchTerm = document.getElementById("searchInput").value.toLowerCase();
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(searchTerm)
    );

    displayResults(filteredCountries);

}

function displayResults(results) {
    const searchResults = document.getElementById("searchResults");
    searchResults.innerHTML = "";

    results.forEach(result => {
        const li = document.createElement("li");
        li.textContent = `${result.name.common}, ${result.capital}`;
        searchResults.appendChild(li);
    });
}