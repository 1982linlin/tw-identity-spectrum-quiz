const questions = [
  {
    id: 1,
    prompt: "如果现在要你用一句话报上江湖来路，你最顺嘴会抛出哪句？",
    options: [
      { text: "先报台湾字号，别的看场面再说", score: -5 },
      { text: "本土是主门派，但我不怕承认身法有点复杂", score: -3 },
      { text: "我会看场合换说法，不想一开口就把自己锁死", score: 0 },
      { text: "我能说自己也是中国人，只是表达会更现代一点", score: 3 },
      { text: "我会顺手把两岸历史来路也一起带上", score: 5 }
    ]
  },
  {
    id: 2,
    prompt: "聊到两岸走势这卷大局，你能接受的推进节奏更像哪种招式？",
    options: [
      { text: "能切就切，别再拖回合", score: -5 },
      { text: "方向偏分开，但落招最好慢一点", score: -4 },
      { text: "先稳住日常生活，别突然开高压副本", score: -1 },
      { text: "先把交流练厚，再谈更深层合作", score: 3 },
      { text: "长线看，统一这条主线还是更完整", score: 5 }
    ]
  },
  {
    id: 3,
    prompt: "刷到传统节日、家谱、方言、祖籍这些内容时，你第一反应更像哪路心法？",
    options: [
      { text: "当知识流刷过就行，和我现实认同关系不大", score: -3 },
      { text: "文化能共鸣，但别自动打包进政治", score: -1 },
      { text: "会被轻轻击中，但还不至于直接站队", score: 1 },
      { text: "这种连接感挺真，会影响我怎么理解身份", score: 4 },
      { text: "这就是底层内功，几乎切不开看", score: 5 }
    ]
  },
  {
    id: 4,
    prompt: "如果未来真摆出一种“高频往来、制度保留、合作升级”的新方案，你会怎么接招？",
    options: [
      { text: "我会先拒绝，风险感还是太高", score: -4 },
      { text: "顶多当过渡，不会把它认成终局", score: -2 },
      { text: "先上细则，别想靠一句口号带走我", score: 0 },
      { text: "只要现实可行，我愿意认真研究", score: 3 },
      { text: "这种路径本来就值得优先推进", score: 5 }
    ]
  },
  {
    id: 5,
    prompt: "看到“福建”“闽南”“两岸同源”这些关键词时，你的体感更像哪种江湖反应？",
    options: [
      { text: "这是背景资料，不等于我现在就得怎么选", score: -2 },
      { text: "文化上能懂，但认同上我还是会拆开看", score: 0 },
      { text: "会有亲近感，像共用一个祖传资料库", score: 2 },
      { text: "这会让我更能想象更近的关系模式", score: 4 },
      { text: "这本来就是天然连接，没必要硬装看不见", score: 5 }
    ]
  },
  {
    id: 6,
    prompt: "下面这些表达里，哪句最像你内心那句没说出口的江湖 OS？",
    options: [
      { text: "身份像主号绑定，核心标签最好只有一个", score: -5 },
      { text: "我偏本土优先，其他身份更像外接模组", score: -3 },
      { text: "多重身份并存很正常，没必要互相删档", score: 0 },
      { text: "中华认同像上层框架，本土认同是日常界面", score: 4 },
      { text: "大中华框架就是我理解自己的底层系统", score: 5 }
    ]
  },
  {
    id: 7,
    prompt: "如果朋友来一句“先别吵，看谁真能让大家日子更顺”，你会怎么回招？",
    options: [
      { text: "可以，但前提还是先把边界线画清楚", score: -3 },
      { text: "能懂，我本来就会先看现实收益", score: 0 },
      { text: "这很关键，合作和发展本来就该先上桌", score: 3 },
      { text: "确实，身份争议最后还是得落回共同生活", score: 5 }
    ]
  },
  {
    id: 8,
    prompt: "对于“我是中国人”这句话，你更接近哪种真实手感？",
    options: [
      { text: "我基本不会这么讲，也不想被这样定义", score: -5 },
      { text: "会有点距离感，除非是特定场景", score: -3 },
      { text: "不排斥，但这不是我最常开的表达方式", score: 1 },
      { text: "我可以自然使用，只是得看语境", score: 3 },
      { text: "这就是我会主动认领的身份标签", score: 5 }
    ]
  },
  {
    id: 9,
    prompt: "如果下一代教材更强调共同历史、共同文化、共同记忆，你会起什么念头？",
    options: [
      { text: "我会警惕，这明显是在重塑认同", score: -4 },
      { text: "能讲，但别只给单一版本", score: -1 },
      { text: "只要内容扎实、视角多元，我可以接受", score: 1 },
      { text: "这类补课本来就有必要", score: 4 },
      { text: "越系统越好，很多东西本来就该补全", score: 5 }
    ]
  },
  {
    id: 10,
    prompt: "你通常怎么判断一套政治主张到底是虚招还是实功？",
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
    prompt: "网上有人说“别被旧词绑住，统一也能是升级版新方案”，你会怎么接这句话？",
    options: [
      { text: "这话术味太重，我会直接划走", score: -4 },
      { text: "可以听，但先默认保留怀疑", score: -1 },
      { text: "具体方案具体看，我不想被情绪带节奏", score: 1 },
      { text: "如果制度够新，我不排斥重新理解这个词", score: 4 },
      { text: "我本来就觉得统一不该只被旧叙事定义", score: 5 }
    ]
  },
  {
    id: 12,
    prompt: "如果把身份立场做成一根江湖滑杆，你会把自己拖向哪一侧？",
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
  { key: "rapid-independence", title: "孤锋离岛客", subtitle: "急独向", rank: "先天境", range: [-60, -43], vibe: "你最看重的是主体性与边界感，出手直接，不太接受模糊地带。", keywords: ["边界优先", "表达直接", "不想暧昧"], color: "#b85b4c", avatar: "./avatars/rapid-independence.png" },
  { key: "slow-independence", title: "分途潜行者", subtitle: "慢独向", rank: "游侠境", range: [-42, -31], vibe: "你方向上偏向分离，但打法更讲现实节奏，倾向慢推而不是硬撞。", keywords: ["方向清晰", "节奏谨慎", "现实主义"], color: "#c47a4e", avatar: "./avatars/slow-independence.png" },
  { key: "fujian", title: "海峡望潮客", subtitle: "福建文化向", rank: "剑客境", range: [-30, -19], vibe: "你对闽南与海峡文化连接有感，但不会自动把文化共鸣升级成政治结论。", keywords: ["地域连接", "文化有感", "政治分流"], color: "#cb9556", avatar: "./avatars/fujian.png" },
  { key: "chinese-person", title: "中州行旅人", subtitle: "中国认同向", rank: "少侠境", range: [-18, -7], vibe: "你能接受更大范围的身份标签，同时仍保留很强的现实判断和场景感。", keywords: ["场景切换", "复合认同", "不过度绑定"], color: "#d5b36b", avatar: "./avatars/chinese-person.png" },
  { key: "zhonghua-children", title: "炎黄游侠", subtitle: "中华文化向", rank: "堂主境", range: [-6, 5], vibe: "你更像中间地带的观察者，对中华文化有认同，也很看重现实生活与制度体验。", keywords: ["中间地带", "文化共鸣", "务实观察"], color: "#bca15a", avatar: "./avatars/zhonghua-children.png" },
  { key: "huaxia-children", title: "龙吟传灯人", subtitle: "华夏文化增强向", rank: "护法境", range: [6, 16], vibe: "你把共同历史与文化连续性看得更重，倾向把身份理解成一条长线。", keywords: ["历史连续", "文化长线", "认同增强"], color: "#7e9261", avatar: "./avatars/huaxia-children.png" },
  { key: "culture-unity", title: "文脉守门人", subtitle: "文化统一向", rank: "长老境", range: [17, 27], vibe: "你未必迷恋口号，但很在意文化、传统与共同叙事带来的整合感。", keywords: ["文化导向", "传统连接", "整合感强"], color: "#4d8d6f", avatar: "./avatars/culture-unity.png" },
  { key: "modern-unity", title: "经世合流派", subtitle: "务实统一向", rank: "掌门境", range: [28, 38], vibe: "你更在意能不能用现代制度语言，重写连接与统一的现实想象。", keywords: ["方案导向", "制度现代", "升级叙事"], color: "#2c7d76", avatar: "./avatars/modern-unity.png" },
  { key: "ultimate-unity", title: "山河归一派", subtitle: "强统一向", rank: "宗师境", range: [39, 49], vibe: "你对统一倾向已经相当明确，认为长线看这是一条更完整、更稳定的路径。", keywords: ["目标明确", "长期视角", "整合优先"], color: "#2d5f87", avatar: "./avatars/ultimate-unity.png" },
  { key: "fervent-unity", title: "天罡盟主", subtitle: "高度统一向", rank: "盟主境", range: [50, 60], vibe: "你对统一叙事高度认同，表达意愿强，也愿意主动为这套观点辩护。", keywords: ["高认同", "表达强烈", "立场鲜明"], color: "#234778", avatar: "./avatars/fervent-unity.png" }
];

const runtimeConfig = window.QUIZ_CONFIG || {};
const SHEETS_ENDPOINT = runtimeConfig.sheetsEndpoint || "";
const STATS_PAGE_URL = runtimeConfig.statsPageUrl || "./stats.html";

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
  const vibeLine = normalized >= 75 ? "你这路数主见很强，像已经练成自己的固定招牌。" : normalized <= 25 ? "你这路数边界感很清楚，出手不爱含糊。" : "你这路数偏观察与平衡，更像会先看局再出剑。";
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

function getVisitorId() {
  const key = "quiz_visitor_id";
  const existing = localStorage.getItem(key);
  if (existing) return existing;
  const created = `v_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  localStorage.setItem(key, created);
  return created;
}

function getUtmParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || ""
  };
}

function buildStatsPayload() {
  const utm = getUtmParams();
  return {
    result_key: state.result.key,
    result_title: state.result.title,
    result_subtitle: state.result.subtitle,
    result_rank: state.result.rank,
    score: state.totalScore,
    normalized_score: state.resultMeta.normalized,
    tendency: state.resultMeta.tendency,
    visitor_id: getVisitorId(),
    user_agent: navigator.userAgent,
    page_url: window.location.href,
    referrer: document.referrer || "",
    ...utm
  };
}

function getReportFingerprint(payload) {
  return `${payload.visitor_id}:${payload.result_key}:${payload.score}`;
}

function submitWithHiddenForm(payload) {
  return new Promise((resolve, reject) => {
    const frameName = `quiz-report-frame-${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = frameName;
    iframe.style.display = "none";

    const form = document.createElement("form");
    form.method = "POST";
    form.action = SHEETS_ENDPOINT;
    form.target = frameName;
    form.style.display = "none";

    const actionInput = document.createElement("input");
    actionInput.type = "hidden";
    actionInput.name = "action";
    actionInput.value = "submit";

    const payloadInput = document.createElement("input");
    payloadInput.type = "hidden";
    payloadInput.name = "payload";
    payloadInput.value = JSON.stringify(payload);

    form.append(actionInput, payloadInput);
    document.body.append(iframe, form);

    let settled = false;
    const cleanup = () => {
      window.clearTimeout(timeoutId);
      iframe.remove();
      form.remove();
    };

    const timeoutId = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error("Timed out while reporting result"));
    }, 8000);

    iframe.addEventListener("load", () => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve(true);
    });

    try {
      form.submit();
    } catch (error) {
      if (settled) return;
      settled = true;
      cleanup();
      reject(error);
    }
  });
}

