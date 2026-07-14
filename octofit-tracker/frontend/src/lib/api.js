const codespaceName = import.meta.env.VITE_CODESPACE_NAME;
export const apiBase = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

export function normalizeResponse(payload) {
  const raw = payload?.data ?? payload;

  if (Array.isArray(raw)) {
    return raw;
  }

  if (Array.isArray(raw?.items)) {
    return raw.items;
  }

  if (Array.isArray(raw?.results)) {
    return raw.results;
  }

  return raw ? [raw] : [];
}
