import React from 'react';

const List = ({ items }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-md shadow-lg">
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
