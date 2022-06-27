import React from 'react';
const Table = ({ list, collName }) => {
  return (
    <div>
      <table cellSpacing="0">
        <thead>
          <tr>
            {/* {collName.map((headeritem, index) => (
              <th key={index}>{headeritem.toUpperCase()}</th>
            ))} */}
            {Object.keys(list[1]).map((a, i) => (
              <th key={i}>{a.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.values(list).map((obj, index) => (
            <tr key={index}>
              {Object.values(obj).map((value, index2) => (
                <td key={index2}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
