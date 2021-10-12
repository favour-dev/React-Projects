import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import moment from 'moment';
import propTypes from 'prop-types'

function Tweet({tweet}){
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <Author author={tweet.author}/><Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className='buttons'>
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  );
}
const testTweet ={
  message:"Something about cats.",
  gravatar: "xyz",
  author:{
    handle:"catperson",
    name:"IAMA cat Person"
  },
  likes:2,
  retweets:10,
  timestamp: "2016-07-30 21:24:37"
};

function Avatar({hash}){
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img src ={url} className="avatar" alt="avatar"/>
  );
}
function Message ({text}){
  return (
    <div className="Message">
     {text}
    </div>
  )
  }
function Author({author}) {
  const {name, handle} = author;
  return(
    <span className="author">
      <span className="Name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}
const Time = ({time}) => {
  const timeString = moment(time).fromNow();
  return(
  <span className="time">{timeString}</span>
  )
};

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);

function getRetweetCount(count) {
  if(count >0){
  return(
    <span className="retweet-count">
      {count}
    </span>
  );
  }else {
    return null;
  }
}
const RetweetButton = ({ count }) => (
  <span className="retweet-button">
  <i className="fa fa-retweet"/>
  {getRetweetCount(count)}
  </span>
  );


const LikeButton = ({count}) => (
  <span className="like-button">
    <i className="fa fa-heart"/>
    {count >0 && 
      <span className="like-count">
        {count}
    </span>}
  </span>
);

LikeButton.propTypes = {
  count:propTypes.number
};
RetweetButton.propTypes = {
  count:propTypes.number
};
Time.propTypes = {
  count:propTypes.string
};
Message.propTypes = {
  count:propTypes.string
};
Author.propTypes = {
  author: propTypes.shape({
    name:propTypes.string.isRequired,
    handle:propTypes.string.isRequired,
  }).isRequired
};
const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);
ReactDOM.render(<Tweet tweet={testTweet}/>,document.querySelector("#root"))