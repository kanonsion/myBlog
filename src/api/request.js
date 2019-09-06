import axios from './index'


export function getAritice(){
  return axios.get('/api/aritice')
}

export function getTags(){
  return axios.get('/api/tag')
}


export function getAriticeMore(id) {
  return axios.get(`/api/aritice/${id}`)
}


export function getClassification(id){
  return axios.get(`/api/aritice/Classification/${id}`)
}