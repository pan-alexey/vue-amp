const matchTagName = (markup) => {
  const pattern = /<([^\s>]+)(\s|>)+/
  return markup.match(pattern)[1]
}

// get all amp tags in ssr html for include in meta
module.exports = function(html) {
  if (!html) return '';
  let result = '<script async src="https://cdn.ampproject.org/v0.js"></script>';
  result +='<script custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js" async></script>';

  const ampTags = {};
  html = html.replace(/<amp([^>]*)>/gi, (matchAmp) => {
    if( matchTagName(matchAmp).indexOf('amp-img') > -1 ) return;
    if( matchTagName(matchAmp).indexOf('amp-state') > -1 ) { ampTags['amp-bind'] = true; return;}
    ampTags[matchTagName(matchAmp)]= true;
  });

  for (amp in ampTags) {
    if( amp.indexOf('amp-bind') > -1 ) continue;
    result += `<script async custom-element="${amp}" src="https://cdn.ampproject.org/v0/${amp}-0.1.js"></script>\n`;
  }

    // if use amp-lightbox-gallery
    result +='<script async custom-element="amp-lightbox-gallery" src="https://cdn.ampproject.org/v0/amp-lightbox-gallery-0.1.js"></script>';

  return result;
}