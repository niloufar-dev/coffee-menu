"use client";

import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Chip,
  Stack,
  Divider,
  Paper,
  Rating,
} from "@mui/material";

import Image from "next/image";
import Link from "next/link";

export default function ProductDetail({
  menuname,
  name,
  img,
  price,
  desc,
  details,
  rating,
  reviews,
  subtitle,
  ingredients = [],
  preparationTime,
  temperature,
  intensity,
}) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#F7F3EC",
        color: "#2C211B",
        py: { xs: 2.5, md: 6 },
      }}
    >
      <Container maxWidth="lg">
      
        <Stack
          direction="row"
          spacing={1}
          sx={{
            mb: 2.5,
            rowGap: 0.5,
          }}
        >
          <Typography
            component={Link}
            href="/"
            sx={{
              color: "#8A796B",
              textDecoration: "none",
              fontSize: 13,
              transition: "color .2s ease",
              "&:hover": { color: "#553A2B" },
            }}
          >
            Home
          </Typography>

          <Typography sx={{ color: "#B7A99C", fontSize: 13 }}>
            /
          </Typography>

          <Typography
            component={Link}
            href="/menu"
            sx={{
              color: "#8A796B",
              textDecoration: "none",
              fontSize: 13,
              transition: "color .2s ease",
              "&:hover": { color: "#553A2B" },
            }}
          >
            Menu
          </Typography>

          <Typography sx={{ color: "#B7A99C", fontSize: 13 }}>
            /
          </Typography>

          <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
            {menuname}
          </Typography>
        </Stack>

        <Grid container spacing={{ xs: 3, md: 6 }}>
          
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Box
              sx={{
                position: "relative",
                flex: 1,
                height: { xs: 330, sm: 450, md: "auto" },
                minHeight: { md: 520 },
                borderRadius: 5,
                overflow: "hidden",
                bgcolor: "#E8DED1",
                boxShadow:
                  "0 24px 60px -20px rgba(85, 58, 43, 0.35)",

                animation: "imageReveal 1.1s ease-out both",

                "@keyframes imageReveal": {
                  from: {
                    opacity: 0,
                    transform: "scale(0.96)",
                  },
                  to: {
                    opacity: 1,
                    transform: "scale(1)",
                  },
                },
              }}
            >
              <Image
                src={img}
                alt={name}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>

          
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Stack
              spacing={{ xs: 2.5, md: 2 }}
              sx={{
                width: "100%",
                justifyContent: "space-between",

                animation: "contentReveal 0.8s ease-out both",
                animationDelay: "0.15s",

                "@keyframes contentReveal": {
                  from: {
                    opacity: 0,
                    transform: "translateY(14px)",
                  },
                  to: {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                },
              }}
            >
            
              <Box>
                <Stack spacing={1}>
                  <Stack direction="row" spacing={1.5}>
                    <Box
                      sx={{
                        width: 28,
                        height: "1px",
                        bgcolor: "#9B6A45",
                      }}
                    />

                    <Typography
                      sx={{
                        color: "#9B6A45",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: 3,
                        textTransform: "uppercase",
                      }}
                    >
                      {menuname}
                    </Typography>
                  </Stack>

                  <Typography
                    variant="h1"
                    sx={{
                      fontFamily: "Georgia, serif",
                      fontSize: { xs: 36, sm: 44, md: 46 },
                      fontWeight: 500,
                      lineHeight: 1.1,
                      letterSpacing: -1,
                    }}
                  >
                    {name}
                  </Typography>

                  <Typography
                    sx={{
                      color: "#9B6A45",
                      fontSize: 17,
                      fontStyle: "italic",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {subtitle}
                  </Typography>
                </Stack>
              </Box>

              
              <Box>
                <Stack direction="row" spacing={1.25}>
                  <Rating
                    value={Number(rating) || 0}
                    precision={0.1}
                    readOnly
                    size="small"
                    sx={{ color: "#C28A4E" }}
                  />

                  <Typography sx={{ fontSize: 13, color: "#817166" }}>
                    <Box
                      component="span"
                      sx={{ fontWeight: 700, color: "#2C211B" }}
                    >
                      {rating}
                    </Box>{" "}
                    · {reviews} reviews
                  </Typography>
                </Stack>
              </Box>

            
              <Box>
                <Typography
                  sx={{
                    color: "#76675D",
                    fontSize: 15,
                    lineHeight: 1.7,
                    maxWidth: 520,
                  }}
                >
                  {desc}
                </Typography>
              </Box>

              
              <Box>
                <Stack
                  direction="row"
                  spacing={1}
                  useFlexGap
                >
                  <Chip
                    label={temperature}
                    sx={{
                      bgcolor: "#EDE2D5",
                      color: "#553A2B",
                      fontWeight: 600,
                      fontSize: 13,
                      height: 32,
                    }}
                  />

                  <Chip
                    label={`${intensity} intensity`}
                    variant="outlined"
                    sx={{
                      borderColor: "#C8B8A8",
                      color: "#553A2B",
                      fontSize: 13,
                      height: 32,
                    }}
                  />

                  <Chip
                    label={preparationTime}
                    variant="outlined"
                    sx={{
                      borderColor: "#C8B8A8",
                      color: "#553A2B",
                      fontSize: 13,
                      height: 32,
                    }}
                  />
                </Stack>
              </Box>

          
              <Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#8A796B",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: 2,
                      textTransform: "uppercase",
                      mb: 1,
                    }}
                  >
                    Ingredients
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                  >
                    {ingredients.map((ingredient) => (
                      <Chip
                        key={ingredient}
                        label={ingredient}
                        variant="outlined"
                        sx={{
                          borderColor: "#D8C8B8",
                          bgcolor: "rgba(255,255,255,0.45)",
                          color: "#76533C",
                          fontSize: 13,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Box>

              
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 2.5 },
                  bgcolor: "#FFFDF9",
                  border: "1px solid #E6DACC",
                  borderRadius: 4,
                  boxShadow:
                    "0 12px 32px -18px rgba(85, 58, 43, 0.25)",

                  animation: "purchaseReveal 0.7s ease-out both",
                  animationDelay: "0.4s",

                  "@keyframes purchaseReveal": {
                    from: {
                      opacity: 0,
                      transform: "translateY(12px)",
                    },
                    to: {
                      opacity: 1,
                      transform: "translateY(0)",
                    },
                  },
                }}
              >
                <Stack spacing={1.75}>
                  <Stack direction="row">
                    <Box>
                      <Typography
                        sx={{
                          color: "#8A796B",
                          fontSize: 11,
                          fontWeight: 700,
                          mb: 0.5,
                          letterSpacing: 2,
                        }}
                      >
                        PRICE
                      </Typography>

                      <Typography
                        sx={{
                          fontFamily: "Georgia, serif",
                          fontSize: 32,
                          fontWeight: 600,
                          lineHeight: 1,
                        }}
                      >
                        ${Number(price).toFixed(2)}
                      </Typography>
                    </Box>
                  </Stack>

                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.5}
                  >
                    <Button
                      variant="contained"
                      fullWidth
                      disableElevation
                      sx={{
                        py: 1.4,
                        bgcolor: "#553A2B",
                        color: "#FFF",
                        borderRadius: 2.5,
                        textTransform: "none",
                        fontSize: 15,
                        fontWeight: 600,
                        letterSpacing: 0.2,
                        transition: "all .2s ease",
                        "&:hover": {
                          bgcolor: "#402A20",
                          transform: "translateY(-1px)",
                          boxShadow:
                            "0 10px 20px -10px rgba(64, 42, 32, 0.6)",
                        },
                      }}
                    >
                      Add to Order — ${Number(price).toFixed(2)}
                    </Button>

                    <Button
                      component={Link}
                      href="/menu"
                      variant="outlined"
                      sx={{
                        px: 3,
                        py: 1.4,
                        borderColor: "#C8B8A8",
                        color: "#553A2B",
                        borderRadius: 2.5,
                        textTransform: "none",
                        fontSize: 15,
                        whiteSpace: "nowrap",
                        transition: "all .2s ease",
                        "&:hover": {
                          borderColor: "#553A2B",
                          bgcolor: "rgba(85, 58, 43, 0.04)",
                        },
                      }}
                    >
                      Back to Menu
                    </Button>
                  </Stack>

                  <Typography
                    sx={{
                      color: "#928176",
                      fontSize: 12,
                      textAlign: "center",
                      letterSpacing: 0.3,
                    }}
                  >
                    Made fresh to order · Premium ingredients
                  </Typography>
                </Stack>
              </Paper>
            </Stack>
          </Grid>
        </Grid>

        
        <Paper
          elevation={0}
          sx={{
            mt: { xs: 5, md: 8 },
            p: { xs: 3, md: 6 },
            bgcolor: "#EEE5DA",
            borderRadius: 5,

            animation: "aboutReveal 0.8s ease-out both",
            animationDelay: "0.2s",

            "@keyframes aboutReveal": {
              from: {
                opacity: 0,
                transform: "translateY(20px)",
              },
              to: {
                opacity: 1,
                transform: "translateY(0)",
              },
            },
          }}
        >
          <Typography
            sx={{
              color: "#9B6A45",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
              mb: 1.5,
            }}
          >
            About
          </Typography>

          <Typography
            sx={{
              fontFamily: "Georgia, serif",
              fontSize: { xs: 28, md: 38 },
              fontWeight: 500,
              letterSpacing: -0.5,
              mb: 2.5,
            }}
          >
            The Art of Coffee
          </Typography>

          <Typography
            sx={{
              color: "#76675D",
              fontSize: 15.5,
              lineHeight: 1.95,
              maxWidth: 750,
            }}
          >
            {details}
          </Typography>

          <Divider
            sx={{
              borderColor: "#D5C6B7",
              my: { xs: 3, md: 5 },
            }}
          />

          <Grid container spacing={{ xs: 2, md: 3 }}>
            {[
              { label: "CATEGORY", value: menuname },
              { label: "TEMPERATURE", value: temperature },
              { label: "INTENSITY", value: intensity },
              { label: "PREPARATION", value: preparationTime },
            ].map((item, index) => (
              <Grid
                key={item.label}
                size={{ xs: 6, md: 3 }}
              >
                <Box
                  sx={{
                    p: 2.5,
                    height: "100%",
                    bgcolor: "rgba(255,255,255,0.45)",
                    border: "1px solid #E0D3C4",
                    borderRadius: 3,
                    transition: "border-color .25s ease",
                    "&:hover": {
                      borderColor: "#B58A67",
                    },

                    animation: "infoReveal 0.6s ease-out both",
                    animationDelay: `${0.2 + index * 0.12}s`,

                    "@keyframes infoReveal": {
                      from: {
                        opacity: 0,
                        transform: "translateY(12px)",
                      },
                      to: {
                        opacity: 1,
                        transform: "translateY(0)",
                      },
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#8A796B",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: 1.5,
                      mb: 1,
                    }}
                  >
                    {item.label}
                  </Typography>

                  <Typography fontWeight={600}>
                    {item.value}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
