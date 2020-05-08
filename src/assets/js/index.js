import axios from './axios';

export function getAritice(params) {
  return axios.post('/api/aritice/list', params);
}

export function getTags() {
  return axios.get('/api/tag');
}

export function getAriticeMore(id) {
  return axios.get(`/api/aritice/${id}`);
}

export function getClassification(id) {
  return axios.get(`/api/aritice/${id}`);
}

export function setComment(params) {
  return axios.post('/api/comment/save', params);
}

export function getClassify(tag, params) {
  console.log(params);
  return axios.post(`/api/tag/classify/${tag}`, params);
}
