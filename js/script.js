const card = document.querySelector(".card");
const artigo = document.querySelector(".artigo");

const fetchAPI = async () => {
  const res = await fetch(
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518"
  );
  const data = await res.json();
  return data;
};

const criarBlog = async () => {
  const data = await fetchAPI();
  console.log(data);
  data.map((el, id) => {
    const container__texto = document.createElement("div");
    container__texto.classList.add("texto");

    const container__image = document.createElement("div");
    container__image.classList.add("image");

    const container = document.createElement("div");
    container.classList.add("container");

    const card__image = document.createElement("img");
    card__image.classList.add("card__image");
    card__image.src =
      data[id]._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium.source_url;

    const card__titulo = document.createElement("h1");
    card__titulo.classList.add("card__titulo");
    card__titulo.innerHTML = data[id].title.rendered;

    const card__paragrafo = document.createElement("p");
    card__paragrafo.classList.add("card__paragrafo");
    card__paragrafo.innerHTML = data[id].excerpt.rendered;

    const card__data = document.createElement("span");
    card__data.classList.add("card__data");
    card__data.innerHTML = data[id].date;

    const card__artigo = document.createElement("a");
    card__artigo.classList.add("card__artigo");
    card__artigo.innerHTML = "Ler artigo";
    card__artigo.addEventListener("click", function () {
      const articleId = id;
      criarArtigo(articleId);
      window.location.href = "../artigo.html";
    });

    container__image.appendChild(card__image);
    container__texto.appendChild(card__titulo);
    container__texto.appendChild(card__data);
    container__texto.appendChild(card__paragrafo);
    container__texto.appendChild(card__artigo);
    container.appendChild(container__image);
    container.appendChild(container__texto);
    card.appendChild(container);
  });
};

criarBlog();

const criarArtigo = async (id) => {
  console.log("ID do artigo:", id);

  const data = await fetchAPI();
  console.log("Dados do artigo:", data);

  const container = document.createElement("div");
  container.classList.add("container");

  const container__artigo = document.createElement("div");
  container__artigo.classList.add("texto");

  const artigo__texto = document.createElement("div");
  artigo__texto.classList.add("artigo__texto");
  artigo__texto.innerHTML = data[id].content.rendered;

  container__artigo.appendChild(artigo__texto);
  container.appendChild(container__artigo);
  artigo.appendChild(container);
};

const leia = async () => {
  const res = await fetch(
    "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=2"
  );
  const data = await res.json();
  data.map((el, id) => {
    const container__texto = document.createElement("div");
    container__texto.classList.add("texto");

    const container__image = document.createElement("div");
    container__image.classList.add("image");

    const container = document.createElement("div");
    container.classList.add("container");

    const card__image = document.createElement("img");
    card__image.classList.add("card__image");
    card__image.src =
      data[id]._embedded[
        "wp:featuredmedia"
      ][0].media_details.sizes.medium.source_url;

    const card__titulo = document.createElement("h1");
    card__titulo.classList.add("card__titulo");
    card__titulo.innerHTML = data[id].title.rendered;

    const card__paragrafo = document.createElement("p");
    card__paragrafo.classList.add("card__paragrafo");
    card__paragrafo.innerHTML = data[id].excerpt.rendered;

    const card__data = document.createElement("span");
    card__data.classList.add("card__data");
    card__data.innerHTML = data[id].date;

    const card__artigo = document.createElement("a");
    card__artigo.classList.add("card__artigo");
    card__artigo.innerHTML = "Ler artigo";
    card__artigo.addEventListener("click", function () {
      window.location.href = "../artigo.html";
    });

    container__image.appendChild(card__image);
    container__texto.appendChild(card__titulo);
    container__texto.appendChild(card__data);
    container__texto.appendChild(card__paragrafo);
    container__texto.appendChild(card__artigo);
    container.appendChild(container__image);
    container.appendChild(container__texto);
    card.appendChild(container);
  });
};
