import {ShoppingBag, HardHat, Sparkle, UserRound, UserRoundCheck} from 'lucide-react'

const Categories = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">
        
        <h2 className="font-black text-center text-3xl py-7 text-[#B026FF] font-black drop-shadow-[0_0_20px_#B026FF]">Categories</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
            <div className="flex flex-col items-center justify-center bg-[#B026FF] text-white py-4 px-6 rounded-lg hover:bg-[#8a1bd1]">
                <ShoppingBag size={32} />
                <p className="mt-2"> Bags</p>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#B026FF] text-white py-4 px-6 rounded-lg hover:bg-[#8a1bd1]">
                <HardHat size={32} />
                <p className="mt-2">Hats</p>
            </div>
             
             <div className="flex flex-col items-center justify-center bg-[#B026FF] text-white py-4 px-6 rounded-lg hover:bg-[#8a1bd1]">
                <UserRound   size={32} />
                <p className="mt-2">Male</p>
            </div>
             <div className="flex flex-col items-center justify-center bg-[#B026FF] text-white py-4 px-6 rounded-lg hover:bg-[#8a1bd1]">
                <UserRoundCheck size={32} />
                <p className="mt-2">Female</p>
            </div>
             
             <div className="flex flex-col items-center justify-center bg-[#B026FF] text-white py-4 px-6 rounded-lg hover:bg-[#8a1bd1]">
                <Sparkle size={32} />
                <p className="mt-2">Accessories</p>
            </div>

        </div>
    </div>
  )
}

export default Categories