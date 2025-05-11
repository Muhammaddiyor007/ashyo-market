import {
  Box,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import {
  Facebook,
  YouTube,
  Telegram,
  Twitter,
  Instagram,
  ChatBubbleOutline,
} from "@mui/icons-material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";

export default function Footer() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ backgroundColor: "#f9f9f9", px: { xs: 2, md: 4 }, py: 6 }}>
      {/* Upper content */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* Socials and Apps */}
        <Box sx={{ flex: "1 1 250px", minWidth: "250px" }}>
          <Typography fontWeight="bold" mb={2}>
            Bizning ijtimoiy tarmoqlarda
          </Typography>
          <Box display="flex" gap={1} mb={3} flexWrap="wrap">
            <IconButton sx={{ backgroundColor: "#fff", borderRadius: 1 }}>
              <Facebook sx={{ color: "#1877f2" }} />
            </IconButton>
            <IconButton sx={{ backgroundColor: "#fff", borderRadius: 1 }}>
              <YouTube sx={{ color: "#ff0000" }} />
            </IconButton>
            <IconButton sx={{ backgroundColor: "#fff", borderRadius: 1 }}>
              <Telegram sx={{ color: "#0088cc" }} />
            </IconButton>
            <IconButton sx={{ backgroundColor: "#fff", borderRadius: 1 }}>
              <Twitter sx={{ color: "#1da1f2" }} />
            </IconButton>
            <IconButton sx={{ backgroundColor: "#fff", borderRadius: 1 }}>
              <Instagram sx={{ color: "#e1306c" }} />
            </IconButton>
          </Box>

          <Typography fontWeight="bold" mb={1}>
            Mobil ilovani yuklab oling
          </Typography>
          <Box display="flex" gap={2} flexWrap="wrap">
            <Button
              startIcon={<AppleIcon />}
              sx={{
                backgroundColor: "#edf2f7",
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              App Store
            </Button>
            <Button
              startIcon={<AndroidIcon />}
              sx={{
                backgroundColor: "#edf2f7",
                borderRadius: 2,
                textTransform: "none",
              }}
            >
              Google Play
            </Button>
          </Box>
        </Box>

        {/* Menu */}
        <Box sx={{ flex: "1 1 200px", minWidth: "200px" }}>
          <Typography fontWeight="bold" mb={2}>
            Menyu
          </Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Typography>Ashyo haqida</Typography>
            <Typography>Foydalanish shartlari</Typography>
            <Typography>Maxfiylik va xavfsizlik siyosati</Typography>
            <Typography>Mahsulotlarni va tovarlarni qaytarish siyosati</Typography>
            <Typography>Biz bilan aloqa</Typography>
          </Box>
        </Box>

        {/* Contact */}
        <Box sx={{ flex: "1 1 250px", minWidth: "250px" }}>
          <Typography fontWeight="bold" mb={2}>
            Aloqa
          </Typography>
          <Typography fontWeight="bold" color="primary" mb={2}>
            +998 (71) 123-45-67
          </Typography>
          <Typography mb={1}>Savolingiz bormi?</Typography>
          <TextField
            fullWidth
            variant="outlined"
            placeholder="O'zingiz qiziqtirgan savollarni bering"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ChatBubbleOutline />
                </InputAdornment>
              ),
              sx: { backgroundColor: "#f1f2f4", borderRadius: 2 },
            }}
          />
        </Box>
      </Box>

      {/* Footer bottom */}
      <Box mt={6} textAlign={isSm ? "center" : "left"}>
        <Typography variant="body2" color="textSecondary">
          © 2022 Ashyo ro‘hatdan o‘tgan litsenzalangan bu brend.
        </Typography>
      </Box>
    </Box>
  );
}
