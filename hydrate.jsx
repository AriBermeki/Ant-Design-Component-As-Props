import React, { useEffect, useState } from 'react';
import {UIAnchor} from './components/index.jsx';
import { Layout } from 'antd';


const AntdComponentMap = {};
const AntdIconsMap = {};
const AntdChartsMap = {};

const loadAntdComponent = async (componentName) => {
  const antd = await import('./components/index.jsx');
  return antd[componentName];
};

const loadAntdIconComponent = async (iconName) => {
  if (!AntdIconsMap[iconName]) {
    const icons = await import('./components/index.jsx');
    AntdIconsMap[iconName] = icons[iconName];
  }
  return AntdIconsMap[iconName];
};

const loadG2PlotChartComponent = async (chartName) => {
  if (!AntdChartsMap[chartName]) {
    const G2Plot = await import('./components/index.jsx');
    AntdChartsMap[chartName] = G2Plot[chartName];
  }
  return AntdChartsMap[chartName];
};


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



const isVoidElement = (componentName) => [
  'UIInput',
  'UIInputNumber',
  'UICalendar',
  'UITextArea',
  
 
  
  
].includes(componentName);

const DynamicAntdComponent = ({ component, props: componentProps, content }) => {
  const [AntdComponent, setAntdComponent] = useState(null);
  const [AntdIcon, setAntdIcon] = useState(null);
  const [AntdChart, setAntdChart] = useState(null);

  useEffect(() => {
    const loadComponent = async () => {
      if (!AntdComponent) {
        if (!AntdComponentMap[component]) {
          AntdComponentMap[component] = await loadAntdComponent(component);
        }
        setAntdComponent(AntdComponentMap[component]); // Hier den-Export der Komponente verwenden
      }
    };
    const loadicon = async () => {
      if (!AntdIcon) {
        if (!AntdIconsMap[component]) {
          AntdIconsMap[component] = await loadAntdIconComponent(component);
        }
        setAntdIcon(AntdIconsMap[component]); // Hier den-Export der Komponente verwenden
      }
    };
    const loadchart = async () => {
      if (!AntdChart) {
        if (!AntdChartsMap[component]) {
          AntdChartsMap[component] = await loadG2PlotChartComponent(component);
        }
        setAntdChart(AntdChartsMap[component]); // Hier den-Export der Komponente verwenden
      }
    };

    loadComponent();
    loadicon();
    loadchart();
  }, [component, AntdComponent, AntdChart,AntdIcon]);

  if (!AntdComponent) {
    
    return null;
  }

  const componentStyles = stylesMap(componentProps.styles); // Wandle die Styles in ein Objekt um

  // Check if the component is a void element
  const isVoid = isVoidElement(component);
  const jsx =isVoid ? ( React.createElement(AntdComponent, componentProps)) : (
    <AntdComponent {...componentProps} style={componentStyles}>
      {content &&
        content.map((child, index) => (
          <DynamicAntdComponent key={index} {...child} />
        ))}
    </AntdComponent>
  );
  // Render the component using appropriate syntax based on void element
  return jsx
}






const App = () => {
  const jsonObject = {
    "component": "UILayout",
    "props": {},
    "content": [
      "Textknoten",
      {
        "component": "UISlider",
        "props": {}, // Empty object as props
        "content": []
      },
    
    ]
  };
  
  
  return (
    <div>
      <Layout>
        <DynamicAntdComponent {...jsonObject} />
        
        
      </Layout>
      
      
      
    </div>
  );
};

export default App;
