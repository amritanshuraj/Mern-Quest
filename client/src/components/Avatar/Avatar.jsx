import React from 'react'

const Avatar = ({children, backgroundColor, px, py, 
  color,
  borderRadius,
  fontSize,
  margin,
  cursor}) => {
      
    const style ={
        backgroundColor,
        padding: `${py} ${px}`, 
        color: color || 'black' ,
        borderRadius,
        fontSize,
        margin,
        textAlign: "center",
        cursor: cursor || null,
        textDecoration: "none"
       }


  return (
    <div style={style}>
      { children }
    </div>
  )
}

export default Avatar ;
