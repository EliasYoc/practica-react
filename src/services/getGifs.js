const apiKey = "E8KIYzxPDiknto5CRSHlE0rfvq2gH8WR";

export default function getGifs({ keyWord = "meme" }) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyWord}&limit=25&offset=0&rating=g&lang=en`;

  return fetch(url)
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const { data } = json;
      const gifsArr = data.map((gif) => {
        const { title, id, images } = gif;
        const { url } = images.downsized_medium;
        return { title, id, url };
      });
      return gifsArr;
    });
}
