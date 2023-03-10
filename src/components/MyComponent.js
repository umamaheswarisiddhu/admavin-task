import React, { useState } from 'react';
import './style.css';

const elements = [
  {
    name: 'Element 1',
    children: [
      {
        name: 'Sub-element 1.1',
        children: [
          {
            name: 'Sub-sub-element 1.1.1',
          },
          {
            name: 'Sub-sub-element 1.1.2',
          },
        ],
      },
      {
        name: 'Sub-element 1.2',
      },
    ],
  },
  {
    name: 'Element 2',
    children: [
      {
        name: 'Sub-element 2.1',
      },
      {
        name: 'Sub-element 2.2',
        children: [
          {
            name: 'Sub-sub-element 2.2.1',
          },
          {
            name: 'Sub-sub-element 2.2.2',
          },
          {
            name: 'Sub-sub-element 2.2.3',
          },
        ],
      },
    ],
  },
  {
    name: 'Element 3',
  },
];

const Element = ({ element, level }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderChildren = () => {
    if (!isOpen || !element.children) {
      return null;
    }

    return (
      <ul className={`level-${level + 1}`}>
        {element.children.map((child) => (
          <li key={child.name}>
            <Element element={child} level={level + 1} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={`level-${level}`}>
      <div className="element" onClick={handleClick}>
        {element.name}
      </div>
      {renderChildren()}
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <h1>Parent-Children Relationship</h1>
      <ul className="level-0">
        {elements.map((element) => (
          <li key={element.name}>
            <Element element={element} level={0} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
