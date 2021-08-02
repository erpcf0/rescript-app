type item = {
  id: int,
  title: string,
  completed: bool,
}

let lastId = ref(0)
let newItem = text => {
  lastId := lastId.contents + 1
  {id: lastId.contents, title: text, completed: true}
}
