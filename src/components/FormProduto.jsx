import {
  Button,
  CircularProgress,
  Stack,
  TextField,
} from "@mui/material";

export default function FormProduto({
  produto,
  loading,
  onChange,
  onSubmit,
  onCancel,
}) {
  return (
    <form onSubmit={onSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Nome"
          name="nome"
          value={produto.nome}
          onChange={onChange}
          fullWidth
          required
        />

        <TextField
          label="Preço"
          name="preco"
          value={produto.preco}
          onChange={onChange}
          fullWidth
          required
          type="number"
          inputProps={{ step: "0.01", min: "0" }}
        />

        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
          <Button
            type="submit"
            disabled={loading}
            variant="contained"
            sx={{
              backgroundColor: "#2ecc71",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: 20,
              "&:hover": {
                backgroundColor: "#27ae60",
              },
              px: 4,
            }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Salvar"}
          </Button>

          <Button
            variant="outlined"
            onClick={onCancel}
            sx={{
              color: "#27ae60",
              borderColor: "#27ae60",
              fontWeight: "bold",
              borderRadius: 20,
              "&:hover": {
                backgroundColor: "#eafaf1",
                borderColor: "#219150",
              },
              px: 4,
            }}
          >
            Cancelar
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
