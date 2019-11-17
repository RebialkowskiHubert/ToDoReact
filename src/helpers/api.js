export const get = url =>
    new Promise(
        (resolve, reject) => {
            fetch(url)
                .then(resp => resp.json())
                .then(json => resolve(json));
        }
    );

export const post = (url, body) => 
    new Promise(
        (resolve, reject) => apiCall(url, 'POST', body, resolve, reject)
    );

    
const apiCall = (url, method, body, resolve, reject) => {
    fetch(url, {
        methdod: method,
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify(body)
    }).then(resp => {
        if(resp.ok) {
            resp.json().then(json => resolve(json));
        }
        else {
            reject(resp);
        }
    });
}