module.exports = function(styles) {
  if (!styles) return '';
  let style = '';
  styles.replace(/(<style\b[^<>]*>)([^<]*)(<\/style>)/gi, (_match, p1, p2) => {
    style += p2
    return ''
  })
  return `<style amp-custom>${style}</style>`;
}