import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  CircularProgress,
  Typography,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import produtoService from "../services/produtoService";

export default function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const carregarProdutos = async () => {
    setLoading(true);
    try {
      const lista = await produtoService.listar();
      setProdutos(lista);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarProdutos();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Deseja realmente excluir este produto?")) {
      await produtoService.excluir(id);
      carregarProdutos();
    }
  };

  if (loading)
    return <CircularProgress sx={{ display: "block", mx: "auto", my: 4 }} />;

  return (
    <TableContainer
      component={Paper}
      sx={{
        background: "#fff",
        padding: 2,
        marginTop: 3,
        borderRadius: 3,
        boxShadow: "0 0 10px 2px #a5f3ac", // sombra verde claro
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          fontWeight: "bold",
          mb: 2,
          color: "#000",
          textShadow: "1px 1px 2px gray",
        }}
      >
        Lista de Produtos
      </Typography>

      <Table sx={{ border: "2px solid black" }}>
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{ border: "2px solid black", fontWeight: "bold" }}
            >
              ID
            </TableCell>
            <TableCell
              align="center"
              sx={{ border: "2px solid black", fontWeight: "bold" }}
            >
              Nome
            </TableCell>
            <TableCell
              align="center"
              sx={{ border: "2px solid black", fontWeight: "bold" }}
            >
              Preço
            </TableCell>
            <TableCell
              align="center"
              sx={{ border: "2px solid black", fontWeight: "bold" }}
            >
              Ações
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produtos.map((produto) => (
            <TableRow key={produto.id}>
              <TableCell align="center" sx={{ border: "2px solid black" }}>
                {produto.id}
              </TableCell>
              <TableCell align="center" sx={{ border: "2px solid black" }}>
                {produto.nome}
              </TableCell>
              <TableCell align="center" sx={{ border: "2px solid black" }}>
                R$ {produto.preco.toFixed(2)}
              </TableCell>
              <TableCell
                align="center"
                sx={{ border: "2px solid black", whiteSpace: "nowrap" }}
              >
                <IconButton
                  sx={{ backgroundColor: "#2ecc71", mr: 1 }}
                  onClick={() => navigate(`/editar/${produto.id}`)}
                >
                  <EditIcon sx={{ color: "#fff" }} />
                </IconButton>
                <IconButton
                  sx={{ backgroundColor: "#e74c3c" }}
                  onClick={() => handleDelete(produto.id)}
                >
                  <DeleteIcon sx={{ color: "#fff" }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          {produtos.length === 0 && (
            <TableRow>
              <TableCell colSpan={4} align="center">
                Nenhum produto cadastrado.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