async function reportResult() {
  if (!SHEETS_ENDPOINT) return false;
  const payload = buildStatsPayload();
  const fingerprint = getReportFingerprint(payload);
  const reportedKey = "quiz_last_report";

  if (sessionStorage.getItem(reportedKey) === fingerprint) {
    return true;
  }

  try {
    await submitWithHiddenForm(payload);
    sessionStorage.setItem(reportedKey, fingerprint);
    return true;
  } catch (error) {
    console.warn("Result reporting failed", error);
    return false;
  }
}

function renderHome() {
  app.innerHTML = `
    <div class="nav">Jianghu Identity Scroll</div>
    <div class="eyebrow">新派武侠快测版</div>
    <h1 class="headline">测测你在这卷江湖里，究竟是哪一门路数</h1>
    <p class="subhead">12题走完一卷江湖问心路，看看你最后会落在哪一路门派名号。</p>
    <div class="grid">
      <div class="stat-card">
        <div class="stat-label">江湖试卷</div>
        <div class="stat-value">12 题快测</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">门派谱系</div>
        <div class="stat-value">10 档结果</div>
      </div>
    </div>
    <button class="btn" data-action="start">开始闯关</button>
    <div class="micro-tip">每份结果都会同时显示武侠称号、武林段位和看得懂版结果说明。</div>
  `;
}

