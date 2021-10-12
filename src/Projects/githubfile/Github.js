import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types"
import './index.css';
import moment from "moment";
// import Time from './Time';

const FileList = ({ files }) => (
  <table className="file-list">
    <tbody>
      {files.map(file =>
      /* now we use FileListItem here */
      <FileListItem key={file.id} file={file}/>
      )}
    </tbody>
  </table>
  );
FileList.proptype = {
  file: propTypes.array
};

const testFiles = [
  {
    id:1,
    name:'src',
    type:'folder',
    updated_at:'2021-07-11 21:24:00',
    latestCommit:{
      message:'Initial commit'
    }
  },
    {
      id: 2,
      name: 'tests',
      type: 'folder',
      updated_at: "2016-07-11 21:24:00",
      latestCommit: {
      message: 'Initial commit'
    }
  },
    {
      id: 3,
      name: 'README',
      type: 'file',
      updated_at: "2017-07-18 21:24:00",
      latestCommit: {
      message: 'Added a readme'
    }
  } 
] 

const FileListItem = ({ file }) => (
  <tr className="file-list-item">
    <FileName file={file}/>
    <CommitMessage commit={file.latestCommit}/>
    <td className="age">
    <Timeat time={file.updated_at}/>
    </td>
  </tr>
);
FileListItem.propTypes = {
  file: propTypes.object.isRequired
};

function FileIcon({ file }) {
  let icon = 'fa-file-text-o';
  if(file.type === 'folder') {
    icon = 'fa-folder';
  }
  return (
    <td className="file-icon">
      <i className={`fa ${icon}`}/>
    </td>
  );
}
FileIcon.propTypes = {
  file: propTypes.object.isRequired
};

function FileName({ file }) {
  return (
  <>
    <FileIcon file={file}/>
    <td className="file-name">{file.name}</td>
  </>
);
}
FileName.propTypes = {
  file: propTypes.object.isRequired
};

const CommitMessage = ({ commit }) => (
  <td className="commit-message">
  {commit.message}
  </td>
  );
  CommitMessage.propTypes = {
  commit: propTypes.object.isRequired
};
const Timeat = ({time}) => {
  const timeString = moment(time).fromNow();
  return(
    <span className="time">
      {timeString}
    </span>
  )
};
Timeat.propTypes ={
  time: propTypes.object.isRequired,
};

// export default Time



 
ReactDOM.render(<FileList  files={testFiles}/>, document.getElementById('root'))