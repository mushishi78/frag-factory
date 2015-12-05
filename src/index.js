require('./reduce-polyfill');

exports.create = function(defintions) {
  var frag = document.createDocumentFragment();
  return defintions.reduce ? defintions.reduce(append, frag) : append(frag, defintions);
}

function append(node, definition) {
  var element = document.createElement(definition.tag);

  for(var k in definition) {
    if(k === 'tag') {}
    else if(k === 'children') { definition.children.reduce(append, element); }
    else if(k === 'text') { element.appendChild(document.createTextNode(definition.text)); }
    else if(k in element && k !== 'style') { element[k] = definition[k]; }
    else { element.setAttribute(k, definition[k]); }
  }

  node.appendChild(element);
  return node;
}
