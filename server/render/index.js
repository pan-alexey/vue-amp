const _ = require('lodash');
const styleRender = require('./styles');
const metaAmpRender = require('./meta');

module.exports = function(template, html, context) {

  // All tagname to low case
  html = html.replace(/<([^\s>]+)(\s|>)+/gi, function(tagname) { return tagname.toLowerCase() });

  const style = styleRender(context.renderStyles());
  const meta = metaAmpRender(html);

  // TODO DELETE ALL data-v- attr
  return _.template(template)({
    html,
    style,
    meta
  });
}
