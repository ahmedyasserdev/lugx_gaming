import React from 'react'
import  {Box , Stack ,  } from "@mui/material"
import PageHeading from '../components/PageHeading'
import Info from '../components/contact/Info'
import Form from '../components/contact/Form'
const Contact = () => {
  return (
    <Box pb = {4} >
        <PageHeading title = "contact us"  />

        <Stack  
            width = "90%"
            mx = "auto" 
            mt = {12}
            direction = {{md : 'row'}} 
            justifyContent = {{xs : "center" , md : "space-between" }}
                alignItems = "center"
            >
            <Info />
            <Form />
        
        
        </Stack>


    </Box>
  )
}

export default Contact