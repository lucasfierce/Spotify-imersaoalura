const artists = [
    { "id": 1, "name": "Foo Fighters", "genre": "Rock", "urlImg": "https://i.scdn.co/image/ab67616100005174c884df599abc793c116cdf15" },
    { "id": 2, "name": "Michael Jackson", "genre": "Pop", "urlImg": "https://i.scdn.co/image/ab676161000051740e08ea2c4d6789fbf5cbe0aa" },
    { "id": 3, "name": "Emicida", "genre": "Hip Hop", "urlImg": "https://i.scdn.co/image/ab67616100005174908b4b4bc90e1518b68b4068" },
    { "id": 4, "name": "Chitãozinho e Xororó", "genre": "Sertanejo", "urlImg": "https://i.scdn.co/image/ab676161000051744606c59411c57f7b49588be4" },
    { "id": 5, "name": "Mc Coringa", "genre": "Funk", "urlImg": "https://i.scdn.co/image/ab67616d00001e02fe8f6dd361ad0f12b88c7f56" },
    { "id": 6, "name": "Arlindo Cruz", "genre": "Samba", "urlImg": "https://i.scdn.co/image/ab67616100005174181873f93056642d7b340839" },
    { "id": 7, "name": "Caetano Veloso", "genre": "MPB", "urlImg": "https://i.scdn.co/image/ab67616100005174e98de50f36cf1aa4bf047757" },
    { "id": 8, "name": "Beyoncé", "genre": "R&B", "urlImg": "https://i.scdn.co/image/ab6761610000e5eb12e3f20d05a8d6cfde988715"},
    { "id": 9, "name": "Marina", "genre": "Indie", "urlImg": "https://i.scdn.co/image/ab67616100005174c28e02e9bb9bf19358669fef"}
  ];

const searchInput = document.getElementById("search__input");
const resultArtist = document.getElementById("result__artist");
const resultPlaylist = document.getElementById("result__playlists");

/*function requestApi (searchTerm) {
    const url = `http://localhost:3000/artists?name=${searchTerm}`;
    fetch(url)
        .then((Response) => Response.json())
        .then((result) => displayResults(result))
}*/

document.addEventListener('input', () => {
    const searchTerm = searchInput.value;

    if(searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    } else {
        const filteredArtists = artists.filter(artist => {

            const searchTermLowerCase = searchTerm.toLowerCase();
            const artistNameLowerCase = artist.name.toLowerCase();
        
            return artistNameLowerCase.includes(searchTermLowerCase);
          })

          function displayResults(filteredArtists) {
            resultPlaylist.classList.add('hidden');
            const artistName = document.getElementById('artist__name');
            const artistImage = document.getElementById('artist__img');
        
            filteredArtists.forEach((element) => {
                artistName.innerText = element.name;
                artistImage.src = element.urlImg;
            })
        
            resultArtist.classList.remove('hidden');
        }
        
        displayResults(filteredArtists);

        console.log(filteredArtists);
    }

    //requestApi(searchTerm);
})