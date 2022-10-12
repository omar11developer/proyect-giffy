

const apikey = process.env.REACT_APP_API_KEY;

export default function getGifts ({keyword = 'morty'} = {}) {

    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
    return fetch(apiURL)
    .then(res => res.json())
    .then(response => {
      const {data} = response
      const gifs = data.map(image => {
        const {images, title, id} = image
        const {url} = images.original
        return {title, id , url}
    })
      return gifs
    })
}