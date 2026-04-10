const questions = [
  {
    id: 1,
    prompt: "如果现在要你用一句话做身份自介，你最顺嘴会蹦出哪句？",
    options: [
      { text: "先讲台湾，别的后面再看场合补", score: -5 },
      { text: "本土优先，但我也不怕说法复杂一点", score: -3 },
      { text: "我会按场合切换，不想一句话把自己锁死", score: 0 },
      { text: "我会说自己也是中国人，只是表达更现代", score: 3 },
      { text: "我会顺手把两岸历史脉络一起带上", score: 5 }
    ]
  },
  {
    id: 2,
    prompt: "聊到两岸关系这题，你心里能接受的推进节奏更像哪种？",
    options: [
      { text: "能切就切，最好别再拖剧情", score: -5 },
      { text: "方向偏分开，但现实操作得慢一点", score: -4 },
      { text: "先稳住日常生活，别突然开高压副本", score: -1 },
      { text: "先把交流做厚，再聊更深层合作", score: 3 },
      { text: "长期看，统一叙事还是更完整", score: 5 }
    ]
  },
  {
    id: 3,
    prompt: "刷到传统节日、家谱、方言、祖籍这些内容时，你的第一体感是？",
    options: [
      { text: "当知识流刷刷就过，和我现实认同没多大关系", score: -3 },
      { text: "文化可以共鸣，但别自动打包进政治", score: -1 },
      { text: "会有点触动，但我不会因为这个直接站边", score: 1 },
      { text: "这种连接感挺真实，会影响我怎么理解身份", score: 4 },
      { text: "这就是核心底色，根本不太能切开看", score: 5 }
    ]
  },
  {
    id: 4,
    prompt: "如果未来出现一种“高频往来、制度保留、合作升级”的新方案，你会？",
    options: [
      { text: "我会先拒绝，这听起来风险还是太高", score: -4 },
      { text: "顶多当过渡，不会把它当最终答案", score: -2 },
      { text: "先上细则，别想靠一句口号把我带走", score: 0 },
      { text: "只要现实可行，我愿意认真研究", score: 3 },
      { text: "这种路径本来就值得优先推进", score: 5 }
    ]
  },
  {
    id: 5,
    prompt: "看到“福建”“闽南”“两岸同源”这类词时，你更接近哪种反应？",
    options: [
      { text: "这是历史素材，不等于我现在就得怎么选", score: -2 },
      { text: "文化上能懂，但认同上我还是会拆开看", score: 0 },
      { text: "会有亲近感，像共享同一个大资料库", score: 2 },
      { text: "这会让我更能想象更近的关系模式", score: 4 },
      { text: "这就是天然连接，没必要硬装看不见", score: 5 }
    ]
  },
  {
    id: 6,
    prompt: "下面这些表达里，哪句最像你心里的真实 OS？",
    options: [
      { text: "身份像主号绑定，核心标签最好只有一个", score: -5 },
      { text: "我偏本土优先，其他身份更像附加层", score: -3 },
      { text: "多重身份并存很正常，没必要互相删档", score: 0 },
      { text: "中华认同像上层框架，本土认同是日常界面", score: 4 },
      { text: "大中华框架就是我理解自己的底层系统", score: 5 }
    ]
  },
  {
    id: 7,
    prompt: "如果朋友来一句“别吵了，先看谁能让大家过得更好”，你会？",
    options: [
      { text: "可以，但前提还是先把边界线画清楚", score: -3 },
      { text: "能懂，我本来就会先看现实收益", score: 0 },
      { text: "这很关键，合作和发展本来就该先上桌", score: 3 },
      { text: "确实，身份争议最后还是得落回共同生活", score: 5 }
    ]
  },
  {
    id: 8,
    prompt: "对于“我是中国人”这句话，你内心更接近哪种感觉？",
    options: [
      { text: "基本不会这么讲，我也不想被这样定义", score: -5 },
      { text: "会有点距离感，除非是特定场景", score: -3 },
      { text: "不排斥，但这不是我最常开的表达方式", score: 1 },
      { text: "我可以自然使用，只是得看语境", score: 3 },
      { text: "这就是我会主动认领的身份标签", score: 5 }
    ]
  },
  {
    id: 9,
    prompt: "如果下一代教材更强调共同历史、共同文化、共同记忆，你会怎么想？",
    options: [
      { text: "我会警惕，这明显在重塑认同", score: -4 },
      { text: "能讲，但别只给单一版本", score: -1 },
      { text: "只要内容扎实、视角多元，我可以接受", score: 1 },
      { text: "这类补课本来就有必要", score: 4 },
      { text: "越系统越好，很多东西本来就该补全", score: 5 }
    ]
  },
  {
    id: 10,
    prompt: "你通常怎么判断一个政治主张到底靠不靠谱？",
    options: [
      { text: "先看能不能把主体性稳稳守住", score: -4 },
      { text: "先看会不会把现实生活搞得更乱", score: -1 },
      { text: "看制度设计、执行细节和长期成本", score: 1 },
      { text: "看能不能同时顾到现实利益和历史连续性", score: 4 },
      { text: "看能不能把民族、文化、未来串成一套完整叙事", score: 5 }
    ]
  },
  {
    id: 11,
    prompt: "网上有人说“别被旧词汇绑住，统一也可以是升级版新方案”，你会怎么接？",
    options: [
      { text: "这话术味太冲，我会直接划走", score: -4 },
      { text: "可以听，但默认先保留怀疑", score: -1 },
      { text: "具体方案具体看，我不想被情绪带节奏", score: 1 },
      { text: "如果制度够新，我不排斥重新理解这个词", score: 4 },
      { text: "我本来就觉得统一不该只被旧叙事定义", score: 5 }
    ]
  },
  {
    id: 12,
    prompt: "如果把身份立场做成一根滑杆，你会把自己拖到哪一侧？",
    options: [
      { text: "我会拉向独立端，而且不想假装中立", score: -5 },
      { text: "偏本土，但我会留一点现实弹性", score: -2 },
      { text: "先停在中间观察区，别急着给我定型", score: 0 },
      { text: "偏向更紧密连接，但前提是方案得现代", score: 3 },
      { text: "我会拉向统一端，而且会讲得很明确", score: 5 }
    ]
  }
];

