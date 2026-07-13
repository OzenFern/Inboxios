export function getAlertContent(title, action) {
  return new URLSearchParams({
    [window.APP_CONFIG.QUERY_PARAMS.MESSAGE]: [
      window.APP_CONFIG.MESSAGES[action],
    ],
    [window.APP_CONFIG.QUERY_PARAMS.TITLE]: [title],
  });
}
