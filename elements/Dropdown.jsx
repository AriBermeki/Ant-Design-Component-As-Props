import React from 'react';
import { Dropdown } from 'antd';

class UIDropdown extends React.Component {
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
      arrow,
      autoAdjustOverflow,
      autoFocus,
      disabled,
      destroyPopupOnHide,
      dropdownRender,
      getPopupContainer,
      menu,
      overlayClassName,
      overlayStyle,
      placement,
      trigger,
      open, // Renamed prop from 'visible'
      onOpenChange, // Renamed prop from 'onVisibleChange'
    } = this.props;

    return (
      <Dropdown
        arrow={arrow}
        autoAdjustOverflow={autoAdjustOverflow}
        autoFocus={autoFocus}
        disabled={disabled}
        destroyPopupOnHide={destroyPopupOnHide}
        dropdownRender={dropdownRender}
        getPopupContainer={getPopupContainer}
        menu={menu}
        overlayClassName={overlayClassName}
        overlayStyle={overlayStyle}
        placement={placement}
        trigger={trigger}
        open={open} // Renamed prop
        onOpenChange={onOpenChange} // Renamed prop
      >
        {/* Hier kommt der Inhalt des Dropdown-Triggers */}
        <button>Dropdown öffnen</button>
      </Dropdown>
    );
  }
}

export default UIDropdown;
