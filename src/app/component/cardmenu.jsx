"use client";

import {
  Box,
  Card,
  Typography,
  Stack,
  Button,
} from '@mui/material';

import Image from 'next/image';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

export default function Cardmenu({ img, name, desc, price, slug }) {
  return (
    <Card
      sx={{
        width: '100%',
        bgcolor: '#241A15',
        color: '#E8DCC6',
        border: '1px solid rgba(232,220,198,0.12)',
        borderRadius: 3,
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',

        animation: 'cardReveal 0.8s ease-out both',

        '@keyframes cardReveal': {
          from: {
            opacity: 0,
            transform: 'translateY(15px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },

        '&:hover': {
          borderColor: '#d4a373',
          boxShadow: '0 12px 30px rgba(0,0,0,0.25)',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          aspectRatio: '4 / 3',
          overflow: 'hidden',
        }}
      >
        <Image
          src={img}
          alt={name}
          fill
          sizes="(max-width: 600px) 50vw, (max-width: 1200px) 25vw, 300px"
          style={{
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
        />
      </Box>

      <Box
        sx={{
          p: { xs: 1.5, sm: 2 },
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: { xs: '17px', sm: '23px' },
              fontWeight: 700,
              mb: 0.75,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: '11px', sm: '13px' },
              color: 'rgba(232,220,198,0.65)',
              lineHeight: 1.8,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: { xs: '40px', sm: '46px' },
            }}
          >
            {desc}
          </Typography>
        </Box>

        <Stack
          direction="column"
          spacing={2}
          sx={{
            py: 1.25,
            borderTop: '1px solid rgba(232,220,198,0.12)',
            borderBottom: '1px solid rgba(232,220,198,0.12)',
          }}
        >
          <Stack direction="row" spacing={1}>
            <LocalCafeOutlinedIcon
              sx={{ fontSize: 18, color: '#d4a373' }}
            />

            <Typography sx={{ fontSize: { xs: '10px', sm: '12px' } }}>
              Hot / Iced
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1}>
            <ViewInArOutlinedIcon
              sx={{ fontSize: 18, color: '#d4a373' }}
            />

            <Typography sx={{ fontSize: { xs: '10px', sm: '12px' } }}>
              Regular / Large
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          sx={{
            mt: 'auto',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1.5,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '15px', sm: '21px',lg:'17px' },
              fontWeight: 700,
              color: '#d4a373',
              whiteSpace: 'nowrap',
            }}
          >
            {price}$
          </Typography>

          <Button
            component={Link}
            href={`/menu/${slug}`}
            variant="outlined"
            endIcon={<ArrowForwardIcon />}
            sx={{
              py: 1,
              px: { xs: 3, sm: 1 },
              fontSize: { xs: '11px', sm: '12px' },
              fontWeight: 600,
              color: '#E8DCC6',
              borderColor: 'rgba(212,163,115,0.5)',
              borderRadius: 2,
              textTransform: 'none',
              whiteSpace: 'nowrap',
              minWidth: 0,

              '& .MuiButton-endIcon': {
                ml: { xs: 0.5, sm: 1 },
              },

              '&:hover': {
                bgcolor: '#d4a373',
                color: '#241A15',
                borderColor: '#d4a373',
              },
            }}
          >
            Show details
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}
