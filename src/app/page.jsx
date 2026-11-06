"use client"
import { Box, Grid, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Header from './component/header'
import Hero from './component/hero'
import drinks from './data/drink'
import Mybtn from './component/button'
import Cardmenu from './component/cardmenu'
import ProductCard from './component/cardmenu'
import DrinkCard from './component/cardmenu'
import Story from './component/story'
import Footer from './component/footer'
import DeveloperCard from './component/profile'

export default function Page() {
  let temp=drinks.filter((item)=>{
    return item.tag=='POPULAR'
  })
  return (
    <>
  
<Box
  className="hero"
  sx={{
    position: 'relative',
    width: '100%',
    minHeight:{xs:'65vh'},
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center'
  }}
>
  <Header />
  <Hero />
  
</Box>
<Box sx={{display:'flex',width:'100%',flexWrap:'wrap'}}>

    <Box sx={{pl:{md:7,lg:10},py:{xs:3},display:'flex',width:{xs:'100%',lg:"75%"},justifyContent:{xs:'center',md:'start'}}}>
  <Typography sx={{fontSize:{xs:'27px'},color:'#241a15',fontWeight:500}}>
    Our Popular Drinks
  </Typography>
</Box>

<Grid container spacing={{xs:1,sm:3,md:1.5}} sx={{px:{xs:1.5,md:9},display:'flex',justifyContent:{xs:'center',md:'start',width:"100%"}}}>
    {temp.map((val)=>{
  return (
      <Grid key={val.id} size={{ xs: 6,sm:5, md:4,lg:2.2}}>
    <Cardmenu img={val.image} name={val.name} desc={val.description} price={val.price} slug={val.slug} />
  </Grid>
  )
  })}

  
  <Grid size={{ xs: 12,sm:11, md:8,lg:3.2}}>
    <Story />
  </Grid>
  
</Grid>



</Box>
<Footer />
<DeveloperCard />

    </>
  )
}
