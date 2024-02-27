import React from 'react';
import { Resizable } from 'react-resizable';
import './App.css';

const ResizableComponent = ({ width, height, onResize, children }) => {
  return (
    <Resizable
      width={width}
      height={height}
      onResize={onResize}
      draggableOpts={{ grid: [25, 25] }}
    >
      <div className="box" style={{ width: `${width}px`, height: `${height}px` }}>
        {children}
      </div>
    </Resizable>
  );
};

const App = () => {
  const [width1, setWidth1] = React.useState(300);
  const [width2, setWidth2] = React.useState(300);
  const [width3, setWidth3] = React.useState(600); // Bottom box is initially wider

  const handleResize1 = (e, { size }) => {
    setWidth1(size.width);
  };

  const handleResize2 = (e, { size }) => {
    setWidth2(size.width);
  };

  const handleResize3 = (e, { size }) => {
    setWidth3(size.width);
  };

  return (
    <div className="app">
      <div className="top-row">
        <ResizableComponent width={width1} height={200} onResize={handleResize1}>
          <div className="component">Component 1</div>
        </ResizableComponent>
        <ResizableComponent width={width2} height={200} onResize={handleResize2}>
          <div className="component">Component 2</div>
        </ResizableComponent>
      </div>
      <div className="bottom-row">
        <ResizableComponent width={width3} height={200} onResize={handleResize3}>
          <div className="component">Component 3</div>
        </ResizableComponent>
      </div>
    </div>
  );
};

export default App;
