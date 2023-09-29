const card__image = document.querySelector(".card__image")
const card__tittle = document.querySelector(".card__tittle")
const card_paragrafo = document.querySelector(".card__paragrafo")

const api = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"

const fetchApi = async () => {
    const respose = await fetch(api)
    const data = await respose.json()
    console.log(data)

    // card__image.src = data.
    // card__tittle.innerHTML = data[0].title.rendered
    // card_paragrafo.innerHTML = data[0].content.rendered
}

fetchApi()