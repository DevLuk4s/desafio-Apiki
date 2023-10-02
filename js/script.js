const card__tittle = document.querySelector(".card__tittle")
const card__paragrafo = document.querySelector(".card__paragrafo")
const card__link = document.querySelector(".card__link")
const card__image = document.querySelector(".card__image")

const fatchAPI = async () => {
    const res = await fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518")
    const data = await res.json()
    console.log(data)
    card__image.src =
}

fatchAPI()

// data[0]._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url