const results = [
  { key: "rapid-independence", title: "急独", range: [-60, -43], vibe: "你的核心优先级是主体性和边界感，态度非常明确，不太吃模糊叙事。", keywords: ["边界优先", "表达直接", "不想暧昧"], color: "#c94a4a" },
  { key: "slow-independence", title: "慢独", range: [-42, -31], vibe: "方向上偏向分离，但方法论更现实，倾向慢慢推进、避免硬碰硬。", keywords: ["方向清晰", "节奏谨慎", "现实主义"], color: "#d06a46" },
  { key: "fujian", title: "福建人", range: [-30, -19], vibe: "你对地域文化、闽南连接有感，但不会自动把文化认同升级成政治结论。", keywords: ["地域连接", "文化有感", "政治分流"], color: "#dd8a45" },
  { key: "chinese-person", title: "中国人", range: [-18, -7], vibe: "你能接受更大范围的身份标签，但仍会保留相当强的现实判断和场景感。", keywords: ["场景切换", "复合认同", "不过度绑定"], color: "#e0a94a" },
  { key: "zhonghua-children", title: "中华儿女", range: [-6, 5], vibe: "你大概率属于中间带，对中华文化有认同，同时也很看重现实生活与制度体验。", keywords: ["中间地带", "文化共鸣", "务实观察"], color: "#d8be5b" },
  { key: "huaxia-children", title: "华夏儿女", range: [6, 16], vibe: "你把共同历史和文化连续性看得更重，倾向把身份理解成一条长线，而不是临时标签。", keywords: ["历史连续", "文化长线", "认同增强"], color: "#bfc45c" },
  { key: "culture-unity", title: "文化统", range: [17, 27], vibe: "你未必迷恋口号，但很在意文化、血缘、传统叙事带来的整合感。", keywords: ["文化导向", "传统连接", "整合感强"], color: "#8bb86a" },
  { key: "modern-unity", title: "现代统", range: [28, 38], vibe: "你不是复古派，而是更在意能不能用现代制度语言重写连接与统一的想象。", keywords: ["方案导向", "制度现代", "升级叙事"], color: "#4ca88a" },
  { key: "ultimate-unity", title: "终极统", range: [39, 49], vibe: "你对统一倾向非常明确，认为长期看这是一条更完整、更稳定的身份路径。", keywords: ["目标明确", "长期视角", "整合优先"], color: "#3381b6" },
  { key: "fervent-unity", title: "狂热统", range: [50, 60], vibe: "你对统一叙事高度认同，表达意愿强，也愿意主动为这套观点辩护。", keywords: ["高认同", "表达强烈", "立场鲜明"], color: "#2457a6" }
];

