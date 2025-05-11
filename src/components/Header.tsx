import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  AppBar, Toolbar, Typography, Box, Button, Menu, MenuItem,
  IconButton, Badge, InputBase, useMediaQuery
} from "@mui/material";
import {
  Favorite, Mail, AccountCircle, Balance as CompareIcon, Search
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

interface Category {
  id: number;
  name: string;
}

const fetchCategories = async (): Promise<Category[]> => {
  const { data } = await axios.get("https://api.ashyo.fullstackdev.uz/categories/all?limit=0");
  return data;
};

export default function Header() {
  const { data: categories, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      {/* Top bar */}
      {!isMobile && (
        <Box sx={{ backgroundColor: "#f5f5f5", px: 2, py: 0.5, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography sx={{ fontSize: 14 }}>📍 Tashkent</Typography>
            <Typography sx={{ fontSize: 14, cursor: "pointer" }}>About Us</Typography>
            <Typography sx={{ fontSize: 14, cursor: "pointer" }}>Products</Typography>
            <Typography sx={{ fontSize: 14, cursor: "pointer" }}>Contacts</Typography>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Typography sx={{ fontSize: 14 }}>+998 (71) 123-45-67</Typography>
            <Typography sx={{ fontSize: 14, cursor: "pointer" }}>Uz ⌄</Typography>
          </Box>
        </Box>
      )}

      {/* Main AppBar */}
      <AppBar position="static" color="inherit" elevation={1}>
        <Toolbar sx={{ flexDirection: isMobile ? "column" : "row", alignItems: isMobile ? "flex-start" : "center", gap: 1 }}>
          {/* Top row */}
          <Box display="flex" alignItems="center" gap={2} width="100%" justifyContent={isMobile ? "space-between" : "flex-start"}>
            <Typography variant="h6" color="primary">Ashyo</Typography>

            <Button variant="outlined" onClick={handleClickMenu} sx={{ textTransform: "none" }}>
              Kategoriya
            </Button>
            <Menu anchorEl={anchorEl} open={openMenu} onClose={handleCloseMenu}>
              {isLoading ? (
                <MenuItem disabled>Yuklanmoqda...</MenuItem>
              ) : isError ? (
                <MenuItem disabled>Xatolik...</MenuItem>
              ) : (
                categories?.map((cat) => (
                  <MenuItem key={cat.id}>{cat.name}</MenuItem>
                ))
              )}
            </Menu>

            {!isMobile && (
              <Box
                sx={{
                  backgroundColor: "#f1f1f1",
                  borderRadius: 1,
                  px: 2,
                  py: 0.5,
                  display: "flex",
                  alignItems: "center",
                  width: 300,
                }}
              >
                <InputBase placeholder="What are you looking for?" fullWidth />
                <Search color="primary" />
              </Box>
            )}
          </Box>

          {/* Iconlar */}
          <Box display="flex" alignItems="center" gap={2} justifyContent={isMobile ? "center" : "flex-end"} width="100%">
            <IconButton>
              <Badge badgeContent={2} color="error">
                <CompareIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={11} color="error">
                <Favorite />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={7} color="error">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton>
              <AccountCircle />
            </IconButton>
          </Box>

          {isMobile && (
            <Box
              sx={{
                backgroundColor: "#f1f1f1",
                borderRadius: 1,
                px: 2,
                py: 0.5,
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <InputBase placeholder="What are you looking for?" fullWidth />
              <Search color="primary" />
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Bottom category nav */}
      <Box sx={{ px: 2, py: 1, display: "flex", gap: 2, backgroundColor: "#fff", flexWrap: "wrap", justifyContent: isMobile ? "center" : "flex-start" }}>
        {["Aksiyalar", "Smartfonlar", "Noutbooklar", "Kondetsionerlar", "Telivizorlar", "Muzlatgichlar", "Kiryuvish mashinalari"].map((item, idx) => (
          <Typography key={idx} sx={{ fontSize: 14, cursor: "pointer", "&:hover": { textDecoration: "underline" } }}>
            {item}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
