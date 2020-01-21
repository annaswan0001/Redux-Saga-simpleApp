import fetchNews from './sagas'
import {takeLatest } from 'redux-saga/effects';

export default function* rootSaga() {
    yield takeLatest('GET_NEWS', fetchNews)
  }