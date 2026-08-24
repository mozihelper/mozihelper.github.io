/* ============================================================
   tasks-sem2.js — база практических задач, 2-й семестр.
   Каждая задача: условие, пошаговый разбор, ответ, источник.
   Поля topic и level используются конструктором вариантов.
   topic: t1..t6 — как в TOPIC_NAMES из quiz-sem2.js
   level: 1 — базовая, 2 — средняя, 3 — повышенной сложности
   ============================================================ */

var TASKS_SEM2 = [
  {
    "id": "p101",
    "topic": "t2",
    "level": 2,
    "num": 101,
    "title": "Корни девятой степени из $z_0=-3-\\sqrt{3}\\,i$",
    "source": "Анно Е. И., «Задачи по линейной алгебре», ч. I, с. 148, пример 5",
    "statement": "Запишите в тригонометрической форме все комплексные корни девятой степени из числа $z_0=-3-\\sqrt{3}\\cdot i$ и выберите корень $z$ с наименьшей мнимой частью.",
    "steps": [
      {
        "q": "Найти модуль и аргумент",
        "a": "$|z_0|=\\sqrt{9+3}=\\sqrt{12}$. Точка $(-3;-\\sqrt3)$ лежит в третьей четверти, поэтому от $\\operatorname{tg}\\varphi=\\dfrac{\\sqrt3}{3}$ берём не $\\dfrac{\\pi}{6}$, а $\\varphi=\\pi+\\dfrac{\\pi}{6}=\\dfrac{7\\pi}{6}$."
      },
      {
        "q": "Записать в тригонометрической форме",
        "a": "$$-3-\\sqrt{3}\\,i=\\sqrt{12}\\left(\\cos\\frac{7\\pi}{6}+i\\sin\\frac{7\\pi}{6}\\right).$$"
      },
      {
        "q": "Применить формулу корней n-й степени",
        "a": "По лекции корни $n$-й степени из $z=r(\\cos\\varphi+i\\sin\\varphi)$ имеют вид$$w_k=\\sqrt[n]{r}\\left(\\cos\\frac{\\varphi+2\\pi k}{n}+i\\sin\\frac{\\varphi+2\\pi k}{n}\\right),\\qquad k=0,\\dots,n-1.$$Здесь $n=9$, $r=\\sqrt{12}$, $\\varphi=\\dfrac{7\\pi}{6}$. Модуль $\\sqrt[9]{\\sqrt{12}}=\\sqrt[18]{12}$, а аргумент $\\dfrac{7\\pi/6+2\\pi k}{9}=\\dfrac{7\\pi+12\\pi k}{54}$, поэтому$$z_k=\\sqrt[18]{12}\\left(\\cos\\frac{7\\pi+12\\pi k}{54}+i\\sin\\frac{7\\pi+12\\pi k}{54}\\right),\\qquad k=0,\\dots,8.$$"
      },
      {
        "q": "Выбрать корень с наименьшей мнимой частью",
        "a": "Мнимая часть минимальна, когда аргумент ближе всего к $\\dfrac{3\\pi}{2}=\\dfrac{81\\pi}{54}$ — это направление числа $-i$. Среди чисел $7+12k$ ближе всего к $81$ оказывается $79$ при $k=6$."
      }
    ],
    "answer": "$$z=z_6=\\sqrt[18]{12}\\left(\\cos\\frac{79\\pi}{54}+i\\sin\\frac{79\\pi}{54}\\right).$$",
    "figure": "<svg class=\"prax-fig\" viewBox=\"0 0 430 402\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Девять корней девятой степени на окружности радиуса 12 в степени 1/18; выделен корень z6 с наименьшей мнимой частью\">\n          <line x1=\"107.0\" y1=\"376.0\" x2=\"107.0\" y2=\"26.1\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"323.0\" y1=\"376.0\" x2=\"323.0\" y2=\"26.1\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"26.0\" y1=\"309.0\" x2=\"404.0\" y2=\"309.0\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"26.0\" y1=\"93.0\" x2=\"404.0\" y2=\"93.0\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"26.0\" y1=\"201.0\" x2=\"404.0\" y2=\"201.0\" stroke=\"var(--ink-soft)\" stroke-width=\"1.5\"/>\n          <polygon points=\"404.0,201.0 395.0,197.0 395.0,205.0\" fill=\"var(--ink-soft)\"/>\n          <line x1=\"215.0\" y1=\"376.0\" x2=\"215.0\" y2=\"26.1\" stroke=\"var(--ink-soft)\" stroke-width=\"1.5\"/>\n          <polygon points=\"215.0,26.1 211.0,35.1 219.0,35.1\" fill=\"var(--ink-soft)\"/>\n          <text x=\"400.0\" y=\"217.0\" font-size=\"12.5\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"end\" font-style=\"italic\">Re z</text>\n          <text x=\"223.0\" y=\"36.1\" font-size=\"12.5\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\">Im z</text>\n          <text x=\"210.0\" y=\"215.0\" font-size=\"11\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"end\">O</text>\n          <text x=\"107.0\" y=\"215.0\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">-1</text>\n          <text x=\"323.0\" y=\"215.0\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">1</text>\n          <text x=\"209.0\" y=\"313.0\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">-1</text>\n          <text x=\"209.0\" y=\"97.0\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">1</text>\n          <circle cx=\"215.0\" cy=\"201.0\" r=\"124.0\" fill=\"none\" stroke=\"var(--ink-mute)\" stroke-width=\"1.4\" stroke-dasharray=\"5 4\"/>\n          <line x1=\"215.0\" y1=\"201.0\" x2=\"328.8\" y2=\"151.9\" stroke=\"var(--ink-mute)\" stroke-width=\"1.3\" stroke-dasharray=\"4 4\"/>\n          <text x=\"277.9\" y=\"172.45\" font-size=\"11.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"start\">R = ¹⁸√12</text>\n          <path d=\"M 266.6 178.8 A 56.2 56.2 0 0 0 240.2 150.9\" fill=\"none\" stroke=\"var(--ink-mute)\" stroke-width=\"1.2\"/>\n          <text x=\"271.6\" y=\"151.7\" font-size=\"11\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">2π/9</text>\n          <circle cx=\"328.8\" cy=\"151.9\" r=\"3.2\" fill=\"var(--ink-soft)\"/>\n          <circle cx=\"270.6\" cy=\"90.2\" r=\"3.2\" fill=\"var(--ink-soft)\"/>\n          <circle cx=\"186.4\" cy=\"80.4\" r=\"3.2\" fill=\"var(--ink-soft)\"/>\n          <circle cx=\"115.5\" cy=\"127.0\" r=\"3.2\" fill=\"var(--ink-soft)\"/>\n          <circle cx=\"91.2\" cy=\"208.2\" r=\"3.2\" fill=\"var(--ink-soft)\"/>\n          <circle cx=\"124.8\" cy=\"286.1\" r=\"3.2\" fill=\"var(--ink-soft)\"/>\n          <circle cx=\"200.6\" cy=\"324.2\" r=\"5\" fill=\"var(--accent)\"/>\n          <circle cx=\"283.1\" cy=\"304.6\" r=\"3.2\" fill=\"var(--ink-soft)\"/>\n          <circle cx=\"333.8\" cy=\"236.6\" r=\"3.2\" fill=\"var(--ink-soft)\"/>\n          <text x=\"335.8\" y=\"153.9\" font-size=\"12\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\">z₀</text>\n          <text x=\"274.6\" y=\"84.2\" font-size=\"12\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\">z₁</text>\n          <text x=\"196.6\" y=\"346.2\" font-size=\"12.5\" fill=\"var(--accent)\" font-family=\"inherit\" text-anchor=\"middle\" font-weight=\"600\">z₆ — наименьшая Im</text>\n        </svg>"
  },
  {
    "id": "p102",
    "topic": "t2",
    "level": 1,
    "num": 102,
    "title": "ГМТ: $|z+2-i|^2-|z-1-3i|^2=z+\\bar z-1$",
    "source": "Анно Е. И., «Задачи по линейной алгебре», ч. I, с. 148, пример 6",
    "statement": "Изобразите на координатной плоскости геометрическое место точек $z=x+yi$, удовлетворяющих соотношению $$|z+2-i|^2-|z-1-3i|^2=z+\\bar z-1.$$",
    "steps": [
      {
        "q": "Перейти к координатам",
        "a": "$$z+2-i=(x+2)+(y-1)\\,i,\\qquad z-1-3i=(x-1)+(y-3)\\,i,\\qquad z+\\bar z-1=2x-1.$$"
      },
      {
        "q": "Раскрыть модули",
        "a": "Квадрат модуля — сумма квадратов координат, поэтому левая часть равна $$(x+2)^2+(y-1)^2-(x-1)^2-(y-3)^2=6x+4y-5.$$ Квадратичные члены взаимно уничтожаются — это и делает ответ линейным."
      },
      {
        "q": "Решить полученное уравнение",
        "a": "$6x+4y-5=2x-1$, то есть $4x+4y=4$."
      }
    ],
    "answer": "Геометрическое место точек — прямая $y=-x+1$.",
    "figure": "<svg class=\"prax-fig\" viewBox=\"0 0 430 430\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Прямая y равно минус x плюс 1 на координатной плоскости\">\n          <line x1=\"62.6\" y1=\"404.0\" x2=\"62.6\" y2=\"26.0\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"123.5\" y1=\"404.0\" x2=\"123.5\" y2=\"26.0\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"245.5\" y1=\"404.0\" x2=\"245.5\" y2=\"26.0\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"306.5\" y1=\"404.0\" x2=\"306.5\" y2=\"26.0\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"367.4\" y1=\"404.0\" x2=\"367.4\" y2=\"26.0\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"26.0\" y1=\"367.4\" x2=\"404.0\" y2=\"367.4\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"26.0\" y1=\"306.5\" x2=\"404.0\" y2=\"306.5\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"26.0\" y1=\"184.5\" x2=\"404.0\" y2=\"184.5\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"26.0\" y1=\"123.5\" x2=\"404.0\" y2=\"123.5\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"26.0\" y1=\"62.6\" x2=\"404.0\" y2=\"62.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"26.0\" y1=\"245.5\" x2=\"404.0\" y2=\"245.5\" stroke=\"var(--ink-soft)\" stroke-width=\"1.5\"/>\n          <polygon points=\"404.0,245.5 395.0,241.5 395.0,249.5\" fill=\"var(--ink-soft)\"/>\n          <line x1=\"184.5\" y1=\"404.0\" x2=\"184.5\" y2=\"26.0\" stroke=\"var(--ink-soft)\" stroke-width=\"1.5\"/>\n          <polygon points=\"184.5,26.0 180.5,35.0 188.5,35.0\" fill=\"var(--ink-soft)\"/>\n          <text x=\"400.0\" y=\"261.5\" font-size=\"12.5\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"end\" font-style=\"italic\">x</text>\n          <text x=\"192.5\" y=\"36.0\" font-size=\"12.5\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\">y</text>\n          <text x=\"179.5\" y=\"259.5\" font-size=\"11\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"end\">O</text>\n          <text x=\"62.6\" y=\"259.5\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">-2</text>\n          <text x=\"123.5\" y=\"259.5\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">-1</text>\n          <text x=\"245.5\" y=\"259.5\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">1</text>\n          <text x=\"306.5\" y=\"259.5\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">2</text>\n          <text x=\"367.4\" y=\"259.5\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">3</text>\n          <text x=\"178.5\" y=\"371.4\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">-2</text>\n          <text x=\"178.5\" y=\"310.5\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">-1</text>\n          <text x=\"178.5\" y=\"188.5\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">1</text>\n          <text x=\"178.5\" y=\"127.5\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">2</text>\n          <text x=\"178.5\" y=\"66.6\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">3</text>\n          <line x1=\"38.2\" y1=\"38.2\" x2=\"391.8\" y2=\"391.8\" stroke=\"var(--accent)\" stroke-width=\"2.6\"/>\n          <circle cx=\"184.5\" cy=\"184.5\" r=\"3.6\" fill=\"var(--ink)\"/>\n          <circle cx=\"245.5\" cy=\"245.5\" r=\"3.6\" fill=\"var(--ink)\"/>\n          <text x=\"132.5\" y=\"182.5\" font-size=\"12.5\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\">(0;1)</text>\n          <text x=\"253.5\" y=\"263.5\" font-size=\"12.5\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\">(1;0)</text>\n          <text x=\"315.6\" y=\"282.1\" font-size=\"13.5\" fill=\"var(--accent)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\" font-weight=\"600\">y = −x + 1</text>\n        </svg>"
  },
  {
    "id": "p103",
    "topic": "t3",
    "level": 1,
    "num": 103,
    "title": "Остаток от деления $P(x)$ на $(x-2)(x+1)$",
    "source": "Анно Е. И., «Задачи по линейной алгебре», ч. I, с. 160, пример 2",
    "statement": "Многочлен $P(x)$ при делении на $Q_1(x)=x-2$ даёт остаток $4$, а при делении на $Q_2(x)=x+1$ даёт остаток $1$. Какой остаток будет у $P(x)$ при делении на $Q_3(x)=(x-2)(x+1)$?",
    "steps": [
      {
        "q": "Определить вид остатка",
        "a": "Пусть $P(x)=S(x)\\,Q_3(x)+R(x)$. Так как $\\deg Q_3=2$, остаток имеет степень меньше $2$, то есть $R(x)=kx+b$ — два неизвестных."
      },
      {
        "q": "Использовать корни делителя",
        "a": "Числа $2$ и $-1$ — корни $Q_3$, поэтому в этих точках слагаемое с $Q_3$ обращается в нуль и значения $P$ совпадают со значениями остатка. По теореме Безу известны и сами значения: $P(2)=4$, $P(-1)=1$."
      },
      {
        "q": "Составить и решить систему",
        "a": "$$\\begin{cases}R(2)=2k+b=4,\\\\[2pt] R(-1)=-k+b=1.\\end{cases}$$ Вычитая второе из первого, получаем $3k=3$, то есть $k=1$ и $b=2$."
      }
    ],
    "answer": "$$R(x)=x+2.$$"
  },
  {
    "id": "p104",
    "topic": "t3",
    "level": 2,
    "num": 104,
    "title": "Кратный корень $P(x)=3x^4-bx^3-4ax^2+2x+1$",
    "source": "Анно Е. И., «Задачи по линейной алгебре», ч. I, с. 160, пример 3",
    "statement": "При каких значениях параметров $a$ и $b$ число $x_0=1$ является корнем многочлена $P(x)=3x^4-bx^3-4ax^2+2x+1$ кратности больше $1$?",
    "steps": [
      {
        "q": "Вспомнить критерий кратного корня",
        "a": "Число $x_0$ — корень кратности больше $1$ тогда и только тогда, когда $P(x_0)=0$ и $P'(x_0)=0$: кратный корень многочлена является корнем и его производной."
      },
      {
        "q": "Выписать производную и подставить",
        "a": "$P'(x)=12x^3-3bx^2-8ax+2$. Подстановка $x=1$ в оба условия даёт $$\\begin{cases}3-b-4a+2+1=0,\\\\[2pt] 12-3b-8a+2=0,\\end{cases}\\qquad\\text{то есть}\\qquad \\begin{cases}4a+b=6,\\\\ 8a+3b=14.\\end{cases}$$"
      },
      {
        "q": "Решить систему и уточнить кратность",
        "a": "Отсюда $a=1$, $b=2$. Проверим, не выше ли кратность: $P''(1)=36-6b-8a=36-12-8=16\\ne 0$, значит корень ровно двукратный."
      }
    ],
    "answer": "$a=1$, $b=2$; кратность корня $x_0=1$ равна $2$."
  },
  {
    "id": "p105",
    "topic": "t4",
    "level": 3,
    "num": 105,
    "title": "ЖНФ и жорданов базис",
    "source": "Задача из лекции «Жордановы нормальные формы» (Г. Н. Клюшников); алгоритм — вопрос 43",
    "statement": "Найдите жорданову нормальную форму $J$ и жорданов базис (матрицу перехода $C$, для которой $C^{-1}AC=J$) для матрицы $$A=\\begin{pmatrix}3&2&-3\\\\4&10&-12\\\\3&6&-7\\end{pmatrix}.$$",
    "steps": [
      {
        "q": "Найти собственное значение",
        "a": "Рассмотрим $\\lambda=2$: $$B=A-2E=\\begin{pmatrix}1&2&-3\\\\4&8&-12\\\\3&6&-9\\end{pmatrix}.$$ Все строки пропорциональны $(1;2;-3)$, поэтому $\\operatorname{rg}B=1$. Проверка даёт $B^2=0$: оператор нильпотентен, значит $\\lambda=2$ — единственное собственное значение и $\\chi_A(t)=(t-2)^3$."
      },
      {
        "q": "Определить структуру клеток",
        "a": "$\\dim V_2=3-\\operatorname{rg}B=2$, значит жордановых клеток две. Из $B^2=0$ следует, что длины цепочек не больше $2$. Три вектора, две клетки, максимальная длина $2$ — распределение единственно: $$J=J_2(2)\\oplus J_1(2).$$"
      },
      {
        "q": "Найти собственное подпространство",
        "a": "$V_2$ задаётся уравнением $x_1+2x_2-3x_3=0$; ФСР: $b_1=(-2;1;0)^T$, $b_2=(3;0;1)^T$."
      },
      {
        "q": "Построить цепочку длины 2",
        "a": "$L_1=\\operatorname{Im}B=\\langle c_1\\rangle$, где $c_1=(1;4;3)^T$. Заметим, что $4b_1+3b_2=c_1$, то есть $c_1\\in V_2$. С вектора $e_1^{(1)}=c_1$ начинается цепочка длины $2$; присоединённый вектор ищем из $B\\,e_1^{(2)}=e_1^{(1)}$, то есть $y_1+2y_2-3y_3=1$ — годится $e_1^{(2)}=(2;1;1)^T$."
      },
      {
        "q": "Добавить цепочку длины 1",
        "a": "Достраиваем до базиса $V_2$ вектором вне $L_1$: подходит $e_2^{(1)}=(3;0;1)^T$."
      }
    ],
    "answer": "$$C=\\begin{pmatrix}1&2&3\\\\4&1&0\\\\3&1&1\\end{pmatrix},\\qquad J=\\begin{pmatrix}2&1&0\\\\0&2&0\\\\0&0&2\\end{pmatrix}.$$"
  },
  {
    "id": "p106",
    "topic": "t4",
    "level": 3,
    "num": 106,
    "title": "Матрица самосопряжённого оператора по одному собственному вектору",
    "source": "Анно Е. И., «Задачи по линейной алгебре», ч. II, с. 131, пример 1",
    "statement": "Укажите пример матрицы $A_e$ такого самосопряжённого оператора $\\mathcal{A}\\ne k\\cdot\\mathcal{E}$ в пространстве $E^2$, что $\\mathcal{A}f_1=3f_1$, где $f_1=(3;2)$.",
    "steps": [
      {
        "q": "Использовать спектральную теорему",
        "a": "У самосопряжённого оператора есть ортогональный базис из собственных векторов. Один собственный вектор дан: $f_1=(3;2)$. Значит ортогональный ему $f_2=(-2;3)$ тоже обязан быть собственным."
      },
      {
        "q": "Выбрать второе собственное значение",
        "a": "Оно произвольно, лишь бы отличалось от $3$ (иначе $\\mathcal{A}=3\\mathcal{E}$, что запрещено условием). Возьмём самое простое: $\\mathcal{A}f_2=0$."
      },
      {
        "q": "Составить матричное равенство",
        "a": "Пусть $\\mathcal{F}e_1=f_1$, $\\mathcal{F}e_2=f_2$ и $\\mathcal{G}e_1=3f_1$, $\\mathcal{G}e_2=0$. Тогда $\\mathcal{G}=\\mathcal{A}\\mathcal{F}$, то есть $$\\begin{pmatrix}9&0\\\\6&0\\end{pmatrix}=A_e\\begin{pmatrix}3&-2\\\\2&3\\end{pmatrix}.$$"
      },
      {
        "q": "Выразить искомую матрицу",
        "a": "$$A_e=\\begin{pmatrix}9&0\\\\6&0\\end{pmatrix}\\cdot\\frac{1}{13}\\begin{pmatrix}3&2\\\\-2&3\\end{pmatrix}=\\frac{1}{13}\\begin{pmatrix}27&18\\\\18&12\\end{pmatrix}.$$ Матрица симметрична — в ортонормированном базисе это и означает самосопряжённость."
      }
    ],
    "answer": "$$A_e=\\frac{1}{13}\\begin{pmatrix}27&18\\\\18&12\\end{pmatrix}.$$"
  },
  {
    "id": "p107",
    "topic": "t4",
    "level": 2,
    "num": 107,
    "title": "Оператор векторного произведения $x\\mapsto[a,x]$ и сопряжённый к нему",
    "source": "Пример из лекции: оператор векторного произведения",
    "statement": "В пространстве $E^3$ фиксирован вектор $a=(1;2;2)$ и задан оператор $\\mathcal{A}x=[a,x]$. Найдите матрицу $A_e$ в стандартном ортонормированном базисе и сопряжённый оператор $\\mathcal{A}^*$.",
    "steps": [
      {
        "q": "Найти образы базисных векторов",
        "a": "Столбцы матрицы — это образы базисных векторов: $[a,e_1]=(0;2;-2)^T$, $[a,e_2]=(-2;0;1)^T$, $[a,e_3]=(2;-1;0)^T$."
      },
      {
        "q": "Записать матрицу",
        "a": "$$A_e=\\begin{pmatrix}0&-2&2\\\\2&0&-1\\\\-2&1&0\\end{pmatrix}.$$ Она кососимметрична — это видно сразу."
      },
      {
        "q": "Перейти к сопряжённому",
        "a": "Базис ортонормированный, поэтому матрица сопряжённого оператора — просто транспонированная: $A^*_e=A_e^{T}=-A_e$."
      }
    ],
    "answer": "$\\mathcal{A}^*=-\\mathcal{A}$ — оператор векторного умножения кососимметрический. Попутно: $\\operatorname{Ker}\\mathcal{A}=\\langle a\\rangle$, $\\operatorname{Im}\\mathcal{A}=a^{\\perp}$."
  },
  {
    "id": "p108",
    "topic": "t4",
    "level": 3,
    "num": 108,
    "title": "Сопряжённый к оператору дифференцирования в $P_1[x]$",
    "source": "Пример из лекции: дифференциальный оператор",
    "statement": "В пространстве $P_1[x]$ со скалярным произведением $(p,q)=\\displaystyle\\int_0^1 p(x)q(x)\\,dx$ задан оператор дифференцирования $\\mathcal{D}\\colon p\\mapsto p'$. Найдите матрицу $D^*_e$ сопряжённого оператора в базисе $e=(1,\\,x)$. Самосопряжён ли $\\mathcal{D}$?",
    "steps": [
      {
        "q": "Найти матрицу самого оператора",
        "a": "$\\mathcal{D}1=0$ и $\\mathcal{D}x=1$, поэтому $D_e=\\begin{pmatrix}0&1\\\\0&0\\end{pmatrix}$."
      },
      {
        "q": "Заметить, что базис не ортонормирован",
        "a": "Здесь нельзя просто транспонировать: $(1,x)=\\int_0^1 x\\,dx=\\tfrac12\\ne 0$. Нужна матрица Грама $$\\Gamma=\\begin{pmatrix}1&1/2\\\\1/2&1/3\\end{pmatrix}.$$"
      },
      {
        "q": "Применить формулу для произвольного базиса",
        "a": "$A^*_e=\\Gamma^{-1}A_e^{T}\\Gamma$, поэтому $$D^*_e=\\begin{pmatrix}4&-6\\\\-6&12\\end{pmatrix}\\begin{pmatrix}0&0\\\\1&0\\end{pmatrix}\\begin{pmatrix}1&1/2\\\\1/2&1/3\\end{pmatrix}=\\begin{pmatrix}-6&-3\\\\12&6\\end{pmatrix}.$$"
      },
      {
        "q": "Проверить результат",
        "a": "$(\\mathcal{D}x,\\,1)=\\int_0^1 1\\,dx=1$ и $(x,\\,\\mathcal{D}^*1)=\\int_0^1 x\\,(12x-6)\\,dx=4-3=1$ — совпадает."
      }
    ],
    "answer": "$D^*_e=\\begin{pmatrix}-6&-3\\\\12&6\\end{pmatrix}\\ne D_e$: оператор дифференцирования не самосопряжён."
  },
  {
    "id": "p109",
    "topic": "t5",
    "level": 2,
    "num": 109,
    "title": "Линейное многообразие в $P_4[x]$: $p(-1)=-p(1)$, $p'(1)=3$",
    "source": "Анно Е. И., «Задачи по линейной алгебре», ч. I, с. 86–87, пример 1",
    "statement": "В пространстве многочленов степени не выше четырёх задайте в параметрическом виде многообразие $H$, ограниченное условиями $p(-1)=-p(1)$ и $p'(1)=3$. Укажите его размерность.",
    "steps": [
      {
        "q": "Перевести условия в уравнения на коэффициенты",
        "a": "Пусть $p(x)=a_0+a_1x+a_2x^2+a_3x^3+a_4x^4$. Условие $p(-1)=-p(1)$ даёт $a_0-a_1+a_2-a_3+a_4=-a_0-a_1-a_2-a_3-a_4$, после сокращения — $a_0+a_2+a_4=0$. Условие $p'(1)=3$ даёт второе уравнение."
      },
      {
        "q": "Записать систему",
        "a": "$$\\begin{cases}a_0+a_2+a_4=0,\\\\[2pt] a_1+2a_2+3a_3+4a_4=3.\\end{cases}$$ Её ранг равен $2$, неизвестных пять, значит размерность многообразия $5-2=3$."
      },
      {
        "q": "Найти частное решение",
        "a": "Годится $c=(0;3;0;0;0)$, то есть многочлен $p_0(x)=3x$."
      },
      {
        "q": "Найти ФСР однородной системы",
        "a": "$$f_1=(1;2;-1;0;0),\\quad f_2=(0;3;0;-1;0),\\quad f_3=(1;4;0;0;-1),$$ им отвечают многочлены $p_1(x)=-x^2+2x+1$, $p_2(x)=-x^3+3x$, $p_3(x)=-x^4+4x+1$."
      }
    ],
    "answer": "$H=p_0(x)+L\\{p_1(x),\\,p_2(x),\\,p_3(x)\\}$, $\\;\\dim H=3$."
  },
  {
    "id": "p110",
    "topic": "t5",
    "level": 1,
    "num": 110,
    "title": "Точка прямой, равноудалённая от $M_1(3;4)$ и $M_2(0;-5)$",
    "source": "Анно Е. И., «Задачи по линейной алгебре», ч. I, с. 21, пример 6",
    "statement": "Найдите на прямой $L\\colon 2x+3y=6$ точку $M(x;y)$, равноудалённую от точек $M_1(3;4)$ и $M_2(0;-5)$.",
    "steps": [
      {
        "q": "Записать условие равноудалённости",
        "a": "Удобнее приравнять квадраты расстояний, чтобы не тащить корни: $|M_1M|^2=|M_2M|^2$."
      },
      {
        "q": "Составить систему",
        "a": "$$\\begin{cases}2x+3y=6,\\\\ (x-3)^2+(y-4)^2=x^2+(y+5)^2.\\end{cases}$$"
      },
      {
        "q": "Упростить второе уравнение",
        "a": "Раскрывая квадраты: $-6x-8y+25=10y+25$, то есть $x=-3y$. Это уравнение серединного перпендикуляра к отрезку $M_1M_2$."
      },
      {
        "q": "Подставить в уравнение прямой",
        "a": "$-6y+3y=6$, откуда $y=-2$ и $x=6$."
      }
    ],
    "answer": "$M(6;-2)$.",
    "figure": "<svg class=\"prax-fig\" viewBox=\"0 0 460 497\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Прямая L, точки M1 и M2 и равноудалённая от них точка M(6;−2) на прямой; пунктиром серединный перпендикуляр\">\n          <line x1=\"43.0\" y1=\"469.0\" x2=\"43.0\" y2=\"27.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"80.4\" y1=\"469.0\" x2=\"80.4\" y2=\"27.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"155.2\" y1=\"469.0\" x2=\"155.2\" y2=\"27.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"192.6\" y1=\"469.0\" x2=\"192.6\" y2=\"27.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"230.0\" y1=\"469.0\" x2=\"230.0\" y2=\"27.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"267.4\" y1=\"469.0\" x2=\"267.4\" y2=\"27.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"304.8\" y1=\"469.0\" x2=\"304.8\" y2=\"27.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"342.2\" y1=\"469.0\" x2=\"342.2\" y2=\"27.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"379.6\" y1=\"469.0\" x2=\"379.6\" y2=\"27.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"417.0\" y1=\"469.0\" x2=\"417.0\" y2=\"27.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"454.0\" x2=\"432.0\" y2=\"454.0\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"416.6\" x2=\"432.0\" y2=\"416.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"379.2\" x2=\"432.0\" y2=\"379.2\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"341.8\" x2=\"432.0\" y2=\"341.8\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"304.4\" x2=\"432.0\" y2=\"304.4\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"267.0\" x2=\"432.0\" y2=\"267.0\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"192.2\" x2=\"432.0\" y2=\"192.2\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"154.8\" x2=\"432.0\" y2=\"154.8\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"117.4\" x2=\"432.0\" y2=\"117.4\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"80.0\" x2=\"432.0\" y2=\"80.0\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"42.6\" x2=\"432.0\" y2=\"42.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"229.6\" x2=\"432.0\" y2=\"229.6\" stroke=\"var(--ink-soft)\" stroke-width=\"1.5\"/>\n          <polygon points=\"432.0,229.6 423.0,225.6 423.0,233.6\" fill=\"var(--ink-soft)\"/>\n          <line x1=\"117.8\" y1=\"469.0\" x2=\"117.8\" y2=\"27.6\" stroke=\"var(--ink-soft)\" stroke-width=\"1.5\"/>\n          <polygon points=\"117.8,27.6 113.8,36.6 121.8,36.6\" fill=\"var(--ink-soft)\"/>\n          <text x=\"428.0\" y=\"245.6\" font-size=\"12.5\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"end\" font-style=\"italic\">x</text>\n          <text x=\"125.8\" y=\"37.6\" font-size=\"12.5\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\">y</text>\n          <text x=\"112.8\" y=\"243.6\" font-size=\"11\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"end\">O</text>\n          <text x=\"43.0\" y=\"243.6\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">-2</text>\n          <text x=\"192.6\" y=\"243.6\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">2</text>\n          <text x=\"267.4\" y=\"243.6\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">4</text>\n          <text x=\"342.2\" y=\"243.6\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">6</text>\n          <text x=\"111.8\" y=\"458.0\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">-6</text>\n          <text x=\"111.8\" y=\"383.2\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">-4</text>\n          <text x=\"111.8\" y=\"308.4\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">-2</text>\n          <text x=\"111.8\" y=\"158.8\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">2</text>\n          <text x=\"111.8\" y=\"84.0\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">4</text>\n          <line x1=\"35.5\" y1=\"99.9\" x2=\"424.5\" y2=\"359.3\" stroke=\"var(--accent)\" stroke-width=\"2.6\"/>\n          <line x1=\"35.5\" y1=\"202.2\" x2=\"424.5\" y2=\"331.8\" stroke=\"var(--ink-mute)\" stroke-width=\"1.6\" stroke-dasharray=\"6 5\"/>\n          <line x1=\"342.2\" y1=\"304.4\" x2=\"230.0\" y2=\"80.0\" stroke=\"var(--ink-soft)\" stroke-width=\"1.5\" stroke-dasharray=\"3 4\"/>\n          <line x1=\"342.2\" y1=\"304.4\" x2=\"117.8\" y2=\"416.6\" stroke=\"var(--ink-soft)\" stroke-width=\"1.5\" stroke-dasharray=\"3 4\"/>\n          <line x1=\"280.7\" y1=\"194.9\" x2=\"291.5\" y2=\"189.5\" stroke=\"var(--ink)\" stroke-width=\"1.6\"/>\n          <line x1=\"232.7\" y1=\"365.9\" x2=\"227.3\" y2=\"355.1\" stroke=\"var(--ink)\" stroke-width=\"1.6\"/>\n          <circle cx=\"230.0\" cy=\"80.0\" r=\"3.6\" fill=\"var(--ink)\"/>\n          <circle cx=\"117.8\" cy=\"416.6\" r=\"3.6\" fill=\"var(--ink)\"/>\n          <circle cx=\"342.2\" cy=\"304.4\" r=\"4.6\" fill=\"var(--accent)\"/>\n          <text x=\"238.0\" y=\"74.0\" font-size=\"12.5\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\" font-weight=\"600\">M₁(3;4)</text>\n          <text x=\"127.8\" y=\"422.6\" font-size=\"12.5\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\" font-weight=\"600\">M₂(0;−5)</text>\n          <text x=\"352.2\" y=\"296.4\" font-size=\"12.5\" fill=\"var(--accent)\" font-family=\"inherit\" text-anchor=\"start\" font-weight=\"600\">M(6;−2)</text>\n          <text x=\"39.2\" y=\"88.9\" font-size=\"12.5\" fill=\"var(--accent)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\" font-weight=\"600\">L: 2x + 3y = 6</text>\n          <text x=\"312.3\" y=\"268.9\" font-size=\"11.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\">x = −3y</text>\n        </svg>"
  },
  {
    "id": "p111",
    "topic": "t5",
    "level": 2,
    "num": 111,
    "title": "Плоскость через точку $M_0(-1;1;-5)$ и прямую",
    "source": "Анно Е. И., «Задачи по линейной алгебре», ч. I, с. 26, пример 3",
    "statement": "Составьте общее уравнение плоскости, проходящей через точку $M_0(-1;1;-5)$ и прямую $L=(1;0;-2)+t\\,(1;-2;1)$.",
    "steps": [
      {
        "q": "Понять, чего не хватает",
        "a": "Для уравнения плоскости нужны точка и нормаль. Точка есть — это $M_0$. Обозначим координаты нормали $\\bar n\\{p;\\,q;\\,r\\}$."
      },
      {
        "q": "Найти два вектора в плоскости",
        "a": "Нормаль перпендикулярна любому вектору плоскости, в частности направляющему вектору прямой $\\bar a\\{1;-2;1\\}$ и вектору $M_0-(1;0;-2)=\\{-2;1;-3\\}$."
      },
      {
        "q": "Составить однородную систему",
        "a": "$$\\begin{cases}(\\bar a,\\,\\bar n)=p-2q+r=0,\\\\[2pt] \\big(M_0-(1;0;-2),\\,\\bar n\\big)=-2p+q-3r=0.\\end{cases}$$ Её решение определено с точностью до множителя — нормаль и не обязана быть единственной по длине."
      },
      {
        "q": "Найти нормаль и записать уравнение",
        "a": "Одно из решений $\\bar n\\{5;1;-3\\}$. Уравнение плоскости $(\\bar n,\\overrightarrow{OM})=(\\bar n,\\overrightarrow{OM_0})$."
      }
    ],
    "answer": "$5x+y-3z=11$.",
    "figure": "<svg class=\"prax-fig\" viewBox=\"0 0 460 232\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Плоскость через точку M0 и прямую L: нормаль n перпендикулярна направляющему вектору a и вектору M0 минус c\">\n          <polygon points=\"58,176 224,104 424,140 258,216\" fill=\"var(--bg-elev)\" fill-opacity=\"0.55\" stroke=\"var(--ink-soft)\" stroke-width=\"1.5\"/>\n          <text x=\"70\" y=\"208\" font-size=\"15\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\" font-weight=\"600\">L, M₀</text>\n          <line x1=\"96\" y1=\"172\" x2=\"392\" y2=\"126\" stroke=\"var(--accent)\" stroke-width=\"2.5\"/>\n          <polygon points=\"392,126 380,123 382,133\" fill=\"var(--accent)\"/>\n          <text x=\"398\" y=\"124\" font-size=\"14\" fill=\"var(--accent)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\" font-weight=\"600\">L</text>\n          <circle cx=\"168\" cy=\"161\" r=\"3.8\" fill=\"var(--ink)\"/>\n          <text x=\"120\" y=\"150\" font-size=\"12\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\">(1;0;−2)</text>\n          <line x1=\"238\" y1=\"150\" x2=\"310\" y2=\"139\" stroke=\"var(--ink)\" stroke-width=\"2\"/>\n          <polygon points=\"310,139 298,136 300,146\" fill=\"var(--ink)\"/>\n          <text x=\"262\" y=\"136\" font-size=\"12\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\">a(1;−2;1)</text>\n          <circle cx=\"316\" cy=\"196\" r=\"3.8\" fill=\"var(--ink)\"/>\n          <text x=\"326\" y=\"202\" font-size=\"12\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\">M₀(−1;1;−5)</text>\n          <line x1=\"168\" y1=\"161\" x2=\"316\" y2=\"196\" stroke=\"var(--ink-mute)\" stroke-width=\"1.5\" stroke-dasharray=\"5 4\"/>\n          <text x=\"216\" y=\"190\" font-size=\"11.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\">M₀ − c</text>\n          <line x1=\"252\" y1=\"158\" x2=\"252\" y2=\"52\" stroke=\"var(--ink)\" stroke-width=\"2\"/>\n          <polygon points=\"252,52 247,64 257,64\" fill=\"var(--ink)\"/>\n          <circle cx=\"252\" cy=\"158\" r=\"2.6\" fill=\"var(--ink)\"/>\n          <text x=\"260\" y=\"62\" font-size=\"12.5\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\" font-weight=\"600\">n(5;1;−3)</text>\n        </svg>"
  },
  {
    "id": "p112",
    "topic": "t5",
    "level": 1,
    "num": 112,
    "title": "Направляющий вектор прямой, заданной пересечением плоскостей",
    "source": "Анно Е. И., «Задачи по линейной алгебре», ч. I, с. 27, пример 5",
    "statement": "Найдите направляющий вектор прямой $$L\\colon\\begin{cases}2x-5y+3z=3,\\\\ -3x+5y-2z=-2,\\end{cases}$$ и укажите её параметрическое и каноническое представления.",
    "steps": [
      {
        "q": "Взять точку на прямой",
        "a": "Годится любое частное решение системы — например, $(-1;-1;0)$."
      },
      {
        "q": "Найти направляющий вектор",
        "a": "Это решение соответствующей однородной системы $$\\begin{cases}2x-5y+3z=0,\\\\ -3x+5y-2z=0.\\end{cases}$$ Сложив уравнения, получим $-x+z=0$, то есть $z=x$; тогда из первого $5x-5y=0$, то есть $y=x$."
      },
      {
        "q": "Записать оба представления",
        "a": "Направляющий вектор $a(1;1;1)$, параметрически $L=(-1;-1;0)+t\\,(1;1;1)$."
      }
    ],
    "answer": "$$L\\colon\\ \\frac{x+1}{1}=\\frac{y+1}{1}=\\frac{z}{1}.$$",
    "figure": "<svg class=\"prax-fig\" viewBox=\"0 0 460 226\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Две плоскости пересекаются по прямой L с направляющим вектором a(1;1;1) и точкой c(−1;−1;0)\">\n          <polygon points=\"44,64 236,36 320,168 128,196\" fill=\"var(--bg-elev)\" fill-opacity=\"0.5\" stroke=\"var(--ink-soft)\" stroke-width=\"1.5\"/>\n          <polygon points=\"150,38 428,78 344,206 66,166\" fill=\"var(--bg-elev)\" fill-opacity=\"0.5\" stroke=\"var(--ink-soft)\" stroke-width=\"1.5\"/>\n          <text x=\"58\" y=\"60\" font-size=\"12\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\">π₁: 2x−5y+3z=3</text>\n          <text x=\"316\" y=\"66\" font-size=\"12\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\">π₂: −3x+5y−2z=−2</text>\n          <line x1=\"196\" y1=\"44\" x2=\"266\" y2=\"192\" stroke=\"var(--accent)\" stroke-width=\"2.8\"/>\n          <polygon points=\"266,192 254,186 262,180\" fill=\"var(--accent)\"/>\n          <text x=\"272\" y=\"196\" font-size=\"14.5\" fill=\"var(--accent)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\" font-weight=\"600\">L</text>\n          <line x1=\"214\" y1=\"82\" x2=\"238\" y2=\"133\" stroke=\"var(--ink)\" stroke-width=\"2.2\"/>\n          <polygon points=\"238,133 227,128 234,122\" fill=\"var(--ink)\"/>\n          <text x=\"244\" y=\"108\" font-size=\"12.5\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\" font-weight=\"600\">a(1;1;1)</text>\n          <circle cx=\"228\" cy=\"112\" r=\"4\" fill=\"var(--ink)\"/>\n          <text x=\"148\" y=\"122\" font-size=\"12\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\">c(−1;−1;0)</text>\n        </svg>"
  },
  {
    "id": "p113",
    "topic": "t6",
    "level": 2,
    "num": 113,
    "title": "Эллипс $4x^2+3y^2-8x+12y-32=0$",
    "source": "Лунгу К. Н., «Сборник задач по высшей математике», ч. I, с. 152, задача 4.3.27",
    "statement": "Показать, что уравнение $4x^2+3y^2-8x+12y-32=0$ определяет эллипс; найти его оси, координаты центра и эксцентриситет.",
    "steps": [
      {
        "q": "Выделить полные квадраты",
        "a": "$$4(x^2-2x)+3(y^2+4y)=32\\;\\Rightarrow\\;4(x-1)^2+3(y+2)^2=48\\;\\Rightarrow\\;\\frac{(x-1)^2}{12}+\\frac{(y+2)^2}{16}=1.$$"
      },
      {
        "q": "Прочитать параметры",
        "a": "Центр $C(1;-2)$; $a^2=12$, $b^2=16$, то есть полуоси $a=2\\sqrt3$ вдоль $Ox$ и $b=4$ вдоль $Oy$. Так как $b>a$, большая ось направлена по $Oy$ — на это легко попасться."
      },
      {
        "q": "Найти фокусы и эксцентриситет",
        "a": "$c=\\sqrt{b^2-a^2}=2$, фокусы $F_1(1;0)$ и $F_2(1;-4)$, эксцентриситет $\\varepsilon=\\dfrac{c}{b}=\\dfrac12$."
      },
      {
        "q": "Проверить через инварианты",
        "a": "$I_2=\\begin{vmatrix}4&0\\\\0&3\\end{vmatrix}=12>0$, $K_3=\\begin{vmatrix}4&0&-4\\\\0&3&6\\\\-4&6&-32\\end{vmatrix}=-576\\ne0$, $I_1=7$, значит $I_1K_3<0$ — эллипс. Каноническое уравнение $\\lambda_1x'^2+\\lambda_2y'^2+\\dfrac{K_3}{I_2}=0$ даёт $4x'^2+3y'^2=48$ — тот же результат."
      }
    ],
    "answer": "Центр $C(1;-2)$, оси $2a=4\\sqrt3$ и $2b=8$, эксцентриситет $\\varepsilon=\\tfrac12$.",
    "figure": "<svg class=\"prax-fig\" viewBox=\"0 0 440 483\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Эллипс с центром C(1;−2), большой осью вдоль Oy, фокусами F1(1;0) и F2(1;−4)\">\n          <line x1=\"45.1\" y1=\"455.0\" x2=\"45.1\" y2=\"28.3\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"87.7\" y1=\"455.0\" x2=\"87.7\" y2=\"28.3\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"130.4\" y1=\"455.0\" x2=\"130.4\" y2=\"28.3\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"215.7\" y1=\"455.0\" x2=\"215.7\" y2=\"28.3\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"258.4\" y1=\"455.0\" x2=\"258.4\" y2=\"28.3\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"301.1\" y1=\"455.0\" x2=\"301.1\" y2=\"28.3\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"343.7\" y1=\"455.0\" x2=\"343.7\" y2=\"28.3\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"386.4\" y1=\"455.0\" x2=\"386.4\" y2=\"28.3\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"416.6\" x2=\"412.0\" y2=\"416.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"373.9\" x2=\"412.0\" y2=\"373.9\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"331.3\" x2=\"412.0\" y2=\"331.3\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"288.6\" x2=\"412.0\" y2=\"288.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"245.9\" x2=\"412.0\" y2=\"245.9\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"203.3\" x2=\"412.0\" y2=\"203.3\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"117.9\" x2=\"412.0\" y2=\"117.9\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"75.3\" x2=\"412.0\" y2=\"75.3\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"32.6\" x2=\"412.0\" y2=\"32.6\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n          <line x1=\"28.0\" y1=\"160.6\" x2=\"412.0\" y2=\"160.6\" stroke=\"var(--ink-soft)\" stroke-width=\"1.5\"/>\n          <polygon points=\"412.0,160.6 403.0,156.6 403.0,164.6\" fill=\"var(--ink-soft)\"/>\n          <line x1=\"173.1\" y1=\"455.0\" x2=\"173.1\" y2=\"28.3\" stroke=\"var(--ink-soft)\" stroke-width=\"1.5\"/>\n          <polygon points=\"173.1,28.3 169.1,37.3 177.1,37.3\" fill=\"var(--ink-soft)\"/>\n          <text x=\"408.0\" y=\"176.6\" font-size=\"12.5\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"end\" font-style=\"italic\">x</text>\n          <text x=\"181.1\" y=\"38.3\" font-size=\"12.5\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\">y</text>\n          <text x=\"168.1\" y=\"174.6\" font-size=\"11\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"end\">O</text>\n          <text x=\"87.7\" y=\"174.6\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">-2</text>\n          <text x=\"258.4\" y=\"174.6\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">2</text>\n          <text x=\"343.7\" y=\"174.6\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"middle\">4</text>\n          <text x=\"167.1\" y=\"420.6\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">-6</text>\n          <text x=\"167.1\" y=\"335.3\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">-4</text>\n          <text x=\"167.1\" y=\"249.9\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">-2</text>\n          <text x=\"167.1\" y=\"79.3\" font-size=\"10.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"end\">2</text>\n          <line x1=\"215.7\" y1=\"442.2\" x2=\"215.7\" y2=\"49.7\" stroke=\"var(--ink-mute)\" stroke-width=\"1.4\" stroke-dasharray=\"6 5\"/>\n          <line x1=\"46.6\" y1=\"245.9\" x2=\"384.9\" y2=\"245.9\" stroke=\"var(--ink-mute)\" stroke-width=\"1.4\" stroke-dasharray=\"6 5\"/>\n          <ellipse cx=\"215.7\" cy=\"245.9\" rx=\"147.8\" ry=\"170.7\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"2.6\"/>\n          <circle cx=\"215.7\" cy=\"245.9\" r=\"4\" fill=\"var(--ink)\"/>\n          <text x=\"224.7\" y=\"238.9\" font-size=\"12.5\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\" font-weight=\"600\">C(1;−2)</text>\n          <circle cx=\"215.7\" cy=\"160.6\" r=\"3.4\" fill=\"var(--ink-soft)\"/>\n          <circle cx=\"215.7\" cy=\"331.3\" r=\"3.4\" fill=\"var(--ink-soft)\"/>\n          <text x=\"224.7\" y=\"164.6\" font-size=\"12.5\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"start\">F₁(1;0)</text>\n          <text x=\"224.7\" y=\"335.3\" font-size=\"12.5\" fill=\"var(--ink-soft)\" font-family=\"inherit\" text-anchor=\"start\">F₂(1;−4)</text>\n          <circle cx=\"215.7\" cy=\"75.3\" r=\"2.6\" fill=\"var(--ink-mute)\"/>\n          <circle cx=\"215.7\" cy=\"416.6\" r=\"2.6\" fill=\"var(--ink-mute)\"/>\n          <circle cx=\"67.9\" cy=\"245.9\" r=\"2.6\" fill=\"var(--ink-mute)\"/>\n          <circle cx=\"363.5\" cy=\"245.9\" r=\"2.6\" fill=\"var(--ink-mute)\"/>\n          <text x=\"157.7\" y=\"75.3\" font-size=\"11.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\">b = 4</text>\n          <text x=\"339.5\" y=\"265.9\" font-size=\"11.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\">a = 2√3</text>\n        </svg>"
  },
  {
    "id": "p114",
    "topic": "t6",
    "level": 3,
    "num": 114,
    "title": "Касательная плоскость к гиперболическому параболоиду: две прямые",
    "source": "Лунгу К. Н., «Сборник задач по высшей математике», ч. I, с. 220–221, задача 5.5.17",
    "statement": "Дан гиперболический параболоид $x^2-\\dfrac{y^2}{4}=z$ и одна из его касательных плоскостей $10x-2y-z-21=0$. Найдите уравнения двух прямых, по которым плоскость пересекает параболоид.",
    "steps": [
      {
        "q": "Исключить одну переменную",
        "a": "Точки линии пересечения удовлетворяют обоим уравнениям. Подставим $z=10x-2y-21$ в уравнение параболоида: $$x^2-\\frac{y^2}{4}=10x-2y-21\\;\\Leftrightarrow\\;4x^2-y^2-40x+8y+84=0.$$"
      },
      {
        "q": "Разложить на множители",
        "a": "$$4x^2-y^2-40x+8y+84=(2x-y-6)(2x+y-14)=0.$$ Произведение равно нулю — значит линия пересечения распадается на две прямые."
      },
      {
        "q": "Выписать прямые системами",
        "a": "$$L_1\\colon\\begin{cases}10x-2y-z=21,\\\\ 2x-y=6,\\end{cases}\\qquad L_2\\colon\\begin{cases}10x-2y-z=21,\\\\ 2x+y=14.\\end{cases}$$"
      },
      {
        "q": "Привести к каноническому виду",
        "a": "Для $L_1$ возьмём две точки: при $z=0$ — $M_1\\!\\left(\\tfrac32;-3;0\\right)$, при $y=0$ — $M_2(3;0;9)$; направляющий вектор $\\overrightarrow{M_1M_2}=\\tfrac32(1;2;6)$. Для $L_2$ направляющий вектор проще найти как векторное произведение нормалей: $(10;-2;-1)\\times(2;1;0)=(1;-2;14)$."
      }
    ],
    "answer": "$$L_1\\colon\\ \\frac{x-3}{1}=\\frac{y}{2}=\\frac{z-9}{6},\\qquad L_2\\colon\\ \\frac{x-5}{1}=\\frac{y-4}{-2}=\\frac{z-21}{14}.$$ Обе проходят через точку касания $M(5;4;21)$ — это прямолинейные образующие параболоида.",
    "figure": "<svg class=\"prax-fig\" viewBox=\"0 0 460 232\" xmlns=\"http://www.w3.org/2000/svg\" role=\"img\" aria-label=\"Гиперболический параболоид, касательная плоскость и две прямые L1 и L2, по которым она пересекает поверхность; точка касания M(5;4;21)\">\n          <path d=\"M 92 74 Q 230 146 368 74\" fill=\"none\" stroke=\"var(--ink-soft)\" stroke-width=\"1.7\"/>\n          <path d=\"M 62 128 Q 230 212 398 128\" fill=\"none\" stroke=\"var(--ink-soft)\" stroke-width=\"1.7\"/>\n          <path d=\"M 92 74 Q 42 94 62 128\" fill=\"none\" stroke=\"var(--ink-soft)\" stroke-width=\"1.7\"/>\n          <path d=\"M 368 74 Q 418 94 398 128\" fill=\"none\" stroke=\"var(--ink-soft)\" stroke-width=\"1.7\"/>\n          <path d=\"M 77 101 Q 230 180 383 101\" fill=\"none\" stroke=\"var(--ink-mute)\" stroke-width=\"1.2\" stroke-dasharray=\"5 4\"/>\n          <path d=\"M 230 110 Q 218 138 230 170\" fill=\"none\" stroke=\"var(--ink-mute)\" stroke-width=\"1.2\" stroke-dasharray=\"5 4\"/>\n          <polygon points=\"96,104 348,88 364,178 112,194\" fill=\"var(--bg-elev)\" fill-opacity=\"0.4\" stroke=\"var(--ink-mute)\" stroke-width=\"1.2\" stroke-dasharray=\"6 5\"/>\n          <text x=\"120\" y=\"118\" font-size=\"11.5\" fill=\"var(--ink-mute)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\">π: 10x−2y−z=21</text>\n          <line x1=\"112\" y1=\"180\" x2=\"352\" y2=\"98\" stroke=\"var(--accent)\" stroke-width=\"2.5\"/>\n          <line x1=\"112\" y1=\"98\" x2=\"352\" y2=\"180\" stroke=\"var(--accent)\" stroke-width=\"2.5\"/>\n          <text x=\"358\" y=\"96\" font-size=\"13.5\" fill=\"var(--accent)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\" font-weight=\"600\">L₁</text>\n          <text x=\"358\" y=\"188\" font-size=\"13.5\" fill=\"var(--accent)\" font-family=\"inherit\" text-anchor=\"start\" font-style=\"italic\" font-weight=\"600\">L₂</text>\n          <circle cx=\"232\" cy=\"139\" r=\"4.4\" fill=\"var(--ink)\"/>\n          <text x=\"240\" y=\"158\" font-size=\"12.5\" fill=\"var(--ink)\" font-family=\"inherit\" text-anchor=\"start\" font-weight=\"600\">M(5;4;21)</text>\n        </svg>"
  },
  {
    "id": "n201",
    "topic": "t2",
    "level": 2,
    "num": 201,
    "title": "Корни четвёртой степени из $z_0=-8+8\\sqrt{3}\\,i$",
    "source": "Авторская задача; тип — Анно Е. И., ч. I, гл. XI «Комплексные числа»",
    "statement": "Найдите в тригонометрической форме все корни четвёртой степени из числа $z_0=-8+8\\sqrt{3}\\,i$ и укажите тот из них, который лежит в первой четверти.",
    "steps": [
      {
        "q": "Модуль и аргумент",
        "a": "$|z_0|=\\sqrt{64+192}=\\sqrt{256}=16$. Точка $(-8;8\\sqrt3)$ во второй четверти, $\\operatorname{tg}\\varphi=-\\sqrt3$, поэтому $\\varphi=\\pi-\\dfrac{\\pi}{3}=\\dfrac{2\\pi}{3}$."
      },
      {
        "q": "Формула корней из лекции",
        "a": "$$w_k=\\sqrt[n]{r}\\left(\\cos\\frac{\\varphi+2\\pi k}{n}+i\\sin\\frac{\\varphi+2\\pi k}{n}\\right),\\qquad k=0,\\dots,n-1.$$ Здесь $n=4$, $\\sqrt[4]{16}=2$, а аргументы образуют арифметическую прогрессию с шагом $\\dfrac{2\\pi}{4}=\\dfrac{\\pi}{2}$."
      },
      {
        "q": "Выписать все четыре корня",
        "a": "$$w_k=2\\left(\\cos\\Bigl(\\frac{\\pi}{6}+\\frac{\\pi k}{2}\\Bigr)+i\\sin\\Bigl(\\frac{\\pi}{6}+\\frac{\\pi k}{2}\\Bigr)\\right),\\qquad k=0,1,2,3.$$ Аргументы: $\\dfrac{\\pi}{6},\\ \\dfrac{2\\pi}{3},\\ \\dfrac{7\\pi}{6},\\ \\dfrac{5\\pi}{3}$ — корни делят окружность радиуса $2$ на четыре равные части."
      },
      {
        "q": "Выбрать нужный",
        "a": "В первой четверти лежит аргумент $\\dfrac{\\pi}{6}$, то есть $k=0$."
      }
    ],
    "answer": "$$w_0=2\\left(\\cos\\frac{\\pi}{6}+i\\sin\\frac{\\pi}{6}\\right)=\\sqrt3+i.$$"
  },
  {
    "id": "n202",
    "topic": "t2",
    "level": 2,
    "num": 202,
    "title": "Вычисление $\\dfrac{(1+i)^{10}}{(\\sqrt3-i)^{6}}$",
    "source": "Авторская задача; тип — задание 6 демонстрационного билета В3",
    "statement": "Вычислите $$\\frac{(1+i)^{10}}{(\\sqrt3-i)^{6}}.$$",
    "steps": [
      {
        "q": "Перевести основания в тригонометрическую форму",
        "a": "$1+i=\\sqrt2\\left(\\cos\\dfrac{\\pi}{4}+i\\sin\\dfrac{\\pi}{4}\\right)$, $\\;\\sqrt3-i=2\\left(\\cos\\left(-\\dfrac{\\pi}{6}\\right)+i\\sin\\left(-\\dfrac{\\pi}{6}\\right)\\right)$."
      },
      {
        "q": "Возвести в степень по формуле Муавра",
        "a": "$$(1+i)^{10}=(\\sqrt2)^{10}\\left(\\cos\\frac{10\\pi}{4}+i\\sin\\frac{10\\pi}{4}\\right)=32\\left(\\cos\\frac{\\pi}{2}+i\\sin\\frac{\\pi}{2}\\right)=32i,$$ $$(\\sqrt3-i)^{6}=2^{6}\\bigl(\\cos(-\\pi)+i\\sin(-\\pi)\\bigr)=-64.$$ Здесь мы пользуемся тем, что аргумент определён с точностью до $2\\pi$: $\\tfrac{10\\pi}{4}=\\tfrac{5\\pi}{2}$ и $\\tfrac{\\pi}{2}$ дают одну точку."
      },
      {
        "q": "Разделить",
        "a": "$$\\frac{32i}{-64}=-\\frac{i}{2}.$$"
      }
    ],
    "answer": "$-\\dfrac{i}{2}$."
  },
  {
    "id": "n203",
    "topic": "t2",
    "level": 1,
    "num": 203,
    "title": "ГМТ: $|z-1+2i|=|z+3|$",
    "source": "Авторская задача; тип — Анно Е. И., ч. I, гл. XI «Комплексные числа»",
    "statement": "Изобразите на плоскости множество точек $z=x+yi$, для которых $|z-1+2i|=|z+3|$.",
    "steps": [
      {
        "q": "Понять геометрический смысл",
        "a": "$|z-z_1|$ — расстояние от точки $z$ до точки $z_1$. Условие означает, что $z$ равноудалена от точек $z_1=1-2i$ и $z_2=-3$, то есть лежит на серединном перпендикуляре к отрезку между ними."
      },
      {
        "q": "Перейти к координатам",
        "a": "$z-1+2i=(x-1)+(y+2)i$, $\\;z+3=(x+3)+yi$. Возведём обе части в квадрат: $$(x-1)^2+(y+2)^2=(x+3)^2+y^2.$$"
      },
      {
        "q": "Упростить",
        "a": "Квадратичные члены сокращаются: $-2x+1+4y+4=6x+9$, то есть $-8x+4y-4=0$."
      }
    ],
    "answer": "Прямая $y=2x+1$."
  },
  {
    "id": "n204",
    "topic": "t3",
    "level": 1,
    "num": 204,
    "title": "Остаток от деления на $(x-1)(x+2)$",
    "source": "Авторская задача; тип — Анно Е. И., ч. I, гл. XII «Многочлены»",
    "statement": "Многочлен $P(x)$ при делении на $x-1$ даёт остаток $3$, а при делении на $x+2$ — остаток $-3$. Найдите остаток от деления $P(x)$ на $(x-1)(x+2)$.",
    "steps": [
      {
        "q": "Вид остатка",
        "a": "$P(x)=S(x)(x-1)(x+2)+R(x)$, где $\\deg R<2$, значит $R(x)=kx+b$."
      },
      {
        "q": "Значения в корнях делителя",
        "a": "По теореме Безу $P(1)=3$ и $P(-2)=-3$. В точках $1$ и $-2$ слагаемое с $(x-1)(x+2)$ обращается в нуль, поэтому $R(1)=3$, $R(-2)=-3$."
      },
      {
        "q": "Решить систему",
        "a": "$$\\begin{cases}k+b=3,\\\\ -2k+b=-3.\\end{cases}$$ Вычитая, получаем $3k=6$, то есть $k=2$, $b=1$."
      }
    ],
    "answer": "$R(x)=2x+1$."
  },
  {
    "id": "n205",
    "topic": "t3",
    "level": 2,
    "num": 205,
    "title": "Кратный корень $x_0=-1$ у $x^4+ax^3+bx^2-x-2$",
    "source": "Авторская задача; тип — Анно Е. И., ч. I, гл. XII «Многочлены»",
    "statement": "При каких $a$ и $b$ число $x_0=-1$ является корнем многочлена $P(x)=x^4+ax^3+bx^2-x-2$ кратности не меньше $2$?",
    "steps": [
      {
        "q": "Критерий",
        "a": "Кратность корня больше $1$ равносильна тому, что $P(x_0)=0$ и $P'(x_0)=0$."
      },
      {
        "q": "Подставить",
        "a": "$P'(x)=4x^3+3ax^2+2bx-1$. При $x=-1$: $$\\begin{cases}1-a+b+1-2=0,\\\\ -4+3a-2b-1=0,\\end{cases}\\qquad\\text{то есть}\\qquad\\begin{cases}-a+b=0,\\\\ 3a-2b=5.\\end{cases}$$"
      },
      {
        "q": "Решить",
        "a": "Из первого $b=a$, подстановка во второе даёт $a=5$, значит $b=5$."
      },
      {
        "q": "Уточнить кратность",
        "a": "$P''(x)=12x^2+6ax+2b$, $P''(-1)=12-30+10=-8\\ne0$ — кратность ровно $2$."
      }
    ],
    "answer": "$a=5$, $b=5$; кратность корня равна $2$."
  },
  {
    "id": "n206",
    "topic": "t3",
    "level": 3,
    "num": 206,
    "title": "НОД алгоритмом Евклида и его линейное представление",
    "source": "Авторская задача; тип — задание 7 демонстрационного билета В14",
    "statement": "Для $f(x)=x^3+2x^2-x-2$ и $g(x)=x^3-3x^2-x+3$ найдите наибольший общий делитель и подберите многочлены $M(x)$, $N(x)$, для которых $f(x)M(x)+g(x)N(x)=\\varphi(x)$, где $\\varphi$ — этот НОД.",
    "steps": [
      {
        "q": "Первый шаг алгоритма Евклида",
        "a": "Степени равны, поэтому делим $f$ на $g$: частное $1$, остаток $$r_1(x)=f(x)-g(x)=5x^2-5=5(x^2-1).$$"
      },
      {
        "q": "Второй шаг",
        "a": "Делим $g$ на $x^2-1$ (числовой множитель $5$ на НОД не влияет): $$x^3-3x^2-x+3=(x^2-1)(x-3),$$ остаток нулевой. Значит алгоритм закончен."
      },
      {
        "q": "Выписать НОД",
        "a": "$\\varphi(x)=x^2-1$ — последний ненулевой остаток, нормированный на старший коэффициент $1$."
      },
      {
        "q": "Собрать линейное представление",
        "a": "Из первого шага $x^2-1=\\dfrac{1}{5}\\bigl(f(x)-g(x)\\bigr)$, то есть $M(x)=\\dfrac15$, $N(x)=-\\dfrac15$."
      }
    ],
    "answer": "$\\varphi(x)=x^2-1$, $\\;M(x)=\\tfrac15$, $\\;N(x)=-\\tfrac15$."
  },
  {
    "id": "n207",
    "topic": "t4",
    "level": 3,
    "num": 207,
    "title": "ЖНФ и жорданов базис для матрицы с одним собственным значением",
    "source": "Авторская задача; тип — задание 8 демонстрационного билета В3",
    "statement": "Найдите жорданову нормальную форму и жорданов базис для матрицы $$A=\\begin{pmatrix}4&1&1\\\\-2&1&-2\\\\1&1&4\\end{pmatrix}.$$",
    "steps": [
      {
        "q": "Найти собственное значение",
        "a": "Характеристический многочлен $\\chi_A(t)=(t-3)^3$, то есть $\\lambda=3$ — единственное собственное значение алгебраической кратности $3$."
      },
      {
        "q": "Изучить $B=A-3E$",
        "a": "$$B=\\begin{pmatrix}1&1&1\\\\-2&-2&-2\\\\1&1&1\\end{pmatrix}.$$ Все строки пропорциональны $(1;1;1)$, поэтому $\\operatorname{rg}B=1$ и $B^2=0$."
      },
      {
        "q": "Определить структуру клеток",
        "a": "$\\dim\\operatorname{Ker}B=3-1=2$ — клеток две. Из $B^2=0$ длины цепочек не больше $2$, значит $$J=J_2(3)\\oplus J_1(3).$$"
      },
      {
        "q": "Построить цепочку длины 2",
        "a": "$\\operatorname{Im}B=\\langle(1;-2;1)^T\\rangle$. Берём $e_1^{(1)}=(1;-2;1)^T$ и ищем присоединённый из $B\\,e_1^{(2)}=e_1^{(1)}$, то есть $u_1+u_2+u_3=1$: подходит $e_1^{(2)}=(1;0;0)^T$."
      },
      {
        "q": "Добавить цепочку длины 1",
        "a": "$\\operatorname{Ker}B$ порождён векторами $(-1;1;0)^T$ и $(-1;0;1)^T$. Берём любой, не лежащий в $\\operatorname{Im}B$, например $e_2^{(1)}=(-1;1;0)^T$."
      }
    ],
    "answer": "$$C=\\begin{pmatrix}1&1&-1\\\\-2&0&1\\\\1&0&0\\end{pmatrix},\\qquad J=\\begin{pmatrix}3&1&0\\\\0&3&0\\\\0&0&3\\end{pmatrix}.$$"
  },
  {
    "id": "n208",
    "topic": "t4",
    "level": 2,
    "num": 208,
    "title": "Собственные значения и корневые подпространства",
    "source": "Авторская задача; тип — задание 8 демонстрационного билета В14",
    "statement": "Найдите собственные значения и корневые подпространства линейного оператора, заданного матрицей $$A=\\begin{pmatrix}3&-1&0\\\\1&1&0\\\\0&0&5\\end{pmatrix}.$$",
    "steps": [
      {
        "q": "Характеристический многочлен",
        "a": "Матрица клеточно-диагональна, поэтому $\\chi_A(t)=\\bigl((t-3)(t-1)+1\\bigr)(t-5)=(t-2)^2(t-5)$. Собственные значения: $\\lambda_1=2$ кратности $2$ и $\\lambda_2=5$ кратности $1$."
      },
      {
        "q": "Сравнить кратности для $\\lambda_1=2$",
        "a": "$\\operatorname{rg}(A-2E)=2$, значит геометрическая кратность равна $3-2=1$, а алгебраическая — $2$. Они не совпадают, поэтому оператор не диагонализируем и корневое подпространство шире собственного."
      },
      {
        "q": "Найти корневое подпространство $K_2$",
        "a": "$\\operatorname{Ker}(A-2E)=\\langle(1;1;0)^T\\rangle$, а $\\operatorname{Ker}(A-2E)^2=\\langle(1;0;0)^T,\\,(0;1;0)^T\\rangle$ — размерность выросла до $2$ и совпала с алгебраической кратностью, дальше расти некуда."
      },
      {
        "q": "Найти $K_5$",
        "a": "Для простого собственного значения корневое подпространство совпадает с собственным: $K_5=\\operatorname{Ker}(A-5E)=\\langle(0;0;1)^T\\rangle$."
      }
    ],
    "answer": "$K_2=\\langle(1;0;0)^T,(0;1;0)^T\\rangle$ размерности $2$, $\\;K_5=\\langle(0;0;1)^T\\rangle$ размерности $1$; $\\;V=K_2\\oplus K_5$."
  },
  {
    "id": "n209",
    "topic": "t4",
    "level": 2,
    "num": 209,
    "title": "Сопряжённый оператор в ортонормированном базисе",
    "source": "Авторская задача; тип — пример из лекции об операторах в евклидовом пространстве",
    "statement": "В $E^3$ оператор задан в ортонормированном базисе матрицей $$A=\\begin{pmatrix}1&2&0\\\\0&1&-3\\\\2&0&1\\end{pmatrix}.$$ Найдите матрицу сопряжённого оператора, проверьте, является ли оператор самосопряжённым, и вычислите $(\\mathcal{A}e_1,\\,e_3)$ и $(e_1,\\,\\mathcal{A}^*e_3)$.",
    "steps": [
      {
        "q": "Использовать ортонормированность",
        "a": "В ортонормированном базисе матрица Грама единичная, поэтому общая формула $A^*=\\Gamma^{-1}A^{\\top}\\Gamma$ вырождается в простое транспонирование: $A^*=A^{\\top}$."
      },
      {
        "q": "Выписать матрицу",
        "a": "$$A^*=\\begin{pmatrix}1&0&2\\\\2&1&0\\\\0&-3&1\\end{pmatrix}.$$"
      },
      {
        "q": "Проверить самосопряжённость",
        "a": "$A^*\\ne A$ (например, $a_{12}=2$, а $a_{21}=0$), значит оператор не самосопряжён."
      },
      {
        "q": "Проверить определение",
        "a": "$\\mathcal{A}e_1=(1;0;2)^T$, поэтому $(\\mathcal{A}e_1,e_3)=2$. С другой стороны, $\\mathcal{A}^*e_3=(2;0;1)^T$, поэтому $(e_1,\\mathcal{A}^*e_3)=2$ — равенство $(\\mathcal{A}x,y)=(x,\\mathcal{A}^*y)$ выполняется."
      }
    ],
    "answer": "$A^*=A^{\\top}$; оператор не самосопряжён; обе величины равны $2$."
  },
  {
    "id": "n210",
    "topic": "t5",
    "level": 1,
    "num": 210,
    "title": "Уравнение плоскости через три точки",
    "source": "Авторская задача; тип — Анно Е. И., ч. I, гл. III «Аналитическая геометрия в пространстве»",
    "statement": "Составьте общее уравнение плоскости, проходящей через точки $M_1(1;2;0)$, $M_2(2;0;3)$, $M_3(0;1;1)$.",
    "steps": [
      {
        "q": "Найти два вектора в плоскости",
        "a": "$\\overrightarrow{M_1M_2}=(1;-2;3)$, $\\;\\overrightarrow{M_1M_3}=(-1;-1;1)$. Они не коллинеарны, значит точки не лежат на одной прямой и плоскость определена однозначно."
      },
      {
        "q": "Найти нормаль",
        "a": "Нормаль перпендикулярна обоим векторам — это их векторное произведение: $$\\bar n=\\overrightarrow{M_1M_2}\\times\\overrightarrow{M_1M_3}=(1;-4;-3).$$"
      },
      {
        "q": "Записать уравнение",
        "a": "$(\\bar n,\\overrightarrow{M_1M})=0$, то есть $1\\cdot(x-1)-4(y-2)-3(z-0)=0$."
      },
      {
        "q": "Проверить",
        "a": "Подставим $M_2$: $2-0-9+7=0$; подставим $M_3$: $0-4-3+7=0$. Обе точки лежат в плоскости."
      }
    ],
    "answer": "$x-4y-3z+7=0$."
  },
  {
    "id": "n211",
    "topic": "t5",
    "level": 2,
    "num": 211,
    "title": "Взаимное расположение прямой и плоскости",
    "source": "Авторская задача; тип — задание 9 демонстрационного билета В14",
    "statement": "Установите, лежит ли прямая $$\\frac{x-1}{2}=\\frac{y+1}{-1}=\\frac{z}{3}$$ в плоскости $x+2y+z-5=0$, параллельна ей или пересекает её; в последнем случае найдите точку пересечения.",
    "steps": [
      {
        "q": "Выписать данные",
        "a": "Направляющий вектор прямой $\\bar a=(2;-1;3)$, точка на ней $M_0(1;-1;0)$; нормаль плоскости $\\bar n=(1;2;1)$."
      },
      {
        "q": "Проверить параллельность",
        "a": "Прямая параллельна плоскости или лежит в ней тогда и только тогда, когда $(\\bar a,\\bar n)=0$. Здесь $$(\\bar a,\\bar n)=2\\cdot1+(-1)\\cdot2+3\\cdot1=3\\ne0,$$ значит прямая пересекает плоскость ровно в одной точке."
      },
      {
        "q": "Найти точку пересечения",
        "a": "Параметрически $x=1+2t$, $y=-1-t$, $z=3t$. Подставляем в уравнение плоскости: $$(1+2t)+2(-1-t)+3t-5=0\\;\\Rightarrow\\;3t-6=0\\;\\Rightarrow\\;t=2.$$"
      },
      {
        "q": "Вычислить координаты",
        "a": "$x=1+4=5$, $y=-1-2=-3$, $z=6$. Проверка: $5-6+6-5=0$."
      }
    ],
    "answer": "Прямая пересекает плоскость в точке $(5;-3;6)$."
  },
  {
    "id": "n212",
    "topic": "t5",
    "level": 3,
    "num": 212,
    "title": "Расстояние между скрещивающимися прямыми",
    "source": "Авторская задача; тип — вопрос 76 «Применение векторной алгебры»",
    "statement": "Найдите расстояние между прямыми $$L_1=(1;0;2)+t\\,(2;1;-1),\\qquad L_2=(0;3;1)+s\\,(1;-1;2).$$",
    "steps": [
      {
        "q": "Проверить, что прямые скрещиваются",
        "a": "Направляющие векторы $\\bar a_1=(2;1;-1)$ и $\\bar a_2=(1;-1;2)$ не пропорциональны, значит прямые не параллельны. Осталось убедиться, что они не пересекаются — это покажет ненулевое смешанное произведение."
      },
      {
        "q": "Векторное произведение направляющих",
        "a": "$$\\bar a_1\\times\\bar a_2=(1;-5;-3),\\qquad |\\bar a_1\\times\\bar a_2|=\\sqrt{1+25+9}=\\sqrt{35}.$$"
      },
      {
        "q": "Смешанное произведение",
        "a": "$\\overrightarrow{M_1M_2}=(-1;3;-1)$, поэтому $$(\\overrightarrow{M_1M_2}\\times\\bar a_1)\\cdot\\bar a_2=\\overrightarrow{M_1M_2}\\cdot(\\bar a_1\\times\\bar a_2)=-1-15+3=-13\\ne0.$$ Прямые действительно скрещиваются."
      },
      {
        "q": "Применить формулу",
        "a": "$$d=\\frac{\\bigl|(\\overrightarrow{M_1M_2}\\times\\bar a_1)\\cdot\\bar a_2\\bigr|}{|\\bar a_1\\times\\bar a_2|}=\\frac{13}{\\sqrt{35}}.$$ Геометрически это высота параллелепипеда, построенного на трёх векторах, к основанию на $\\bar a_1$ и $\\bar a_2$."
      }
    ],
    "answer": "$d=\\dfrac{13}{\\sqrt{35}}=\\dfrac{13\\sqrt{35}}{35}\\approx2{,}20$."
  },
  {
    "id": "n213",
    "topic": "t6",
    "level": 3,
    "num": 213,
    "title": "Приведение $5x^2+4xy+8y^2-32x-56y+80=0$ к каноническому виду",
    "source": "Авторская задача; тип — Лунгу К. Н., ч. I, гл. 4 «Кривые второго порядка»",
    "statement": "Определите тип кривой $5x^2+4xy+8y^2-32x-56y+80=0$, найдите её центр и каноническое уравнение.",
    "steps": [
      {
        "q": "Вычислить инварианты",
        "a": "$$I_2=\\begin{vmatrix}5&2\\\\2&8\\end{vmatrix}=36,\\qquad I_1=5+8=13,\\qquad K_3=\\begin{vmatrix}5&2&-16\\\\2&8&-28\\\\-16&-28&80\\end{vmatrix}=-1296.$$"
      },
      {
        "q": "Определить тип",
        "a": "$I_2=36>0$ — кривая эллиптического типа; $K_3\\ne0$ — невырожденная; $I_1K_3=13\\cdot(-1296)<0$ — это эллипс."
      },
      {
        "q": "Найти центр",
        "a": "Центр — решение системы из половинных производных: $$\\begin{cases}5x+2y-16=0,\\\\ 2x+8y-28=0,\\end{cases}$$ откуда $x=2$, $y=3$."
      },
      {
        "q": "Найти собственные значения квадратичной части",
        "a": "$\\lambda^2-I_1\\lambda+I_2=0$, то есть $\\lambda^2-13\\lambda+36=0$, откуда $\\lambda_1=9$, $\\lambda_2=4$."
      },
      {
        "q": "Записать каноническое уравнение",
        "a": "$$\\lambda_1x'^2+\\lambda_2y'^2+\\frac{K_3}{I_2}=0\\;\\Rightarrow\\;9x'^2+4y'^2-36=0.$$"
      }
    ],
    "answer": "Эллипс с центром $C(2;3)$, каноническое уравнение $\\dfrac{x'^2}{4}+\\dfrac{y'^2}{9}=1$, полуоси $2$ и $3$."
  },
  {
    "id": "n214",
    "topic": "t6",
    "level": 2,
    "num": 214,
    "title": "Определение типа поверхности второго порядка",
    "source": "Авторская задача; тип — Лунгу К. Н., ч. I, гл. 5 «Поверхности второго порядка»",
    "statement": "Определите тип поверхности $9x^2+4y^2-36z^2-18x+16y-11=0$, найдите её центр и каноническое уравнение.",
    "steps": [
      {
        "q": "Сгруппировать по переменным",
        "a": "Перекрёстных членов нет, значит оси поверхности уже параллельны координатным — достаточно выделить полные квадраты: $$9(x^2-2x)+4(y^2+4y)-36z^2=11.$$"
      },
      {
        "q": "Выделить полные квадраты",
        "a": "$$9\\bigl((x-1)^2-1\\bigr)+4\\bigl((y+2)^2-4\\bigr)-36z^2=11,$$ то есть $9(x-1)^2+4(y+2)^2-36z^2=11+9+16=36$."
      },
      {
        "q": "Разделить на свободный член",
        "a": "$$\\frac{(x-1)^2}{4}+\\frac{(y+2)^2}{9}-\\frac{z^2}{1}=1.$$"
      },
      {
        "q": "Прочитать тип",
        "a": "Два знака «плюс» и один «минус» при единице справа — однополостный гиперболоид. Центр в точке, где обнуляются скобки."
      }
    ],
    "answer": "Однополостный гиперболоид с центром $C(1;-2;0)$; полуоси $2$, $3$, $1$."
  },
  {
    "id": "n215",
    "topic": "t4",
    "level": 2,
    "num": 215,
    "title": "Минимальный многочлен матрицы",
    "source": "Авторская задача; тип — задание 8 демонстрационного билета В11",
    "statement": "Найдите минимальный многочлен матрицы $$A=\\begin{pmatrix}4&0&1\\\\0&3&0\\\\1&0&4\\end{pmatrix}.$$",
    "steps": [
      {
        "q": "Найти характеристический многочлен",
        "a": "Раскрывая определитель $\\det(A-tE)$ по второй строке, получаем $$\\chi_A(t)=(3-t)\\bigl((4-t)^2-1\\bigr)=(3-t)(3-t)(5-t),$$ то есть с точностью до знака $\\chi_A(t)=(t-3)^2(t-5)$."
      },
      {
        "q": "Ограничить перебор",
        "a": "Минимальный многочлен делит характеристический и содержит все его различные корни. Значит кандидаты только два: $$(t-3)(t-5)\\qquad\\text{и}\\qquad (t-3)^2(t-5).$$ Начинаем с меньшего по степени."
      },
      {
        "q": "Проверить кандидата",
        "a": "$$A-3E=\\begin{pmatrix}1&0&1\\\\0&0&0\\\\1&0&1\\end{pmatrix},\\qquad A-5E=\\begin{pmatrix}-1&0&1\\\\0&-2&0\\\\1&0&-1\\end{pmatrix}.$$ Их произведение — нулевая матрица, значит многочлен $(t-3)(t-5)$ аннулирующий."
      },
      {
        "q": "Сделать вывод",
        "a": "Меньшей степени быть не может: аннулирующий многочлен обязан делиться на $(t-3)$ и на $(t-5)$. Заодно отсюда следует, что оператор диагонализируем — минимальный многочлен не имеет кратных корней."
      }
    ],
    "answer": "$\\mu_A(t)=(t-3)(t-5)=t^2-8t+15$."
  },
  {
    "id": "n216",
    "topic": "t3",
    "level": 2,
    "num": 216,
    "title": "НОД многочленов алгоритмом Евклида (два шага)",
    "source": "Авторская задача; тип — задание 7 демонстрационного билета В11",
    "statement": "Найдите наибольший общий делитель многочленов $$f(x)=x^4-x^3-x^2-x-2,\\qquad g(x)=x^3-3x^2+x-3.$$",
    "steps": [
      {
        "q": "Первое деление",
        "a": "Делим $f$ на $g$ уголком: частное $x+2$, остаток $$r_1(x)=4x^2+4=4(x^2+1).$$"
      },
      {
        "q": "Второе деление",
        "a": "Числовой множитель $4$ на НОД не влияет, поэтому делим $g$ на $x^2+1$: $$x^3-3x^2+x-3=(x^2+1)(x-3),$$ остаток нулевой — алгоритм закончен."
      },
      {
        "q": "Выписать ответ",
        "a": "Последний ненулевой остаток, нормированный на старший коэффициент $1$, и есть НОД."
      },
      {
        "q": "Проверить",
        "a": "$f(x)=(x-2)(x+1)(x^2+1)$, $\\;g(x)=(x-3)(x^2+1)$. Общий множитель ровно один — $x^2+1$. Заметьте: над $\\mathbb{R}$ он неприводим, а над $\\mathbb{C}$ распался бы на $(x-i)(x+i)$."
      }
    ],
    "answer": "$\\varphi(x)=x^2+1$."
  },
  {
    "id": "n217",
    "topic": "t5",
    "level": 2,
    "num": 217,
    "title": "Плоскость, параллельная данной и удалённая от точки",
    "source": "Авторская задача; тип — задание 9 демонстрационного билета В11",
    "statement": "Составьте уравнения плоскостей, параллельных плоскости $x-2y+2z+3=0$ и отстоящих от точки $M(2;1;-1)$ на расстояние $2$.",
    "steps": [
      {
        "q": "Записать общий вид искомой плоскости",
        "a": "Параллельные плоскости имеют общую нормаль, поэтому искомая плоскость имеет вид $$x-2y+2z+D=0$$ с неизвестным свободным членом $D$. Здесь $|\\bar n|=\\sqrt{1+4+4}=3$."
      },
      {
        "q": "Записать формулу расстояния",
        "a": "$$\\rho(M,\\pi)=\\frac{|x_0-2y_0+2z_0+D|}{|\\bar n|}=\\frac{|2-2-2+D|}{3}=\\frac{|D-2|}{3}.$$"
      },
      {
        "q": "Решить уравнение",
        "a": "$\\dfrac{|D-2|}{3}=2$, то есть $|D-2|=6$. Модуль даёт два случая: $D-2=6$ и $D-2=-6$."
      },
      {
        "q": "Понять, почему решений два",
        "a": "Плоскости расположены по разные стороны от $M$ на одинаковом расстоянии — это всегда так, если только точка не лежит на самой плоскости."
      }
    ],
    "answer": "$x-2y+2z+8=0$ и $x-2y+2z-4=0$."
  },
  {
    "id": "n218",
    "topic": "t5",
    "level": 2,
    "num": 218,
    "title": "Взаимное расположение трёх плоскостей",
    "source": "Авторская задача; тип — задание 10 демонстрационного билета В11",
    "statement": "Определите взаимное расположение плоскостей $$x+y-z=1,\\qquad 2x-y+z=2,\\qquad 3x=3.$$",
    "steps": [
      {
        "q": "Свести к вопросу о рангах",
        "a": "Общие точки трёх плоскостей — это решения системы из трёх уравнений. По теореме Кронекера–Капелли всё определяется рангами матрицы $A$ и расширенной матрицы $(A\\mid b)$."
      },
      {
        "q": "Вычислить ранги",
        "a": "$$A=\\begin{pmatrix}1&1&-1\\\\2&-1&1\\\\3&0&0\\end{pmatrix},\\qquad (A\\mid b)=\\left(\\begin{array}{ccc|c}1&1&-1&1\\\\2&-1&1&2\\\\3&0&0&3\\end{array}\\right).$$ Третья строка равна сумме первых двух — и в матрице, и в столбце свободных членов. Поэтому $\\operatorname{rg}A=\\operatorname{rg}(A\\mid b)=2$."
      },
      {
        "q": "Истолковать результат",
        "a": "Ранги равны — система совместна; ранг $2$ при трёх неизвестных даёт $3-2=1$ свободную переменную, то есть множество решений одномерно."
      },
      {
        "q": "Найти саму прямую",
        "a": "Из третьего уравнения $x=1$; подставляя в первое, получаем $y-z=0$, то есть $y=z=t$."
      }
    ],
    "answer": "Три плоскости пересекаются по общей прямой $x=1$, $y=z=t$ (образуют пучок). Общих точек бесконечно много."
  },
  {
    "id": "n219",
    "topic": "t2",
    "level": 3,
    "num": 219,
    "title": "Комбинаторное тождество через комплексные числа",
    "source": "Авторская задача; тип — задание 6 демонстрационного билета В11",
    "statement": "С помощью комплексных чисел докажите, что $$C_n^0-C_n^2+C_n^4-C_n^6+\\dots=2^{n/2}\\cos\\frac{n\\pi}{4}.$$",
    "steps": [
      {
        "q": "Найти подходящее число",
        "a": "В сумме стоят только чётные номера, и знаки чередуются через один. Это подсказывает подстановку $z=i$: в разложении бинома $i^k$ даёт $1,\\,i,\\,-1,\\,-i,\\,1,\\dots$, то есть чётные слагаемые становятся вещественными с чередующимся знаком, а нечётные — чисто мнимыми."
      },
      {
        "q": "Разложить по биному Ньютона",
        "a": "$$(1+i)^n=\\sum_{k=0}^{n}C_n^k\\,i^{k}=\\bigl(C_n^0-C_n^2+C_n^4-\\dots\\bigr)+i\\bigl(C_n^1-C_n^3+C_n^5-\\dots\\bigr).$$ Искомая сумма — это в точности $\\operatorname{Re}(1+i)^n$."
      },
      {
        "q": "Вычислить ту же степень по Муавру",
        "a": "$1+i=\\sqrt2\\left(\\cos\\dfrac{\\pi}{4}+i\\sin\\dfrac{\\pi}{4}\\right)$, поэтому по формуле Муавра $$(1+i)^n=2^{n/2}\\left(\\cos\\frac{n\\pi}{4}+i\\sin\\frac{n\\pi}{4}\\right).$$"
      },
      {
        "q": "Приравнять вещественные части",
        "a": "Два выражения для одного и того же числа: сравнивая вещественные части, получаем требуемое. Попутно из мнимых частей выпадает второе тождество: $C_n^1-C_n^3+C_n^5-\\dots=2^{n/2}\\sin\\dfrac{n\\pi}{4}$."
      }
    ],
    "answer": "Проверка при $n=4$: $C_4^0-C_4^2+C_4^4=1-6+1=-4$, и $2^{2}\\cos\\pi=-4$ — совпадает."
  },
  {
    "id": "n220",
    "topic": "t6",
    "level": 3,
    "num": 220,
    "title": "Уравнение касательной к параболе",
    "source": "Авторская задача; тип — задание 5 демонстрационного билета В11",
    "statement": "Записав уравнение прямой в виде $y=kx+b$ и пользуясь тем, что касательная имеет с параболой ровно одну общую точку, выведите уравнение касательной к параболе $y^2=2px$ в точке $(x_0;y_0)$.",
    "steps": [
      {
        "q": "Составить систему",
        "a": "Общие точки прямой и параболы — решения системы $$\\begin{cases}y^2=2px,\\\\ y=kx+b.\\end{cases}$$ Выразим $x=\\dfrac{y-b}{k}$ (случай $k=0$ разберём отдельно) и подставим в первое уравнение."
      },
      {
        "q": "Получить квадратное уравнение",
        "a": "$$y^2=\\frac{2p(y-b)}{k}\\;\\Longleftrightarrow\\;ky^2-2py+2pb=0.$$"
      },
      {
        "q": "Использовать условие касания",
        "a": "Ровно одна общая точка означает, что дискриминант равен нулю: $$D=4p^2-8pbk=0\\;\\Longrightarrow\\;b=\\frac{p}{2k}.$$"
      },
      {
        "q": "Выразить коэффициенты через точку касания",
        "a": "Единственный корень $y_0=\\dfrac{2p}{2k}=\\dfrac{p}{k}$, откуда $k=\\dfrac{p}{y_0}$ и, значит, $b=\\dfrac{p}{2\\cdot p/y_0}=\\dfrac{y_0}{2}$."
      },
      {
        "q": "Собрать уравнение",
        "a": "$y=\\dfrac{p}{y_0}x+\\dfrac{y_0}{2}$. Домножим на $y_0$: $$y_0y=px+\\frac{y_0^2}{2}=px+px_0,$$ где использовано $y_0^2=2px_0$ — точка лежит на параболе."
      }
    ],
    "answer": "$$y_0y=p(x+x_0).$$ Случай $k=0$ (прямая $y=\\text{const}$) даёт вершину и разбирается отдельно."
  }
];

/* Индексы для быстрого отбора */
var TASKS_BY_TOPIC = {};
var TASKS_BY_LEVEL = {};
TASKS_SEM2.forEach(function (t) {
  (TASKS_BY_TOPIC[t.topic] = TASKS_BY_TOPIC[t.topic] || []).push(t.id);
  (TASKS_BY_LEVEL[t.level] = TASKS_BY_LEVEL[t.level] || []).push(t.id);
});

var TASK_BY_ID = {};
TASKS_SEM2.forEach(function (t) { TASK_BY_ID[t.id] = t; });

if (typeof window !== 'undefined') {
  window.TASKS_SEM2 = TASKS_SEM2;
  window.TASKS_BY_TOPIC = TASKS_BY_TOPIC;
  window.TASKS_BY_LEVEL = TASKS_BY_LEVEL;
  window.TASK_BY_ID = TASK_BY_ID;
}
