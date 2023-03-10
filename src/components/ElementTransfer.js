import React, { useState } from 'react';

function ElementTransfer() {
  const [bucket1, setBucket1] = useState(['Element 1', 'Element 2', 'Element 3']);
  const [bucket2, setBucket2] = useState([]);

  const transferToBucket2 = () => {
    const selectedElements = bucket1.filter((element, index) => {
      return document.getElementById(`element-${index}`).checked;
    });
    setBucket1(bucket1.filter((element, index) => {
      return !document.getElementById(`element-${index}`).checked;
    }));
    setBucket2(bucket2.concat(selectedElements));
  };

  const transferToBucket1 = () => {
    const selectedElements = bucket2.filter((element, index) => {
      return document.getElementById(`element-${index + bucket1.length}`).checked;
    });
    setBucket2(bucket2.filter((element, index) => {
      return !document.getElementById(`element-${index + bucket1.length}`).checked;
    }));
    setBucket1(bucket1.concat(selectedElements));
  };

  const addAllToBucket2 = () => {
    setBucket2(bucket2.concat(bucket1));
    setBucket1([]);
  };

  const addAllToBucket1 = () => {
    setBucket1(bucket1.concat(bucket2));
    setBucket2([]);
  };

  return (
    <div>
      <h2>Bucket 1</h2>
      {bucket1.map((element, index) => (
        <div key={index}>
          <input type="checkbox" id={`element-${index}`} />
          <label htmlFor={`element-${index}`}>{element}</label>
        </div>
      ))}
      <button onClick={transferToBucket2}>Transfer to Bucket 2</button>

      <h2>Bucket 2</h2>
      {bucket2.map((element, index) => (
        <div key={index}>
          <input type="checkbox" id={`element-${index + bucket1.length}`} />
          <label htmlFor={`element-${index + bucket1.length}`}>{element}</label>
        </div>
      ))}
      <button onClick={transferToBucket1}>Transfer to Bucket 1</button>

      <div>
        <button onClick={addAllToBucket2}>Add All to Bucket 2</button>
        <button onClick={addAllToBucket1}>Add All to Bucket 1</button>
      </div>
    </div>
  );
}

export default ElementTransfer;
