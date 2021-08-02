@react.component
let make = (~onSubmit) => {
  let (text, setText) = React.useState(_ => "")
  let onChange = evt => {
    ReactEvent.Form.preventDefault(evt)
    let value = ReactEvent.Form.target(evt)["value"]
    setText(_ => value)
  }
  <input
    value=text
    type_="text"
    placeholder="Write something to do"
    onChange
    onKeyDown={evt =>
      if ReactEvent.Keyboard.key(evt) == "Enter" {
        onSubmit(text)
        setText(_ => "")
      }}
  />
}
