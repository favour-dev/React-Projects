import React from 'react';
import ReactDOM from "react-dom";

const Trello = ({trello}) => (
    <table className="trello-list">
      <tbody>
        {trello.map(file =>
          <tr className="trello-list-item" key={file.id}>
            <td className="trello-name">{file.name}</td>
          </tr>
          )}
      </tbody>
    </table>
  
);



const cardFiles = [
  {
    id:1,
    name:'Subwoofer'
  },
  {
    id:2,
    name:'Non-porous, Washable'
  },
  {
    id:3,
    name:'Wings'
  },
  {
    id:4,
    name:'Beveled Bezel'
  },
  {
    id:5,
    name:'Bezeled Bevel'
  },
  {
    id:6,
    name:'Seedless'
  },

]

// const Title = ({title}) =>{

// }
ReactDOM.render(<Trello  trello={cardFiles}/>, document.getElementById('root'))