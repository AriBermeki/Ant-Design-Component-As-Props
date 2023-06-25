import { Menu } from 'antd';

const UIMenu = (props) => {
  const {
    defaultOpenKeys,
    defaultSelectedKeys,
    expandIcon,
    forceSubMenuRender,
    inlineCollapsed,
    inlineIndent,
    items,
    mode,
    multiple,
    openKeys,
    overflowedIndicator,
    selectable,
    selectedKeys,
    style,
    subMenuCloseDelay,
    subMenuOpenDelay,
    theme,
    triggerSubMenuAction,
    onClick,
    onDeselect,
    onOpenChange,
    onSelect,
  } = props;

  const renderMenuItems = (items) => {
    return items.map((item) => {
      if (item.type === 'group') {
        return (
          <Menu.ItemGroup key={item.label} title={item.label}>
            {renderMenuItems(item.children)}
          </Menu.ItemGroup>
        );
      } else if (item.type === 'divider') {
        return <Menu.Divider dashed={item.dashed} />;
      } else if (item.type === 'submenu') {
        const {
          children,
          disabled,
          icon,
          key,
          label,
          popupClassName,
          popupOffset,
          onTitleClick,
          ...submenuProps
        } = item;
        return (
          <Menu.SubMenu
            key={key}
            disabled={disabled}
            icon={icon}
            title={label}
            popupClassName={popupClassName}
            popupOffset={popupOffset}
            onTitleClick={onTitleClick}
            {...submenuProps}
          >
            {renderMenuItems(children)}
          </Menu.SubMenu>
        );
      } else {
        const { danger, disabled, icon, key, label, title, ...menuItemProps } = item;
        return (
          <Menu.Item
            key={key}
            danger={danger}
            disabled={disabled}
            icon={icon}
            title={title}
            {...menuItemProps}
          >
            {label}
          </Menu.Item>
        );
      }
    });
  };

  return (
    <Menu
      defaultOpenKeys={defaultOpenKeys}
      defaultSelectedKeys={defaultSelectedKeys}
      expandIcon={expandIcon}
      forceSubMenuRender={forceSubMenuRender}
      inlineCollapsed={inlineCollapsed}
      inlineIndent={inlineIndent}
      mode={mode}
      multiple={multiple}
      openKeys={openKeys}
      overflowedIndicator={overflowedIndicator}
      selectable={selectable}
      selectedKeys={selectedKeys}
      style={style}
      subMenuCloseDelay={subMenuCloseDelay}
      subMenuOpenDelay={subMenuOpenDelay}
      theme={theme}
      triggerSubMenuAction={triggerSubMenuAction}
      onClick={onClick}
      onDeselect={onDeselect}
      onOpenChange={onOpenChange}
      onSelect={onSelect}
    >
      {renderMenuItems(items)}
    </Menu>
  );
};

export default UIMenu;
