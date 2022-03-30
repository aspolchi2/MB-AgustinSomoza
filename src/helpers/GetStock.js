import { stock } from '../data/stock'

const GetStock = () => {

  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(stock)
        }, 2000)
    })

}

export default GetStock