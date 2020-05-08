export function getImg(content) {
  let reg = new RegExp(/src="([^"]*)"/g);
  let arr = reg.exec(content);
  return arr ? arr[1] : randomImg();
}

export function getDate(content) {
  const date = new Date(content);
  const year = date.getFullYear();
  const month = toZero(date.getMonth() + 1);
  const day = toZero(date.getDate());
  return `${year}-${month}-${day}`;
}

function toZero(content) {
  return content < 10 ? '0' + content : content;
}

const imgs = [
  'https://liu-lang.top/content/images/size/w600/2019/11/jakub-sejkora-utqJcneoFjo-unsplash-1.jpg',
  'https://tva4.sinaimg.cn/large/006yt1Omly1g8l83s2274j30uk0oi1kx.jpg',
  'https://tva1.sinaimg.cn/large/006yt1Omly1g8l864o3fzj311y0ge4ji.jpg',
  'https://tva1.sinaimg.cn/large/006yt1Omly1g8l86aosk0j31p40xftjw.jpg',
  'https://tva3.sinaimg.cn/large/006yt1Omly1g8t9tucsuaj32pg1ww1l4.jpg',
  'https://tvax3.sinaimg.cn/large/006yt1Omly1g8t9vjy8tvj30xc0nke81.jpg'
];

function randomImg() {
  return imgs[Math.floor(Math.random() * 6)];
}
