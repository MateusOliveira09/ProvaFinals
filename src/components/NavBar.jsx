import { AppBar, Toolbar, Button, Stack, IconButton, Box } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar() {
  const location = useLocation();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#444", paddingY: 1 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton edge="start" color="inherit">
          <MenuIcon sx={{ fontSize: 30 }} />
        </IconButton>

        {/* Centraliza os botões com um Box flexível */}
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2ecc71",
                color: "#000",
                fontWeight: "bold",
                borderRadius: 20,
                "&:hover": { backgroundColor: "#27ae60" },
              }}
              component={RouterLink}
              to="/"
              startIcon={<ListAltIcon />}
            >
              Produtos
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#2ecc71",
                color: "#000",
                fontWeight: "bold",
                borderRadius: 20,
                "&:hover": { backgroundColor: "#27ae60" },
              }}
              component={RouterLink}
              to="/novo"
              startIcon={<AddCircleOutlineIcon />}
            >
              Novo Produto
            </Button>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
