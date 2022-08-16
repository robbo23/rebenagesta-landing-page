/**
 * Skipped minification because the original files appears to be already minified.
 * Original file: /npm/keen-slider@6.7.0/keen-slider.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!(function (n, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((n = 'undefined' != typeof globalThis ? globalThis : n || self).KeenSlider = t());
})(this, function () {
  'use strict';
  var n = function () {
    return (
      (n =
        Object.assign ||
        function (n) {
          for (var t, i = 1, e = arguments.length; i < e; i++)
            for (var r in (t = arguments[i]))
              Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
          return n;
        }),
      n.apply(this, arguments)
    );
  };
  function t(n, t, i) {
    if (i || 2 === arguments.length)
      for (var e, r = 0, o = t.length; r < o; r++)
        (!e && r in t) || (e || (e = Array.prototype.slice.call(t, 0, r)), (e[r] = t[r]));
    return n.concat(e || Array.prototype.slice.call(t));
  }
  function i(n) {
    return Array.prototype.slice.call(n);
  }
  function e(n, t) {
    var i = Math.floor(n);
    return i === t || i + 1 === t ? n : t;
  }
  function r() {
    return Date.now();
  }
  function o(n, t, i) {
    if (((t = 'data-keen-slider-' + t), null === i)) return n.removeAttribute(t);
    n.setAttribute(t, i || '');
  }
  function a(n, t) {
    return (
      (t = t || document),
      'function' == typeof n && (n = n(t)),
      Array.isArray(n)
        ? n
        : 'string' == typeof n
        ? i(t.querySelectorAll(n))
        : n instanceof HTMLElement
        ? [n]
        : n instanceof NodeList
        ? i(n)
        : []
    );
  }
  function u(n) {
    n.raw && (n = n.raw), n.cancelable && !n.defaultPrevented && n.preventDefault();
  }
  function s(n) {
    n.raw && (n = n.raw), n.stopPropagation && n.stopPropagation();
  }
  function c() {
    var n = [];
    return {
      add: function (t, i, e, r) {
        t.addListener ? t.addListener(e) : t.addEventListener(i, e, r),
          n.push([t, i, e, r]);
      },
      input: function (n, t, i, e) {
        this.add(
          n,
          t,
          (function (n) {
            return function (t) {
              t.nativeEvent && (t = t.nativeEvent);
              var i = t.changedTouches || [],
                e = t.targetTouches || [],
                r = t.detail && t.detail.x ? t.detail : null;
              return n({
                id: r
                  ? r.identifier
                    ? r.identifier
                    : 'i'
                  : e[0]
                  ? e[0]
                    ? e[0].identifier
                    : 'e'
                  : 'd',
                idChanged: r
                  ? r.identifier
                    ? r.identifier
                    : 'i'
                  : i[0]
                  ? i[0]
                    ? i[0].identifier
                    : 'e'
                  : 'd',
                raw: t,
                x: r && r.x ? r.x : e[0] ? e[0].screenX : r ? r.x : t.pageX,
                y: r && r.y ? r.y : e[0] ? e[0].screenY : r ? r.y : t.pageY
              });
            };
          })(i),
          e
        );
      },
      purge: function () {
        n.forEach(function (n) {
          n[0].removeListener
            ? n[0].removeListener(n[2])
            : n[0].removeEventListener(n[1], n[2], n[3]);
        }),
          (n = []);
      }
    };
  }
  function d(n, t, i) {
    return Math.min(Math.max(n, t), i);
  }
  function l(n) {
    return (n > 0 ? 1 : 0) - (n < 0 ? 1 : 0) || +n;
  }
  function f(n) {
    var t = n.getBoundingClientRect();
    return { height: e(t.height, n.offsetHeight), width: e(t.width, n.offsetWidth) };
  }
  function p(n, t, i, e) {
    var r = n && n[t];
    return null == r ? i : e && 'function' == typeof r ? r() : r;
  }
  function v(n) {
    return Math.round(1e6 * n) / 1e6;
  }
  function h(n) {
    var t, i, e, r, o, a;
    function u(t) {
      a || (a = t), s(!0);
      var o = t - a;
      o > e && (o = e);
      var l = r[i];
      if (l[3] < o) return i++, u(t);
      var f = l[2],
        p = l[4],
        v = l[0],
        h = l[1] * (0, l[5])(0 === p ? 1 : (o - f) / p);
      if ((h && n.track.to(v + h), o < e)) return d();
      (a = null), s(!1), c(null), n.emit('animationEnded');
    }
    function s(n) {
      t.active = n;
    }
    function c(n) {
      t.targetIdx = n;
    }
    function d() {
      var n;
      (n = u), (o = window.requestAnimationFrame(n));
    }
    function l() {
      var t;
      (t = o),
        window.cancelAnimationFrame(t),
        s(!1),
        c(null),
        a && n.emit('animationStopped'),
        (a = null);
    }
    return (t = {
      active: !1,
      start: function (t) {
        if ((l(), n.track.details)) {
          var o = 0,
            a = n.track.details.position;
          (i = 0),
            (e = 0),
            (r = t.map(function (n) {
              var t,
                i = a,
                r = null !== (t = n.earlyExit) && void 0 !== t ? t : n.duration,
                u = n.easing,
                s = n.distance * u(r / n.duration) || 0;
              a += s;
              var c = e;
              return (e += r), (o += s), [i, n.distance, c, e, n.duration, u];
            })),
            c(n.track.distToIdx(o)),
            d(),
            n.emit('animationStarted');
        }
      },
      stop: l,
      targetIdx: null
    });
  }
  function m(n) {
    var i,
      e,
      o,
      a,
      u,
      s,
      c,
      f,
      h,
      m,
      g,
      b,
      x,
      y,
      k = 1 / 0,
      w = [],
      M = null,
      T = 0;
    function C(n) {
      _(T + n);
    }
    function E(n) {
      var t = z(T + n).abs;
      return D(t) ? t : null;
    }
    function z(n) {
      var i = Math.floor(Math.abs(v(n / e))),
        r = v(((n % e) + e) % e);
      r === e && (r = 0);
      var o = l(n),
        a = c.indexOf(
          t([], c, !0).reduce(function (n, t) {
            return Math.abs(t - r) < Math.abs(n - r) ? t : n;
          })
        ),
        u = a;
      return (
        o < 0 && i++,
        a === s && ((u = 0), (i += o > 0 ? 1 : -1)),
        { abs: u + i * s * o, origin: a, rel: u }
      );
    }
    function I(n, t, i) {
      var e;
      if (t || !S()) return A(n, i);
      if (!D(n)) return null;
      var r = z(null != i ? i : T),
        o = r.abs,
        a = n - r.rel,
        u = o + a;
      e = A(u);
      var c = A(u - s * l(a));
      return ((null !== c && Math.abs(c) < Math.abs(e)) || null === e) && (e = c), v(e);
    }
    function A(n, t) {
      if ((null == t && (t = v(T)), !D(n) || null === n)) return null;
      n = Math.round(n);
      var i = z(t),
        r = i.abs,
        o = i.rel,
        a = i.origin,
        u = O(n),
        d = ((t % e) + e) % e,
        l = c[a],
        f = Math.floor((n - (r - o)) / s) * e;
      return v(l - d - l + c[u] + f + (a === s ? e : 0));
    }
    function D(n) {
      return L(n) === n;
    }
    function L(n) {
      return d(n, h, m);
    }
    function S() {
      return a.loop;
    }
    function O(n) {
      return ((n % s) + s) % s;
    }
    function _(t) {
      var i;
      (i = t - T),
        w.push({ distance: i, timestamp: r() }),
        w.length > 6 && (w = w.slice(-6)),
        (T = v(t));
      var e = H().abs;
      if (e !== M) {
        var o = null !== M;
        (M = e), o && n.emit('slideChanged');
      }
    }
    function H(t) {
      var r = t
        ? null
        : (function () {
            if (s) {
              var n = S(),
                t = n ? ((T % e) + e) % e : T,
                i = (n ? T % e : T) - u[0][2],
                r = 0 - (i < 0 && n ? e - Math.abs(i) : i),
                c = 0,
                d = z(T),
                f = d.abs,
                p = d.rel,
                v = u[p][2],
                k = u.map(function (t, i) {
                  var o = r + c;
                  (o < 0 - t[0] || o > 1) &&
                    (o += (Math.abs(o) > e - 1 && n ? e : 0) * l(-o));
                  var u = i - p,
                    d = l(u),
                    h = u + f;
                  n &&
                    (-1 === d && o > v && (h += s),
                    1 === d && o < v && (h -= s),
                    null !== g && h < g && (o += e),
                    null !== b && h > b && (o -= e));
                  var m = o + t[0] + t[1],
                    x = Math.max(
                      o >= 0 && m <= 1
                        ? 1
                        : m < 0 || o > 1
                        ? 0
                        : o < 0
                        ? Math.min(1, (t[0] + o) / t[0])
                        : (1 - o) / t[0],
                      0
                    );
                  return (
                    (c += t[0] + t[1]),
                    {
                      abs: h,
                      distance: a.rtl ? -1 * o + 1 - t[0] : o,
                      portion: x,
                      size: t[0]
                    }
                  );
                });
              return (
                (f = L(f)),
                (p = O(f)),
                {
                  abs: L(f),
                  length: o,
                  max: y,
                  maxIdx: m,
                  min: x,
                  minIdx: h,
                  position: T,
                  progress: n ? t / e : T / o,
                  rel: p,
                  slides: k,
                  slidesLength: e
                }
              );
            }
          })();
      return (i.details = r), n.emit('detailsChanged'), r;
    }
    return (i = {
      absToRel: O,
      add: C,
      details: null,
      distToIdx: E,
      idxToDist: I,
      init: function (t) {
        if (
          ((function () {
            if (
              ((a = n.options),
              (u = (a.trackConfig || []).map(function (n) {
                return [p(n, 'size', 1), p(n, 'spacing', 0), p(n, 'origin', 0)];
              })),
              (s = u.length))
            ) {
              e = v(
                u.reduce(function (n, t) {
                  return n + t[0] + t[1];
                }, 0)
              );
              var t,
                i = s - 1;
              (o = v(e + u[0][2] - u[i][0] - u[i][2] - u[i][1])),
                (c = u.reduce(function (n, i) {
                  if (!n) return [0];
                  var e = u[n.length - 1],
                    r = n[n.length - 1] + (e[0] + e[2]) + e[1];
                  return (
                    (r -= i[2]),
                    n[n.length - 1] > r && (r = n[n.length - 1]),
                    (r = v(r)),
                    n.push(r),
                    (!t || t < r) && (f = n.length - 1),
                    (t = r),
                    n
                  );
                }, null)),
                0 === o && (f = 0),
                c.push(v(e));
            }
          })(),
          !s)
        )
          return H(!0);
        var i;
        !(function () {
          var t = n.options.range,
            i = n.options.loop;
          (g = h = i ? p(i, 'min', -1 / 0) : 0), (b = m = i ? p(i, 'max', k) : f);
          var e = p(t, 'min', null),
            r = p(t, 'max', null);
          e && (h = e),
            r && (m = r),
            (x = h === -1 / 0 ? h : n.track.idxToDist(h || 0, !0, 0)),
            (y = m === k ? m : I(m, !0, 0)),
            null === r && (b = m),
            p(t, 'align', !1) &&
              m !== k &&
              0 === u[O(m)][2] &&
              ((y -= 1 - u[O(m)][0]), (m = E(y - T))),
            (x = v(x)),
            (y = v(y));
        })(),
          (i = t),
          Number(i) === i ? C(A(L(t))) : H();
      },
      to: _,
      velocity: function () {
        var n = r(),
          t = w.reduce(
            function (t, i) {
              var e = i.distance,
                r = i.timestamp;
              return (
                n - r > 200 ||
                  (l(e) !== l(t.distance) &&
                    t.distance &&
                    (t = { distance: 0, lastTimestamp: 0, time: 0 }),
                  t.time && (t.distance += e),
                  t.lastTimestamp && (t.time += r - t.lastTimestamp),
                  (t.lastTimestamp = r)),
                t
              );
            },
            { distance: 0, lastTimestamp: 0, time: 0 }
          );
        return t.distance / t.time || 0;
      }
    });
  }
  function g(n) {
    var t, i, e, r, o, a, u;
    function s(n) {
      return 2 * n;
    }
    function c(n) {
      return d(n, a, u);
    }
    function f(n) {
      return 1 - Math.pow(1 - n, 3);
    }
    function p() {
      m();
      var t = 'free-snap' === n.options.mode,
        i = n.track,
        a = i.velocity();
      e = l(a);
      var u = n.track.details,
        d = [];
      if (a || !t) {
        var p = v(a),
          h = p.dist,
          g = p.dur;
        if (((g = s(g)), (h *= e), t)) {
          var b = i.idxToDist(i.distToIdx(h), !0);
          b && (h = b);
        }
        d.push({ distance: h, duration: g, easing: f });
        var x = u.position,
          y = x + h;
        if (y < r || y > o) {
          var k = y < r ? r - x : o - x,
            w = 0,
            M = a;
          if (l(k) === e) {
            var T = Math.min(Math.abs(k) / Math.abs(h), 1),
              C =
                (function (n) {
                  return 1 - Math.pow(1 - n, 1 / 3);
                })(T) * g;
            (d[0].earlyExit = C), (M = a * (1 - T));
          } else (d[0].earlyExit = 0), (w += k);
          var E = v(M, 100),
            z = E.dist * e;
          n.options.rubberband &&
            (d.push({ distance: z, duration: s(E.dur), easing: f }),
            d.push({ distance: -z + w, duration: 500, easing: f }));
        }
        n.animator.start(d);
      } else
        n.moveToIdx(c(u.abs), !0, {
          duration: 500,
          easing: function (n) {
            return 1 + --n * n * n * n * n;
          }
        });
    }
    function v(n, t) {
      void 0 === t && (t = 1e3);
      var i = 147e-9 + (n = Math.abs(n)) / t;
      return { dist: Math.pow(n, 2) / i, dur: n / i };
    }
    function h() {
      var t = n.track.details;
      t && ((r = t.min), (o = t.max), (a = t.minIdx), (u = t.maxIdx));
    }
    function m() {
      n.animator.stop();
    }
    n.on('updated', h),
      n.on('optionsChanged', h),
      n.on('created', h),
      n.on('dragStarted', function () {
        m(), (t = i = n.track.details.abs);
      }),
      n.on('dragEnded', function () {
        var e = n.options.mode;
        'snap' === e &&
          (function () {
            var e = n.track,
              a = n.track.details,
              u = a.position,
              s = l(e.velocity());
            (u > o || u < r) && (s = 0);
            var d = t + s;
            0 === a.slides[e.absToRel(d)].portion && (d -= s),
              t !== i && (d = i),
              l(e.idxToDist(d, !0)) !== s && (d += s),
              (d = c(d));
            var f = e.idxToDist(d, !0);
            n.animator.start([
              {
                distance: f,
                duration: 500,
                easing: function (n) {
                  return 1 + --n * n * n * n * n;
                }
              }
            ]);
          })(),
          ('free' !== e && 'free-snap' !== e) || p();
      }),
      n.on('dragged', function () {
        i = n.track.details.abs;
      });
  }
  function b(n) {
    var t,
      i,
      e,
      r,
      f,
      p,
      v,
      h,
      m,
      g,
      b,
      x,
      y,
      k,
      w,
      M,
      T,
      C,
      E = c();
    function z(a) {
      if (p && h === a.id) {
        var c = L(a);
        if (m) {
          if (!D(a)) return A(a);
          (g = c), (m = !1), n.emit('dragChecked');
        }
        if (M) return (g = c);
        u(a);
        var y = (function (t) {
          if (T === -1 / 0 && C === 1 / 0) return t;
          var e = n.track.details,
            o = e.length,
            a = e.position,
            u = d(t, T - a, C - a);
          if (0 === o) return 0;
          if (!n.options.rubberband) return u;
          if (a <= C && a >= T) return t;
          if ((a < T && i > 0) || (a > C && i < 0)) return t;
          var s = (a < T ? a - T : a - C) / o,
            c = r * o,
            l = Math.abs(s * c),
            p = Math.max(0, 1 - (l / f) * 2);
          return p * p * t;
        })((v(g - c) / r) * e);
        i = l(y);
        var k = n.track.details.position;
        ((k > T && k < C) || (k === T && i > 0) || (k === C && i < 0)) && s(a),
          (b += y),
          !x && Math.abs(b * r) > 5 && ((x = !0), o(t, 'moves', '')),
          n.track.add(y),
          (g = c),
          n.emit('dragged');
      }
    }
    function I(t) {
      !p &&
        n.track.details &&
        n.track.details.length &&
        ((x = !1),
        (b = 0),
        (p = !0),
        (m = !0),
        (h = t.id),
        D(t),
        (g = L(t)),
        n.emit('dragStarted'));
    }
    function A(i) {
      p && h === i.idChanged && (o(t, 'moves', null), (p = !1), n.emit('dragEnded'));
    }
    function D(n) {
      var t = S(),
        i = t ? n.y : n.x,
        e = t ? n.x : n.y,
        r = void 0 !== y && void 0 !== k && Math.abs(k - e) <= Math.abs(y - i);
      return (y = i), (k = e), r;
    }
    function L(n) {
      return S() ? n.y : n.x;
    }
    function S() {
      return n.options.vertical;
    }
    function O() {
      (r = n.size), (f = S() ? window.innerHeight : window.innerWidth);
      var t = n.track.details;
      t && ((T = t.min), (C = t.max));
    }
    function _() {
      if ((E.purge(), n.options.drag && !n.options.disabled)) {
        var i;
        (i = n.options.dragSpeed || 1),
          (v =
            'function' == typeof i
              ? i
              : function (n) {
                  return n * i;
                }),
          (e = n.options.rtl ? -1 : 1),
          O(),
          (t = n.container),
          (function () {
            var n = 'data-keen-slider-clickable';
            a('['.concat(n, ']:not([').concat(n, '=false])'), t).map(function (n) {
              E.add(n, 'mousedown', s), E.add(n, 'touchstart', s);
            });
          })(),
          E.add(t, 'dragstart', function (n) {
            u(n);
          }),
          E.input(t, 'ksDragStart', I),
          E.input(t, 'ksDrag', z),
          E.input(t, 'ksDragEnd', A),
          E.input(t, 'mousedown', I),
          E.input(t, 'mousemove', z),
          E.input(t, 'mouseleave', A),
          E.input(t, 'mouseup', A),
          E.input(t, 'touchstart', I, { passive: !0 }),
          E.input(t, 'touchmove', z, { passive: !1 }),
          E.input(t, 'touchend', A),
          E.input(t, 'touchcancel', A),
          E.add(window, 'wheel', function (n) {
            p && u(n);
          });
        var r = 'data-keen-slider-scrollable';
        a('['.concat(r, ']:not([').concat(r, '=false])'), n.container).map(function (n) {
          return (function (n) {
            var t;
            E.input(
              n,
              'touchstart',
              function (n) {
                (t = L(n)), (M = !0), (w = !0);
              },
              { passive: !0 }
            ),
              E.input(n, 'touchmove', function (i) {
                var e = S(),
                  r = e ? n.scrollHeight - n.clientHeight : n.scrollWidth - n.clientWidth,
                  o = t - L(i),
                  a = e ? n.scrollTop : n.scrollLeft,
                  s =
                    (e && 'scroll' === n.style.overflowY) ||
                    (!e && 'scroll' === n.style.overflowX);
                if (((t = L(i)), ((o < 0 && a > 0) || (o > 0 && a < r)) && w && s))
                  return (M = !0);
                (w = !1), u(i), (M = !1);
              }),
              E.input(n, 'touchend', function () {
                M = !1;
              });
          })(n);
        });
      }
    }
    n.on('updated', O),
      n.on('optionsChanged', _),
      n.on('created', _),
      n.on('destroyed', E.purge);
  }
  function x(n) {
    var t,
      i,
      e = null;
    function r(t, i, e) {
      n.animator.active
        ? a(t, i, e)
        : requestAnimationFrame(function () {
            return a(t, i, e);
          });
    }
    function o() {
      r(!1, !1, i);
    }
    function a(i, r, o) {
      var a = 0,
        u = n.size,
        d = n.track.details;
      if (d && t) {
        var l = d.slides;
        t.forEach(function (n, t) {
          if (i) !e && r && s(n, null, o), c(n, null, o);
          else {
            if (!l[t]) return;
            var d = l[t].size * u;
            !e && r && s(n, d, o), c(n, l[t].distance * u - a, o), (a += d);
          }
        });
      }
    }
    function u(t) {
      return 'performance' === n.options.renderMode ? Math.round(t) : t;
    }
    function s(n, t, i) {
      var e = i ? 'height' : 'width';
      null !== t && (t = u(t) + 'px'),
        (n.style['min-' + e] = t),
        (n.style['max-' + e] = t);
    }
    function c(n, t, i) {
      if (null !== t) {
        t = u(t);
        var e = i ? t : 0;
        t = 'translate3d('.concat(i ? 0 : t, 'px, ').concat(e, 'px, 0)');
      }
      (n.style.transform = t), (n.style['-webkit-transform'] = t);
    }
    function d() {
      t && (a(!0, !0, i), (t = null)), n.on('detailsChanged', o, !0);
    }
    function l() {
      r(!1, !0, i);
    }
    function f() {
      d(),
        (i = n.options.vertical),
        n.options.disabled ||
          'custom' === n.options.renderMode ||
          ((e = 'auto' === p(n.options.slides, 'perView', null)),
          n.on('detailsChanged', o),
          (t = n.slides).length && l());
    }
    n.on('created', f),
      n.on('optionsChanged', f),
      n.on('beforeOptionsChanged', function () {
        d();
      }),
      n.on('updated', l),
      n.on('destroyed', d);
  }
  function y(t, i) {
    return function (e) {
      var r,
        u,
        s,
        d,
        l,
        v,
        h = c();
      function m(n) {
        var t;
        o(
          e.container,
          'reverse',
          'rtl' !==
            ((t = e.container),
            window.getComputedStyle(t, null).getPropertyValue('direction')) || n
            ? null
            : ''
        ),
          o(e.container, 'v', e.options.vertical && !n ? '' : null),
          o(e.container, 'disabled', e.options.disabled && !n ? '' : null);
      }
      function g() {
        b() && M();
      }
      function b() {
        var t = null;
        if (
          (d.forEach(function (n) {
            n.matches && (t = n.__media);
          }),
          t === r)
        )
          return !1;
        r || e.emit('beforeOptionsChanged'), (r = t);
        var i = t ? s.breakpoints[t] : s;
        return (e.options = n(n({}, s), i)), m(), I(), A(), C(), !0;
      }
      function x(n) {
        var t = f(n);
        return (e.options.vertical ? t.height : t.width) / e.size || 1;
      }
      function y() {
        return e.options.trackConfig.length;
      }
      function k(t) {
        for (var o in ((r = !1),
        (s = n(n({}, i), t)),
        h.purge(),
        (u = e.size),
        (d = []),
        s.breakpoints || [])) {
          var a = window.matchMedia(o);
          (a.__media = o), d.push(a), h.add(a, 'change', g);
        }
        h.add(window, 'orientationchange', z), h.add(window, 'resize', E), b();
      }
      function w(n) {
        e.animator.stop();
        var t = e.track.details;
        e.track.init(null != n ? n : t ? t.abs : 0);
      }
      function M(n) {
        w(n), e.emit('optionsChanged');
      }
      function T(n, t) {
        if (n) return k(n), void M(t);
        I(), A();
        var i = y();
        C(), y() !== i ? M(t) : w(t), e.emit('updated');
      }
      function C() {
        var n = e.options.slides;
        if ('function' == typeof n) return (e.options.trackConfig = n(e.size, e.slides));
        for (
          var t = e.slides,
            i = t.length,
            r = 'number' == typeof n ? n : p(n, 'number', i, !0),
            o = [],
            a = p(n, 'perView', 1, !0),
            u = p(n, 'spacing', 0, !0) / e.size || 0,
            s = 'auto' === a ? u : u / a,
            c = p(n, 'origin', 'auto'),
            d = 0,
            l = 0;
          l < r;
          l++
        ) {
          var f = 'auto' === a ? x(t[l]) : 1 / a - u + s,
            v = 'center' === c ? 0.5 - f / 2 : 'auto' === c ? 0 : c;
          o.push({ origin: v, size: f, spacing: u }), (d += f);
        }
        if (((d += u * (r - 1)), 'auto' === c && !e.options.loop && 1 !== a)) {
          var h = 0;
          o.map(function (n) {
            var t = d - h;
            return (
              (h += n.size + u), t >= 1 || (n.origin = 1 - t - (d > 1 ? 0 : 1 - d)), n
            );
          });
        }
        e.options.trackConfig = o;
      }
      function E() {
        I();
        var n = e.size;
        e.options.disabled || n === u || ((u = n), T());
      }
      function z() {
        E(), setTimeout(E, 500), setTimeout(E, 2e3);
      }
      function I() {
        var n = f(e.container);
        e.size = (e.options.vertical ? n.height : n.width) || 1;
      }
      function A() {
        e.slides = a(e.options.selector, e.container);
      }
      (e.container = (v = a(t, l || document)).length ? v[0] : null),
        (e.destroy = function () {
          h.purge(), e.emit('destroyed'), m(!0);
        }),
        (e.prev = function () {
          e.moveToIdx(e.track.details.abs - 1, !0);
        }),
        (e.next = function () {
          e.moveToIdx(e.track.details.abs + 1, !0);
        }),
        (e.update = T),
        k(e.options);
    };
  }
  return function (n, i, e) {
    try {
      return (function (n, t) {
        var i,
          e = {};
        return (
          (i = {
            emit: function (n) {
              e[n] &&
                e[n].forEach(function (n) {
                  n(i);
                });
              var t = i.options && i.options[n];
              t && t(i);
            },
            moveToIdx: function (n, t, e) {
              var r = i.track.idxToDist(n, t);
              if (r) {
                var o = i.options.defaultAnimation;
                i.animator.start([
                  {
                    distance: r,
                    duration: p(e || o, 'duration', 500),
                    easing: p(e || o, 'easing', function (n) {
                      return 1 + --n * n * n * n * n;
                    })
                  }
                ]);
              }
            },
            on: function (n, t, i) {
              void 0 === i && (i = !1), e[n] || (e[n] = []);
              var r = e[n].indexOf(t);
              r > -1 ? i && delete e[n][r] : i || e[n].push(t);
            },
            options: n
          }),
          (function () {
            if (((i.track = m(i)), (i.animator = h(i)), t))
              for (var n = 0, e = t; n < e.length; n++) (0, e[n])(i);
            i.track.init(i.options.initial || 0), i.emit('created');
          })(),
          i
        );
      })(
        i,
        t(
          [
            y(n, {
              drag: !0,
              mode: 'snap',
              renderMode: 'precision',
              rubberband: !0,
              selector: '.keen-slider__slide'
            }),
            x,
            b,
            g
          ],
          e || [],
          !0
        )
      );
    } catch (n) {
      console.error(n);
    }
  };
});
