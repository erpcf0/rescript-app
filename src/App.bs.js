

import * as Item from "./Item.bs.js";
import * as $$Array from "rescript/lib/es6/array.js";
import * as Curry from "rescript/lib/es6/curry.js";
import * as Input from "./Input.bs.js";
import * as React from "react";
import * as TodoItem from "./TodoItem.bs.js";
import * as Belt_List from "rescript/lib/es6/belt_List.js";
import LogoSvg from "./logo.svg";

import './App.css';
;

var logo = LogoSvg;

function App(Props) {
  var match = React.useReducer((function (state, action) {
          if (action.TAG === /* AddItem */0) {
            return {
                    items: {
                      hd: Item.newItem(action._0),
                      tl: state.items
                    }
                  };
          }
          var id = action._0;
          var itemss = Belt_List.map(state.items, (function (item) {
                  if (item.id === id) {
                    return {
                            id: item.id,
                            title: item.title,
                            completed: !item.completed
                          };
                  } else {
                    return item;
                  }
                }));
          return {
                  items: itemss
                };
        }), {
        items: {
          hd: {
            id: 0,
            title: "Write some things to do.",
            completed: false
          },
          tl: /* [] */0
        }
      });
  var dispatch = match[1];
  var items = match[0].items;
  var numItems = Belt_List.length(items);
  return React.createElement("div", {
              className: "App"
            }, React.createElement("header", {
                  className: "App-header"
                }, React.createElement("img", {
                      className: "App-logo",
                      alt: "logo",
                      src: logo
                    }), React.createElement("h1", undefined, "Rescript React")), React.createElement("div", {
                  className: "container"
                }, React.createElement("div", {
                      className: "title"
                    }, "What to do", React.createElement(Input.make, {
                          onSubmit: (function (text) {
                              return Curry._1(dispatch, {
                                          TAG: /* AddItem */0,
                                          _0: text
                                        });
                            })
                        })), React.createElement("div", {
                      className: "items"
                    }, $$Array.of_list(Belt_List.map(items, (function (item) {
                                return React.createElement(TodoItem.make, {
                                            item: item,
                                            onToggle: (function (param) {
                                                return Curry._1(dispatch, {
                                                            TAG: /* ToggleItem */1,
                                                            _0: item.id
                                                          });
                                              }),
                                            key: String(item.id)
                                          });
                              })))), React.createElement("div", {
                      className: "footer"
                    }, String(numItems) + "items")));
}

var make = App;

export {
  logo ,
  make ,
  
}
/*  Not a pure module */
