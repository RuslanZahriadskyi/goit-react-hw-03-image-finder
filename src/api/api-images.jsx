function findImages(searchQuery) {
  const apiKey = '19598883-8e8293d515495519269109cc8';
  const url = `https://pixabay.com/api/?q=${searchQuery}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url).then(res => {
    if (res.ok) {
      return res.json;
    }

    return Promise.reject(
      new Error(`Не найдено изображений по запросу ${searchQuery}`),
    );
  });
}

export default findImages;
