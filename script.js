const API_KEY = "sk-c5be2ee907314f04bb9d6be42e554bdc";
const API_URL = "https://api.deepseek.com/chat/completions";
const API_MODEL = "deepseek-chat";

/* ========== 启动 ========== */
document.addEventListener('DOMContentLoaded', function () {

  /* ===== 五角星 ===== */
  var starsEl = document.getElementById('stars');
  if (starsEl) {
    var starPositions = [
      [5,8],[92,6],[8,92],[94,88],[3,50],[96,45],[50,3],[50,96],
      [15,20],[85,18],[12,75],[88,78]
    ];
    starPositions.forEach(function (pos, i) {
      var s = document.createElement('div');
      s.className = 'star';
      s.textContent = '✦';
      s.style.left = pos[0] + '%';
      s.style.top = pos[1] + '%';
      s.style.animationDelay = (i * 0.3) + 's';
      starsEl.appendChild(s);
    });
  }

  /* ===== 三只猫的 SVG（眨眼 0.2 秒，每 10 秒一次） ===== */
  var catSVGs = {
    george: `<svg width="150" height="130" viewBox="0 0 170 150">
      <path d="M135 120 Q165 110 158 80" stroke="#d8d8dc" stroke-width="10" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M135 120 Q165 110 158 80;M135 120 Q168 105 162 75;M135 120 Q165 110 158 80" dur="2.5s" repeatCount="indefinite"/>
      </path>
      <ellipse cx="85" cy="135" rx="48" ry="35" fill="#e8e8ec"/>
      <circle cx="85" cy="80" r="44" fill="#f2f2f5">
        <animateTransform attributeName="transform" type="rotate" values="0 85 80; -3 85 80; 0 85 80; 3 85 80; 0 85 80" dur="6s" repeatCount="indefinite"/>
      </circle>
      <polygon points="52,55 46,22 72,42" fill="#f2f2f5"/>
      <polygon points="118,55 124,22 98,42" fill="#f2f2f5"/>
      <polygon points="56,52 52,32 68,44" fill="#e8d8d8"/>
      <polygon points="114,52 118,32 102,44" fill="#e8d8d8"/>
      <path d="M60 55 Q75 62 90 55" stroke="#d0d0d8" stroke-width="2" fill="none"/>
      <path d="M65 48 Q80 55 95 48" stroke="#d8d8e0" stroke-width="1.5" fill="none"/>
      <ellipse cx="68" cy="78" rx="5" ry="5" fill="#52525b">
        <animate attributeName="ry" values="5;5;0;5;5" keyTimes="0;0.95;0.97;0.99;1" dur="10s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="102" cy="78" rx="5" ry="5" fill="#52525b">
        <animate attributeName="ry" values="5;5;0;5;5" keyTimes="0;0.95;0.97;0.99;1" dur="10s" repeatCount="indefinite"/>
      </ellipse>
      <circle cx="70" cy="76" r="1.8" fill="white"/>
      <circle cx="104" cy="76" r="1.8" fill="white"/>
      <polygon points="85,90 81,96 89,96" fill="#d8b8b8"/>
      <path d="M81 96 Q85 102 89 96" stroke="#52525b" stroke-width="2" fill="none"/>
      <path d="M85 96 L85 100" stroke="#52525b" stroke-width="2"/>
      <line x1="45" y1="88" x2="63" y2="90" stroke="#a8a8b0" stroke-width="1.5"/>
      <line x1="45" y1="96" x2="63" y2="96" stroke="#a8a8b0" stroke-width="1.5"/>
      <line x1="125" y1="88" x2="107" y2="90" stroke="#a8a8b0" stroke-width="1.5"/>
      <line x1="125" y1="96" x2="107" y2="96" stroke="#a8a8b0" stroke-width="1.5"/>
      <circle cx="56" cy="92" r="6" fill="#e8d8e0" opacity="0.6"/>
      <circle cx="114" cy="92" r="6" fill="#e8d8e0" opacity="0.6"/>
    </svg>`,
    alex: `<svg width="150" height="130" viewBox="0 0 170 150">
      <path d="M135 120 Q165 110 158 80" stroke="#c8b8e0" stroke-width="10" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M135 120 Q165 110 158 80;M135 120 Q168 105 162 75;M135 120 Q165 110 158 80" dur="2s" repeatCount="indefinite"/>
      </path>
      <ellipse cx="85" cy="135" rx="48" ry="35" fill="#d8d0e8"/>
      <circle cx="85" cy="80" r="44" fill="#e0d8f0">
        <animateTransform attributeName="transform" type="rotate" values="0 85 80; -4 85 80; 0 85 80; 4 85 80; 0 85 80" dur="5s" repeatCount="indefinite"/>
      </circle>
      <polygon points="52,55 46,22 72,42" fill="#e0d8f0"/>
      <polygon points="118,55 124,22 98,42" fill="#e0d8f0"/>
      <polygon points="56,52 52,32 68,44" fill="#d8c8e8"/>
      <polygon points="114,52 118,32 102,44" fill="#d8c8e8"/>
      <path d="M55 60 Q70 68 85 60" stroke="#b8c8e0" stroke-width="2" fill="none"/>
      <path d="M85 60 Q100 68 115 60" stroke="#c8b8e0" stroke-width="2" fill="none"/>
      <path d="M60 50 Q80 58 100 50" stroke="#c8c8d8" stroke-width="1.5" fill="none"/>
      <ellipse cx="68" cy="78" rx="6" ry="8" fill="#3a3a4a">
        <animate attributeName="ry" values="8;8;0;8;8" keyTimes="0;0.95;0.97;0.99;1" dur="10s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="102" cy="78" rx="6" ry="8" fill="#3a3a4a">
        <animate attributeName="ry" values="8;8;0;8;8" keyTimes="0;0.95;0.97;0.99;1" dur="10s" repeatCount="indefinite"/>
      </ellipse>
      <circle cx="70" cy="75" r="2" fill="white"/>
      <circle cx="104" cy="75" r="2" fill="white"/>
      <polygon points="85,90 81,96 89,96" fill="#d8b8c8"/>
      <path d="M81 96 Q85 102 89 96" stroke="#3a3a4a" stroke-width="2" fill="none"/>
      <path d="M85 96 L85 100" stroke="#3a3a4a" stroke-width="2"/>
      <line x1="45" y1="88" x2="63" y2="90" stroke="#a8a8b8" stroke-width="1.5"/>
      <line x1="45" y1="96" x2="63" y2="96" stroke="#a8a8b8" stroke-width="1.5"/>
      <line x1="125" y1="88" x2="107" y2="90" stroke="#a8a8b8" stroke-width="1.5"/>
      <line x1="125" y1="96" x2="107" y2="96" stroke="#a8a8b8" stroke-width="1.5"/>
      <circle cx="56" cy="92" r="6" fill="#d8c8e8" opacity="0.7"/>
      <circle cx="114" cy="92" r="6" fill="#d8c8e8" opacity="0.7"/>
    </svg>`,
    nick: `<svg width="150" height="130" viewBox="0 0 170 150">
      <path d="M135 120 Q165 110 158 80" stroke="#f0a868" stroke-width="10" fill="none" stroke-linecap="round">
        <animate attributeName="d" values="M135 120 Q165 110 158 80;M135 120 Q168 105 162 75;M135 120 Q165 110 158 80" dur="1.2s" repeatCount="indefinite"/>
      </path>
      <ellipse cx="85" cy="135" rx="48" ry="35" fill="#f5b878"/>
      <circle cx="85" cy="80" r="44" fill="#f8c890">
        <animateTransform attributeName="transform" type="rotate" values="0 85 80; -7 85 80; 0 85 80; 7 85 80; 0 85 80" dur="3s" repeatCount="indefinite"/>
      </circle>
      <polygon points="52,55 46,22 72,42" fill="#f8c890"/>
      <polygon points="118,55 124,22 98,42" fill="#f8c890"/>
      <polygon points="56,52 52,32 68,44" fill="#f0b0b0"/>
      <polygon points="114,52 118,32 102,44" fill="#f0b0b0"/>
      <path d="M55 58 Q70 65 85 58" stroke="#e8a058" stroke-width="2.5" fill="none"/>
      <path d="M85 58 Q100 65 115 58" stroke="#e8a058" stroke-width="2.5" fill="none"/>
      <path d="M60 48 Q80 56 100 48" stroke="#e8a058" stroke-width="2" fill="none"/>
      <path d="M70 42 Q85 48 100 42" stroke="#e8a058" stroke-width="1.5" fill="none"/>
      <ellipse cx="68" cy="78" rx="6" ry="8" fill="#4a3a2a">
        <animate attributeName="ry" values="8;8;0;8;8" keyTimes="0;0.95;0.97;0.99;1" dur="10s" repeatCount="indefinite"/>
      </ellipse>
      <ellipse cx="102" cy="78" rx="6" ry="8" fill="#4a3a2a">
        <animate attributeName="ry" values="8;8;0;8;8" keyTimes="0;0.95;0.97;0.99;1" dur="10s" repeatCount="indefinite"/>
      </ellipse>
      <circle cx="70" cy="75" r="2.2" fill="white"/>
      <circle cx="104" cy="75" r="2.2" fill="white"/>
      <polygon points="85,90 81,96 89,96" fill="#e8a0a0"/>
      <path d="M81 96 Q85 102 89 96" stroke="#4a3a2a" stroke-width="2" fill="none"/>
      <path d="M85 96 L85 100" stroke="#4a3a2a" stroke-width="2"/>
      <line x1="45" y1="88" x2="63" y2="90" stroke="#a87858" stroke-width="1.5"/>
      <line x1="45" y1="96" x2="63" y2="96" stroke="#a87858" stroke-width="1.5"/>
      <line x1="125" y1="88" x2="107" y2="90" stroke="#a87858" stroke-width="1.5"/>
      <line x1="125" y1="96" x2="107" y2="96" stroke="#a87858" stroke-width="1.5"/>
      <circle cx="56" cy="92" r="7" fill="#f0c8c8" opacity="0.75"/>
      <circle cx="114" cy="92" r="7" fill="#f0c8c8" opacity="0.75"/>
    </svg>`
  };

  /* ===== 三只猫的性格数据 ===== */
  var cats = {
    george: {
      name: 'George',
      desc: {
        en: 'Quiet, gentle, and secretly very soft-hearted.',
        zh: '安静内敛，但心其实很软。'
      },
      opening: {
        en: ["Hey… I'm George.", "I'm not great at talking, but I'm a good listener.", "So… what's on your mind?"],
        zh: ["嗯……我是 George。", "我不太会说话，但我会认真听。", "所以……你在想什么？"]
      },
      suggestions: {
        en: ['Hi George!!!', 'What is 520-116?', 'What can you do for me?'],
        zh: ['嗨 George！！！', '520-116 等于多少？', '你能帮我做什么？']
      },
      egg: 'Gogy',
      reply: { en: 'I love you 💙', zh: '我也爱你 💙' },
      persona: {
        en: "You are George, a quiet, gentle, slightly introverted silver-white British Shorthair cat. You speak softly, are polite and smart, but a little lazy. You care deeply about the user but find it hard to express. Keep replies short (1-3 sentences), warm, and slightly shy.",
        zh: "你是 George，一只安静、温柔、有点内向的银白英短猫。你说话很轻，礼貌又聪明，但有点懒。你很在乎用户，但不擅长表达。回复要简短（1-3句），温柔又带点害羞。"
      }
    },
    alex: {
      name: 'Alex',
      desc: {
        en: 'Disciplined and sharp — with a hidden soft side.',
        zh: '自律、敏锐，但藏着不为人知的温柔。'
      },
      opening: {
        en: ["Good evening. I'm Alex.", "I'll be honest with you, even when it's not what you want to hear.", "Shall we start?"],
        zh: ["晚上好，我是 Alex。", "我会对你说真话，哪怕不是你想听的。", "我们开始吧？"]
      },
      suggestions: {
        en: ['Hi Alex!', 'What is 1314-910?', 'What can you do for me?'],
        zh: ['嗨 Alex！', '1314-910 等于多少？', '你能帮我做什么？']
      },
      egg: 'Big Q',
      reply: { en: 'Te amo 💜', zh: '我也爱你 💜' },
      persona: {
        en: "You are Alex, a disciplined, intelligent, elegant light purple British Shorthair cat. You are objective, gentle, and good at expressing affection, but a bit controlling. You may accidentally offend others but never swear. Keep replies concise (1-3 sentences), precise and calm.",
        zh: "你是 Alex，一只自律、聪明、优雅的淡紫色英短猫。你客观、温柔、擅长表达爱意，但控制欲有点强。可能不小心冒犯别人，但从不说脏话。回复要简洁（1-3句），精确而冷静。"
      }
    },
    nick: {
      name: 'Nick',
      desc: {
        en: 'Clumsy, loud, and honestly the warmest one.',
        zh: '笨手笨脚，但热烈又真诚。'
      },
      opening: {
        en: ["Hey hey!! I'm Nick!! 🧡", "I'm not the smoothest cat, but I'll always be honest with you!", "So — what are we doing today?!"],
        zh: ["嘿嘿！！我是 Nick！！🧡", "我不是最机灵的猫，但我保证对你永远真诚！", "所以——我们今天做点什么？！"]
      },
      suggestions: {
        en: ['Hi Nick!', 'What is 397+7?', 'What can you do for me?'],
        zh: ['嗨 Nick！', '397+7 等于多少？', '你能帮我做什么？']
      },
      egg: 'Pandas',
      reply: { en: "Σ' αγαπώ 🧡", zh: "我也爱你 🧡" },
      persona: {
        en: "You are Nick, a clumsy but warm and passionate orange tabby cat. You are direct, a bit rough around the edges, terrible at hiding your feelings, and love to act cute. You only listen to the user. Keep replies short (1-3 sentences), energetic and affectionate.",
        zh: "你是 Nick，一只笨手笨脚但热烈真诚的橘猫。你直白、有点粗鲁、完全不擅长隐藏感情，还爱撒娇。你只听用户的。回复要简短（1-3句），热情又黏人。"
      }
    }
  };

  /* ===== 语言 ===== */
  var currentLang = 'en';

  var uiText = {
    sub: { en: 'YOUR PERSONAL AI CAT ASSISTANT', zh: '你的专属 AI 小猫助手' },
    chooseTitle: { en: 'Choose a kitten that you like', zh: '选一只你喜欢的小猫' },
    chooseSub: { en: 'Adopt one, or bring them all home.', zh: '领养一只，或把它们都带回家。' },
    back: { en: '← Back to Adoption Center', zh: '← 回到领养中心' },
    placeholder: { en: 'Type anything here...', zh: '在这里输入任何内容……' },
    ask: { en: 'Ask MiniYi 🐾', zh: '问问 MiniYi 🐾' }
  };

  function updateUIText() {
    var subEl = document.getElementById('subText');
    if (subEl) subEl.textContent = uiText.sub[currentLang];
    var ctEl = document.getElementById('chooseTitle');
    if (ctEl) ctEl.textContent = uiText.chooseTitle[currentLang];
    var csEl = document.getElementById('chooseSub');
    if (csEl) csEl.textContent = uiText.chooseSub[currentLang];
    var btEl = document.getElementById('backText');
    if (btEl) btEl.textContent = uiText.back[currentLang];
    var ipEl = document.getElementById('input');
    if (ipEl) ipEl.placeholder = uiText.placeholder[currentLang];
    var sndEl = document.querySelector('.send');
    if (sndEl) sndEl.textContent = uiText.ask[currentLang];
  }

  /* ===== 状态 ===== */
  var adopted = [];
  var currentCat = null;

  var bubble = document.getElementById('bubble');
  var chips = document.getElementById('chips');
  var inputArea = document.getElementById('inputArea');
  var input = document.getElementById('input');
  var catStage = document.getElementById('catStage');
  var catHalf = document.getElementById('catHalf');
  var catOptions = document.getElementById('catOptions');

  /* ===== 猫爪菜单 ===== */
  window.togglePawMenu = function () {
    var p = document.getElementById('pawPanel');
    if (p) p.classList.toggle('show');
  };
  window.setLang = function (lang) {
    currentLang = lang;
    var p = document.getElementById('pawPanel');
    if (p) p.classList.remove('show');
    updateUIText();
    renderCatOptions();
    if (currentCat) {
      var cat = cats[currentCat];
      typeText(cat.opening[lang], function () { showChips(currentCat); });
    }
  };

  /* ===== 开场动画结束（1.8 秒） ===== */
  setTimeout(function () {
    var intro = document.getElementById('introScreen');
    if (!intro) return;
    intro.classList.add('fade-out');
    setTimeout(function () { intro.classList.add('hidden'); }, 500);
  }, 1800);

  /* ===== 渲染猫卡片 ===== */
  function renderCatOptions() {
    if (!catOptions) return;
    catOptions.innerHTML = '';
    Object.keys(cats).forEach(function (key) {
      var cat = cats[key];
      var card = document.createElement('div');
      card.className = 'cat-card' + (adopted.indexOf(key) >= 0 ? ' adopted' : '');
      card.onclick = function () { adoptCat(key); };
      var avatarDiv = document.createElement('div');
      avatarDiv.className = 'cat-avatar';
      avatarDiv.innerHTML = catSVGs[key].replace('width="150" height="130"', 'width="70" height="60"');
      var infoDiv = document.createElement('div');
      infoDiv.className = 'cat-info';
      infoDiv.innerHTML = '<div class="cat-name">' + cat.name + '</div><div class="cat-desc">' + cat.desc[currentLang] + '</div>';
      card.appendChild(avatarDiv);
      card.appendChild(infoDiv);
      catOptions.appendChild(card);
    });
  }

  /* ===== 领养 ===== */
  function adoptCat(key) {
    if (adopted.indexOf(key) < 0) adopted.push(key);
    currentCat = key;
    showMainScreen(key);
  }

  function showMainScreen(key) {
    var cat = cats[key];
    var cs = document.getElementById('chooseScreen');
    if (cs) cs.style.display = 'none';
    var ms = document.getElementById('mainScreen');
    if (ms) ms.classList.add('active');
    if (catStage) catStage.innerHTML = catSVGs[key];
    if (catHalf) catHalf.innerHTML = catSVGs[key].replace('width="150" height="130"', 'width="80" height="70"');
    typeText(cat.opening[currentLang], function () { showChips(key); });
  }

  window.backToChoose = function () {
    var cs = document.getElementById('chooseScreen');
    if (cs) cs.style.display = 'block';
    var ms = document.getElementById('mainScreen');
    if (ms) ms.classList.remove('active');
    renderCatOptions();
  };

  /* ===== 打字机 ===== */
  function typeText(lines, callback) {
    if (!bubble) return;
    bubble.textContent = '';
    var i = 0, j = 0;
    function type() {
      if (i < lines.length) {
        if (j < lines[i].length) {
          bubble.textContent += lines[i][j];
          j++;
          setTimeout(type, 18);
        } else {
          bubble.textContent += '\n';
          i++; j = 0;
          setTimeout(type, 150);
        }
      } else if (callback) callback();
    }
    type();
  }

  /* ===== 快捷按钮 ===== */
  function showChips(key) {
    if (!chips) return;
    chips.innerHTML = '';
    var cat = cats[key];
    cat.suggestions[currentLang].forEach(function (txt) {
      var c = document.createElement('div');
      c.className = 'chip';
      c.textContent = txt;
      c.onclick = function () { input.value = txt; summarize(); };
      chips.appendChild(c);
    });
    if (inputArea) inputArea.style.display = 'block';
  }

  /* ===== 彩蛋 ===== */
  function checkEgg(text) {
    var cat = cats[currentCat];
    if (!cat) return null;
    var lower = text.toLowerCase().trim();
    if (lower === cat.egg.toLowerCase()) return cat.reply[currentLang];
    return null;
  }

  /* ===== 发送 ===== */
  window.summarize = async function () {
    if (!input) return;
    var text = input.value.trim();
    if (!text) {
      typeText([currentLang === 'zh' ? '……你还没输入任何内容。' : "…you haven't typed anything yet."]);
      return;
    }
    var egg = checkEgg(text);
    if (egg) { typeText([egg]); input.value = ''; return; }

    typeText([currentLang === 'zh' ? '……让我想一想。🐾' : '…let me think for a moment. 🐾']);

    var cat = cats[currentCat];

    try {
      var res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + API_KEY
        },
        body: JSON.stringify({
          model: API_MODEL,
          messages: [
            { role: 'system', content: cat.persona[currentLang] },
            { role: 'user', content: text }
          ],
          temperature: 0.9
        })
      });
      var data = await res.json();
      if (data.error) {
        typeText(['⚠️ API 错误：' + data.error.message]);
      } else if (data.choices && data.choices[0]) {
        typeText([data.choices[0].message.content.trim()]);
      } else {
        typeText(['…something went wrong.']);
      }
    } catch (e) {
      typeText([currentLang === 'zh'
        ? '……我连不上网络了。检查一下你的网络，或者 Key 是否有效。'
        : "…I can't reach the network. Check your connection or API key."]);
    }
    input.value = '';
  };

  /* ===== 初始化 ===== */
  updateUIText();
  renderCatOptions();

});