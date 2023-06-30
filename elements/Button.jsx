import React, { useState } from 'react';
import { Button } from 'antd';
import axios from 'axios';

const UIButton = (props) => {
  const [event, setEvent] = useState(props.callback_event);
  const [child, setChild] = useState(props.childrn);

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
    type
  } = props;

  const handelchange = (e) => {
    console.log(e.target.className);
    axios.post('http://localhost:8000/callback', { callback_event: event })
      .then((response) => {
        console.log('Callback gesendet', response);
      })
      .catch((error) => {
        console.error('Fehler beim Senden des Callbacks', error);
      });
  };

  let childElements = null;
  if (typeof child === 'string') {
    childElements = child;
  } else if (Array.isArray(child)) {
    childElements = child.map((item, index) => <span key={index}>{item}</span>);
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
      onClick={handelchange}
    >
     {childElements}
    </Button>
  );
};

export default UIButton;

