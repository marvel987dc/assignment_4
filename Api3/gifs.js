const searchButton = document.querySelector('#searchButton')
const searchTerm = document.querySelector('#searchInput').value.toLowerCase();
const gifDiv = document.querySelector('.card-grid')

const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=cl3HYLHcqI0wRGywk4AMx57Kzyx1enuV&q=${category}&limit=10`
    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    return gifs
}

const onLoad = async () => {
    gifDiv.innerHTML = ''
    const searchTerm = document.querySelector('#searchInput').value.toLowerCase();
    console.log(`Entro con ${searchTerm}`)
    const gifs = await getGifs(searchTerm)
    gifs.forEach(gif => {
        const div = document.createElement('div')
        const img = document.createElement('img')
        const p = document.createElement('p')
        div.classList = 'gif-card'
        img.src = gif.url
        img.width = '500'
        p.innerText = gif.title
        div.appendChild(img)
        div.appendChild(p)
        gifDiv.appendChild(div)
    })

}

searchButton.addEventListener('click', () => {
    onLoad()
})


