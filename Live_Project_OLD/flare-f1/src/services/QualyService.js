const qualyURL = "http://localhost:8080/qualy"

const QualyService = {

getAllQualy () {
    return fetch(qualyURL)
        .then((res) => res.json())
},
}


export default QualyService;
