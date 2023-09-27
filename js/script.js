let card__img = document.querySelector("#card__img")
let card__texto = document.querySelector("#card__texto")
let card_paragrafo = document.querySelector("#card__paragrafo")

const url = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"

async function api() {
    const reponse = await fetch(url)
    // console.log(reponse)

    const data = await reponse.json()
    console.log(data)

    data.map((posts) => {
        let card__img = document.querySelector("#card__img")
        let card__texto = document.querySelector("#card__texto")
        let card_paragrafo = document.querySelector("#card__paragrafo")

        card__texto.innerHTML = image.tittle
    })

}

api()