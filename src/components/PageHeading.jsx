import { Box, Typography } from '@mui/material'
import Heading  from "/images/page-heading-bg.jpg"

const PageHeading = ({title}) => {
  return (
    <Box
    sx = {{
        backgroundImage : `url(${Heading})` ,
        backgroundPostion : "center" ,
        backgroundSize : "cover" ,
        backgroundRepeat  :  "no-repeat" ,
        borderRadius : "0 0 150px  150px" ,
        padding : "120px 0",
        textAlign : "center"
    }}
    
    >
        <Typography variant="h3" fontWeight = {700} textTransform = "uppercase"   color="white">{title}</Typography>
    
    </Box>
  )
}

export default PageHeading