import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import Header from "../../componentes-webpage/header";
import Footer from "../../componentes-webpage/footer";
import LegalContent from "../../componentes-webpage/legal-content";

function TermsPage() {
  //Esto se debería recuperar del idoma JSON.
  const ptitle = "Terms & Conditions";
  const title = "TERMS & CONDITIONS";
  const contenido = (
    <React.Fragment>
      <Typography
        color="secondary"
        component="p"
        variant="inherit"
        align="center"
        gutterBottom
      >
        Yo, Paloma Rebolleda, no me hago responsable del contenido público de
        esta web (imágenes o textos). Tampoco asumo responsabilidades por los
        posibles problemas de salud derivados del uso de esta página web. Esta
        página fue creada como trabajo final de un curso y no tiene ningún animo
        de lucro.
      </Typography>
      <Typography color="secondary" component="p" variant="inherit" align="center">
        ADVERTENCIA! Se recomienda un uso responsable de la página, así como
        evitar acceder si se padecen afecciones del corazón.
      </Typography>
    </React.Fragment>
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

export default TermsPage;
