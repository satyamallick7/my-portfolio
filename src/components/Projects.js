import React from 'react'
import { projectsData } from '../data'
import Project from './Project'

const Projects = () => {
  return (
    <section className='bg-primary py-20 grid grid-cols-1 gap-y-12 lg:gap-x-8 lg:gap-y-8 lg:grid-cols-3'>
        {projectsData.map((item)=>{
            return <Project item={item} key={item.id}/>
        })}
    </section>
  )
}

export default Projects