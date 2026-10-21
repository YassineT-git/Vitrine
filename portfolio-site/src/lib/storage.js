/** Préférences locales : aucune donnée ne part vers un serveur.
 * Les erreurs de stockage (navigation privée, quota...) ne bloquent pas le site.
 */
export const read = (key, fallback) => {
  try {
    return localStorage.getItem("yt-" + key) ?? fallback;
  } catch {
    return fallback;
  }
};
export const write = (key, value) => {
  try {
    localStorage.setItem("yt-" + key, value);
  } catch {}
};
export const readJSON = (key, fallback) => {
  try {
    return JSON.parse(read(key, JSON.stringify(fallback)));
  } catch {
    return fallback;
  }
};
