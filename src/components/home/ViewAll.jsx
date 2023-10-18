import { Typography , Stack , useTheme , Box } from "@mui/material"
import MainBtn from "../MainBtn"
import {Link} from "react-router-dom"

const ViewAll = ({subtitle , title}) => {
    const theme = useTheme()
  return (
    <Stack
        direction = "row" alignItems={"center"} justifyContent={"space-between"}
     >
    
     <Box  >
        <Typography mb = {1.5} variant="subtitle2" fontWeight = {900}  textTransform = "uppercase" color= {theme.palette.secondColor.primary} >{subtitle}</Typography>
        <Typography variant="h3"  fontSize = {{xs : "34px" , sm : "45px" }} fontWeight = {900} textTransform = 'capitalize'  color= {theme.palette.nuetral.primary} >{title}</Typography>
     
     </Box>



 <Link to = {'/shop'} >
     <Box sx = {{display : {xs  :"none" , sm : "block" }}} >
         <MainBtn title = "View All"  />
     </Box>
 </Link>
     
    </Stack>
  )
}

export default ViewAll