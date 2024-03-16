import React, { useState } from 'react';

export default function Home() {
  const [stack, setStack] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handlePush = () => {
    if (!inputValue.trim()) {
      alert('Please enter a valid value.');
      return;
    }
    const updatedStack = stack.concat(inputValue);
    setStack(updatedStack);
    setInputValue('');
  };

  const handlePop = () => {
    if (stack.length === 0) {
      alert('Stack is empty!');
      return;
    }
    const updatedStack = stack.slice(1); 
    setStack(updatedStack);
  };

  return (
    <div style={{ backgroundColor: '#3498db', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ background: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '100%' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#000' }}>Stack of Values</h1>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ width: '100%', padding: '8px', marginBottom: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px', color: '#000' }}
          />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={handlePush} style={{ background: '#27ae60', color: '#fff', border: 'none', padding: '10px 20px', marginRight: '10px', borderRadius: '4px', cursor: 'pointer' }}>Push</button>
            <button onClick={handlePop} style={{ background: '#e74c3c', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer' }}>Pop</button>
          </div>
        </div>
        <div>
          <h2 style={{ marginBottom: '10px', color: '#000' }}>Stack Content:</h2>
          {stack.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#888' }}>Stack is empty.</p>
          ) : (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {stack.map((item, index) => (
                <li key={index} style={{ padding: '8px', background: '#f5f5f5', marginBottom: '5px', borderRadius: '4px', color: '#000' }}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}