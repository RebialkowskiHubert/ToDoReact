export const get = url =>
    new Promise(
        (resolve, reject) => {
            fetch(url)
                .then(resp => resp.json())
                .then(json => resolve(json));
        }
    );