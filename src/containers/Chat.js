import React, { Component } from 'react';
import styled from 'styled-components';
import { Input, Button, Spin } from 'antd';

const { TextArea } = Input;

const SendMessageContainer = styled.div`
  position: fixed;
  width: 100;
  bottom: 0;
  display: flex;
`;

const SpinStyle = styled(Spin)`
  position: fixed;
  top: 1%;
  right: 1%;
`;

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      messages: [],
      currentMessage: '',
    };
  }

  onSendMessage = () => {
    const { messages, currentMessage } = this.state;
    messages.push(currentMessage);
    this.setState({
      loading: true,
      ...messages,
      currentMessage: '',
    });
    fetch(`https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/42a8ebdc-2b21-411d-8e99-39d88619e1b0?subscription-key=70836be2d83844f6817c5fdae289950e&timezoneOffset=-360&q=${currentMessage}`)
      .then(response => response.json())
      .then(this.checkResponse);
  }

  checkResponse= ({ entities }) => {
    const required = { Item: { name: 'Item', message: 'Que quieres encender' }, Lugar: { name: 'Lugar', message: 'De que lugar?' } };
    const keysRequired = Object.keys(required);
    const numberRequired = keysRequired.length;
    let result = 0;
    entities.forEach(({ type }) => {
      if (required[type]) {
        required[type].found = true;
        result += 1;
      }
    });
    if (result >= numberRequired) {
      console.log('HEre request ardutino');
    } else {
      const missing = keysRequired.filter(item => !required[item].found);
      const { messages } = this.state;
      messages.push(required[missing].message);
      this.setState({
        loading: false,
        ...messages,
      });
    }
  }

  handleChange = (event) => {
    this.setState({
      currentMessage: event.target.value
    });
  }

  render() {
    const { currentMessage, loading, messages } = this.state;
    return (
      <div>
        <SpinStyle spinning={loading} />
        {messages.map((item, index) => (<h2 key={index}>{item}</h2>))}
        <SendMessageContainer>
          <TextArea value={currentMessage} onChange={this.handleChange} />
          <Button type="primary" icon="right" onClick={this.onSendMessage} />
        </SendMessageContainer>
      </div>
    );
  }
}

export default Chat;