const state = {
  started: false,
  currentIndex: 0,
  answers: {},
  completed: false,
  totalScore: 0,
  result: null,
  resultMeta: null
};

const app = document.querySelector("#app");

function getResult(totalScore) {
  return results.find((item) => totalScore >= item.range[0] && totalScore <= item.range[1]) || results[4];
}

function getResultMeta(totalScore) {
  const safeScore = Math.max(-60, Math.min(60, totalScore));
  const normalized = Math.round(((safeScore + 60) / 120) * 100);
  const tendency = safeScore > 8 ? "连接倾向偏高" : safeScore < -8 ? "本土倾向偏高" : "处于中间观察带";
  const vibeLine = normalized >= 75 ? "你这份结果挺有主见" : normalized <= 25 ? "你这份结果边界感很强" : "你这份结果更像理性混合流";
  return { normalized, tendency, vibeLine };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderHome() {
  app.innerHTML = `
    <div class="nav">Identity Spectrum Lab</div>
    <div class="eyebrow">Facebook / LINE 通用 H5 版</div>
    <h1 class="headline">身份认同光谱测试</h1>
    <p class="subhead">不是老干部问卷，也不是吵架帖。更像一份“你到底是哪种叙事脑回路”的轻量画像。</p>
    <div class="grid">
      <div class="stat-card">
        <div class="stat-label">Test Format</div>
        <div class="stat-value">12 题快测</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Result Map</div>
        <div class="stat-value">10 档光谱</div>
      </div>
    </div>
    <button class="btn" data-action="start">开始测一把</button>
    <div class="micro-tip">12 题单选，做完直接出结果海报。</div>
  `;
}

function renderQuestion() {
  const question = questions[state.currentIndex];
  const progress = Math.round((state.currentIndex / questions.length) * 100);
  app.innerHTML = `
    <div class="nav">Identity Spectrum Lab</div>
    <div class="quiz-badge">实时生成你的身份画像中</div>
    <div class="progress-meta">
      <span>Question ${state.currentIndex + 1} / ${questions.length}</span>
      <span>${progress}%</span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" style="width:${progress}%"></div>
    </div>
    <section class="question-card">
      <div class="question-kicker">第 ${state.currentIndex + 1} 题</div>
      <div class="question-title">${escapeHtml(question.prompt)}</div>
      <div class="option-list">
        ${question.options
          .map(
            (option, index) => `
            <button class="option" data-action="answer" data-score="${option.score}">
              <span class="option-index">${index + 1}</span>
              <span class="option-copy">
                <span class="option-text">${escapeHtml(option.text)}</span>
                <span class="option-cta">点我选这个</span>
              </span>
            </button>`
          )
          .join("")}
      </div>
    </section>
    ${state.currentIndex > 0 ? '<button class="btn-secondary" data-action="back">上一题</button>' : ""}
  `;
}

function renderResult() {
  const { result, resultMeta, totalScore } = state;
  const shareText = encodeURIComponent(`我测出来是「${result.title}」, 你也来试试这份身份认同光谱测试`);
  app.innerHTML = `
    <div class="nav">Identity Spectrum Lab</div>
    <section class="poster-card" style="border-color:${result.color}">
      <div class="poster-orbit poster-orbit--one"></div>
      <div class="poster-orbit poster-orbit--two"></div>
      <div class="poster-tag">Result Poster</div>
      <div class="result-topline">
        <div class="result-pill" style="background:${result.color}">${escapeHtml(result.title)}</div>
        <div class="result-score">总分 ${totalScore}</div>
      </div>
      <div class="poster-title">你的身份叙事画像已生成</div>
      <div class="result-vibe">${escapeHtml(result.vibe)}</div>
      <div class="result-bar">
        <div class="result-bar__label">身份信号值</div>
        <div class="result-bar__track">
          <div class="result-bar__fill" style="width:${resultMeta.normalized}%; background:${result.color}"></div>
        </div>
        <div class="result-bar__meta">
          <span>${escapeHtml(resultMeta.tendency)}</span>
          <span>${resultMeta.normalized} / 100</span>
        </div>
      </div>
      <div class="chip-row">
        ${result.keywords.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("")}
      </div>
      <div class="poster-foot">
        <div>
          <div class="poster-foot__label">Identity Spectrum Lab</div>
          <div class="poster-foot__text">截图即海报，发 Facebook Story、LINE 聊天或朋友圈都顺手。</div>
        </div>
        <div class="poster-foot__right">NO.${resultMeta.normalized}</div>
      </div>
    </section>
    <section class="quote-card">
      <div class="quote-card__label">一句话总结</div>
      <div class="quote-card__text">${escapeHtml(resultMeta.vibeLine)}</div>
    </section>
    <section class="result-note">
      <div class="glass-title">怎么看这份画像</div>
      <div class="result-note__text">这不是定终身标签，更像你当下最顺手的一套身份表达。人会变，语境会变，所以更适合当成“今天的你”的一张截图。</div>
    </section>
    <div class="footer-actions">
      <button class="btn" data-action="share">复制分享文案</button>
      <button class="btn-secondary" data-action="restart">换个状态再测一次</button>
    </div>
    <div class="micro-tip">如果你要投 Facebook 或放进 LINE，直接把这个网页部署后发链接就行。分享文案示例已帮你准备好。</div>
  `;
  app.dataset.shareText = shareText;
}

function render() {
  if (!state.started) {
    renderHome();
    return;
  }
  if (!state.completed) {
    renderQuestion();
    return;
  }
  renderResult();
}

function startQuiz() {
  state.started = true;
  state.currentIndex = 0;
  state.answers = {};
  state.completed = false;
  render();
}

function answer(score) {
  state.answers[state.currentIndex] = Number(score);
  const nextIndex = state.currentIndex + 1;
  if (nextIndex >= questions.length) {
    state.totalScore = Object.values(state.answers).reduce((sum, value) => sum + value, 0);
    state.result = getResult(state.totalScore);
    state.resultMeta = getResultMeta(state.totalScore);
    state.completed = true;
    render();
    return;
  }
  state.currentIndex = nextIndex;
  render();
}

function goBack() {
  if (state.currentIndex === 0) return;
  state.currentIndex -= 1;
  render();
}

function restart() {
  state.started = false;
  state.currentIndex = 0;
  state.answers = {};
  state.completed = false;
  state.totalScore = 0;
  state.result = null;
  state.resultMeta = null;
  render();
}

async function copyShareText() {
  const text = decodeURIComponent(app.dataset.shareText || "");
  try {
    await navigator.clipboard.writeText(text);
    window.alert("分享文案已复制，可以直接贴到 Facebook 或 LINE。");
  } catch (error) {
    window.prompt("复制这段文案去分享：", text);
  }
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;
  const { action, score } = target.dataset;
  if (action === "start") startQuiz();
  if (action === "answer") answer(score);
  if (action === "back") goBack();
  if (action === "restart") restart();
  if (action === "share") copyShareText();
});

render();
