%%raw(`import './App.css';`)

@module("./logo.svg") external logo: string = "default"
open Item

type state = {items: list<item>}

type action =
  | AddItem(string)
  | ToggleItem(int)

@react.component
let make = () => {
  let ({items}, dispatch) = React.useReducer((state, action) => {
    switch action {
    | AddItem(text) => {items: list{newItem(text), ...state.items}}
    | ToggleItem(id) =>
      let itemss = Belt.List.map(state.items, item =>
        item.id === id ? {...item, completed: !item.completed} : item
      )
      {items: itemss}
    }
  }, {items: list{{id: 0, title: "Write some things to do.", completed: false}}})

  let numItems = Belt.List.length(items)

  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1> {React.string("Rescript React")} </h1>
    </header>
    <div className="container">
      <div className="title">
        {React.string("What to do")} <Input onSubmit={text => dispatch(AddItem(text))} />
      </div>
      <div className="items">
        {Belt.List.map(items, item =>
          <TodoItem
            key={Belt.Int.toString(item.id)} onToggle={() => dispatch(ToggleItem(item.id))} item
          />
        )
        ->Array.of_list
        ->React.array}
      </div>
      <div className="footer"> {React.string(Belt.Int.toString(numItems) ++ "items")} </div>
    </div>
  </div>
}
