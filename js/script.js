const card = document.querySelector(".container");

const fatchAPI = async () => {
  const res = await fetch(
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"
  );
  const data = await res.json();
  console.log(data);
  data.map((el, chave) => {
    const container__texto = document.createElement("div");
    container__texto.classList.add("texto");

    const container__image = document.createElement("div");
    container__texto.classList.add("image");

    const card__image = document.createElement("img");
    card__image.classList.add("card__image");
    card__image.src =
      data[chave]._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium.source_url;

    const card__tittle = document.createElement("h1");
    card__tittle.classList.add("card__titulo");
    card__tittle.innerHTML = data[chave].title.rendered;

    container__image.appendChild(card__image);
    container__texto.appendChild(container__texto);
    card.appendChild(container__image);
    card.appendChild(container__texto);
  });
};

fatchAPI();
