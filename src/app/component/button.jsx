import React from 'react'
import Button from '@mui/material/Button'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import Link from 'next/link'

export default function Mybtn({txt,color,hrf}) {
  return (
<Button component={Link} href={hrf} endIcon={<ArrowForwardIcon />} variant='contained' sx={{px:{xs:3,md:5},borderRadius:'10px',bgcolor:color,fontWeight:500,mt:3,fontSize:{xs:'12px',md:'14px'}}}>
    {txt}
</Button>
  )
}
