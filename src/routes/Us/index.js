import React, { useState } from 'react';
import Content from 'templates/Content';
import './Us.css';
import Students1 from './data/students1';
import Students2 from './data/students2';
import Mentors1 from './data/mentors1';
import Mentors2 from './data/mentors2';
import UsContent from './UsContent';
import Title from 'components/Title';
const UsPage = () => {
  let [Students, setStudents] = useState(Students2);
  let [Mentors, setMentors] = useState(Mentors2);
  let [Active, setActive] = useState(1);
  return (
    <UsContent>
      <Content fixed>
        <div className="container">
          <div className="">
            <div className="">
              <h3>Meet our...</h3>
              <div className="class-container">
                <div
                  className={`${Active === 1 ? 'active' : ''} class-btn`}
                  onClick={() => {
                    setStudents((Students = Students1));
                    setMentors((Mentors = Mentors1));
                    setActive((Active = 1));
                  }}
                >
                  <Title>First Course</Title>
                </div>
                <div
                  className={`${Active === 2 ? 'active' : ''} class-btn`}
                  onClick={() => {
                    setStudents((Students = Students2));
                    setMentors((Mentors = Mentors2));
                    setActive((Active = 2));
                  }}
                >
                  <Title>Second Course</Title>
                </div>
              </div>
              <hr></hr>
              Students
            </div>
          </div>
        </div>

        <div className="container">
          <div className="us-container">
            {Students.map(x => (
              <div className="me" key={x.name}>
                <img src={require(`./Images/${x.image}.jpg`)} className="img" alt=""></img>
                <h3>{x.name}</h3>
                <div>
                  <h4 className="position">
                    {x.position} |
                    {/* <a href={x.href} target="_blank" rel="noopener noreferrer" className="Linkedin"></a> */}
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
              <div className="me" key={y.name}>
                <img src={require(`./Images/${y.image}.jpg`)} className="img" alt=""></img>
                <h3>
                  {y.name}
                  <div>
                    <h4 className="position">
                      {y.position} |
                      <a
                        href={y.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="Linkedin"
                      ></a>
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
  );
};

export default UsPage;
