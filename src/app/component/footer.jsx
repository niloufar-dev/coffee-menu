

import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Divider,
  IconButton,
} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CoffeeIcon from "@mui/icons-material/Coffee";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1C120E",
        color: "#F5E6D3",
        pt: 7,
        pb: 3,
        borderTop: "1px solid #4A3429",
        mt:6
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          

          sx={{ mb: 6 ,justifyContent:'space-between'}}
          
        >
          
          <Box sx={{ maxWidth: 300 }}>
            <Stack
              direction="row"
              
              spacing={1}
              sx={{ mb: 2 }}
            >
              <CoffeeIcon
                sx={{ color: "#C49A6C", fontSize: 30 }}
              />

              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  letterSpacing: 1,
                }}
              >
                Coffee House
              </Typography>
            </Stack>

            <Typography
              variant="body2"
              sx={{
                color: "#BFA99A",
                lineHeight: 2,
              }}
            >
              A little coffee, a little comfort.
              Your perfect moment starts here.
            </Typography>
          </Box>

          
          <Box>
            <Typography
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Explore
            </Typography>

            <Stack spacing={1.5}>
              {["Home", "Menu", "About Us", "Contact"].map(
                (item) => (
                  <Link
                    key={item}
                    href="#"
                    underline="none"
                    sx={{
                      color: "#BFA99A",
                      width: "fit-content",
                      transition: "0.2s",
                      "&:hover": {
                        color: "#D9B58C",
                      },
                    }}
                  >
                    {item}
                  </Link>
                )
              )}
            </Stack>
          </Box>

        
          <Box>
            <Typography
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Get in Touch
            </Typography>

            <Stack spacing={1.5}>
              <Typography
                variant="body2"
                sx={{ color: "#BFA99A" }}
              >
                hello@coffeehouse.com
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#BFA99A" }}
              >
                +1 234 567 890
              </Typography>

              <Typography
                variant="body2"
                sx={{ color: "#BFA99A" }}
              >
                Open Daily · 8 AM – 10 PM
              </Typography>
            </Stack>
          </Box>

        
          <Box>
            <Typography
              sx={{ fontWeight: 600, mb: 2 }}
            >
              Follow Us
            </Typography>

            <Stack direction="row" spacing={1}>
              <IconButton
                aria-label="Instagram"
                sx={{
                  color: "#D9B58C",
                  border: "1px solid #4A3429",
                  "&:hover": {
                    bgcolor: "#3A261D",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>

              <IconButton
                aria-label="Facebook"
                sx={{
                  color: "#D9B58C",
                  border: "1px solid #4A3429",
                  "&:hover": {
                    bgcolor: "#3A261D",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
            </Stack>
          </Box>
        </Stack>

        <Divider sx={{ borderColor: "#4A3429", mb: 3 }} />

      
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          
        
        >
          <Typography
            variant="caption"
            sx={{ color: "#8F796B", textAlign: "center" }}
          >
            © 2026 Coffee House.
            All rights reserved.
          </Typography>

          <Link
            href="#top"
            underline="none"
            sx={{
              display: "flex",
              
              gap: 0.5,
              color: "#D9B58C",
              fontSize: 13,
              "&:hover": { color: "#F5E6D3" },
            }}
          >
            Back to top
            <ArrowOutwardIcon sx={{ fontSize: 16 }} />
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
