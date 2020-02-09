module.exports = async function(renderer, context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      if (err) { reject(err); }
      style = ''
      context.renderStyles().replace(/(<style\b[^<>]*>)([^<]*)(<\/style>)/gi, (_match, p1, p2) => {
        style += p2
        return ''
      })

      const meta = [];
      resolve({html,style, meta});
    });
  });
};