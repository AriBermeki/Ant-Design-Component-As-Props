import { Dropdown } from 'antd';

const UIDropdown = (props) => {
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
    open, 
    onOpenChange 
    } = props;

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
      visible={open} // 'visible' prop was renamed to 'open' in version 4.23.0
      onVisibleChange={onOpenChange} // 'onVisibleChange' prop was renamed to 'onOpenChange' in version 4.23.0
    >
      {/* Hier kommt der Inhalt des Dropdown-Triggers */}
      <button>Dropdown öffnen</button>
    </Dropdown>
  );
};

export default UIDropdown;
