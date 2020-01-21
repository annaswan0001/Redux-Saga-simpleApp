import { put, call } from "redux-saga/effects";

// const getNews = path =>
//   fetch(path)
//     .then(response => response.json())
//     .then(news => news.articles)
//     .catch(error => {
//       throw error;
//     });


async function getNews(path) {
    try {
        let response = await fetch(path);
        let result = await response.json();
        let news = await result.articles;
        return news
    } catch(err) {
        throw err;
    }
  }

export default function* fetchNews() {
  try {
    const news = yield call(getNews,
      "https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc"
    );
    yield put({ type: "NEWS_RECEIVED", json: news });
  } catch (error) {
    console.log(error)
    yield put({ type: "NEWS_REQUEST_FAILED", error: error });
  }
}
