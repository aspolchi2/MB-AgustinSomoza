import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import Cover from "./components/Cover/Cover";
import Checkout from "./components/Checkout/Checkout";
import { Navigate } from "react-router";

function App() {
  // const uploadCaracters = () => {
  //   stock.forEach(async (item) => {
  //     const imgUrl =  await fileUpload(item.img);
  //     const imgUrlDesc = await fileUpload(item.imgDescUrl);

  //     await addDoc(collection(db, "productos"), {...item, img: imgUrl, imgDescUrl: imgUrlDesc});
  //   });
  // };
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/category/:catId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
        {/* <button onClick={uploadCaracters}>Upload</button> */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
