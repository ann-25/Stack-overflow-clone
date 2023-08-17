import React from 'react'

const Avatar = ({children,  backgroundColor, px,py, color, borderRadius, fontSize, cursor }) => {
  const style = {
    /* An object */
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadius,
    fontSize,
    textAlign : 'center',
    cursor : cursor || null,
    textDecoration: 'none'
  }


  return (
    <div style = {style}>
      {children} {/*   first letter of user name which is given within <Avatar></Avatar> is displayed*/}
      
    </div>
  )
}

export default Avatar
