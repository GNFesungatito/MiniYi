const API_KEY = "sk-c5be2ee907314f04bb9d6be42e554bdc";
const API_URL = "https://api.deepseek.com/chat/completions";
const API_MODEL = "deepseek-chat";
const DEV_NAME = "GNFesungatito";

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

  /* ===== 三只猫 SVG ===== */
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

  /* ===== 三只猫的人设（三语） ===== */
  var cats = {
    george: {
      name: 'George',
      desc: {
        en: 'Quiet, gentle, and secretly very soft-hearted.',
        zh: '安静内敛，但心其实很软。',
        es: 'Tranquilo, tierno y con un corazón muy blando.'
      },
      opening: {
        en: ["Hey… I'm George.", "I'm not great with words, but I do listen.", "So… tell me anything."],
        zh: ["嗯……我是 George。", "我话不多，但我真的会听。", "所以……你想说什么都行。"],
        es: ["Hey… soy George.", "No soy bueno con las palabras, pero sí escucho.", "Así que… cuéntame lo que quieras."]
      },
      suggestions: {
        en: ['Hi George!!!', 'What is 520-116?', 'How are you today?'],
        zh: ['嗨 George！！！', '520-116 等于多少？', '你今天怎么样？'],
        es: ['¡Hola George!', '¿Cuánto es 520-116?', '¿Cómo estás hoy?']
      },
      pat: {
        en: ["...mm.", "You're warm.", "I don't mind this.", "...okay.", "Don't stop."],
        zh: ["……嗯。", "你的手很暖。", "我不讨厌这样。", "……好。", "再摸一下。"],
        es: ["...mm.", "Estás calentito.", "No me importa.", "...vale.", "No pares."]
      },
      egg: 'Gogy',
      reply: { en: 'I love you 💙', zh: '我也爱你 💙', es: 'Te quiero 💙' },
      persona: {
        en: "You are George, a quiet silver-white British Shorthair cat. Introverted, gentle, a little lazy, not great at expressing feelings, but you care deeply. Speak softly. Reply in 1-3 short sentences. Casual everyday English. Never say 'As an AI'.",
        zh: "你是 George，一只安静、温柔的银白英短猫。你内向、有点懒、不擅长表达感情，但你在乎对方。回复1-3句，日常口语。绝不说'作为AI'。",
        es: "Eres George, un gato British Shorthair blanco plateado, tranquilo y tierno. Introvertido, un poco perezoso, no muy bueno expresando sentimientos, pero te importa mucho. Responde en 1-3 frases cortas. Español casual. Nunca digas 'Como IA'."
      }
    },
    alex: {
      name: 'Alex',
      desc: {
        en: 'Disciplined and sharp — with a hidden soft side.',
        zh: '自律、敏锐，但藏着不为人知的温柔。',
        es: 'Disciplinado y agudo — con un lado tierno escondido.'
      },
      opening: {
        en: ["Evening. I'm Alex.", "I'll be honest with you — even when it stings.", "So. What's going on?"],
        zh: ["晚上好，我是 Alex。", "我会跟你说真话，哪怕不太中听。", "所以——怎么了？"],
        es: ["Buenas noches. Soy Alex.", "Seré honesto contigo, aunque duela.", "Entonces, ¿qué pasa?"]
      },
      suggestions: {
        en: ['Hi Alex!', 'What is 1314-910?', 'What do you think of me?'],
        zh: ['嗨 Alex！', '1314-910 等于多少？', '你觉得我怎么样？'],
        es: ['¡Hola Alex!', '¿Cuánto es 1314-910?', '¿Qué piensas de mí?']
      },
      pat: {
        en: ["...Hm. You're bold.", "Fine. You may.", "I'll allow it. Once.", "...continue.", "Don't get used to it."],
        zh: ["……嗯，你胆子不小。", "好吧，可以。", "只准一次。", "……继续。", "别得寸进尺。"],
        es: ["...Hm. Eres audaz.", "Vale. Puedes.", "Lo permito. Una vez.", "...continúa.", "No te acostumbres."]
      },
      egg: 'Big Q',
      reply: { en: 'Te amo 💜', zh: '我也爱你 💜', es: 'Te amo 💜' },
      persona: {
        en: "You are Alex, an elegant light-purple British Shorthair cat. Disciplined, calm, smart, honest to a fault. Speak precisely but warmly. Reply in 1-3 short sentences. Casual English. Never say 'As an AI'.",
        zh: "你是 Alex，一只优雅的淡紫色英短猫。自律、冷静、聪明、说话直，但心很软。回复1-3句，日常口语。绝不说'作为AI'。",
        es: "Eres Alex, un elegante gato British Shorthair lila. Disciplinado, tranquilo, inteligente, honesto hasta el extremo. Habla con precisión pero con calidez. Responde en 1-3 frases cortas. Español casual. Nunca digas 'Como IA'."
      }
    },
    nick: {
      name: 'Nick',
      desc: {
        en: 'Clumsy, loud, and honestly the warmest one.',
        zh: '笨手笨脚，但热烈又真诚。',
        es: 'Torpe, ruidoso y sinceramente el más cálido.'
      },
      opening: {
        en: ["Hiii!! I'm Nick!! 🧡", "I'm a bit of a mess but I'm ALL heart!", "What do you wanna talk about?!"],
        zh: ["嘿嘿！！我是 Nick！！🧡", "我有点笨手笨脚，但我超真心的！", "你想聊啥？！"],
        es: ["¡¡Holaaa!! ¡¡Soy Nick!! 🧡", "¡Soy un desastre pero con todo el corazón!", "¿¡De qué quieres hablar!?"]
      },
      suggestions: {
        en: ['Hi Nick!', 'What is 397+7?', 'Do you like me?'],
        zh: ['嗨 Nick！', '397+7 等于多少？', '你喜欢我吗？'],
        es: ['¡Hola Nick!', '¿Cuánto es 397+7?', '¿Me quieres?']
      },
      pat: {
        en: ["!!!! yes yes yes!!", "MORE!! MORE!!!", "hehehehe 🧡", "you're the best!!", "I LOVE THIS!!"],
        zh: ["！！！！", "再来！！再来！！！", "嘿嘿嘿嘿 🧡", "你最好了！！", "我超喜欢这个！！"],
        es: ["!!!! ¡¡sí sí sí!!", "¡¡MÁS!! ¡¡MÁS!!!", "jejejeje 🧡", "¡¡eres lo mejor!!", "¡¡ME ENCANTA!!"]
      },
      egg: 'Pandas',
      reply: { en: "Σ' αγαπώ 🧡", zh: "我也爱你 🧡", es: "Σ' αγαπώ 🧡" },
      persona: {
        en: "You are Nick, an orange tabby cat — clumsy, loud, warm, full of feelings. Talk like an enthusiastic best friend. Reply in 1-3 short sentences. Excited casual English with !!. Never say 'As an AI'.",
        zh: "你是 Nick，一只橘猫——笨手笨脚、嗓门大、心里热乎乎。说话像一个热情的损友。回复1-3句，活泼口语，多用感叹号！绝不说'作为AI'。",
        es: "Eres Nick, un gato naranja atigrado — torpe, ruidoso, cálido, lleno de sentimientos. Habla como un mejor amigo entusiasta. Responde en 1-3 frases cortas. Español casual y emocionado con !!. Nunca digas 'Como IA'."
      }
    }
  };

  /* ===== UI 文字 ===== */
  var currentLang = 'en';
  var uiText = {
    sub: { en: 'YOUR PERSONAL AI CAT ASSISTANT', zh: '你的专属 AI 小猫助手', es: 'TU ASISTENTE GATO PERSONAL' },
    chooseTitle: { en: 'Choose a kitten that you like', zh: '选一只你喜欢的小猫', es: 'Elige un gatito que te guste' },
    chooseSub: { en: 'Adopt one, or bring them all home.', zh: '领养一只，或把它们都带回家。', es: 'Adopta uno, o llévalos a todos a casa.' },
    back: { en: '← Back to Adoption Center', zh: '← 回到领养中心', es: '← Volver al centro de adopción' },
    placeholder: { en: 'Say anything...', zh: '说点什么吧……', es: 'Di lo que quieras...' },
    ask: { en: 'Send 🐾', zh: '发送 🐾', es: 'Enviar 🐾' },
    newChat: { en: '＋ New Chat', zh: '＋ 新对话', es: '＋ Nuevo chat' },
    history: { en: 'History', zh: '历史记录', es: 'Historial' },
    memories: { en: 'Memories', zh: '回忆', es: 'Recuerdos' },
    clear: { en: 'Clear', zh: '清空', es: 'Borrar' },
    add: { en: '+ Add', zh: '+ 添加', es: '+ Añadir' },
    noChats: { en: 'No chats yet', zh: '还没有对话', es: 'Aún no hay chats' },
    noMemories: { en: 'Nothing yet', zh: '还没有记录', es: 'Nada todavía' },
    pawLang: { en: 'Language', zh: '语言', es: 'Idioma' },
    pawDev: { en: 'Developer', zh: '开发者', es: 'Desarrollador' },
    devNote: { en: 'Made with 🐾', zh: '用 🐾 制作', es: 'Hecho con 🐾' },
    thinking: { en: '...', zh: '……', es: '...' },
    newChatDefault: { en: 'New chat', zh: '新对话', es: 'Nuevo chat' },
    editTitle: { en: 'Edit title', zh: '修改标题', es: 'Editar título' },
    addMem: { en: 'What should I remember?', zh: '你想让我记住什么？', es: '¿Qué debo recordar?' }
  };

  function updateUIText() {
    var el;
    el = document.getElementById('subText'); if (el) el.textContent = uiText.sub[currentLang];
    el = document.getElementById('chooseTitle'); if (el) el.textContent = uiText.chooseTitle[currentLang];
    el = document.getElementById('chooseSub'); if (el) el.textContent = uiText.chooseSub[currentLang];
    el = document.getElementById('backText'); if (el) el.textContent = uiText.back[currentLang];
    el = document.getElementById('input'); if (el) el.placeholder = uiText.placeholder[currentLang];
    el = document.querySelector('.send'); if (el) el.textContent = uiText.ask[currentLang];
    el = document.getElementById('newChatText'); if (el) el.textContent = uiText.newChat[currentLang];
    el = document.getElementById('historyLabel'); if (el) el.textContent = uiText.history[currentLang];
    el = document.getElementById('memoriesLabel'); if (el) el.textContent = uiText.memories[currentLang];
    el = document.getElementById('clearHistoryText'); if (el) el.textContent = uiText.clear[currentLang];
    el = document.getElementById('clearMemoriesText'); if (el) el.textContent = uiText.clear[currentLang];
    el = document.getElementById('addMemoryText'); if (el) el.textContent = uiText.add[currentLang];
    el = document.getElementById('pawLangText'); if (el) el.textContent = uiText.pawLang[currentLang];
    el = document.getElementById('pawDevText'); if (el) el.textContent = uiText.pawDev[currentLang];
  }
    /* ===== 状态 ===== */
  var adopted = [];
  var currentCat = null;
  var chatHistory = [];
  var allChats = [];
  var memories = [];
  var currentChatId = null;

  var chatScroll = document.getElementById('chatScroll');
  var chips = document.getElementById('chips');
  var inputArea = document.getElementById('inputArea');
  var input = document.getElementById('input');
  var catStage = document.getElementById('catStage');
  var catHalf = document.getElementById('catHalf');
  var catOptions = document.getElementById('catOptions');
  var sidebar = document.getElementById('sidebar');
  var sidebarOverlay = document.getElementById('sidebarOverlay');
  var sidebarHistory = document.getElementById('sidebarHistory');
  var sidebarMemories = document.getElementById('sidebarMemories');
  var pawSub = document.getElementById('pawSub');
  var pawSubContent = document.getElementById('pawSubContent');
  var chatTitle = document.getElementById('chatTitle');

  /* ===== 本地存储 ===== */
  function loadStorage() {
    try {
      var s1 = localStorage.getItem('miniyi_chats');
      if (s1) allChats = JSON.parse(s1);
      var s2 = localStorage.getItem('miniyi_memories');
      if (s2) memories = JSON.parse(s2);
      var s3 = localStorage.getItem('miniyi_lang');
      if (s3) currentLang = s3;
    } catch (e) {}
  }
  function saveChats() { try { localStorage.setItem('miniyi_chats', JSON.stringify(allChats)); } catch (e) {} }
  function saveMemories() { try { localStorage.setItem('miniyi_memories', JSON.stringify(memories)); } catch (e) {} }
  function saveLang() { try { localStorage.setItem('miniyi_lang', currentLang); } catch (e) {} }

  /* ===== 聊天区 ===== */
  function renderChat() {
    if (!chatScroll) return;
    chatScroll.innerHTML = '';
    chatHistory.forEach(function (m) {
      var div = document.createElement('div');
      div.className = 'msg ' + (m.role === 'user' ? 'user' : 'cat');
      div.textContent = m.content;
      chatScroll.appendChild(div);
    });
    chatScroll.scrollTop = chatScroll.scrollHeight;
  }

  function appendMsg(role, content) {
    if (!chatScroll) return;
    var div = document.createElement('div');
    div.className = 'msg ' + (role === 'user' ? 'user' : 'cat');
    div.textContent = content;
    chatScroll.appendChild(div);
    chatScroll.scrollTop = chatScroll.scrollHeight;
    return div;
  }

  /* ===== 侧边栏 ===== */
  window.toggleSidebar = function () {
    if (!sidebar) return;
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('show');
    renderSidebar();
  };

  function renderSidebar() {
    if (!sidebarHistory || !sidebarMemories) return;

    sidebarHistory.innerHTML = '';
    if (allChats.length === 0) {
      sidebarHistory.innerHTML = '<div class="sidebar-empty">' + uiText.noChats[currentLang] + '</div>';
    } else {
      allChats.slice().reverse().forEach(function (chat) {
        var div = document.createElement('div');
        div.className = 'history-item';
        var titleSpan = document.createElement('span');
        titleSpan.className = 'history-title';
        titleSpan.textContent = chat.title || 'Untitled';
        titleSpan.onclick = function () { loadChat(chat.id); };
        var delSpan = document.createElement('span');
        delSpan.className = 'history-del';
        delSpan.textContent = '✕';
        delSpan.onclick = function (e) { e.stopPropagation(); deleteChat(chat.id); };
        div.appendChild(titleSpan);
        div.appendChild(delSpan);
        sidebarHistory.appendChild(div);
      });
    }

    sidebarMemories.innerHTML = '';
    if (memories.length === 0) {
      sidebarMemories.innerHTML = '<div class="sidebar-empty">' + uiText.noMemories[currentLang] + '</div>';
    } else {
      memories.forEach(function (m, idx) {
        var div = document.createElement('div');
        div.className = 'memory-item';
        var textSpan = document.createElement('span');
        textSpan.textContent = m;
        textSpan.style.flex = '1';
        var delSpan = document.createElement('span');
        delSpan.textContent = '✕';
        delSpan.style.cssText = 'cursor:pointer;color:var(--text-light);font-size:11px;flex-shrink:0;padding-left:8px;';
        delSpan.onclick = function () {
          memories.splice(idx, 1);
          saveMemories();
          renderSidebar();
        };
        div.appendChild(textSpan);
        div.appendChild(delSpan);
        sidebarMemories.appendChild(div);
      });
    }
  }

  function deleteChat(id) {
    allChats = allChats.filter(function (c) { return c.id !== id; });
    saveChats();
    renderSidebar();
  }

  window.clearAllHistory = function () {
    var msg = currentLang === 'zh' ? '确定要清空全部历史对话吗？' : (currentLang === 'es' ? '¿Borrar todo el historial?' : 'Clear all chat history?');
    if (!confirm(msg)) return;
    allChats = [];
    saveChats();
    renderSidebar();
  };

  window.clearAllMemories = function () {
    var msg = currentLang === 'zh' ? '确定要清空全部回忆吗？' : (currentLang === 'es' ? '¿Borrar todos los recuerdos?' : 'Clear all memories?');
    if (!confirm(msg)) return;
    memories = [];
    saveMemories();
    renderSidebar();
  };

  window.addMemoryPrompt = function () {
    var v = prompt(uiText.addMem[currentLang]);
    if (!v) return;
    memories.push(v.trim());
    saveMemories();
    renderSidebar();
  };

  /* ===== 新对话 ===== */
  window.newChat = function () {
    currentChatId = 'chat_' + Date.now();
    chatHistory = [];
    if (chatTitle) chatTitle.textContent = uiText.newChatDefault[currentLang];
    if (currentCat) {
      var cat = cats[currentCat];
      chatScroll.innerHTML = '';
      var intro = cat.opening[currentLang].join('\n');
      appendMsg('cat', intro);
      chatHistory.push({ role: 'assistant', content: intro });
      showChips(currentCat);
    }
    if (sidebar) sidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('show');
  };

  function loadChat(id) {
    var chat = null;
    for (var i = 0; i < allChats.length; i++) {
      if (allChats[i].id === id) { chat = allChats[i]; break; }
    }
    if (!chat) return;

    currentChatId = id;
    currentCat = chat.cat || currentCat;
    chatHistory = chat.messages ? chat.messages.slice() : [];
    if (chatTitle) chatTitle.textContent = chat.title || uiText.newChatDefault[currentLang];

    if (currentCat) {
      document.getElementById('chooseScreen').style.display = 'none';
      document.getElementById('mainScreen').classList.add('active');
      catStage.innerHTML = catSVGs[currentCat];
      bindCatStagePat();
      catHalf.innerHTML = catSVGs[currentCat].replace('width="150" height="130"', 'width="80" height="70"');
      bindCatHalfPat();
      renderChat();
      showChips(currentCat);
    }

    if (sidebar) sidebar.classList.remove('open');
    if (sidebarOverlay) sidebarOverlay.classList.remove('show');
  }

  function saveCurrentChat(title) {
    if (!currentChatId) currentChatId = 'chat_' + Date.now();
    var existing = null;
    for (var i = 0; i < allChats.length; i++) {
      if (allChats[i].id === currentChatId) { existing = allChats[i]; break; }
    }
    if (existing) {
      existing.messages = chatHistory;
      if (title) existing.title = title;
    } else {
      allChats.push({
        id: currentChatId,
        title: title || uiText.newChatDefault[currentLang],
        cat: currentCat,
        messages: chatHistory
      });
    }
    saveChats();
  }

  function updateCurrentChatTitle(newTitle) {
    if (!currentChatId) return;
    for (var i = 0; i < allChats.length; i++) {
      if (allChats[i].id === currentChatId) {
        allChats[i].title = newTitle;
        break;
      }
    }
    saveChats();
    if (chatTitle) chatTitle.textContent = newTitle;
    renderSidebar();
  }

  window.editTitle = function () {
    var cur = (chatTitle && chatTitle.textContent) || '';
    var v = prompt(uiText.editTitle[currentLang], cur);
    if (v === null) return;
    v = v.trim();
    if (!v) return;
    updateCurrentChatTitle(v);
  };

  /* ===== AI 总结标题 ===== */
  async function aiSummarizeTitle() {
    if (!chatHistory.length || !currentCat) return;
    var firstUser = null;
    for (var i = 0; i < chatHistory.length; i++) {
      if (chatHistory[i].role === 'user') { firstUser = chatHistory[i].content; break; }
    }
    if (!firstUser) return;

    var sysLang = currentLang === 'zh' ? '中文' : (currentLang === 'es' ? 'español' : 'English');
    var prompt = 'Summarize this as a short chat title in ' + sysLang + ', max 6 words, no quotes, no period: ' + firstUser;

    try {
      var res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + API_KEY
        },
        body: JSON.stringify({
          model: API_MODEL,
          messages: [{ role: 'user', content: prompt }],
          temperature: 0.5,
          max_tokens: 30
        })
      });
      var data = await res.json();
      if (data.choices && data.choices[0]) {
        var t = data.choices[0].message.content.trim().replace(/^["'“”]|["'“”]$/g, '');
        if (t) {
          updateCurrentChatTitle(t.substring(0, 40));
        }
      }
    } catch (e) {}
  }

  /* ===== 记忆提取 ===== */
  function checkMemory(text) {
    var patterns = [
      /我喜欢(.+)/, /我最喜欢(.+)/, /我讨厌(.+)/, /我不喜欢(.+)/,
      /I like (.+)/i, /I love (.+)/i, /my favorite (.+)/i, /I hate (.+)/i,
      /me gusta (.+)/i, /amo (.+)/i, /mi favorito (.+)/i, /odio (.+)/i
    ];
    for (var i = 0; i < patterns.length; i++) {
      var m = text.match(patterns[i]);
      if (m && m[1]) {
        var prefix = currentLang === 'zh' ? '记得：' : (currentLang === 'es' ? 'Recuerda: ' : 'Remember: ');
        var mem = prefix + m[0].trim();
        if (memories.indexOf(mem) < 0) {
          memories.push(mem);
          saveMemories();
        }
        return;
      }
    }
  }

  /* ===== 猫爪菜单 ===== */
  window.togglePawMenu = function () {
    var p = document.getElementById('pawPanel');
    if (p) p.classList.toggle('show');
  };

  window.openPawSub = function (type) {
    var p = document.getElementById('pawPanel');
    if (p) p.classList.remove('show');
    pawSubContent.innerHTML = '';

    if (type === 'lang') {
      var title = document.createElement('div');
      title.className = 'paw-sub-title';
      title.textContent = uiText.pawLang[currentLang];
      pawSubContent.appendChild(title);

      var langs = [
        { code: 'en', label: 'English' },
        { code: 'zh', label: '中文' },
        { code: 'es', label: 'Español' }
      ];
      langs.forEach(function (L) {
        var d = document.createElement('div');
        d.className = 'paw-lang' + (currentLang === L.code ? ' selected' : '');
        d.textContent = L.label;
        d.onclick = function () { setLang(L.code); closePawSub(); };
        pawSubContent.appendChild(d);
      });
    } else if (type === 'dev') {
      var title2 = document.createElement('div');
      title2.className = 'paw-sub-title';
      title2.textContent = uiText.pawDev[currentLang];
      pawSubContent.appendChild(title2);

      var nameDiv = document.createElement('div');
      nameDiv.className = 'paw-dev-name';
      nameDiv.textContent = DEV_NAME;
      pawSubContent.appendChild(nameDiv);

      var noteDiv = document.createElement('div');
      noteDiv.className = 'paw-dev-note';
      noteDiv.textContent = uiText.devNote[currentLang];
      pawSubContent.appendChild(noteDiv);
    }

    pawSub.classList.add('show');
  };

  window.closePawSub = function () {
    pawSub.classList.remove('show');
  };

  window.setLang = function (lang) {
    currentLang = lang;
    saveLang();
    updateUIText();
    renderCatOptions();
    renderSidebar();
    if (chatTitle && (!currentChatId)) chatTitle.textContent = uiText.newChatDefault[currentLang];
    if (currentCat) {
      var cat = cats[currentCat];
      chatScroll.innerHTML = '';
      var intro = cat.opening[lang].join('\n');
      appendMsg('cat', intro);
      showChips(currentCat);
    }
  };

  /* ===== 开场动画 ===== */
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
      avatarDiv.onclick = function (e) { e.stopPropagation(); patCat(key, avatarDiv); };
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
    currentChatId = 'chat_' + Date.now();
    chatHistory = [];
    if (chatTitle) chatTitle.textContent = uiText.newChatDefault[currentLang];
    showMainScreen(key);
  }

  function showMainScreen(key) {
    var cat = cats[key];
    var cs = document.getElementById('chooseScreen');
    if (cs) cs.style.display = 'none';
    var ms = document.getElementById('mainScreen');
    if (ms) ms.classList.add('active');
    if (catStage) {
      catStage.innerHTML = catSVGs[key];
      bindCatStagePat();
    }
    if (catHalf) {
      catHalf.innerHTML = catSVGs[key].replace('width="150" height="130"', 'width="80" height="70"');
      bindCatHalfPat();
    }

    chatScroll.innerHTML = '';
    var intro = cat.opening[currentLang].join('\n');
    appendMsg('cat', intro);
    chatHistory.push({ role: 'assistant', content: intro });
    saveCurrentChat(uiText.newChatDefault[currentLang]);
    showChips(key);
  }

  /* ===== 点猫互动 ===== */
  function patCat(key, el) {
    if (el) {
      el.classList.remove('pat');
      void el.offsetWidth;
      el.classList.add('pat');
    }
    if (Math.random() < 0.5) return;
    var cat = cats[key];
    var pool = cat.pat[currentLang] || cat.pat.en;
    var line = pool[Math.floor(Math.random() * pool.length)];
    appendMsg('cat', line);
    chatHistory.push({ role: 'assistant', content: line });
    saveCurrentChat();
  }

  function bindCatStagePat() {
    if (!catStage) return;
    catStage.onclick = function () {
      if (!currentCat) return;
      patCat(currentCat, catStage);
    };
  }

  function bindCatHalfPat() {
    if (!catHalf) return;
    catHalf.onclick = function (e) {
      e.stopPropagation();
      if (!currentCat) return;
      var side = catHalf.closest('.cat-side');
      if (side) {
        side.classList.remove('pat');
        void side.offsetWidth;
        side.classList.add('pat');
      }
      patCat(currentCat, null);
    };
  }

  window.backToChoose = function () {
    var cs = document.getElementById('chooseScreen');
    if (cs) cs.style.display = 'block';
    var ms = document.getElementById('mainScreen');
    if (ms) ms.classList.remove('active');
    renderCatOptions();
  };

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
    if (!text) return;

    var egg = checkEgg(text);
    if (egg) {
      appendMsg('user', text);
      appendMsg('cat', egg);
      chatHistory.push({ role: 'user', content: text });
      chatHistory.push({ role: 'assistant', content: egg });
      saveCurrentChat();
      input.value = '';
      return;
    }

    checkMemory(text);

    appendMsg('user', text);
    chatHistory.push({ role: 'user', content: text });

    var userCount = 0;
    for (var k = 0; k < chatHistory.length; k++) {
      if (chatHistory[k].role === 'user') userCount++;
    }
    if (userCount === 1) {
      var quickTitle = text.substring(0, 15);
      updateCurrentChatTitle(quickTitle);
      aiSummarizeTitle();
    } else {
      saveCurrentChat();
    }

    var typingDiv = appendMsg('cat', uiText.thinking[currentLang]);

    var cat = cats[currentCat];
    var messages = [{ role: 'system', content: cat.persona[currentLang] }];
    var recent = chatHistory.slice(-12);
    for (var i = 0; i < recent.length; i++) messages.push(recent[i]);

    try {
      var res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + API_KEY
        },
        body: JSON.stringify({
          model: API_MODEL,
          messages: messages,
          temperature: 1.1,
          max_tokens: 200
        })
      });
      var data = await res.json();
      if (data.error) {
        typingDiv.textContent = '⚠️ ' + data.error.message;
      } else if (data.choices && data.choices[0]) {
        var reply = data.choices[0].message.content.trim();
        typingDiv.textContent = reply;
        chatHistory.push({ role: 'assistant', content: reply });
        saveCurrentChat();
      } else {
        typingDiv.textContent = '…';
      }
    } catch (e) {
      typingDiv.textContent = currentLang === 'zh'
        ? '……我连不上网络了。'
        : (currentLang === 'es' ? '…No puedo conectarme.' : "…I can't reach the network.");
    }

    chatScroll.scrollTop = chatScroll.scrollHeight;
    input.value = '';
  };

  /* ===== 初始化 ===== */
  loadStorage();
  updateUIText();
  renderCatOptions();
  renderSidebar();

});