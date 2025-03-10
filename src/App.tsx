import React from 'react';
import { ReactFlow, Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { Brain, Database, Cog, ArrowRight } from 'lucide-react';

const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { 
      label: (
        <div className="flex items-center gap-2">
          <Database className="w-4 h-4" />
          <span>Data Input</span>
        </div>
      ) 
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    data: { 
      label: (
        <div className="flex items-center gap-2">
          <Cog className="w-4 h-4" />
          <span>Transform</span>
        </div>
      ) 
    },
    position: { x: 300, y: 100 },
  },
  {
    id: '3',
    data: { 
      label: (
        <div className="flex items-center gap-2">
          <Brain className="w-4 h-4" />
          <span>ML Process</span>
        </div>
      ) 
    },
    position: { x: 500, y: 100 },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, type: 'smoothstep' },
  { id: 'e2-3', source: '2', target: '3', animated: true, type: 'smoothstep' },
];

function App() {
  return (
    <div className="w-full h-screen bg-gray-50">
      <div className="p-4 border-b bg-white shadow-sm">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900">Data Pipeline Manager</h1>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Run Pipeline
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              Export
            </button>
          </div>
        </div>
      </div>
      
      <div className="h-[calc(100vh-73px)]">
        <ReactFlow
          nodes={initialNodes}
          edges={initialEdges}
          fitView
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;