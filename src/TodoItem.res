open Item

@react.component
let make = (~item, ~onToggle) => {
  <div onClick={_ => onToggle()}>
    <input type_="checkbox" checked={item.completed} /> {React.string(item.title)}
  </div>
}
