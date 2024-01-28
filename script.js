
const searchInput = document.getElementById("search__input");
const resultArtist = document.getElementById("result__artist");
const resultPlaylist = document.getElementById("result__playlists");

function requestApi (searchTerm) {
    const url = `http://localhost:3000/artists?name=${searchTerm}`;
    fetch(url)
        .then((Response) => Response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    console.log(result)
    resultPlaylist.classList.add('hidden');
    const artistName = document.getElementById('artist__name');
    const artistImage = document.getElementById('artist__img');

    result.forEach((element) => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    })

    resultArtist.classList.remove('hidden');
}


document.addEventListener('input', () => {
    const searchTerm = searchInput.value;

    if(searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
})