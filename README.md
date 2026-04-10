# tw-identity-spectrum-quiz

Static H5 version of the identity spectrum quiz.

Designed for direct sharing on platforms like Facebook and LINE.

## Google Sheets Stats

1. Open a Google Sheet and create a bound Apps Script.
2. Paste `google-apps-script.gs` into the script editor.
3. Deploy it as a Web App with access for `Anyone`.
4. Copy the Web App URL into `config.js` as `sheetsEndpoint`.
5. Redeploy this site.

After that:
- Quiz completions will be written into the `quiz_results` sheet.
- `stats.html` will show the aggregated result distribution.
