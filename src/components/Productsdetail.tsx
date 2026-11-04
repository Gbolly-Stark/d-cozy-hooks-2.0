import { useNavigate, useParams } from 'react-router-dom'
import { products } from '../types/products'
import { ShoppingCart, Heart, X } from 'lucide-react'

const Productsdetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const product = products.find(
    (product) => product.id === Number(id)
  )

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl font-semibold">Product not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen px-5 py-10 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

        <div className="w-full flex justify-center">
          <img
            className="w-full max-w-md h-80 sm:h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="flex flex-col">
          <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#B026FF] drop-shadow-[0_0_15px_#B026FF]">
            {product.name}
          </h2>

          <p className="mt-5 text-gray-600 text-base sm:text-lg leading-relaxed">
            {product.description}
          </p>

          <p className="mt-5 text-sm uppercase tracking-widest font-semibold text-gray-500">
            {product.category}
          </p>

          <p className="mt-3 text-3xl font-black text-[#B026FF]">
            ${product.price.toFixed(2)}
          </p>

          <div className="flex items-center gap-3 mt-7">

            <button
              aria-label="Add to cart"
              className="flex items-center justify-center gap-2 bg-[#B026FF] text-white px-6 py-3 rounded-xl hover:bg-[#8a1bd1] transition"
            >
              <ShoppingCart size={20} />
              <span>Add to Cart</span>
            </button>

            <button
              aria-label="Add to wishlist"
              className="flex items-center justify-center bg-[#B026FF] text-white p-3 rounded-xl hover:bg-[#8a1bd1] transition"
            >
              <Heart size={20} />
            </button>

            <button
              aria-label="Close"
              onClick={() => navigate(-1)}
              className="flex items-center justify-center bg-black text-white p-3 rounded-xl hover:bg-gray-200 hover:text-black transition"
            >
              <X size={20} />
            </button>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Productsdetail