"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import Mybtn from './button'

export default function Hero() {
  return (
    <Box sx={{width:{xs:'100%'},p:{xs:4,md:6},mt:{}}}>
        <Typography variant='body2' sx={{color:'#d4a373',fontSize:{xs:'12px'}}}>GOOD COFFEE. BETTER DAYS</Typography>
        <Typography sx={{fontSize:{xs:'33px',md:'40px',color:'#E8DCC6',fontWeight:800}}}>More than just <br /> coffee, its a <i style={{color:'#d4a373',fontFamily:'var(--font-playfair)',fontSize:'60px'}}>feeling.</i></Typography>
        <Typography sx={{width:{xs:'90%',sm:'65%'},color:'#E8DCC6',mt:2,fontSize:'15px'}}>A Coffee House,we believe in the powe of a good cup of coffee to make your day better.</Typography>
        <Mybtn hrf='./menu'  txt='Explore Menu' color='#d4a373'/>
    </Box>
  )
}
