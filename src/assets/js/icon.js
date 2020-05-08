!(function(l) {
  let e,
    d =
      '<svg><symbol id="icon-login_icon_close" viewBox="0 0 1024 1024"><path d="M584.3968 512l322.2016-322.2016a51.1488 51.1488 0 1 0-72.3968-72.3968L512 439.6032 189.7984 117.4016a51.1488 51.1488 0 1 0-72.3968 72.3968L439.6032 512l-322.2016 322.2016a51.2 51.2 0 0 0 72.3968 72.3968L512 584.3968l322.2016 322.2016a51.2 51.2 0 0 0 72.3968-72.3968L584.3968 512z"  ></path></symbol><symbol id="icon-menu1" viewBox="0 0 1024 1024"><path d="M1024 133.12c0 16.965632-13.754368 30.72-30.72 30.72H30.72c-16.965632 0-30.72-13.754368-30.72-30.72 0-16.965632 13.754368-30.72 30.72-30.72h962.56c16.965632 0 30.72 13.754368 30.72 30.72zM1024 512c0 16.965632-13.754368 30.72-30.72 30.72H30.72c-16.965632 0-30.72-13.754368-30.72-30.72 0-16.965632 13.754368-30.72 30.72-30.72h962.56c16.965632 0 30.72 13.754368 30.72 30.72zM1024 890.88c0 16.965632-13.754368 30.72-30.72 30.72H30.72c-16.965632 0-30.72-13.754368-30.72-30.72 0-16.965632 13.754368-30.72 30.72-30.72h962.56c16.965632 0 30.72 13.754368 30.72 30.72z"  ></path></symbol></svg>',
    t = (e = document.getElementsByTagName('script'))[e.length - 1].getAttribute('data-injectcss');
  if (t && !l.__iconfont__svg__cssinject__) {
    l.__iconfont__svg__cssinject__ = !0;
    try {
      document.write(
        '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>'
      );
    } catch (e) {
      console && console.log(e);
    }
  }
  !(function(e) {
    if (document.addEventListener) {
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) setTimeout(e, 0);
      else {
        // eslint-disable-next-line no-var
        var t = function() {
          document.removeEventListener('DOMContentLoaded', t, !1), e();
        };
        document.addEventListener('DOMContentLoaded', t, !1);
      }
    } else {
      document.attachEvent &&
        ((o = e),
        (i = l.document),
        (c = !1),
        (d = function() {
          try {
            i.documentElement.doScroll('left');
          } catch (e) {
            return void setTimeout(d, 50);
          }
          n();
        })(),
        (i.onreadystatechange = function() {
          'complete' == i.readyState && ((i.onreadystatechange = null), n());
        }));
    }
    function n() {
      c || ((c = !0), o());
    }
    let o, i, c, d;
  })(function() {
    let e, t, n, o, i, c;
    ((e = document.createElement('div')).innerHTML = d),
      (d = null),
      (t = e.getElementsByTagName('svg')[0]) &&
        (t.setAttribute('aria-hidden', 'true'),
        (t.style.position = 'absolute'),
        (t.style.width = 0),
        (t.style.height = 0),
        (t.style.overflow = 'hidden'),
        (n = t),
        (o = document.body).firstChild
          ? ((i = n), (c = o.firstChild).parentNode.insertBefore(i, c))
          : o.appendChild(n));
  });
})(window);
