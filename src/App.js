import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";
import { stock } from "./data/stock";
import { db } from "./firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { async } from "@firebase/util";
import { fileUpload } from "./firebase/fileUpload";

function App() {
  const uploadCaracters = () => {
    stock.forEach(async (item) => {
      const imgUrl =  await fileUpload(item.img);
      const imgUrlDesc = await fileUpload(item.imgDescUrl);

      await addDoc(collection(db, "productos"), {...item, img: imgUrl, imgDescUrl: imgUrlDesc});
    });
  };
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/category/:catId" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <button onClick={uploadCaracters}>Upload</button>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
