

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";

function TodoItem(Props) {
  var item = Props.item;
  var onToggle = Props.onToggle;
  return React.createElement("div", {
              onClick: (function (param) {
                  return Curry._1(onToggle, undefined);
                })
            }, React.createElement("input", {
                  checked: item.completed,
                  type: "checkbox"
                }), item.title);
}

var make = TodoItem;

export {
  make ,
  
}
/* react Not a pure module */
