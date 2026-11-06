"use client"

import {
  AppBar,
  Box,
  Collapse,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,

} from "@mui/material"

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import MenuIcon from "@mui/icons-material/Menu"

import React, { useState } from "react"
import Image from "next/image"

import Link from "next/link"
import { usePathname } from "next/navigation"
import Search from "./search"

export default function Header() {
  const [open, setOpen] = useState(false)

  const pathname = usePathname()
  console.log(pathname);

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Menu", href: "/menu" },
    { title: "About", href: "/about" },
  ]

  return (
    <>
      <AppBar
        sx={{
          position: "fixed",
          width: "100%",
          zIndex: 99,
          backdropFilter: "blur(2px)",
          backgroundColor: "transparent",
          p: 0,
          boxShadow: "none",
          overflow:'visible'
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{
              position:'relative',
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              px: { xs: 2, md: 8 },
              py: { xs: 1, md: 1.5 },
            }}
          >

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "7px",
              }}
            >
              <Image
                src="/fa-solid--mug-hot(1).svg"
                width={30}
                height={30}
                alt="coffee"
              />

              <Typography
                sx={{
                  fontSize: 18,
                  color: "#E8DCC6",
                  whiteSpace: "nowrap",
                }}
              >
                Coffee House
              </Typography>
            </Box>
      <List
    sx={{
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: 0, md: 3 },
    bgcolor: { xs: "#3A2A1F", md: "transparent" },
    position: { xs: "absolute", md: "static" },
    width: { xs: "100%", md: "auto" },
    top: "100%",
    left: 0,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    p: 0,
    m: 0,

    opacity: { xs: open ? 1 : 0, md: 1 },
    transform: {
      xs: open ? "translateY(0)" : "translateY(-12px)",
      md: "none",
    },
    visibility: { xs: open ? "visible" : "hidden", md: "visible" },

    clipPath: {
      xs: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
      md: "none",
    },

    transition: {
      xs: "opacity 0.4s ease, transform 0.4s ease, clip-path 0.4s ease, visibility 0.4s",
      md: "none",
    },

    "& .MuiListItem-root": {
      justifyContent: "center",
      cursor: "pointer",
      display: "flex",
      py: { xs: 2, md: 1 },
      borderBottom: {
        xs: "1px solid rgba(232,220,198,0.2)",
        md: "none",
      },
    },

    "& .MuiListItem-root:last-child": {
      borderBottom: "none",
    },
  }}
                >
                  {navItems.map((item) => {
                    const isActive = pathname === item.href

                    return (
                      <ListItem key={item.href} disableGutters>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          style={{
                            color: isActive ? "#D4A373" : "#E8DCC6",
                            textDecoration: "none",
                            fontSize: "14px",
                            fontWeight: isActive ? 600 : 400,
                            borderBottom: isActive
                              ? "2px solid #D4A373"
                              : "2px solid transparent",
                            paddingBottom: "6px",
                            transition: "all 0.25s ease",
                          }}
                        >
                          {item.title}
                        </Link>
                      </ListItem>
                    )
                  })}
                </List>
  <Box
  sx={{
    display: "flex",
    gap: 0,
    alignItems: "center",
    position: "relative",
  
  }}
>
  <Search />

  <IconButton
    sx={{
      color: "#E8DCC6",
      display: { xs: "none", md: "flex" },
    }}
  >
    <ShoppingCartOutlinedIcon
      sx={{ fontSize: 30, color: "#241a15" }}
    />
  </IconButton>

  <IconButton
              onClick={() => setOpen(!open)}
              sx={{
                color: "#E8DCC6",
                p: 0,
                display: { xs: "flex", md: "none" },
              
              }}
            >
              <MenuIcon sx={{ fontSize: 35 }} />
            </IconButton>
</Box>


          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />
    </>
  )
}
