// Two conveniences; the pages read and work without this file.
// 1. Theme switch: overrides the system colour scheme, remembered in localStorage.
// 2. Language note: when the browser prefers the other language of the site, a small
//    link to that version is shown. It never redirects; dismissing it is remembered.
(function () {
  var root = document.documentElement;
  var themeKey = 'mizar-theme';
  var hintKey = 'mizar-lang-note';
  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function write(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* storage blocked */ }
  }

  var stored = read(themeKey);
  if (stored === 'light' || stored === 'dark') root.setAttribute('data-theme', stored);
  root.className = root.className.replace('no-js', 'js');

  function current() {
    var forced = root.getAttribute('data-theme');
    if (forced) return forced;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  document.addEventListener('DOMContentLoaded', function () {
    var button = document.querySelector('.theme-toggle');
    if (button) {
      button.hidden = false;
      button.setAttribute('aria-pressed', current() === 'dark' ? 'true' : 'false');
      button.addEventListener('click', function () {
        var next = current() === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        button.setAttribute('aria-pressed', next === 'dark' ? 'true' : 'false');
        write(themeKey, next);
      });
    }

    if (read(hintKey)) return;
    var prefers = String((navigator.languages && navigator.languages[0]) || navigator.language || '').slice(0, 2).toLowerCase();
    var page = String(root.lang || '').slice(0, 2).toLowerCase();
    if (!prefers || prefers === page) return;
    var notes = document.querySelectorAll('.lang-hint');
    for (var i = 0; i < notes.length; i++) {
      (function (note) {
        if (note.getAttribute('data-prefers') !== prefers) return;
        note.hidden = false;
        var done = function () { write(hintKey, '1'); };
        note.querySelector('a').addEventListener('click', done);
        note.querySelector('button').addEventListener('click', function () {
          note.hidden = true;
          done();
        });
      })(notes[i]);
    }
  });
})();
