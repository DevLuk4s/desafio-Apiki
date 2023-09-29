const Fetchapi = async () => {
  const repose = await fetch('https://blog.apiki.com/wp-json/wp/v2/');
  const data = await repose.json();
  console.log(data);
};

Fetchapi();

export default Fetchapi;
