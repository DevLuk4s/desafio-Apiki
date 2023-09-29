const cardTittle = document.querySelector('.card__tittle');

const Fetchapi = async () => {
  const response = await fetch('https://blog.apiki.com/wp-json/wp/v2/');
  const data = await response.json();
  return data;
};

const renderApi = async () => {
  const data = Fetchapi();
  console.log(data);

  cardTittle.innerHTML = data.tittle;
};

renderApi();

export default Fetchapi;