function renderQuestion() {
  const question = questions[state.currentIndex];
  const progress = Math.round((state.currentIndex / questions.length) * 100);
  app.innerHTML = `
    <div class="nav">Jianghu Identity Scroll</div>
    <div class="quiz-badge">正在推演你的门派路数</div>
    <div class="progress-meta">
      <span>Question ${state.currentIndex + 1} / ${questions.length}</span>
      <span>${progress}%</span>
    </div>
    <div class="progress-track">
      <div class="progress-fill" style="width:${progress}%"></div>
    </div>
    <section class="question-card">
      <div class="question-kicker">江湖问心卷 · 第 ${state.currentIndex + 1} 题</div>
      <div class="question-title">${escapeHtml(question.prompt)}</div>
      <div class="option-list">
        ${question.options
          .map(
            (option, index) => `
            <button class="option" data-action="answer" data-score="${option.score}">
              <span class="option-index">${index + 1}</span>
              <span class="option-copy">
                <span class="option-text">${escapeHtml(option.text)}</span>
                <span class="option-cta">点我落子</span>
              </span>
            </button>`
          )
          .join("")}
      </div>
    </section>
    ${state.currentIndex > 0 ? '<button class="btn-secondary" data-action="back">返回上一问</button>' : ""}
  `;
}

