import React from 'react';
import { useParams } from 'react-router-dom';

const ResultComponent = () => {
  const { result } = useParams();

  return (
    <div>
      <h1>Result Page</h1>
      <p>{result}</p>
    </div>
  );
};

export default ResultComponent;