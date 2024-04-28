import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ParentComponent = () => {
  const [result, setResult] = useState('');
  const history = useHistory();

  const handleGenerateResult = () => {
    // Simulating generating a result
    const generatedResult = 'Generated Result';
    setResult(generatedResult);
    // Navigate to the new page with the result as a URL parameter
    history.push(`/result/${generatedResult}`);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={handleGenerateResult}>Generate Result</button>
    </div>
  );
};

export default ParentComponent;