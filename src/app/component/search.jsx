'use client'
import { Box, Button, Collapse, IconButton, TextField, Typography } from '@mui/material'
import Link, { useLinkStatus } from 'next/link'
import SearchIcon from "@mui/icons-material/Search"
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import drinks from '../data/drink'

export default function Search() {
const [sea,setSea]=useState(false)
const pathname = usePathname()
const [searchtext,setSearchtext]=useState('')
console.log(searchtext);

const temp = drinks.filter((item) =>
  item.name.toLowerCase().includes(searchtext.toLowerCase())
)
console.log(temp);

  return (
    <>
<Collapse
  in={sea}
  orientation="horizontal"
  sx={{
    position: { xs: "absolute", md: "absolute" },
    top: { xs: "calc(100% + 12px)", md: "50%" },
    right: { xs: 0, md: "100%" },
    transform: { xs: "none", md: "translateY(-50%)" },
    mr: { xs: 0, md: 1 },
    zIndex: 100,
  }}
>
  <Box
  sx={{
    position: "relative",
    width: { xs: "calc(100vw - 32px)", md: 230 },
  }}
>
    <TextField
  value={searchtext}
  onChange={(e)=>{
    setSearchtext(e.target.value)
    
  }}
    size="small"
    placeholder="Search coffee..."
    sx={{
      width: '100%',
      "& .MuiOutlinedInput-root": {
        borderRadius: "30px",
        backgroundColor: "rgba(232,220,198,0.95)",
        color: "#241A15",
        fontSize: 13,
        "& fieldset": {
          border: "1px solid #D4A373",
        },
        "&:hover fieldset": {
          borderColor: "#D4A373",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#8B5E3C",
        },
      },
      "& input": {
        py: 1,
        fontSize:'16px'
      },
      "& input::placeholder": {
        color: "#8B7765",
        opacity: 1,
      },
    }}
  />


    <Box
      sx={{
        position: 'absolute',
        top: '110%',
        right: 0,
        width:{xs:'100%',md:'130%'},
        backgroundColor: '#F5EFE6',
        borderRadius: 2,
        overflow: 'hidden',
        zIndex: 10,
        
      }}
    >
       <Box
  sx={{
    mt: 0,
    backgroundColor: "#F5EFE6",
    borderRadius: 2,
    overflow: "hidden",
  }}
>
  {searchtext && temp.length > 0 ? (
    temp.slice(0,8).map((item) => (
      <Box
        key={item.id}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          p: 1,
          borderBottom: "1px solid #D4A373",
        }}
      >
    
        <Box
          component="img"
          src={item.image}
          alt={item.name}
          sx={{
            width: 50,
            height: 50,
            objectFit: "cover",
            borderRadius: 2,
          }}
        />

        <Typography
          sx={{
            flex: 1,
            color: "#241A15",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          {item.name}
        </Typography>

    
        <Button
        component={Link}
        href={`menu/${item.slug}`}
          size="small"
          variant="contained"
          sx={{
            backgroundColor: "#241A15",
            color: "#E8DCC6",
            fontSize: 10,
            textTransform: "none",
            borderRadius: 5,
            "&:hover": {
              backgroundColor: "#8B5E3C",
            },
          }}
        >
          Go to Menu
        </Button>
      </Box>
    ))
  ) : searchtext ? (
    <Typography sx={{ p: 2, color: "#241A15", fontSize: 13 }}>
      No products found!
    </Typography>
  ) : null}
</Box>
    </Box>
  </Box>
</Collapse>

<IconButton sx={{ color: "#E8DCC6",display:pathname=='/about' ? 'none':'flex' }} >
    <SearchIcon sx={{ fontSize: 30 , color:{md:'#241a15'}}} onClick={()=>{
        setSea(!sea)

    }}/>
</IconButton>
            
    </>
  )
}
