import React, { Component } from 'react';
import { Button } from 'antd';
import axios from 'axios';

class UIButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: props.callback_event,
      child: props.childrn,
    };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    // Perform cleanup or other actions before the component is unmounted
  }

  handleChange = (e) => {
    console.log(e.target.className);
    axios
      .post('http://localhost:8000/callback', { callback_event: this.state.event })
      .then((response) => {
        console.log('Callback gesendet', response);
      })
      .catch((error) => {
        console.error('Fehler beim Senden des Callbacks', error);
      });
  };

  render() {
    const {
      block,
      classNames,
      danger,
      disabled,
      ghost,
      href,
      htmlType,
      loading,
      shape,
      size,
      styles,
      target,
      type,
    } = this.props;

    let childElements = null;
    if (typeof this.state.child === 'string') {
      childElements = this.state.child;
    } else if (Array.isArray(this.state.child)) {
      childElements = this.state.child.map((item, index) => <span key={index}>{item}</span>);
    }

    return (
      <Button
        block={block === 'True'}
        className={classNames}
        danger={danger === 'True'}
        disabled={disabled === 'True'}
        ghost={ghost === 'True'}
        href={href}
        htmlType={htmlType}
        loading={loading === 'True'}
        shape={shape}
        size={size}
        style={styles}
        target={target}
        type={type}
        onClick={this.handleChange}
      >
        {childElements}
      </Button>
    );
  }
}

export default UIButton;
