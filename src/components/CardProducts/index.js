import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AddCartButton from "../AddCartButton";
import { Box, Button } from "@mui/joy";
import {
  Box as BoxMaterial,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Container, NoResult, ContainerCard } from "./Style";

const TITLE_LENGTH = 35;

export default function CardProducts() {
  const navigate = useNavigate();
  const { products } = useSelector((state) => ({
    products: state.apiProducts,
  }));

  return (
    <Container>
      {!products.list.length && products.status === null && (
        <NoResult>
          Digite algum termo de pesquisa ou escolha uma categoria.
        </NoResult>
      )}
      {!products.list.length && products.status === "sucess" && (
        <NoResult>Nenhum produto foi encontrado</NoResult>
      )}
      {products.status === "loading" ? (
        <Box sx={{ display: "flex", justifyContent: "center", padding: 5 }}>
          <Button loading variant="plain" />
        </Box>
      ) : (
        <ContainerCard>
          {products.list.map(({ id, title, thumbnail, price }) => (
            <Card
              key={id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                maxWidth: 250,
                minWidth: "30%",
              }}
            >
              <BoxMaterial sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent
                  sx={{
                    flex: "1 0 auto",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="body2"
                    component="div"
                    fontWeight="600"
                  >
                    {title.length > TITLE_LENGTH
                      ? `${title.slice(0, TITLE_LENGTH)}...`
                      : title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {" "}
                    {price.toLocaleString("pt-br", {
                      minimumFractionDigits: 2,
                    })}
                  </Typography>
                </CardContent>
                <BoxMaterial>
                  <AddCartButton idProduct={id} />
                </BoxMaterial>
              </BoxMaterial>
              <CardMedia
                component="img"
                sx={{ width: 80, cursor: 'pointer' }}
                image={thumbnail}
                alt={`Produto ${title}`}
                onClick={() => navigate(`/product/${id}`)}
              />
            </Card>
          ))}
        </ContainerCard>
      )}
    </Container>
  );
}
