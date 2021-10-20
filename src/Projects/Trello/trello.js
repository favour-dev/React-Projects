import React from 'react';
import ReactDOM from "react-dom";
import './index.css';

const Trello = ({trello}) => (
    <table className="trello-list">
      <tbody>
        <Title title='Phone Features'/>
        {trello.map(file =>
         <ListItem key={file.id} file={file}/>
          )}
          <AddCard add='Add Card...'/>
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
const ListItem = ({file}) => (
    <tr className="trello-list-item" key={file.id}>
    <td className="trello-name">{file.name}</td>
  </tr>
)

const Title = ({title}) =>(

  <h3>{title}</h3>  

)
const AddCard = ({add}) =>(
  <button>{add}</button>  
)
ReactDOM.render(<Trello  trello={cardFiles}/>, document.getElementById('root'))