/* ============================================================
   MoziHelper — движение и мобильный интерфейс.
   Работает поверх готовой страницы: содержание вопросов
   и квизов не меняется, узлы только перемещаются.
   ============================================================ */
(function () {
  'use strict';

  var EOUT = 'cubic-bezier(.16,1,.3,1)';
  var EIN  = 'cubic-bezier(.4,0,1,1)';
  var mq   = window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)') : null;
  function reduce() { return !!(mq && mq.matches); }
  function canAnimate(el) { return !!(el && el.animate) && !reduce(); }
  function narrow() { return window.innerWidth <= 720; }

  var mainEl    = document.querySelector('main');
  var startPage = document.getElementById('page-start');
  var hasTopics = (typeof TOPICS !== 'undefined') && Array.isArray(TOPICS);
  var SEMKEY    = 'mh_last_' + (location.pathname.replace(/[^a-z0-9]/gi, '_') || 'page');

  function ic(d, s) {
    return '<svg viewBox="0 0 24 24" width="' + (s || 18) + '" height="' + (s || 18) +
      '" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + d + '</svg>';
  }
  var I = {
    search: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
    list:   '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>',
    quiz:   '<circle cx="12" cy="12" r="10"/><polyline points="8 12 11 15 16 9"/>',
    chevR:  '<polyline points="9 18 15 12 9 6"/>',
    arrR:   '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
    arrL:   '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
    x:      '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    book:   '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'
  };
  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }

  /* ═══════════ Переход между страницами ═══════════ */
  function playEnter() {
    if (!canAnimate(mainEl)) return;
    var flag = null;
    try { flag = sessionStorage.getItem('mh_nav'); sessionStorage.removeItem('mh_nav'); } catch (e) {}
    if (!flag) return;
    var dir = flag === 'back' ? -1 : 1;
    mainEl.animate(
      [{ opacity: 0, transform: 'translate3d(' + (20 * dir) + 'px,0,0)' }, { opacity: 1, transform: 'none' }],
      { duration: 380, easing: EOUT }
    );
  }
  playEnter();

  window.addEventListener('pageshow', function (e) {
    if (!mainEl || !mainEl.getAnimations) return;
    mainEl.getAnimations().forEach(function (a) { a.cancel(); });
    if (e.persisted) playEnter();
  });

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button > 0) return;
    var a = e.target.closest ? e.target.closest('a[href]') : null;
    if (!a || !canAnimate(mainEl)) return;
    var href = a.getAttribute('href') || '';
    if (!href || href.charAt(0) === '#' || a.target === '_blank' || a.hasAttribute('download')) return;
    if (/^[a-z]+:/i.test(href)) return;
    if (!/\.html?($|[?#])/i.test(href)) return;

    e.preventDefault();
    var back = a.classList.contains('topbar-home') || a.getAttribute('data-nav') === 'back';
    try { sessionStorage.setItem('mh_nav', back ? 'back' : 'fwd'); } catch (err) {}
    var gone = false;
    function go() { if (gone) return; gone = true; window.location.href = href; }
    mainEl.animate(
      [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translate3d(' + (back ? 26 : -26) + 'px,0,0)' }],
      { duration: 200, easing: EIN, fill: 'forwards' }
    ).finished.then(go, go);
    setTimeout(go, 340);
  });

  /* ═══════════ Топбар прячется при прокрутке ═══════════ */
  var bar = document.querySelector('.topbar');
  if (bar) {
    var lastY = window.pageYOffset || 0, ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.pageYOffset || 0;
        var busy = document.querySelector('.sidebar.open') || document.body.classList.contains('mh-locked');
        if (!reduce() && narrow() && !busy) {
          if (y > lastY + 8 && y > 150) bar.classList.add('mh-tuck');
          else if (y < lastY - 8 || y < 60) bar.classList.remove('mh-tuck');
        } else {
          bar.classList.remove('mh-tuck');
        }
        lastY = y;
        ticking = false;
      });
    }, { passive: true });
  }

  /* ═══════════ Смена темы внутри семестра ═══════════ */
  if (typeof window.showTopic === 'function') {
    var _showTopic = window.showTopic;
    window.showTopic = function (topicId) {
      var cur = document.querySelector('.topic-page.active');
      if (!canAnimate(cur) || (cur && cur.id === 'page-' + topicId)) { _showTopic(topicId); syncTabs(); return; }
      if (typeof window.closeSidebar === 'function') window.closeSidebar();
      var back = topicId === 'start';
      cur.animate(
        [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translate3d(' + (back ? 24 : -24) + 'px,0,0)' }],
        { duration: 130, easing: EIN, fill: 'forwards' }
      );
      setTimeout(function () {
        if (cur.getAnimations) cur.getAnimations().forEach(function (a) { a.cancel(); });
        _showTopic(topicId);
        syncTabs();
        var next = document.querySelector('.topic-page.active');
        if (canAnimate(next)) {
          next.animate(
            [{ opacity: 0, transform: 'translate3d(' + (back ? -24 : 24) + 'px,0,0)' }, { opacity: 1, transform: 'none' }],
            { duration: 360, easing: EOUT }
          );
        }
      }, 130);
    };
  }

  /* ═══════════ Сайдбар закрывается свайпом вправо ═══════════ */
  function swipeToClose(el, onClose) {
    if (!el || !('ontouchstart' in window)) return;
    var x0 = 0, y0 = 0, dx = 0, t0 = 0, engaged = false, active = false;
    el.addEventListener('touchstart', function (e) {
      if (reduce() || e.touches.length > 1) return;
      x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
      dx = 0; t0 = Date.now(); active = true; engaged = false;
    }, { passive: true });
    el.addEventListener('touchmove', function (e) {
      if (!active) return;
      var mx = e.touches[0].clientX - x0, my = e.touches[0].clientY - y0;
      if (!engaged) {
        if (Math.abs(my) > Math.abs(mx)) { active = false; return; }
        if (mx < 8) return;
        engaged = true;
        el.style.transition = 'none';
      }
      dx = Math.max(0, mx);
      el.style.transform = 'translateX(' + dx + 'px)';
      var bd = document.getElementById('backdrop');
      if (bd && el.classList.contains('sidebar')) bd.style.opacity = String(Math.max(0, 1 - dx / (el.offsetWidth || 320)));
    }, { passive: true });
    function end() {
      if (!active) return;
      active = false;
      var bd = document.getElementById('backdrop');
      el.style.transition = '';
      el.style.transform = '';
      if (bd && el.classList.contains('sidebar')) bd.style.opacity = '';
      if (!engaged) return;
      var fast = dx / Math.max(1, Date.now() - t0) > 0.45;
      if (dx > (el.offsetWidth || 320) * 0.28 || fast) onClose();
    }
    el.addEventListener('touchend', end, { passive: true });
    el.addEventListener('touchcancel', end, { passive: true });
  }
  var sb = document.querySelector('.sidebar');
  if (sb) swipeToClose(sb, function () { if (typeof window.closeSidebar === 'function') window.closeSidebar(); });

  /* ══════════════════════════════════════════════════════════
     Дальше — только страницы семестров
     ══════════════════════════════════════════════════════════ */
  if (!startPage || !hasTopics) return;

  function plural(n, one, few, many) {
    var a = n % 100, b = n % 10;
    if (a > 10 && a < 20) return many;
    if (b === 1) return one;
    if (b >= 2 && b <= 4) return few;
    return many;
  }

  /* ═══════════ 1a · оглавление на старте ═══════════ */
  function buildStart() {
    if (startPage.querySelector('.mh-start')) return;
    var total = TOPICS.reduce(function (s, t) { return s + t.questions.length; }, 0);
    var html = '<div id="mhResumeBlock" hidden></div><div><div class="mh-lbl">Главы · ' + total + ' ' +
      plural(total, 'вопрос', 'вопроса', 'вопросов') + '</div><div class="mh-chaps">';
    var chap = null;
    TOPICS.forEach(function (t) {
      if (t.subtitle && t.subtitle !== chap) { chap = t.subtitle; html += '<div class="mh-chap">' + esc(chap) + '</div>'; }
      var first = t.questions[0] ? t.questions[0].n : '';
      html += '<button class="mh-row" data-topic="' + esc(t.id) + '">' +
        '<span class="mh-n">' + String(first).padStart(2, '0') + '</span>' +
        '<span class="mh-t">' + esc(t.title) + '</span>' +
        '<span class="mh-c">' + t.questions.length + '</span>' +
        '<span class="mh-ch">' + ic(I.chevR, 16) + '</span></button>';
    });
    html += '</div></div><div class="mh-extra">';
    if (document.getElementById('page-basics')) html += '<button class="mh-pill" data-go="basics">Базовые термины</button>';
    if (document.getElementById('page-quiz')) html += '<button class="mh-pill pri" data-go="quiz">Проверить себя в квизе</button>';
    html += '</div>';

    var wrap = document.createElement('div');
    wrap.className = 'mh-start';
    wrap.innerHTML = html;
    var anchor = document.getElementById('searchResults') || startPage.querySelector('.search-wrap');
    anchor.parentNode.insertBefore(wrap, anchor.nextSibling);

    wrap.addEventListener('click', function (e) {
      var row = e.target.closest('.mh-row');
      if (row) { window.showTopic(row.getAttribute('data-topic')); return; }
      var pill = e.target.closest('.mh-pill');
      if (pill) window.showTopic(pill.getAttribute('data-go'));
    });
    renderResume();
  }

  function renderResume() {
    var box = document.getElementById('mhResumeBlock');
    if (!box) return;
    var data = null;
    try { data = JSON.parse(localStorage.getItem(SEMKEY) || 'null'); } catch (e) {}
    if (!data || !data.topic || !data.title) { box.hidden = true; return; }
    box.hidden = false;
    box.innerHTML = '<div class="mh-lbl">Продолжить</div>' +
      '<button class="mh-resume" data-topic="' + esc(data.topic) + '" data-n="' + (data.n || 0) + '">' +
      ic(I.book, 18) +
      '<span class="mh-rt"><b>' + esc(data.title) + '</b><span>Вопрос ' + (data.n || '—') + '</span></span>' +
      '<span class="mh-ch">' + ic(I.chevR, 16) + '</span></button>';
    box.querySelector('.mh-resume').addEventListener('click', function () {
      window.goToQuestion(data.topic, data.n);
    });
  }

  /* ═══════════ 1b · нижние вкладки ═══════════ */
  var tabs = null;
  function buildTabs() {
    tabs = document.createElement('nav');
    tabs.className = 'mh-tabs';
    tabs.innerHTML =
      '<button class="mh-tab" data-act="topics">' + ic(I.list, 20) + 'Темы</button>' +
      '<button class="mh-tab" data-act="search">' + ic(I.search, 20) + 'Поиск</button>' +
      '<button class="mh-tab" data-act="quiz">' + ic(I.quiz, 20) + 'Квиз</button>';
    document.body.appendChild(tabs);
    document.body.classList.add('mh-has-tabs');
    tabs.addEventListener('click', function (e) {
      var b = e.target.closest('.mh-tab');
      if (!b) return;
      var act = b.getAttribute('data-act');
      if (act === 'topics') { if (typeof window.openSidebar === 'function') window.openSidebar(); }
      else if (act === 'search') openPal();
      else if (act === 'quiz') window.showTopic('quiz');
      syncTabs();
    });
    syncTabs();
  }
  function syncTabs() {
    if (!tabs) return;
    var quizOn = !!document.querySelector('#page-quiz.active');
    tabs.querySelectorAll('.mh-tab').forEach(function (b) {
      var act = b.getAttribute('data-act');
      b.classList.toggle('on', (act === 'quiz' && quizOn) || (act === 'topics' && !quizOn));
    });
  }

  /* ═══════════ 1b · палитра поиска ═══════════ */
  var pal = null, palAnchor = null, palOpen = false, palFake = false;
  function buildPal() {
    pal = document.createElement('div');
    pal.className = 'mh-pal';
    pal.innerHTML = '<div class="mh-pal-head"><div class="mh-pal-field"></div>' +
      '<button class="mh-pal-cancel">Отмена</button></div>' +
      '<div class="mh-pal-body"><div class="mh-pal-hint">Ищите по названию вопроса, теореме или термину — например «базис» или «детерминант».</div></div>';
    document.body.appendChild(pal);
    pal.querySelector('.mh-pal-cancel').addEventListener('click', closePal);
  }
  function openPal() {
    if (palOpen) return;
    if (!pal) buildPal();
    var wrap = startPage.querySelector('.search-wrap.start-search') || document.querySelector('.search-wrap.start-search');
    var res = document.getElementById('searchResults');
    if (!wrap || !res) return;
    palAnchor = document.createComment('mh-search');
    wrap.parentNode.insertBefore(palAnchor, wrap);
    pal.querySelector('.mh-pal-field').appendChild(wrap);
    pal.querySelector('.mh-pal-body').appendChild(res);
    if (!startPage.classList.contains('active')) {
      palFake = true;
      startPage.classList.add('active');
      startPage.style.display = 'none';
    }
    document.body.classList.add('mh-locked');
    pal.classList.add('on');
    palOpen = true;
    setTimeout(function () { var i = document.getElementById('searchInput'); if (i) i.focus(); }, 60);
  }
  function closePal() {
    if (!palOpen) return;
    var wrap = pal.querySelector('.search-wrap');
    var res = pal.querySelector('#searchResults');
    var inp = document.getElementById('searchInput');
    if (inp) { inp.value = ''; inp.blur(); }
    if (res) { res.hidden = true; res.innerHTML = ''; }
    pal.classList.remove('on');
    document.body.classList.remove('mh-locked');
    palOpen = false;
    if (palAnchor && palAnchor.parentNode) {
      if (wrap) palAnchor.parentNode.insertBefore(wrap, palAnchor);
      if (res) palAnchor.parentNode.insertBefore(res, palAnchor);
      palAnchor.parentNode.removeChild(palAnchor);
    }
    palAnchor = null;
    if (palFake) { startPage.classList.remove('active'); startPage.style.display = ''; palFake = false; }
    syncTabs();
  }
  if (typeof window.onSearchResultPick === 'function') {
    var _pick = window.onSearchResultPick;
    window.onSearchResultPick = function (topicId, n) { closePal(); _pick(topicId, n); };
  }

  /* ═══════════ 1c · фокус-режим чтения ═══════════ */
  var rd = null, rdCard = null, rdPage = null;
  function buildReader() {
    rd = document.createElement('div');
    rd.className = 'mh-reader';
    rd.innerHTML =
      '<div class="mh-reader-head"><button class="mh-rbtn" data-act="close">' + ic(I.x, 17) + '</button>' +
      '<span class="mh-rmeta"></span><span class="mh-rchap"></span></div>' +
      '<div class="mh-reader-prog"><i style="width:0"></i></div>' +
      '<div class="mh-reader-scroll"><h2 class="mh-reader-title"></h2><div class="mh-reader-slot"></div></div>' +
      '<div class="mh-reader-foot">' +
      '<button data-act="prev">' + ic(I.arrL, 16) + '<span></span></button>' +
      '<button class="pri" data-act="next"><span></span>' + ic(I.arrR, 16) + '</button></div>';
    document.body.appendChild(rd);
    rd.addEventListener('click', function (e) {
      var b = e.target.closest('button[data-act]');
      if (!b || b.disabled) return;
      var act = b.getAttribute('data-act');
      if (act === 'close') closeReader();
      else step(act === 'next' ? 1 : -1);
    });
    swipeToClose(rd, closeReader);
  }
  function cardsIn(page) {
    return Array.prototype.filter.call(page.querySelectorAll('.q-card'), function (c) { return !c.classList.contains('hidden'); });
  }
  function num(card) { var n = card.querySelector('.q-num'); return n ? n.textContent.trim() : ''; }

  function openReader(card) {
    if (!card) return;
    if (!rd) buildReader();
    if (rdCard && rdCard !== card) restoreBody();
    rdCard = card;
    rdPage = card.closest('.topic-page') || startPage;

    var slot = rd.querySelector('.mh-reader-slot');
    var body = card.querySelector('.q-body');
    if (body) slot.appendChild(body);
    card.classList.add('mh-seen');

    var title = card.querySelector('.q-title');
    var titleText = title ? title.textContent.trim() : '';
    rd.querySelector('.mh-reader-title').textContent = titleText;

    var list = cardsIn(rdPage), i = list.indexOf(card);
    rd.querySelector('.mh-rmeta').textContent = 'Вопрос ' + num(card) + ' · ' + (i + 1) + ' из ' + list.length;
    var eyebrow = rdPage.querySelector('.topic-eyebrow');
    rd.querySelector('.mh-rchap').textContent = eyebrow ? eyebrow.textContent.trim() : '';
    rd.querySelector('.mh-reader-prog i').style.width = (((i + 1) / Math.max(1, list.length)) * 100) + '%';

    var prev = rd.querySelector('[data-act="prev"]'), next = rd.querySelector('[data-act="next"]');
    prev.disabled = i <= 0;
    next.disabled = i >= list.length - 1;
    prev.querySelector('span').textContent = i > 0 ? num(list[i - 1]) : '';
    next.querySelector('span').textContent = i < list.length - 1 ? 'Дальше · ' + num(list[i + 1]) : 'Конец темы';

    document.body.classList.add('mh-locked');
    rd.classList.add('on');
    rd.querySelector('.mh-reader-scroll').scrollTop = 0;
    if (window.MathJax && window.MathJax.typesetPromise) {
      setTimeout(function () { window.MathJax.typesetPromise([slot]).catch(function () {}); }, 30);
    }
    try {
      localStorage.setItem(SEMKEY, JSON.stringify({
        topic: (rdPage.id || '').replace('page-', ''),
        n: parseInt(num(card), 10) || 0,
        title: titleText
      }));
    } catch (e) {}
  }

  function restoreBody() {
    if (!rd || !rdCard) return;
    var body = rd.querySelector('.mh-reader-slot .q-body');
    if (body) rdCard.appendChild(body);
    rdCard.classList.remove('open');
    rdCard = null;
  }

  function closeReader() {
    if (!rd || !rd.classList.contains('on')) return;
    var card = rdCard;
    rd.classList.remove('on');
    document.body.classList.remove('mh-locked');
    setTimeout(function () {
      restoreBody();
      renderResume();
      if (card && card.getBoundingClientRect) {
        var y = card.getBoundingClientRect().top + window.pageYOffset - 76;
        window.scrollTo({ top: Math.max(0, y) });
      }
    }, reduce() ? 0 : 340);
  }

  function step(dir) {
    if (!rdCard) return;
    var list = cardsIn(rdPage), i = list.indexOf(rdCard), target = list[i + dir];
    if (!target) return;
    var sc = rd.querySelector('.mh-reader-scroll');
    if (!canAnimate(sc)) { restoreBody(); openReader(target); return; }
    sc.animate(
      [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translate3d(' + (dir > 0 ? -18 : 18) + 'px,0,0)' }],
      { duration: 120, easing: EIN }
    );
    setTimeout(function () {
      restoreBody();
      openReader(target);
      sc.animate(
        [{ opacity: 0, transform: 'translate3d(' + (dir > 0 ? 18 : -18) + 'px,0,0)' }, { opacity: 1, transform: 'none' }],
        { duration: 280, easing: EOUT }
      );
    }, 120);
  }

  // вопрос открывается читалкой вместо аккордеона
  window.toggleCard = function (headEl) {
    var card = headEl && headEl.closest ? headEl.closest('.q-card') : null;
    if (card) openReader(card);
  };
  window.goToQuestion = function (topicId, qNum) {
    window.showTopic(topicId);
    setTimeout(function () {
      var card = document.querySelector('#page-' + topicId + ' .q-card[data-q="' + qNum + '"]');
      if (card) openReader(card);
    }, 200);
  };

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { if (rd && rd.classList.contains('on')) closeReader(); else if (palOpen) closePal(); }
    if (rd && rd.classList.contains('on')) {
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    }
  });

  /* ═══════════ 1d · квиз: точки и шторка разбора ═══════════ */
  var qc = document.getElementById('quizContainer');
  var sheet = null, sheetAnchor = null, qraf = 0;

  function dots() {
    var prog = qc.querySelector('.quiz-progress');
    if (!prog || prog.dataset.mhDots) return;
    prog.dataset.mhDots = '1';
    var bar = prog.querySelector('.quiz-progress-bar');
    var head = prog.querySelector('span');
    var m = (head ? head.textContent : '').match(/(\d+)\s*\/\s*(\d+)/);
    if (!bar || !m) return;
    var cur = +m[1], total = +m[2];
    if (!total || total > 24) return;
    var row = document.createElement('div');
    row.className = 'mh-dots';
    var h = '';
    for (var k = 1; k <= total; k++) h += '<i class="' + (k < cur ? 'done' : k === cur ? 'now' : '') + '"></i>';
    row.innerHTML = h;
    bar.style.display = 'none';
    prog.insertBefore(row, bar);
  }

  function openSheet(ex, ctr) {
    sheet = document.createElement('div');
    sheet.className = 'mh-qsheet';
    sheet.innerHTML = '<span class="mh-grab"></span>';
    sheetAnchor = document.createComment('mh-exp');
    ex.parentNode.insertBefore(sheetAnchor, ex);
    sheet.appendChild(ex);
    if (ctr) sheet.appendChild(ctr);
    document.body.appendChild(sheet);
    document.body.classList.add('mh-qsheet-on');
  }

  function closeSheet() {
    if (!sheet) return;
    var ex = sheet.querySelector('.quiz-explanation');
    var ctr = sheet.querySelector('.quiz-controls');
    if (sheetAnchor && sheetAnchor.parentNode) {
      if (ex) sheetAnchor.parentNode.insertBefore(ex, sheetAnchor);
      if (ctr) sheetAnchor.parentNode.insertBefore(ctr, sheetAnchor);
      sheetAnchor.parentNode.removeChild(sheetAnchor);
    }
    if (sheet.parentNode) sheet.parentNode.removeChild(sheet);
    sheet = null;
    sheetAnchor = null;
    document.body.classList.remove('mh-qsheet-on');
  }

  function decorateQuiz() {
    if (!qc) return;
    dots();
    var ex = qc.querySelector('.quiz-explanation');
    if (sheet) {
      // разбор уже в шторке; закрываем, когда отрисован следующий вопрос
      if (ex && !sheet.contains(ex)) closeSheet();
      return;
    }
    if (ex && ex.classList.contains('show')) openSheet(ex, qc.querySelector('.quiz-controls'));
  }

  if (qc && window.MutationObserver) {
    new MutationObserver(function () {
      if (qraf) return;
      qraf = requestAnimationFrame(function () { qraf = 0; decorateQuiz(); });
    }).observe(qc, { childList: true, subtree: true, attributes: true, attributeFilter: ['class'] });
  }

  /* ═══════════ запуск ═══════════ */
  buildStart();
  buildTabs();
  var startInput = document.getElementById('searchInput');
  if (startInput) {
    startInput.addEventListener('focus', function () {
      if (narrow() && !palOpen) openPal();
    });
  }
})();
