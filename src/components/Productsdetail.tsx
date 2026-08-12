 import {useParams} from 'react-router-dom'
import {products} from '../types/products'
import { ShoppingCart, Heart, X} from 'lucide-react';
const Productsdetail = () => {
    const {id} = useParams();
    const product = products.find(
        (product) => product.id === Number(id)
    )
    if (!product) {
        return <div>Product not found</div>
    }
  return (
    <div className="flex flex-col items-center justify-center py-10">
        <img className="w-106 h-96 object-cover rounded-lg shadow-md mb-4"
         src={product.image} alt={product.name} />
        <h2 className="font-serif text-center text-lg py-7 text-[#B026FF] font-black drop-shadow-[0_0_20px_#B026FF]">{product.name}</h2>
         <p className="text-lg px-6 wrap text-center font-poppins text-wrap">{product.description}</p>
         <h3 className="text-xl py-4 font-bold">{product.category}</h3>
        <p className="text-[#B026FF]  text-2xl font-black">${product.price.toFixed(2)}</p>
        <div className="flex justify-center items-center mt-4">
        <button className="bg-[#B026FF] rounded-8xl text-white py-2 px-10 rounded-lg hover:bg-[#8a1bd1]"
        >
          <ShoppingCart /> 
        </button>
        <button className="bg-[#B026FF] rounded-8xl text-white py-2 px-4 rounded-lg hover:bg-[#8a1bd1] ml-4"
        >
          <Heart /> 
        </button>
        <button aria-label="Close"
        className="bg-black rounded-8xl text-white py-2 px-4 rounded-lg hover:bg-white ml-4">
            <X />
        </button>
        </div>
    

        


    </div>
  )
}

export default Productsdetail