import React from "react"
import Flexbox from "flexbox-react"

import "./Chats.css"

class Chats extends React.Component {
  getInput = (e) => {
    e.preventDefault()
    const chatInput = e.target.elements.chatInput.value
    console.log(chatInput)
  }

  render() {
    return (
      <Flexbox className="chats" flexDirection="column">
        <Chatheader toggleChatbot={this.props.toggleChatbot} activeChannel={this.props.activeChannel}/>
        <Chatdialog activeChannel={this.props.activeChannel}/>
        <Chattextfield getInput={this.getInput} />
      </Flexbox>
    )
  }
}

const Chatheader = props => (
  <Flexbox className="chat-header" flexDirection="row">
    <Flexbox className="chat-header-title" flexGrow={1}>
      {props.activeChannel.title}
    </Flexbox>
    <Flexbox className="chat-header-button">
      <button onClick={props.toggleChatbot}> Exit Chatbot </button>
    </Flexbox>
  </Flexbox>
)

function Chatdialog (props) {
  let dialogue = 0
  if (props.activeChannel) {
    dialogue = props.activeChannel.content[0].dialogue
  }
  let items = [...Array(dialogue)].map((val, i) => `Item ${i}`)

  return (
    <div className="chat-list">
      <ul>
        {items.map((item, i) => (<li key={`item_${i}`}>{ item }</li>))}
      </ul>
    </div>
  )
}

function Chattextfield (props) {
    return (
      <form onSubmit={props.getInput} className="chat-textfield-form">
        <Flexbox className="chat-textfield" flexDirection="row">
          <Flexbox flexGrow={1}>
            <input type="text" name="chatInput" className="chat-input"/>
          </Flexbox>
          <button className="chat-input-button"> Send </button>
        </Flexbox>
      </form>
    )
}


export default Chats
