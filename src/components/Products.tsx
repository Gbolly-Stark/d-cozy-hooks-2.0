import {ShoppingCart,Search,Heart } from 'lucide-react'
import {products} from '../types/products'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
        <h2 className="font-black text-center text-3xl py-7 text-[#B026FF] font-black drop-shadow-[0_0_20px_#B026FF]"></h2>
        <div className="flex justify-center items-center py-6">
            <input
                type="text"
                placeholder="Search products..."
                className="bg-transparent center justify-center placeholder:text-black/50 font-black focus:outline-none border border-black rounded-3xl py-2 px-16 md:px-32 lg:px-48"
            />
            <button>
              <Search size={23} strokeWidth={2} className="text-black ml-2" />
            </button>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-4 py-5">
  {products.map((product) => (
    <Link to={`/products/${product.id}`}
      key={product.id}
      className="overflow-hidden rounded-lg bg-white shadow-md"
    >
      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-bold ">
          {product.name}
        </h3>
      <div className="mt-2 flex items-center justify-between gap-2">
  <p className="text-lg font-bold text-[#B026FF]">
    ${product.price.toFixed(2)}
  </p>

  <div className="flex items-center gap-2">
    <button className="rounded-lg bg-[#B026FF] p-2 text-white transition hover:bg-[#8a1bd1]">
      <ShoppingCart size={18} />
    </button>

    <button className="rounded-lg bg-black p-2 text-white transition hover:bg-[#B026FF]">
      <Heart size={18} />
    </button>
  </div>
</div>
      </div>
    </Link>
  ))}
</div>
    </div>
    
    
  )
}

export default Products;