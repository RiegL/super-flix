'use client';
import { Box, Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import img2 from '../images/img2-removebg-preview.png';

export default function HeaderTextImageLeft() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Stack
      height={isMobile ? 'auto' : 500}
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding={isMobile ? '5%' : '10%'}
    >
      <Box
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        alignItems="center"
        justifyContent="center"
        gap={4}
      >
        <Stack
          alignItems={isMobile ? 'center' : 'flex-start'}
          justifyContent="center"
          textAlign={isMobile ? 'center' : 'left'}
          width={isMobile ? '100%' : '50%'}
        >
          <Typography sx={{ fontFamily: 'monospace' }} variant="h5" color="#FF3C00">
            ASSISTA SEUS PROGRAMAS FAVORITOS SEM TRAVAMENTO
          </Typography>
          <Typography sx={{ fontFamily: 'monospace' }} variant={isMobile ? 'h5' : 'h4'} color="white">
            <span style={{ backgroundColor: '#FF3C00' }}>A MELHOR LISTA DE CANAIS FILMES E SÉRIES</span> DISPONÍVEIS EM
            UMA ÚNICA PLATAFORMA
          </Typography>
          <Typography sx={{ fontFamily: 'monospace' }} variant="body1" color="white">
            Quer assistir tudo o que quiser? A SuperFlix tem a solução pra Você
          </Typography>
          <Button
            href='https://pay.kirvano.com/692c7a72-b456-45fb-97a6-2315b3317aaf?aff=e4915ece-3ce2-41e0-885a-ce68c8c7e592'
            sx={{
              marginTop: 2,
              paddingX: isMobile ? 2 : 3,
              paddingY: 1.5,
              backgroundColor: '#FF3C00',
              color: 'white',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              boxShadow: '0px 4px 10px rgba(255, 60, 0, 0.5)',
              '&:hover': {
                backgroundColor: '#FF3C00',
                boxShadow: '0px 6px 15px rgba(255, 60, 0, 0.7)',
                transform: 'scale(1.05)',
              },
            }}
          >
            QUERO ACESSAR OS MELHORES CANAIS
          </Button>
        </Stack>
        <Stack alignItems="center" justifyContent="center" width={isMobile ? '100%' : '50%'}>
          <Image src={img2} alt="Imagem" width={isMobile ? 300 : 450} height={isMobile ? 300 : 450} />
        </Stack>
      </Box>
    </Stack>
  );
}
