async function logCountries() {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    return countries
} 

async function writeHtml() {
    const countries = await logCountries();
    let htmlString = '';
    for (let i = 0; i < countries.length; i++) {
        htmlString += `<p>${countries[i].name.common}</p>`;
    }
    document.getElementById('result').innerHTML = htmlString;
}
writeHtml();