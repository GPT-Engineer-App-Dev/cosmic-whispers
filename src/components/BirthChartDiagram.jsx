import React from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const BirthChartDiagram = () => {
  const nodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: 'Aries' }, style: { background: '#ffcccb', border: '1px solid #ff0000' } },
    { id: '2', position: { x: 100, y: 100 }, data: { label: 'Taurus' }, style: { background: '#90EE90', border: '1px solid #008000' } },
    { id: '3', position: { x: 200, y: 0 }, data: { label: 'Gemini' }, style: { background: '#FFFACD', border: '1px solid #FFD700' } },
    { id: '4', position: { x: 300, y: 100 }, data: { label: 'Cancer' }, style: { background: '#E6E6FA', border: '1px solid #8A2BE2' } },
    { id: '5', position: { x: 400, y: 0 }, data: { label: 'Leo' }, style: { background: '#FFA07A', border: '1px solid #FF4500' } },
    { id: '6', position: { x: 500, y: 100 }, data: { label: 'Virgo' }, style: { background: '#F0E68C', border: '1px solid #DAA520' } },
  ];

  const edges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
    { id: 'e4-5', source: '4', target: '5', animated: true },
    { id: 'e5-6', source: '5', target: '6', animated: true },
    { id: 'e6-1', source: '6', target: '1', animated: true },
  ];

  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default BirthChartDiagram;
