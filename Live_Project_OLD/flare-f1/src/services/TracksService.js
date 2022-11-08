const tracksURL = "http://localhost:8080/circuits"

const TracksService = {

getAllTracks () {
    return fetch(tracksURL)
        .then(res => res.json())
}

}

export default TracksService;