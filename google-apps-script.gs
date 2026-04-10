const SHEET_NAME = 'quiz_results';

function getSheet_() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  if (sheet) return sheet;
  const created = SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
  created.appendRow([
    'created_at',
    'result_key',
    'result_title',
    'result_subtitle',
    'result_rank',
    'score',
    'normalized_score',
    'tendency',
    'visitor_id',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'page_url',
    'referrer',
    'user_agent'
  ]);
  return created;
}

function jsonp_(callback, payload) {
  return ContentService
    .createTextOutput(`${callback}(${JSON.stringify(payload)})`)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function json_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const rawPayload = e.parameter.payload || '{}';
    const payload = JSON.parse(rawPayload);
    const sheet = getSheet_();

    sheet.appendRow([
      new Date(),
      payload.result_key || '',
      payload.result_title || '',
      payload.result_subtitle || '',
      payload.result_rank || '',
      payload.score || '',
      payload.normalized_score || '',
      payload.tendency || '',
      payload.visitor_id || '',
      payload.utm_source || '',
      payload.utm_medium || '',
      payload.utm_campaign || '',
      payload.page_url || '',
      payload.referrer || '',
      payload.user_agent || ''
    ]);

    return json_({ ok: true });
  } catch (error) {
    return json_({ ok: false, error: String(error) });
  }
}

function doGet(e) {
  const action = e.parameter.action || 'summary';
  const callback = e.parameter.callback;

  if (action !== 'summary') {
    const payload = { ok: false, error: 'Unsupported action' };
    return callback ? jsonp_(callback, payload) : json_(payload);
  }

  const sheet = getSheet_();
  const values = sheet.getDataRange().getValues();
  const rows = values.slice(1);
  const counts = {};

  rows.forEach((row) => {
    const resultKey = row[1];
    const resultTitle = row[2];
    const resultSubtitle = row[3];
    if (!resultKey) return;
    if (!counts[resultKey]) {
      counts[resultKey] = {
        result_key: resultKey,
        result_title: resultTitle,
        result_subtitle: resultSubtitle,
        count: 0
      };
    }
    counts[resultKey].count += 1;
  });

  const items = Object.values(counts)
    .sort((a, b) => b.count - a.count)
    .map((item) => ({
      ...item,
      percent: rows.length ? ((item.count / rows.length) * 100).toFixed(1) : '0.0'
    }));

  const payload = {
    ok: true,
    total: rows.length,
    generated_at: Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd HH:mm:ss'),
    items
  };

  return callback ? jsonp_(callback, payload) : json_(payload);
}
