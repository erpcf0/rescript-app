


var lastId = {
  contents: 0
};

function newItem(text) {
  lastId.contents = lastId.contents + 1 | 0;
  return {
          id: lastId.contents,
          title: text,
          completed: true
        };
}

export {
  lastId ,
  newItem ,
  
}
/* No side effect */
