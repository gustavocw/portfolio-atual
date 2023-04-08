import React from "react"
import WorkItem from "./WorkItem.jsx"

const data = [
  {
    year: "2021 - 2023",
    title: "CostaWeb Sistemas Ltda",
    duration: "2 Year and still...",
    details:
      "• CEO/CTO \n" +
      "• Fullstack Developer\n" +
      "• After not being successful in my job interviews as a front-end developer, I decided to start \n my own web development company, today I do projects where I make all my living, \n I have my team that helps me and I complete big projects for companies.",
  },
  {
    year: "2022 - 2023",
    title: "Alkord Sistemas Ltda",
    duration: "0.7 Months",
    details:
      "• Front-End Developer \n" +
      "• Implementation of new functionality\n" +
      "• Adaptive and cross-browser layout using React, Mui and TS\n" +
      "• Developing web applications using React.js, project support from the beginning of development to putting them into production\n" +
      "• Support of completed web projects\n" +
      "• Interaction with backend developers",
  }
]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 pt-12 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#fff] '>Work</h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  )
}

export default Work
