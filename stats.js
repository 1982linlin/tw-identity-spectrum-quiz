const statsApp = document.querySelector("#stats-app");
const statsConfig = window.QUIZ_CONFIG || {};
const sheetsEndpoint = statsConfig.sheetsEndpoint || "";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderMessage(title, body) {
  statsApp.innerHTML = `
    <div class="nav">Jianghu Identity Scroll</div>
    <div class="eyebrow">结果分布页</div>
    <h1 class="headline">${escapeHtml(title)}</h1>
    <p class="subhead">${escapeHtml(body)}</p>
    <a class="btn stats-link" href="./index.html">回到测试页</a>
  `;
}

function renderSummary(summary) {
  const rows = (summary.items || []).filter((item) => item.result_key !== "test-ping");
  const total = rows.reduce((sum, item) => sum + Number(item.count || 0), 0);
  statsApp.innerHTML = `
    <div class="nav">Jianghu Identity Scroll</div>
    <div class="eyebrow">结果分布页</div>
    <h1 class="headline">大家都落在哪一路</h1>
    <p class="subhead">这里展示的是当前累计提交到 Google Sheets 的结果分布。</p>
    <div class="grid">
      <div class="stat-card">
        <div class="stat-label">总提交数</div>
        <div class="stat-value">${total}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">最近刷新</div>
        <div class="stat-value stats-small">${escapeHtml(summary.generated_at || "刚刚")}</div>
      </div>
    </div>
    <section class="question-card">
      <div class="question-kicker">结果排行榜</div>
      <div class="stats-list">
        ${rows
          .map(
            (item, index) => `
            <div class="stats-row">
              <div class="stats-rank">${index + 1}</div>
              <div class="stats-copy">
                <div class="stats-title">${escapeHtml(item.result_title)}</div>
                <div class="stats-subtitle">${escapeHtml(item.result_subtitle)}</div>
              </div>
              <div class="stats-value">
                <div class="stats-count">${item.count}</div>
                <div class="stats-percent">${item.percent}%</div>
              </div>
            </div>
          `
          )
          .join("")}
      </div>
    </section>
    <a class="btn stats-link" href="./index.html">回到测试页</a>
  `;
}

function handleSummary(payload) {
  if (!payload || payload.ok === false) {
    renderMessage("统计还没接通", "Google Sheets 接口已留好，但目前还没有可用的 Apps Script 地址。");
    return;
  }
  renderSummary(payload);
}

window.handleQuizSummary = handleSummary;

function loadSummary() {
  if (!sheetsEndpoint) {
    renderMessage("统计还没接通", "把 Apps Script Web App 地址填进 config.js 后，这里就会显示大家测出的结果分布。");
    return;
  }

  const callback = "handleQuizSummary";
  const script = document.createElement("script");
  script.src = `${sheetsEndpoint}?action=summary&callback=${callback}&_t=${Date.now()}`;
  script.onerror = () => renderMessage("统计读取失败", "接口能写入，但当前分布数据没读出来。检查 Apps Script 是否已部署为 Web App。");
  document.body.appendChild(script);
}

loadSummary();
