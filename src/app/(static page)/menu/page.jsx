"use client"
import {
  Box,
  Container,
  Typography,
  Stack,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Divider,
} from "@mui/material";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Cardmenu from "@/app/component/cardmenu";

import drinks from "@/app/data/drink";
import Header from "@/app/component/header";
import { useState } from "react";
import Footer from "@/app/component/footer";
import DeveloperCard from "@/app/component/profile";


function filterproduct(txt) {
  if (txt === "All Drinks") {
    return drinks;
  }

  return drinks.filter((item) => {
    return item.category === txt;
  });
}
export default function MenuPage() {
    const [category,setCategory]=useState('All Drinks')
  return (
    
    <>
    
    <Box
      sx={{
        bgcolor: "#F5EFE6",
        color: "#2B1D17",
        minHeight: "100vh",
        pb: 10,
      }}
    >
        
     
      



<Box
  sx={{
    position: "relative",
    minHeight: { xs: 280, md: 400 },
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    bgcolor: "#302119",
  }}
>
    <Header />
  
  <Box
    component="video"
    autoPlay
    muted
    loop
    playsInline
    src="/vi.mp4"
    sx={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "bottom",
    }}
  />


  <Box
    sx={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, rgba(28,18,14,0.85), rgba(28,18,14,0.35))",
    }}
  />

  <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
    <Box
      sx={{
        maxWidth: 550,
        py: { xs: 5, md: 6 },
        pl: { xs: 0, md: 4 },
        color: "#FFF7EE",
      }}
    >
      <Typography
        sx={{
          color: "#D9B58C",
          fontSize: 11,
          letterSpacing: 3,
          fontWeight: 600,
          mb: 2,
        }}
      >
        COFFEE, MADE WITH CARE
      </Typography>

      <Typography
        component="h1"
        sx={{
          fontSize: { xs: 42, sm: 52, md: 64 },
          fontWeight: 600,
          letterSpacing: "-2px",
          lineHeight: 1.15,
          mb: 2,
        }}
      >
        Our Menu
        <Box
          component="span"
          sx={{
            color: "#D9B58C",
            fontStyle: "italic",
            fontWeight: 400,
            ml: 1.5,
          }}
        >
          .
        </Box>
      </Typography>

      <Typography
        sx={{
          maxWidth: 380,
          color: "#E2D3C5",
          fontSize: { xs: 13, md: 14 },
          lineHeight: 2,
        }}
      >
        Thoughtfully crafted drinks for your
        everyday coffee ritual.
      </Typography>
    </Box>
  </Container>
</Box>



    
      <Container maxWidth="xl" sx={{ pt: { xs: 6, md: 10 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
        
         
          spacing={3}
          sx={{ mb: 5 }}
        >
          <Box>
            <Typography
              sx={{
                color: "#99734F",
                letterSpacing: 3,
                fontSize: 11,
                fontWeight: 700,
                mb: 1.5,
              }}
            >
              FIND YOUR FAVORITE
            </Typography>

            <Typography
              component="h2"
              sx={{
                fontSize: { xs: 30, md: 42 },
                fontWeight: 700,
                color: "#2B1D17",
              }}
            >
              Made for your moment.
            </Typography>

            <Typography
              sx={{
                color: "#806D60",
                mt: 1.5,
                fontSize: 14,
              }}
            >
              Good coffee. Great company. Every single day.
            </Typography>
          </Box>
        </Stack>

        
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            overflowX: "auto",
            pb: 2,
            mb: 4,
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Button
  variant="outlined"
  onClick={() => setCategory("All Drinks")}
  sx={{
    bgcolor: category === "All Drinks" ? "#3A261D" : "transparent",
    color: category === "All Drinks" ? "#FFF7EE" : "#5C4334",
    borderColor: "#D6C4B2",
    borderRadius: 8,
    px: 8,
    py: 1.2,
    whiteSpace: "nowrap",
    textTransform: "none",
  }}
>
  All Drinks
</Button>

          <Button
  variant="outlined"
  onClick={() => setCategory("Hot Coffee")}
  sx={{
    bgcolor: category === "Hot Coffee" ? "#3A261D" : "transparent",
    color: category === "Hot Coffee" ? "#FFF7EE" : "#5C4334",
    borderColor: "#D6C4B2",
    borderRadius: 8,
    px: 8,
    py: 1.2,
    whiteSpace: "nowrap",
    textTransform: "none",
  }}
>
  Hot Coffee
</Button>

         <Button
  variant="outlined"
  onClick={() => setCategory("Iced Coffee")}
  sx={{
    bgcolor: category === "Iced Coffee" ? "#3A261D" : "transparent",
    color: category === "Iced Coffee" ? "#FFF7EE" : "#5C4334",
    borderColor: "#D6C4B2",
    borderRadius: 8,
    px: 8,
    py: 1.2,
    whiteSpace: "nowrap",
    textTransform: "none",
  }}
>
  Iced Coffee
</Button>

          <Button
  variant="outlined"
  onClick={() => setCategory("Tea")}
  sx={{
    bgcolor: category === "Tea" ? "#3A261D" : "transparent",
    color: category === "Tea" ? "#FFF7EE" : "#5C4334",
    borderColor: "#D6C4B2",
    borderRadius: 8,
    px: 8,
    py: 1.2,
    whiteSpace: "nowrap",
    textTransform: "none",
  }}
>
  Tea
</Button>
<Button
  variant="outlined"
  onClick={() => setCategory("Chocolate")}
  sx={{
    bgcolor: category === "Chocolate" ? "#3A261D" : "transparent",
    color: category === "Chocolate" ? "#FFF7EE" : "#5C4334",
    borderColor: "#D6C4B2",
    borderRadius: 8,
    px: 8,
    py: 1.2,
    whiteSpace: "nowrap",
    textTransform: "none",
  }}
>
  Chocolate
</Button>
        </Stack>

      
        <Grid container spacing={{ xs: 2, md: 3 }}>
        

          {filterproduct(category).map((val)=>{
            return(
            <Grid key={val.id} size={{ xs: 6, sm: 6, md: 4, lg: 3 }}>
            <Cardmenu img={val.image} name={val.name} desc={val.description} price={val.price} slug={val.slug}/>
          </Grid>
            )
          })}
          

          
        </Grid>
      </Container>
    </Box>
    <Footer></Footer>
    <DeveloperCard />
    </>
  );
}
