const api = 'https://pixabay.com/api/?';
const apiKey = '19598883-8e8293d515495519269109cc8';

export default function findImages(query, page) {
  const url = `${api}q=${query}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url)
    .then(res => {
      return res.json();
    })
    .then(({ hits, totalHits }) => {
      if (hits.length === 0) {
        return Promise.reject(
          new Error(`Не найдено изображений по запросу ${query}`),
        );
      }

      return { hits, totalHits };
    });
}
