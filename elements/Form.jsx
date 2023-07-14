import { Form } from 'antd';
import React, { Component } from 'react';

class UIForm extends Component {
  constructor(props) {
    super(props);
    // Initialize state or bind methods here if needed
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentWillUnmount() {
    console.log('Component will unmount');
    // Perform cleanup or other actions before the component is unmounted
  }
  render() {
    const {
      type,
      colon,
      dependencies,
      extra,
      getValueFromEvent,
      getValueProps,
      hasFeedback,
      help,
      hidden,
      htmlFor,
      initialValue,
      label,
      labelAlign,
      labelCol,
      messageVariables,
      name,
      normalize,
      noStyle,
      preserve,
      required,
      rules,
      shouldUpdate,
      tooltip,
      trigger,
      validateFirst,
      validateStatus,
      validateTrigger,
      valuePropName,
      wrapperCol
    } = this.props;

    if (type === 'Form') {
      return (
        <Form
          colon={colon}
          initialValues={initialValue}
          labelAlign={labelAlign}
          labelCol={labelCol}
          name={name}
          preserve={preserve}
          requiredMark={required}
          validateTrigger={validateTrigger}
          wrapperCol={wrapperCol}
          onFinish={this.props.onFinish}
          onFinishFailed={this.props.onFinishFailed}
          onValuesChange={this.props.onValuesChange}
        >
          {this.props.children}
        </Form>
      );
    } else if (type === 'FormItem') {
      return (
        <Form.Item
          colon={colon}
          dependencies={dependencies}
          extra={extra}
          getValueFromEvent={getValueFromEvent}
          getValueProps={getValueProps}
          hasFeedback={hasFeedback}
          help={help}
          hidden={hidden}
          htmlFor={htmlFor}
          initialValue={initialValue}
          label={label}
          labelAlign={labelAlign}
          labelCol={labelCol}
          messageVariables={messageVariables}
          name={name}
          normalize={normalize}
          noStyle={noStyle}
          preserve={preserve}
          required={required}
          rules={rules}
          shouldUpdate={shouldUpdate}
          tooltip={tooltip}
          trigger={trigger}
          validateFirst={validateFirst}
          validateStatus={validateStatus}
          validateTrigger={validateTrigger}
          valuePropName={valuePropName}
          wrapperCol={wrapperCol}
        >
          {this.props.children}
        </Form.Item>
      );
    } else {
      return null;
    }
  }
}

export default UIForm;
