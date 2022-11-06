import React from 'react';

const tracksURL = "https://f1.sportmonks.com/api/v1.0/tracks?api_token=lFI3NTv1Il1180T1qLxoLkbApazvo9q6S0NLOU3UXz1nYwiidWFUgsc5Ull0"


export const getAllTracks = () => {
    return fetch(tracksURL)
        .then(res => res.json())
}

export default getAllTracks;