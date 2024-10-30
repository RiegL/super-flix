"use client";
import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import img1 from "../images/img1-removebg-preview.png";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

export default function HeaderTextImageLeft() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack
      height={isMobile ? "auto" : 500}
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={isMobile ? "5%" : "10%"}
    >
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        alignItems="center"
        justifyContent="center"
        gap={4}
      >
        {/* Imagem à esquerda */}
        <Stack
          alignItems="center"
          justifyContent="center"
          width={isMobile ? "100%" : "50%"}
        >
          <Image
            src={img1}
            alt="Imagem"
            width={isMobile ? 300 : 450}
            height={isMobile ? 300 : 450}
          />
        </Stack>

        {/* Texto e ícone à direita */}
        <Stack
          alignItems={isMobile ? "center" : "flex-start"}
          justifyContent="center"
          textAlign={isMobile ? "center" : "left"}
          width={isMobile ? "100%" : "50%"}
          spacing={2}
        >
          <Typography
            sx={{ fontFamily: "monospace", fontWeight: "bold" }}
            variant="h3"
            textAlign="center"
            color="#FF3C00"
          >
            ASSISTA ONDE QUISER
          </Typography>
          <Typography
            textAlign="center"
            sx={{ fontFamily: "sans-serif" }}
            variant={isMobile ? "h6" : "h7"}
            color="white"
          >
            A Power Iptv Play oferece um aplicativo totalmente exclusivo para
            você. Basta baixa-lo e assistir tudo o que quiser e quando quiser.
          </Typography>

          {/* Ícone e texto lado a lado */}
          <Stack direction="row" alignItems="center" spacing={1}>
            <EmojiEventsIcon sx={{ color: "#FF3C00", fontSize: "2rem" }} />
            <Typography
              variant="body1"
              color="white"
              sx={{ fontFamily: "monospace", fontWeight: "bold" }}
            >
              +100 Mil Conteúdos 
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <EmojiEventsIcon sx={{ color: "#FF3C00", fontSize: "2rem" }} />
            <Typography
              variant="body1"
              color="white"
              sx={{ fontFamily: "monospace", fontWeight: "bold" }}
            >
              +100 Mil Conteúdos 
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" spacing={1}>
            <EmojiEventsIcon sx={{ color: "#FF3C00", fontSize: "2rem" }} />
            <Typography
              variant="body1"
              color="white"
              sx={{ fontFamily: "monospace", fontWeight: "bold" }}
            >
              +100 Mil Conteúdos 
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}
