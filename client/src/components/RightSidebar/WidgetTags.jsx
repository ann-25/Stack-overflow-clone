import React from 'react'
import './RightSidebar.css'

const WidgetTags = () => {
  const tags = ['C', 'CSS', 'express', 'firebase', 'html', 'java', 'javascript', 'mern', 'mongodb', 'mysql', 'next.js', 'php', 'python', 'react']
  return (
    <div className='widget-tags'>
      <h3>Watched Tags</h3>
      <div className="widget-tags-div">{
        tags.map((tag) => (
          <p key={tag}>{tag}</p>

        ))
      }

      </div>
      
    </div>
  )
}

export default WidgetTags
