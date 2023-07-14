import React from 'react';
import { Row, Col } from 'antd';

class UIGrid extends React.Component {
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
    const { align, gutter, justify, wrap, colProps } = this.props;
    return (
      <Row align={align} gutter={gutter} justify={justify} wrap={wrap}>
        <Col {...colProps}>
          {/* Hier kannst du den Inhalt der Col-Komponente platzieren */}
        </Col>
      </Row>
    );
    }
}

export default UIGrid;

// <UIGrid
//   align={{
//     xs: 'top',
//     sm: 'middle',
//     md: 'bottom',
//     lg: 'stretch',
//     xl: 'top',
//     xxl: 'middle'
//   }}
//   gutter={{
//     xs: 8,
//     sm: 16,
//     md: 24
//   }}
//   justify={{
//     xs: 'start',
//     sm: 'end',
//     md: 'center',
//     lg: 'space-around',
//     xl: 'space-between',
//     xxl: 'space-evenly'
//   }}
//   wrap
//   colProps={{
//     flex: 'auto',
//     offset: 2,
//     order: 1,
//     pull: 1,
//     push: 1,
//     span: {
//       xs: 24,
//       sm: 12,
//       md: 8,
//       lg: 6,
//       xl: 4,
//       xxl: 2
//     }
//   }}
// />
