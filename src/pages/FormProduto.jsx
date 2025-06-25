import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Paper, Typography } from "@mui/material";
import produtoService from "../services/produtoService";
import FormProduto from "../components/FormProduto";

export default function FormProdutoPage() {
  const { id } = useParams();
  const [produto, setProduto] = useState({ nome: "", preco: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setLoading(true);
      produtoService.obter(id).then((data) => {
        setProduto({ nome: data.nome, preco: data.preco });
        setLoading(false);
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto((prev) => ({
      ...prev,
      [name]: name === "preco" ? value.replace(",", ".") : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (id) {
      await produtoService.atualizar(id, {
        nome: produto.nome,
        preco: parseFloat(produto.preco),
      });
    } else {
      await produtoService.criar({
        nome: produto.nome,
        preco: parseFloat(produto.preco),
      });
    }
    setLoading(false);
    navigate("/");
  };

  return (
    <Paper
      sx={{
        p: { xs: 2, sm: 4 },
        maxWidth: 400,
        mx: "auto",
        mt: 4,
        borderRadius: 3,
        boxShadow: "0 0 10px 2px #a5f3ac", // sombra verde claro
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        align="center"
        sx={{
          fontWeight: "bold",
          color: "#27ae60", // verde escuro
          textShadow: "1px 1px 1px #ccc",
        }}
      >
        {id ? "Editar Produto" : "Novo Produto"}
      </Typography>
      <FormProduto
        produto={produto}
        loading={loading}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onCancel={() => navigate("/")}
      />
    </Paper>
  );
}
