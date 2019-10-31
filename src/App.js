import React from "react"
import Chatbot from "./components/Chatbot"


const data = [
  {
    icon: "userIcon",
  	title: "Shrimpy will help you!",
  	timestamp: "01.11.2019",
  	status: "seen",
    id: "channel0",
  	content: [
  		{dialogue: 10}
  		]
  },
  {
    icon: "userIcon2",
    title: "You got another badge!",
    timestamp: "27.10.2019",
    status: "read",
    id: "channel1",
    content: [
      {dialogue: 5}
      ]
  },
  {
    icon: "userIcon3",
    title: "You got just another badge",
    timestamp: "26.10.2019",
    status: "seen",
    id: "channel2",
    content: [
      {dialogue: 100}
      ]
  },
  {
    icon: "userIcon3",
    title: "Yeah!!",
    timestamp: "24.10.2019",
    status: "seen",
    id: "channel3",
    content: [
      {dialogue: 20}
      ]
  },
  {
    icon: "userIcon3",
    title: "This is a title",
    timestamp: "24.10.2019",
    status: "seen",
    id: "channel4",
    content: [
      {dialogue: 3}
      ]
  },
  {
    icon: "userIcon3",
    title: "What do you think?",
    timestamp: "15.10.2019",
    status: "seen",
    id: "channel5",
    content: [
      {dialogue: 42}
      ]
  },
  {
    icon: "userIcon3",
    title: "Just another thing",
    timestamp: "14.10.2019",
    status: "read",
    id: "channel6",
    content: [
      {dialogue: 21}
      ]
  },
  {
    icon: "userIcon3",
    title: "I want to ask something",
    timestamp: "03.10.2019",
    status: "read",
    id: "channel7",
    content: [
      {dialogue: 8}
      ]
  },
  {
    icon: "userIcon3",
    title: "This title is looooooooooooooooooooooooooooooooooooooooooooooong",
    timestamp: "13.09.2019",
    status: "read",
    id: "channel8",
    content: [
      {dialogue: 400}
      ]
  }
]

class App extends React.Component{
  state = {
    chatBotIsActive: false
  }

  toggleChatbot = () => {
    this.setState({chatBotIsActive: !this.state.chatBotIsActive})
  }

  render() {
    return (
      <div className="App">
        {!this.state.chatBotIsActive ?
          <Chatbot data={data} toggleChatbot={this.toggleChatbot}/> :
          <ChatbotButton toggleChatbot={this.toggleChatbot}/>
        }
      </div>
    )
  }
}

function ChatbotButton (props) {
  return (
    <button onClick={props.toggleChatbot}> Enter Chatbot </button>
  )
}

export default App;
