import React from 'react';
import ReactDOM from 'react-dom';
// import moment from 'moment';
// import Time from './Time';
import './index.css';


const HackerNews = ({hackernews}) =>(
  <div className='hacker'>
    <div className='header'>
      {headerFiles.map((list=>
        <HeaderListItem key={list.id} list={list} />
        ))}
    </div>
    {hackerFiles.map(file =>(
        <FileListItem key={file.id} file={file} />
    ))}

  </div>
)
const headerFiles=[
  {
    id:1,
    logo:'https://news.ycombinator.com/y18.gif',
    title:'Hacker News',
    new:'News |',
    threads:'Threads |',
    comments: 'Comments |',
    show:'Show |',
    ask:'Ask |',
    jobs:'Jobs |',
    submit:'Submit ',
  }
]
const hackerFiles=[
  {
    id:'1.',
    name:'Why I Am Suing The Government ',
    link:'(bunnieststudios.com)',
    updated_at: "2016-07-11 21:24:00",
    time:'1346 points by ivank 11 hours ago |',
    flag:'flag |',
    hide:'hide |',
    comment: '257 comments |',
    paper:'instapaper |',
    save:'save to pocket |'

  },
  {
    id:'2.',
    name:'Zenzizenzizenzic ',
    link:'(wikipedia.org)',
    updated_at: "2016-07-11 21:24:00",
    time:'140 points by vinchuco 4 hours ago |',
    flag:'flag |',
    hide:'hide |',
    comment: '40 comments |',
    paper:'instapaper |',
    save:'save to pocket |'
  },
  {
    id:'3.',
    name:'A Practical Security Guide To Web Developers ',
    link:'(github.com)',
    updated_at: "2016-07-11 21:24:00",
    time:'72 points by zianwar 2 hours ago |',
    flag:'flag |',
    hide:'hide |',
    comment: '6 comments |',
    paper:'instapaper |',
    save:'save to pocket |'
  },
  {
    id:'4.',
    name:'I Got Arrested In Kasakhstan And Represented Myself In Court',
    link:'(medium.com)',
    updated_at: "2016-07-11 21:24:00",
    time:'370 points by drpp 7 hours ago |',
    flag:'flag |',
    hide:'hide |',
    comment: '79 comments |',
    paper:'instapaper |',
    save:'save to pocket |'
  },
  {
    id:'5.',
    name:'Sculpture Of Housing Prices Are Ripping San Francisco Apart ',
    link:'(dougmuccune.com)',
    updated_at: "2016-07-11 21:24:00",
    time:'254 points by dougmccune 7 hours ago |',
    flag:'flag |',
    hide:'hide |',
    comment: '149 comments |',
    paper:'instapaper |',
    save:'save to pocket |'
  },
  {
    id:'6.',
    name:'Practical Guide To Bare Metal C++',
    link:'(gitbooks.io)',
    updated_at: "2016-07-11 21:24:00",
    time:'175 points by adamnemecek 7 hours ago |',
    flag:'flag |',
    hide:'hide |',
    comment: '31 comments |',
    paper:'instapaper |',
    save:'save to pocket |'
  },
  {
    id:'7.',
    name:'Superformula ',
    link:'(wikipedia.org)',
    updated_at: "2016-07-11 21:24:00",
    time:'77 points by guia 5 hours ago |',
    flag:'flag |',
    hide:'hide |',
    comment: '17 comments |',
    paper:'instapaper |',
    save:'save to pocket |'
  },
  {
    id:'8.',
    name:'Police Asked 3D Printing Lab To Recreate Dead Mans Finger To Unlock Phone ',
    link:'(fusion.net)',
    updated_at: "2016-07-11 21:24:00",
    time:'109 points by theandrewbailey 7 hours ago |',
    flag:' flag |',
    hide:' hide |',
    comment: ' 57 comments |',
    paper:' instapaper |',
    save:' save to pocket |'
  },
  {
    id:'9.',
    name:'Edward Snowdens New Reasearch Aims To keep Smartphones From Betraying Owners ',
    link:'(theintercept.com)',
    updated_at: "2016-07-11 21:24:00",
    time:'190 points by secfirstmd 11 hours ago |',
    flag:'flag |',
    hide:'hide |',
    comment: '69 comments |',
    paper:'instapaper |',
    save:'save to pocket |'
  },
  {
    id:'10.',
    icon:'fa fa-caret-down',
    name:'Assessing IBMS POWER8, Part 1: A Low Level Look at Little Endian ',
    link:'(anandtech.com)',
    updated_at: "2016-07-11 21:24:00",
    time:'24 points by tambourine_man 3 hours ago |',
    flag:'flag |',
    hide:'hide |',
    comment: '1 comments |',
    paper:'instapaper |',
    save:'save to pocket |'
  }
];
const HeaderListItem = ({list}) =>(
  <tr>
    <td>
      <img className="logo" src={list.logo} alt='logo'/>
    </td>
    <Title list={list} />
    <New list={list}/>
  </tr>
)
const Title = ({list}) => (
  <td>
    <h2>{list.title}</h2>
  </td>
)
const New = ({list}) => (
  <td>
    <span className='menu-list'>{list.new}</span>
    <span className='menu-list'>{list.threads}</span>
    <span className='menu-list'>{list.comments}</span>
    <span className='menu-list'>{list.show}</span>
    <span className='menu-list'>{list.ask}</span>
    <span className='menu-list'>{list.jobs}</span> 
    <span className='menu-list'>{list.submit}</span> 
  </td>
)
const FileListItem = ({file}) => (
  <div className="file-list-item">
    <div className="file-name"> 
      <Numbering file={file}/>
      {/* <Icon file={file}/> */}
      {file.name}
      <UrlLink file={file}/>
    </div>
    <Flag file={file}/>
  </div>
);

const Numbering = ({file}) => (
    <span>{file.id}</span>
);
// const Icon = ({file}) =>(
//   <img src={file.icon} alt='arrow icon'/>
// )
const UrlLink = ({file}) => (
  <span className='numb'>{file.link}</span>
)

const Flag = ({file}) => (
  <div className="flag-container">
    <span className='flag'>{file.time}</span>
    <span className='flag'>{file.flag}</span>
    <span className='flag'>{file.hide}</span>
    <span className='flag'>{file.comment}</span>
    <span className='flag'>{file.paper}</span>
    <span className='flag'>{file.save}</span>       
  </div>
)


ReactDOM.render(<HackerNews />, document.getElementById('root'));


