import React from "react"
import Content from 'templates/Content';
import './Us.css';
import Students from './data/students';
import Mentors from './data/mentors';
import UsContent from './UsContent';

const UsPage = () => {

    return (
      <UsContent>
    <Content fixed>
      <div className="container">
        <div className="">
          <h1 className=""><h3>Meet our...</h3> Students</h1>
        </div>
      </div>
      <div className="container">
        <div className="us-container">
          {Students.map(x => (
            <div
              className="me"
              key={x.name}
            >
              <img src={require(`./Images/${x.image}.jpg`)} className='img'></img>
              <h3>
                {x.name}
              </h3>
              <div>
                <h4 className="position">{x.position} | 
                 <a href={x.href} target="_blank" rel="noreferrer" className="Linkedin"></a>
                </h4>
              </div>
              {/* <p className="text-center">{x.summary}</p> */}
            </div>
          ))}
        </div>

        <div>
          <h1>Mentors</h1>
        </div>

        <div className="us-container">
          {Mentors.map(y => (
            <div
              className="me"
              key={y.name}
            >
              <img src={require(`./Images/${y.image}.jpg`)} className='img'></img>
              <h3>
                {y.name}
                <div>
                <h4 className="position">{y.position} |
                 <a href={y.href} target="_blank" rel="noreferrer" className="Linkedin"></a>
                </h4>
              </div>
              </h3>
              {/* <p>{y.summary}</p> */}
            </div>
          ))}
        </div>
      </div>
    </Content>
      </UsContent>
  )
}

export default UsPage
