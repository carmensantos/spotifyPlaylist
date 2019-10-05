let userToken; 
let expTime;
const clientID = '';
const redirectURI = '';


module.exports = {

    getAccessToken: function() {
        const pageLoc = window.location.href;

        if (userToken) {
            console.log(userToken)
            return userToken;
        };
        
        const userTokenMatch = pageLoc.match(/access_token=([^&]*)/);
        const expTimeMatch = pageLoc.match(/expires_in=([^&]*)/);
        
        if (userTokenMatch && expTimeMatch) {
            userToken = userTokenMatch[1];
            expTime = Number(expTimeMatch[1]);
            window.setTimeout(() => userToken = '', expTime * 1000);
            window.history.pushState('Access Token', null, '/');
            return userToken;
        } else {
            const accessUrl = 'https://accounts.spotify.com/authorize?client_id=' + clientID + '&response_type=token&scope=playlist-modify-public&redirect_uri=' + redirectURI;
            window.location = accessUrl;
        }
    },

    spotifySearch(term) {
        const accessToken = module.exports.getAccessToken();
        return fetch('https://api.spotify.com/v1/search?type=track&q=' + term, 
            { headers: {
                Authorization: 'Bearer ' + accessToken
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            } 

            return jsonResponse.tracks.items.map(track => ({
                id: track.id, 
                name: track.name,
                artists: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        });
    },

    spotifySave(playlistName, tracks) {
        console.log(tracks)
        if (!playlistName || !tracks) {
            return;
        }

        const accessToken_ = module.exports.getAccessToken();
        const headers = { Authorization: 'Bearer ' + accessToken_}
        let userId;

        return fetch('https://api.spotify.com/v1/me', { headers: headers }
            ).then(response => response.json()
            ).then(jsonResponse => {
                userId = jsonResponse.id;

                return fetch('https://api.spotify.com/v1/users/' + userId + '/playlists', 
                {
                    headers: headers,
                    method: 'POST',
                    body: JSON.stringify({ name: playlistName })
                }).then(response => response.json()
                ).then(jsonResponse => {
                    const playlistId = jsonResponse.id;
                    return fetch('https://api.spotify.com/v1/playlists/' + playlistId + '/tracks',
                    {
                        headers: headers,
                        method: 'POST',
                        body: JSON.stringify({ uris: tracks })
                    });
                })
            });

        
    }
}

