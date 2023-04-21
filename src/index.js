import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const myelement = (
  <table>
    <thead>
      <tr>
        <th>Name</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </tbody>
  </table>
)

const root = ReactDOM.createRoot(document.getElementById("spongebob"));
root.render(
  myelement
);


