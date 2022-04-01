import { stock } from "../data/stock";

const GetStock = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(stock);
    }, 1000);
  });
};

export default GetStock;
