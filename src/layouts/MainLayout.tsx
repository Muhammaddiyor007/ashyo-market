// layouts/MainLayout.tsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Box, Container } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box>
      <Header />
      <Container maxWidth="lg" sx={{ my: 4 }}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default MainLayout;
