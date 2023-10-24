import React from 'react'
import {Button , useTheme } from "@mui/material"
const MainBtn = ({title , padding = "1em 2em" , type = "button" }) => {
    const theme = useTheme()
  return (
    <Button 
    type = {type}
        sx = {{
            backgroundColor : theme.palette.secondColor.primary ,
            borderRadius : "100px" ,
            color : "white" ,
            p : padding ,
            fontSize : "15px" ,
            fontWeight : "bold" ,
            "&:hover" : {
            backgroundColor : theme.palette.mainColor.primary ,
                
            }
        }}
    
    >{title}</Button>
  )
}

export default MainBtn