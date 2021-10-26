import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import Header from "../../componentes-webpage/header";
import Footer from "../../componentes-webpage/footer";
import LegalContent from "../../componentes-webpage/legal-content";

function CookiesPage() {
  //Esto se debería recuperar del idoma JSON.
  const ptitle = "Aviso de cookies";
  const title = "AVISO DE COOKIES";
  const contenido = (
    <Typography color="secondary" component="p" variant="inherit" align="center">
      Únicame utilizamos cookies estrictamente necesarias para el funcionamiento
      de esta web y la identificación de sus usuarios.
    </Typography>
  );
  useEffect(() => {
    document.title = ptitle;
  }, []);

  return (
    <React.Fragment>
      <Header />
      <LegalContent pageTitle={title} pageHTMLContent={contenido} />
      <Footer />
    </React.Fragment>
  );
}

export default CookiesPage;
