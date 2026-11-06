"use client"

import { Box, Container, Typography, Button, Grid, Stack } from "@mui/material"
import Link from "next/link"
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward"
import Header from "@/app/component/header"
import Footer from "@/app/component/footer"
import DeveloperCard from "@/app/component/profile"

const values = [
  {
    number: "01",
    title: "Quality",
    description:
      "Carefully selected beans and a focus on every detail, from aroma to the final sip.",
  },
  {
    number: "02",
    title: "Craft",
    description:
      "Thoughtfully prepared coffee, made fresh with care and attention every day.",
  },
  {
    number: "03",
    title: "Connection",
    description:
      "A welcoming space for conversations, quiet moments, and everyday rituals.",
  },
]

export default function AboutPage() {
  return (
    <Box
      sx={{
        bgcolor: "#F6F1E9",
        color: "#29231F",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
        <Header />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1.1fr 0.9fr",
          },
          alignItems: "center",
          minHeight: { xs: "auto", md: "90vh" },
          gap: { xs: 0, md: 0 },
        }}
      >
      
        <Box
          sx={{
            animation: "aboutImageReveal 0.8s ease-out both",
            "@keyframes aboutImageReveal": {
              from: { opacity: 0, transform: "translateX(-35px)" },
              to: { opacity: 1, transform: "translateX(0)" },
            },
            height: {
              xs: 430,
              sm: 550,
              md: "90vh",
            },
            minHeight: { md: 650 },
            width: "100%",
            backgroundImage: "url('/c2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: {
              xs: "0 0 100px 0",
              md: "0 48% 48% 0",
            },
          }}
        />

        
        <Box
          sx={{
            animation: "aboutHeroTextReveal 0.8s ease-out 0.2s both",
            "@keyframes aboutHeroTextReveal": {
              from: { opacity: 0, transform: "translateY(25px)" },
              to: { opacity: 1, transform: "translateY(0)" },
            },
            px: { xs: 3, sm: 5, md: 6, lg: 8 },
            pt: { xs: 5, md: 0 },
            pb: { xs: 6, md: 0 },
            maxWidth: 650,
          }}
        >
        

          <Typography
            sx={{
              fontSize: 11,
              letterSpacing: 3,
              fontWeight: 600,
              mb: 3,
              color: "#8B684D",
            }}
          >
            A LITTLE MOMENT OF CALM
          </Typography>

          <Typography
            component="h1"
            sx={{
              fontSize: {
                xs: "2.8rem",
                sm: "3.8rem",
                md: "clamp(3rem, 4.5vw, 5rem)",
              },
              fontWeight: 500,
              lineHeight: 1.12,
              letterSpacing: "-2px",
              mb: 3,
            }}
          >
            Good coffee.
            <br />
            Made with
            <br />
            intention.
          </Typography>

          <Typography
            sx={{
              maxWidth: 390,
              fontSize: 15,
              lineHeight: 2,
              color: "#75675C",
              mb: 4,
            }}
          >
            Thoughtfully sourced beans, carefully crafted drinks,
            and a slower way to enjoy your everyday ritual.
          </Typography>

          <Button
            component={Link}
            href="/menu"
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              bgcolor: "#38291F",
              color: "#FFFFFF",
              px: 3.5,
              py: 1.7,
              borderRadius: 0,
              fontSize: 11,
              letterSpacing: 1,
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#634832",
                boxShadow: "none",
              },
            }}
          >
            EXPLORE OUR MENU
          </Button>

          <Typography
            sx={{
              mt: 5,
              fontSize: 10,
              letterSpacing: 2,
              color: "#9B8878",
            }}
          >
            GOOD BEANS · SLOW MOMENTS · GREAT COFFEE
          </Typography>
        </Box>
      </Box>

      {/* VIDEO + VIDEO TEXT */}
      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Grid
            container
            spacing={{ xs: 4, md: 8 }}
          >
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  animation: "aboutVideoReveal 0.7s ease-out both",
                  "@keyframes aboutVideoReveal": {
                    from: { opacity: 0, transform: "translateY(20px)" },
                    to: { opacity: 1, transform: "translateY(0)" },
                  },
                  width: "100%",
                  maxWidth: { xs: 340, md: 390 },
                  p: 1.5,
                  bgcolor: "#E9DED0",
                  borderRadius: "180px 180px 3px 3px",
                }}
              >
                <Box
                  component="video"
                  src="/vid.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/ex.jpg"
                  sx={{
                    width: "100%",
                    aspectRatio: "10 / 16",
                    display: "block",
                    objectFit: "cover",
                    bgcolor: "#D8C8B6",
                    borderRadius: "170px 170px 2px 2px",
                  }}
                />
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  py: { md: 3, lg: 12 },
                  animation: "aboutStoryReveal 0.7s ease-out 0.1s both",
                  "@keyframes aboutStoryReveal": {
                    from: { opacity: 0, transform: "translateX(18px)" },
                    to: { opacity: 1, transform: "translateX(0)" },
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: 11,
                    letterSpacing: 2,
                    color: "#8B6B52",
                    mb: 3,
                  }}
                >
                  BEHIND EVERY CUP
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 25, md: 31 },
                    fontWeight: 500,
                    lineHeight: 1.5,
                    maxWidth: 400,
                    mb: 3,
                  }}
                >
                  Good coffee takes time. And that's the beauty of it.
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    lineHeight: 2,
                    color: "#71665D",
                    mb: 2,
                  }}
                >
                  Every cup begins with a process worth appreciating.
                  The sound of the grinder, the first drops of espresso,
                  and the gentle pour that brings everything together.
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    lineHeight: 2,
                    color: "#71665D",
                    mb: 2,
                  }}
                >
                  We pay attention to each step because we believe a
                  memorable coffee experience is built from small,
                  thoughtful details. The quality of the beans, the
                  preparation, and the care behind every cup all matter.
                </Typography>

                <Typography
                  sx={{
                    fontSize: 14,
                    lineHeight: 2,
                    color: "#71665D",
                    mb: 4,
                  }}
                >
                  Take a closer look at the craft behind your cup and
                  discover the little moments that make Coffee House special.
                </Typography>

                <Stack direction="row" spacing={2}>
                  <Box
                    sx={{
                      width: 42,
                      height: 1,
                      bgcolor: "#9C806A",
                      flexShrink: 0,
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: 10,
                      letterSpacing: 1.5,
                      lineHeight: 1.8,
                      color: "#8B6B52",
                    }}
                  >
                    MADE SLOWLY, SERVED WARMLY
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* VALUES */}
        <Box sx={{ py: { xs: 8, md: 12 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            sx={{ mb: 5 }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 11,
                  letterSpacing: 2,
                  color: "#8B6B52",
                  mb: 2,
                }}
              >
                WHAT MATTERS TO US
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 27, md: 34 },
                  fontWeight: 500,
                  letterSpacing: "-0.8px",
                }}
              >
                The details matter.
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: 13,
                color: "#71665D",
                maxWidth: 310,
                lineHeight: 1.9,
              }}
            >
              From the first sip to the last detail, we keep things
              simple and thoughtful.
            </Typography>
          </Stack>

          <Box sx={{ borderTop: "1px solid #DCD2C5" }}>
            {values.map((item) => (
              <Box
                key={item.number}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "40px 1fr",
                    md: "70px 1fr 1fr",
                  },
                  gap: { xs: 2, md: 3 },
                  alignItems: "start",
                  py: 3,
                  borderBottom: "1px solid #DCD2C5",
                  transition: "padding 0.3s ease",
                  "&:hover": {
                    pl: { xs: 0.5, md: 1.5 },
                  },
                }}
              >
                <Typography
                  sx={{ fontSize: 12, color: "#9B8068", pt: 0.7 }}
                >
                  {item.number}
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 18, md: 21 },
                    fontWeight: 500,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    gridColumn: { xs: "2", md: "auto" },
                    fontSize: 13,
                    color: "#71665D",
                    lineHeight: 1.9,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* FINAL SECTION */}
        <Box
          sx={{
            mb: { xs: 7, md: 10 },
            p: { xs: 4, md: 6 },
            bgcolor: "#EAE0D3",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
            gap: 3,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: 11,
                letterSpacing: 2,
                color: "#8B6B52",
                mb: 2,
              }}
            >
              YOUR NEXT COFFEE
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 24, md: 30 },
                fontWeight: 500,
              }}
            >
              There's a place for you here.
            </Typography>
          </Box>

          <Button
            component={Link}
            href="/menu"
            variant="contained"
            endIcon={<ArrowOutwardIcon />}
            sx={{
              bgcolor: "#453328",
              color: "#F6F1E9",
              px: 3,
              py: 1.5,
              fontSize: 12,
              textTransform: "none",
              borderRadius: "2px",
              boxShadow: "none",
              "&:hover": {
                bgcolor: "#624938",
                boxShadow: "none",
              },
            }}
          >
            Discover the menu
          </Button>
        </Box>
      </Container>

      <Footer />
      <DeveloperCard />
    </Box>
  )
}