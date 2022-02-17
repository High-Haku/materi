import logo from "./logo.svg";
import "./App.css";
import ListDigimon from "./components/ListDigimon";
import Greeting from "./components/Greeting";
import ProductItem from "./components/ProductItem";

function App() {
  return (
    <>
      <ProductItem nama="buku" harga={5_000} />

      <ProductItem nama="pulpen" harga={6_000} />

      <ProductItem nama="penghapus" />

      <ListDigimon />
    </>
  );
}

export default App;
