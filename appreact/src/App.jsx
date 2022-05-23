import React from "react";
import Header from "./Header";
import Home from "./Home";
import Produtos from "./Produtos";
import Footer from "./Footer";


const App = () => {
  let Pagina = Home;
  const {pathname} = window.location;

  if (pathname === '/produtos') {
    Pagina = Produtos;
  } else {
    Pagina = Home;
  }

  return (
    <React.Fragment>
      <Header />
      <Pagina />
      <Footer />
    </React.Fragment>
  );
};

export default App;
