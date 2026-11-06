
"use client";

import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CoffeeIcon from "@mui/icons-material/Coffee";
import Image from "next/image";
import Link from "next/link";

export default function DeveloperCard() {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 3 } }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "1fr 1.15fr 0.9fr",
          },
          alignItems: "center",
          gap: { xs: 4, md: 3 },
          p: { xs: 3, sm: 4, md: 5 },
          bgcolor: "#F5F1E9",
          color: "#203B35",
          border: "1px solid #E3DED2",
          borderRadius: { xs: 4, md: 6 },
          boxShadow: "0 20px 50px rgba(32,59,53,0.09)",

          "&::before": {
            content: '""',
            position: "absolute",
            width: 190,
            height: 190,
            borderRadius: "50%",
            bgcolor: "#203B35",
            top: -95,
            left: -65,
            opacity: 0.08,
          },

          "&::after": {
            content: '""',
            position: "absolute",
            width: 180,
            height: 70,
            bgcolor: "#203B35",
            bottom: -42,
            right: -35,
            transform: "rotate(-20deg)",
            borderRadius: "50%",
          },
        }}
      >
        {/* Profile Image */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 210, sm: 240, md: 250 },
              height: { xs: 210, sm: 240, md: 250 },
              flexShrink: 0,
            }}
          >
            {/* Decorative circle */}
            <Box
              sx={{
                position: "absolute",
                inset: -12,
                border: "1px solid #B58A5A",
                borderRadius: "50%",
              }}
            />

            {/* Dark green shape */}
            <Box
              sx={{
                position: "absolute",
                width: "65%",
                height: "90%",
                bgcolor: "#203B35",
                top: -20,
                left: -25,
                borderRadius: "50% 50% 10% 50%",
                transform: "rotate(-15deg)",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                overflow: "hidden",
                borderRadius: "50%",
                border: "5px solid #F5F1E9",
                boxShadow: "0 8px 25px rgba(32,59,53,0.12)",
              }}
            >
              <Image
                src="/me.png"
                alt="Niloufar - Front-End Developer"
                fill
                sizes="(max-width: 600px) 210px, 250px"
                style={{ objectFit: "cover" }}
              />
            </Box>

            {/* Decorative leaf */}
            <Box
              sx={{
                position: "absolute",
                bottom: 12,
                left: -12,
                width: 45,
                height: 20,
                bgcolor: "#607A65",
                borderRadius: "100% 0 100% 0",
                transform: "rotate(-35deg)",
              }}
            />
          </Box>
        </Box>

        {/* Developer Information */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            sx={{
              fontSize: 11,
              letterSpacing: { xs: 2, md: 3 },
              fontWeight: 500,
              mb: 1.5,
            }}
          >
            DESIGNED & DEVELOPED BY
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: { xs: 38, md: 46 },
              fontWeight: 700,
              lineHeight: 1.15,
              mb: 1,
            }}
          >
            Niloufar
          </Typography>

          <Typography
            sx={{
              color: "#9A7047",
              fontSize: { xs: 15, md: 17 },
              letterSpacing: 2,
              mb: 2,
            }}
          >
            Front-End Developer
          </Typography>

          <Box
            sx={{
              width: 55,
              height: 4,
              bgcolor: "#B58A5A",
              borderRadius: 5,
              mb: 2.5,
            }}
          />

          <Typography
            sx={{
              maxWidth: 330,
              fontSize: 15,
              lineHeight: 1.9,
              color: "#40544D",
            }}
          >
            I love turning ideas into clean,
            interactive web experiences.
          </Typography>
        </Box>

        {/* Social Links */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            borderLeft: {
              xs: "none",
              md: "1px solid #CBB9A4",
            },
            borderTop: {
              xs: "1px solid #CBB9A4",
              md: "none",
            },
            pl: { xs: 0, md: 4 },
            pt: { xs: 3, md: 0 },
          }}
        >
          <Stack
            direction="row"
            
            spacing={1}
            sx={{ mb: 2.5 }}
          >
            <Typography
              sx={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: 24,
                fontStyle: "italic",
                color: "#9A7047",
              }}
            >
              Let's connect
            </Typography>

            <ArrowOutwardIcon sx={{ color: "#9A7047" }} />
          </Stack>

          <Stack spacing={1.5}>
            <Box
              component={Link}
              href="https://github.com/niloufar-dev"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: 1.5,
                border: "1px solid #D7CBBE",
                borderRadius: 10,
                color: "#203B35",
                textDecoration: "none",
                transition: "all .25s ease",
                "&:hover": {
                  bgcolor: "#203B35",
                  color: "#F5F1E9",
                  transform: "translateX(4px)",
                },
              }}
            >
              <GitHubIcon />
              <Typography sx={{ flex: 1, fontSize: 15 }}>
                GitHub
              </Typography>
              <ArrowOutwardIcon sx={{ fontSize: 17 }} />
            </Box>

            <Box
              component={Link}
              href="https://instagram.com/niloufar_dev"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: 1.5,
                border: "1px solid #D7CBBE",
                borderRadius: 10,
                color: "#203B35",
                textDecoration: "none",
                transition: "all .25s ease",
                "&:hover": {
                  bgcolor: "#203B35",
                  color: "#F5F1E9",
                  transform: "translateX(4px)",
                },
              }}
            >
              <InstagramIcon />
              <Typography sx={{ flex: 1, fontSize: 15 }}>
                Instagram
              </Typography>
              <ArrowOutwardIcon sx={{ fontSize: 17 }} />
            </Box>
            <Box
              component={Link}
              href="https://www.linkedin.com/in/niloufar-mohammadi-a0b2503ab/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                p: 1.5,
                border: "1px solid #D7CBBE",
                borderRadius: 10,
                color: "#203B35",
                textDecoration: "none",
                transition: "all .25s ease",
                "&:hover": {
                  bgcolor: "#203B35",
                  color: "#F5F1E9",
                  transform: "translateX(4px)",
                },
              }}
            >
              <LinkedIn />
              <Typography sx={{ flex: 1, fontSize: 15 }}>
                Linkedin
              </Typography>
              <ArrowOutwardIcon sx={{ fontSize: 17 }} />
            </Box>
          </Stack>

          <Stack
            direction="row"
            spacing={1.5}
            
            sx={{ mt: 3 }}
          >
            <CoffeeIcon sx={{ fontSize: 35, color: "#9A7047" }} />

            <Box>
              <Typography
                sx={{
                  fontSize: 10,
                  letterSpacing: 2,
                  lineHeight: 1.8,
                }}
              >
                CRAFTED WITH
              </Typography>

              <Typography
                sx={{
                  fontSize: 10,
                  letterSpacing: 2,
                  lineHeight: 1.8,
                }}
              >
                COFFEE & CODE
              </Typography>

              <Typography sx={{ fontSize: 10, mt: 0.5 }}>
                — 2026
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
