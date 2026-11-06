import { Box, Typography ,Button} from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'


export default function Story() {
  return (
    <Box   className="story" sx={{border:'3px solid pink',height:'100%',mx:{sm:4,md:0},mt:{xs:3,md:0},borderRadius:'14px',display:'flex',flexDirection:'column',px:4,pt:16,pb:3,justifyContent:'start'}}>
        <Typography sx={{fontWeight:700,fontSize:'32px',color:'#faefe6'}}>More than <br /> just a coffee shop</Typography>
        <Typography variant='body2' sx={{color:'#faefe6',mt:
            3}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
        <Button
    variant="text"
    endIcon={<ArrowForwardIcon />}
    sx={{
    mt:5,
      p:0,
      fontSize: { xs: "15px"},
      fontWeight: 600,
      color: "#E8DCC6",
      borderColor: "rgba(212,163,115,0.5)",
      borderRadius: 2,
      textTransform: "none",
      whiteSpace: "nowrap",
      justifyContent:'start',
      "& .MuiButton-endIcon": {
        ml: { xs: 0.5, sm: 1 },
      },
      "&:hover": {
        "& .MuiButton-endIcon": {
        ml: { xs: 0.5, sm: 1.5 },
      },
        
        borderColor: "#d4a373",
      },
    }}
  >
    Our Story
  </Button>
    </Box>
  )
}
