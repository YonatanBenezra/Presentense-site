import React from "react"
import Content from 'templates/Content';
import Icon from '@material-ui/core/Icon';
import './Us.css';
import Students from './data/students';
import Mentors from './data/mentors';

const UsPage = () => {
  // const { markdownRemark } = data

    return (
    <Content fixed>
      <div className="container mx-auto mt-40">
        <div className="px-4">
          <h1 className="text-3xl text-center font-medium"><h3>Meet our...</h3> Students</h1>
        </div>
      </div>
      <div className="container mx-auto py-16">
        <div className="us-container grid grid-cols-1 md:grid-cols-2 gap-y-32">
          {Students.map(x => (
            <div
              className="me col-span-1 flex flex-col items-center px-4"
              key={x.name}
            >
              <div
                className= {`rounded-full ${x.image}`}
              />
              <h3 className="text-xl pt-6 mb-2 font-bold text-branding">
                {x.name}
              </h3>
              <div className="flex items-center pb-5 text-base">
                <h4 className="position font-semibold">{x.position} | 
                 <a href={x.href} target="_blank" rel="noreferrer" className="Linkedin"></a>
                </h4>
              </div>
              <p className="text-center px-12">{x.summary}</p>
            </div>
          ))}
        </div>

        <div className="px-4 pt-40">
          <h1 className="text-3xl text-center font-medium">Mentors</h1>
        </div>

        <div className="us-container grid grid-cols-1 md:grid-cols-2 gap-y-32 mt-32">
          {Mentors.map(y => (
            <div
              className="me col-span-1 flex flex-col items-center px-4"
              key={y.name}
            >
              <div
                className= {`rounded-full ${y.image}`}
              />
              <h3 className="text-xl pt-6 mb-2 font-bold text-branding">
                {y.name}
                <div className="flex items-center pb-5 text-base">
                <h4 className="position font-semibold">{y.position} |
                 <a href={y.href} target="_blank" rel="noreferrer" className="Linkedin"></a>
                </h4>
              </div>
              </h3>
              <p className="text-center px-12">{y.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </Content>
  )
}

export default UsPage
