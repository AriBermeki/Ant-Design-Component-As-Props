import { Form } from 'antd';
import React from 'react';

const UIForm= ({props}) => {
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
      } = props
  if (type === 'Form') {
    return <Form
            colon={colon}
            disabled={disabled}
            component={component}
            fields={fields}
            form={form}
            initialValues={initialValues}
            labelAlign={labelAlign}
            labelWrap={labelWrap}
            labelCol={labelCol}
            layout={layout}
            name={name}
            preserve={preserve}
            requiredMark={requiredMark}
            scrollToFirstError={scrollToFirstError}
            size={size}
            validateMessages={validateMessages}
            validateTrigger={validateTrigger}
            wrapperCol={wrapperCol}
            onFieldsChange={onFieldsChange}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            onValuesChange={onValuesChange}
            />;
  } else if (type === 'FormItem') {
    return <Form.Item 
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
        />;
  } else {
    return null;
  }
};

export default UIForm;
