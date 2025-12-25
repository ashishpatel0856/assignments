import React from 'react'
const NameList = ({ names }) => {
  if (!names.length) {
    return <p className="mt-4 text-gray-500 text-center">No names yet</p>;
  }

  return (
    <ul className="list-disc list-inside mt-4 space-y-1">
      {names.map((name, index) => (
        <li key={index}>{name}</li>
      ))}
    </ul>
  );
};

export default NameList;

