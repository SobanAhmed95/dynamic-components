// src/components/Table.tsx
import React from 'react';
import '../App.css';

interface TableProps {
  data: { [key: string]: string }[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  if (data.length === 0) {
    return <div>No data available</div>;
  }

  const headers = Object.keys(data[0]);

  return (
    <table border={1}>
      <thead>
        <tr>
          {headers.map((key) => (
            <th key={key}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {headers.map((key) => (
              <td key={key}>{row[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
