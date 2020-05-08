export function debounce(fn, wait) {
  let timer = null;
  return function() {
    console.log(timer);
    if (timer != null) clearTimeout(timer);
    timer = setTimeout(() => {
      fn;
    }, wait);
  };
}

export function throttle(fn, wait) {
  let prev = Date.now();
  return function() {
    let now = Date.now();
    if (now - prev >= wait) {
      fn;
      prev = Date.now();
    }
  };
}
