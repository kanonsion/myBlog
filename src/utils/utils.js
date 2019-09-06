export function dateFormat(cellValue) {
  let date = new Date(cellValue);
  let year = addZero(date.getFullYear())
  let month = addZero(date.getMonth()+1)
  let day = addZero(date.getDate())
  let hours = addZero(date.getHours())
  let minutes = addZero(date.getMinutes())
  let seconds = addZero(date.getSeconds())
  return `${year}/${month}/${day}  ${hours}:${minutes}:${seconds}`
}

function addZero(num){
  return num.toString().length > 1 ? num : `0${num}`
}