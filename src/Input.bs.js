

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";

function Input(Props) {
  var onSubmit = Props.onSubmit;
  var match = React.useState(function () {
        return "";
      });
  var setText = match[1];
  var text = match[0];
  var onChange = function (evt) {
    evt.preventDefault();
    var value = evt.target.value;
    return Curry._1(setText, (function (param) {
                  return value;
                }));
  };
  return React.createElement("input", {
              placeholder: "Write something to do",
              type: "text",
              value: text,
              onKeyDown: (function (evt) {
                  if (evt.key === "Enter") {
                    Curry._1(onSubmit, text);
                    return Curry._1(setText, (function (param) {
                                  return "";
                                }));
                  }
                  
                }),
              onChange: onChange
            });
}

var make = Input;

export {
  make ,
  
}
/* react Not a pure module */
