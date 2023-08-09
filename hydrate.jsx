import './App.css';
import React, { useEffect, useState, useMemo} from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';
import { Layout, notification,  ColorPicker} from 'antd';
//import {renderComponent} from './core/render_';
import { Bar } from '@antv/g2plot';
import {
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  dsgtrgertgergr,
  TeamOutlined 
} from '@ant-design/icons';
//import {BarChart} from './data/UIBar';
const { Content } = Layout;





const AntdComponentMap = {};
const AntdIconsMap = {};
const AntdChartsMap = {};

const loadAntdComponent = async (componentName) => {
  const antd = await import('antd');
  return antd[componentName];
};

const loadAntdIconComponent = async (iconName) => {
  if (!AntdIconsMap[iconName]) {
    const icons = await import('@ant-design/icons');
    AntdIconsMap[iconName] = icons[iconName];
  }
  return AntdIconsMap[iconName];
};

const loadG2PlotChartComponent = async (chartName) => {
  if (!AntdChartsMap[chartName]) {
    const G2Plot = await import('@antv/g2plot');
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
  'Input',
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

  const componentStyles = stylesMap(componentProps.styles);
  const isVoid = isVoidElement(component);

  let renderedContent = null;
  if (typeof content === 'string') {
    renderedContent = content;
  } else if (Array.isArray(content)) {
    renderedContent = content.map((child, index) => (
      // Handle text nodes or nested components here
      typeof child === 'string' ? child : (
        <DynamicAntdComponent key={index} {...child} />
      )
    ));
  }

  const jsx = isVoid ? (
    React.createElement(AntdComponent, componentProps, renderedContent)
  ) : (
    <AntdComponent {...componentProps} style={componentStyles}>
      {renderedContent}
    </AntdComponent>
  );

  return jsx;
};







const App = () => {
  const jsonObject = {
    "component": "Layout",
    "props": {
      
    },
    "content": [
      "Textknoten",
      {
        "component": "Button",
        "props": {
          "type":"primary"
        }, // Empty object as props
        "content": ["hallo"]
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
