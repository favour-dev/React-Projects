import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import moment from 'moment';
import propTypes from 'prop-types'

function PostCard({postcard}){
  return (
    <div className="postcard">
      <div className="top">
        <Sender sender={postcard.sender}/>
        <Stamp stampimg={postcard.stamp}/>
      </div>
      <div className="reciever-details">
        <Reciever reciever={postcard.reciever}/>
      </div>
    </div>
  )
}
const details = {
  sender: {
    name: 'John David',
    address: '123 Fake St.Boston, MA 02118'
  },
  reciever:{
    name: 'David James',
    address: '123 Fake St.San Francisco, CA 94101'
  },
  stamp :'xyz'
}

function Sender ({sender}){
  const{name, address} = sender;
  return(
  <div className='sender-container'>
    <div>{name}</div>
    <div className='address'>{address}</div>
  </div>
  )
}
function Reciever ({reciever}){
  const {name, address} = reciever;
  return (
    <div className="reciever-container">
      <div>{name}</div>
      <div>{address}</div>
    </div>
  )
}
function Stamp ({stampimg}){
  const url = `https://www.gravatar.com/avatar/${stampimg}`;
  return (
    <img src ={url} className="avatar" alt="avatar"/>
  );
}
Sender.propTypes = {
  author: propTypes.shape({
    name:propTypes.string.isRequired,
    address:propTypes.string.isRequired,
  }).isRequired
};
Reciever.propTypes = {
  author: propTypes.shape({
    name:propTypes.string.isRequired,
    address:propTypes.string.isRequired,
  }).isRequired
};

ReactDOM.render(<PostCard postcard={details}/>  , document.getElementById('root'))




// CARD

// function  MasterCard({mastercard}){
//   return (
//     <div className="mastercard">
//       <Bank text={mastercard.bankname}/>
//       <CardNumber cardnumber={mastercard.cardnumber}/>
//       <HoldersName name={mastercard.name}/>
//     </div>
//   )
// }

// const carddetails = {
//   bankname: 'Big Bank, Inc',
//   cardnumber:{
//   cardno: '1234 5678 8765 4321',
//   cvv: '123',
//   date:'Valid till 08/19'
// },
//   name:"Ebebeinwe Favour"

// }
// function Bank ({text}) {
//   return (
//     <div>
//       <h1 className='ownersbank'>{text}</h1>
//     </div>
//   )
// }
// function CardNumber ({cardnumber}){
//   const {cardno, cvv ,date} = cardnumber;
//   return(
//     <div>
//       <p>{cardno}</p>
//       <p>{cvv}</p>
//       <p>{date}</p>
//     </div>
//   )
// }

// function HoldersName ({name}){
//   return(
//     <div>
//       <h2 className="owner">{name}</h2>
//     </div>
//   )
// }
// ReactDOM.render(<MasterCard mastercard={carddetails}/> , document.getElementById('root'))






// POSTER


// function  Poster({poster}){
//   return (
//     <div className="postercard">
//       <div className="image"><Avatar hash={posterdetails.image} /></div>
//       <ReactPoster text={posterdetails.react}/>
//     </div>
//   )
// }
// const posterdetails = {
//   image:'xyz',
//   react:{
//     title:'React',
//     write:"The best thing since jQuery,probably."
//   }

// }
// function Avatar({hash}){
//   const url = `https://www.gravatar.com/avatar/${hash}`;
//   return (
//     <img src ={url} className="avatar" alt="avatar"/>
//   );
// }
// function ReactPoster ({text}) {
//   const {title, write} = text
//   return (
//     <div>
//       <h1 className='heading'>{title}</h1>
//       <p>{write}</p>
//     </div>
//   )
// }
// ReactDOM.render(<Poster postercard={posterdetails}/> , document.getElementById('root'))