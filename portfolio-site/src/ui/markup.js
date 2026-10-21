/**
 * Balise de gabarit HTML : elle permet à Prettier d'indenter le HTML.
 * Les textes viennent de nos fichiers de contenu ; les saisies utilisateur
 * doivent toujours passer par esc() avant d'être insérées dans ce HTML.
 */
export const html = (parts, ...values) =>
  parts.reduce(
    (result, part, index) => result + part + (index < values.length ? values[index] : ""),
    "",
  );
export const esc = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char],
  );
