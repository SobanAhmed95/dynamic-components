// src/App.tsx
import React, { useState } from 'react';
import Input from './components/input';
import Button from './components/button';
import Table from './components/tabel';
import './App.css';

const App: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [data, setData] = useState<{ value: string }[]>([]);

  const handleAddData = () => {
    setData([...data, { value: inputValue }]);
    setInputValue('');
  };

  return (
    <div>
      <h1>Dynamic Components with TypeScript</h1>
      <Input value={inputValue} place={"Enter"} onChange={setInputValue} />
      <Button onClick={handleAddData} label="Add to Table" />
      {data.length > 0 && <Table data={data} />}
    </div>
  );
};

export default App;
