import * as d3 from "d3";

//
// d3sparql.js - utilities for visualizing SPARQL results with the D3 library
//
//   Web site: http://github.com/ktym/d3sparql/
//   Copyright: 2013-2015 (C) Toshiaki Katayama (ktym@dbcls.jp)
//   License: BSD license (same as D3.js)
//   Initial version: 2013-01-28
//

var d3sparql = {
    version: "d3sparql.js version 2018-05-04",
    debug: false  // set to true for showing debug information
  }

/*
  Convert sparql-results+json object into a JSON tree of {"name": name, "value": size, "children": []} format like in the flare.json file.
  Suitable for d3.layout.hierarchy() family
    * cluster:    d3sparql.dendrogram()
    * pack:       d3sparql.circlepack()
    * partition:  d3sparql.sunburst()
    * tree:       d3sparql.roundtree()
    * treemap:    d3sparql.treemap(), d3sparql.treemapzoom()
  Options:
    config = {
      "root":   "root_name",    // SPARQL variable name for root node (optional; default is the 1st variable)
      "parent": "parent_name",  // SPARQL variable name for parent node (optional; default is the 2nd variable)
      "child":  "child_name",   // SPARQL variable name for child node (ptional; default is the 3rd variable)
      "value":  "value_name"    // SPARQL variable name for numerical value of the child node (optional; default is the 4th variable or "value")
    }
  Synopsis:
    d3sparql.sparql(endpoint, sparql, render)
    function render(json) {
      var config = { ... }
      d3sparql.roundtree(json, config)
      d3sparql.dendrogram(json, config)
      d3sparql.sunburst(json, config)
      d3sparql.treemap(json, config)
      d3sparql.treemapzoom(json, config)
    }
*/
function tree(json, root) {

    var pair = new Map()
    var size = new Map()
    var parent = true;
    var child = true;
    var children = true
    for (var i = 0; i < json.length; i++) {
      parent = json[i][1]
      child = json[i][0]
      if (parent != child) {
        if (pair.has(parent)) {
          children = pair.get(parent)
          children.push(child)
        } else {
          children = [child]
        }
        pair.set(parent, children)
      }
    }
    function traverse(node) {
      var list = pair.get(node)
      if (list) {
        var children = list.map(function(d) { return traverse(d) })
        // sum of values of children
        var subtotal = d3.sum(children, function(d) { return d.value })
        // add a value of parent if exists
        var total = d3.sum([subtotal, size.get(node)])
        return {"name": node, "children": children}
      } else {
        return {"name": node, "value": size.get(node) || 1}
      }
    }
    var tree = traverse(root)
  
    if (true || d3sparql.debug) { console.log(JSON.stringify(tree)) }
    return tree
  }

  export{tree};