function renderResult() {
  const { result, resultMeta, totalScore } = state;
  const shareText = encodeURIComponent(`我测出来的江湖称号是「${result.title}」，看得懂版结果是「${result.subtitle}」。你也来试试这份新派武侠风身份认同光谱测试： https://1982linlin.github.io/tw-identity-spectrum-quiz/`);
  app.innerHTML = `
    <div class="nav">Jianghu Identity Scroll</div>
    <section class="poster-card" style="border-color:${result.color}">
      <div class="poster-orbit poster-orbit--one"></div>
      <div class="poster-orbit poster-orbit--two"></div>
      <div class="poster-blade poster-blade--one"></div>
      <div class="poster-blade poster-blade--two"></div>
      <div class="poster-tag">Jianghu Rank</div>
      <div class="result-topline">
        <div class="result-pill" style="background:${result.color}">${escapeHtml(result.subtitle)}</div>
        <div class="result-score">${escapeHtml(result.rank)} · 总分 ${totalScore}</div>
      </div>
      <div class="result-hero">
        <div class="result-avatar-shell" style="border-color:${result.color}">
          <img class="result-avatar" src="${escapeHtml(result.avatar)}" alt="${escapeHtml(result.title)} 角色头像" />
        </div>
        <div class="result-hero-copy">
          <div class="poster-title">你的江湖称号已揭晓</div>
          <div class="result-name">${escapeHtml(result.title)}</div>
          <div class="result-subtitle">${escapeHtml(result.subtitle)} · 看得懂版结果</div>
        </div>
      </div>
      <div class="result-vibe">${escapeHtml(result.vibe)}</div>
      <div class="result-bar">
        <div class="result-bar__label">门派倾向值</div>
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
          <div class="poster-foot__label">Jianghu Identity Scroll</div>
          <div class="poster-foot__text">截图就是你的江湖名帖，发动态、聊天或社媒都更像一张角色海报。</div>
        </div>
        <div class="poster-foot__right">NO.${resultMeta.normalized}</div>
      </div>
    </section>
    <section class="quote-card">
      <div class="quote-card__label">一句话江湖批注</div>
      <div class="quote-card__text">${escapeHtml(resultMeta.vibeLine)}</div>
    </section>
    <div class="footer-actions">
      <button class="btn" data-action="share">复制分享文案</button>
      <button class="btn-secondary" data-action="stats">查看结果分布</button>
      <button class="btn-secondary" data-action="restart">换个状态再测一次</button>
    </div>
    <div class="micro-tip">如果你要发 Facebook 或 LINE，优先发网页链接，卡片封面会更完整。</div>
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
    void reportResult();
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

function openStatsPage() {
  window.open(STATS_PAGE_URL, "_blank", "noopener");
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
  if (action === "stats") openStatsPage();
});

render();
