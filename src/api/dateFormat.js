//时间格式化
export default function dateFormat(cellValue) {
  var date = new Date(cellValue);
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  return (
    year +
    "/" +
    month +
    "/" +
    day +
    "/" +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds
  );
}