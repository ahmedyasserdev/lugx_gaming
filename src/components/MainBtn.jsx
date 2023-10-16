import React from 'react'
import {Button , useTheme } from "@mui/material"
const MainBtn = ({title , padding }) => {
    const theme = useTheme()
  return (
    <Button
        sx = {{
            backgroundColor : theme.palette.lightRed.primary ,
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