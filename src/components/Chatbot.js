import React from "react"
import Flexbox from "flexbox-react"

import "./Chatbot.css"
import Chats from "./Chats"

class Chatbot extends React.Component {
  state = {
      activeChannel: false
  }

  // use arrow function to get parameter from onCLick function
  toggleChannel = clickedChannel => e => {
    e.preventDefault()
    this.setState({activeChannel: clickedChannel})
  }

  render() {
    return (
      <div>
        <Flexbox className="chatbot-flexbox" flexDirection="row">
          <Flexbox className="channels-flexbox" flexGrow={1}>
            <Channels channels={this.props.data} toggleChannel={this.toggleChannel} activeChannel={this.state.activeChannel}/>
          </Flexbox>
          <Flexbox className="chats-flexbox" flexGrow={4}>
            <Chats toggleChatbot={this.props.toggleChatbot} activeChannel={this.state.activeChannel}/>
          </Flexbox>
        </Flexbox>
      </div>
    )
  }
}

function Channels (props) {
  const channels = props.channels
  const listChannels = channels.map((channel, index) =>
  <div>
    <li key={channel.id}>
      <Channel channel={channel} toggleChannel={props.toggleChannel} activeChannel={props.activeChannel} />
    </li>
    <div className="channel-list-line"/>
  </div>
  )
  return (
    <Flexbox className="channels" flexDirection="column">
      <div className="channel-header">
        Channelheader
      </div>
      <ul className="channel-list">
        {listChannels}
      </ul>
    </Flexbox>
  )
}

function Channel (props) {
  let className = "channel-button"
  if (props.activeChannel.id === props.channel.id) {
    className += " active"
  }

  return (
    <button className={className} onClick={props.toggleChannel(props.channel)}>
      <Flexbox flexDirection="row">
        <div className="channel-button-img">
          {/* <img src={userImg} alt={"logo"}/> */}
          Bild
        </div>
        <Flexbox className="channel-button-title" flexDirection="column" flexGrow={1}>
          {props.channel.title}
          {/* <Flexbox className="channel-button-title" flexGrow={1}>
          </Flexbox> */}
          {/* <Flexbox className="channel-button-subtitle">
            {props.channel.status}
          </Flexbox> */}
        </Flexbox>
        <Flexbox className="channel-button-status">
          {props.channel.timestamp}
        </Flexbox>
      </Flexbox>
    </button>
  )
}

export default Chatbot
