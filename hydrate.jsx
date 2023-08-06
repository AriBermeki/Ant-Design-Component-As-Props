import React, { useState } from 'react';

const loadAntdComponent = async (componentName) => {
  const antd = await import('antd');
  return antd[componentName];
};

const AntdComponentMap = {};
const AntdIconsMap = {};
const G2PlotChartsMap = {};

const loadAntdIcons = async (iconName) => {
  if (!AntdIconsMap[iconName]) {
    const icons = await import('@ant-design/icons');
    AntdIconsMap[iconName] = icons[iconName];
  }
  return AntdIconsMap[iconName];
};

const loadG2PlotChart = async (chartName) => {
  if (!G2PlotChartsMap[chartName]) {
    const G2Plot = await import('@antv/g2plot');
    G2PlotChartsMap[chartName] = G2Plot[chartName];
  }
  return G2PlotChartsMap[chartName];
};

const isVoidElement = (componentName) => [
  'Input',
  'InputNumber',
  'TextArea',
  'InputPassword',
  'InputSearch',
  'ColorPicker',
  'Mentions',
  'Collapse',
].includes(componentName);

const stylesMap = (styles) => {
  let mappedStyles = {};
  // Check if styles exist and is an array before running the forEach loop
  if (styles && Array.isArray(styles)) {
    styles.forEach((style) => {
      mappedStyles[style.name] = style.value;
    });
  }
  return mappedStyles;
};

const DynamicAntdComponent = ({ componentName, icon, chart, styles, ...props }) => {
  const [AntdComponent, setAntdComponent] = useState(null);

  useState(async () => {
    if (!AntdComponent) {
      if (!AntdComponentMap[componentName]) {
        AntdComponentMap[componentName] = await loadAntdComponent(componentName);
      }
      setAntdComponent(AntdComponentMap[componentName]);
    }
  }, [componentName, AntdComponent]);

  if (!AntdComponent) {
    return <div>Loading...</div>;
  }

  if (icon) {
    loadAntdIcons(icon); // Lade das Ant Design Icon dynamisch
  }

  if (chart) {
    loadG2PlotChart(chart); // Lade das G2Plot Chart dynamisch
  }

  const componentStyles = stylesMap(styles); // Wandle die Styles in ein Objekt um

  // Überprüfen, ob es sich um ein Void-Element handelt und nur die Props übergeben
  return isVoidElement(componentName) ? React.createElement(AntdComponent, props) : <AntdComponent {...props} style={componentStyles} />;
};

const App = () => {
  return (
    <div>
      <DynamicAntdComponent componentName="Button" type="primary" styles={[{ name: 'padding', value: '10px' }]}>
        Click Me
      </DynamicAntdComponent>
      <DynamicAntdComponent componentName="DatePicker" onChange={(date, dateString) => console.log(dateString)} />
      <DynamicAntdComponent componentName="Input" styles={[{ name: 'border', value: '1px solid #ccc' }]} />
      <DynamicAntdComponent componentName="Select" />
      <DynamicAntdComponent componentName="Table" columns={[]} dataSource={[]} styles={[{ name: 'border', value: '1px solid #ccc' }]} />
      <DynamicAntdComponent componentName="Bar" chart="bar" styles={[{ name: 'color', value: '#007bff' }]} />
      <DynamicAntdComponent componentName="Line" chart="line" styles={[{ name: 'color', value: '#ff0000' }]} />
    </div>
  );
};

export default App;
