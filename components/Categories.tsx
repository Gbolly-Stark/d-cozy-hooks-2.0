import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    name: "Clothing",
    description: "Crochet tops, sweaters & more",
    image: "/Handmade Crochet Summer Romantic Vacation Tight Fitted Cami Dress For Women, Spring_Summer,Fall Dress.jfif",
    size: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Accessories",
    description: "Handcrafted pieces for every look",
    image: "/back-accesories (19).jfif",
    size: "",
  },
  {
    name: "Bags",
    description: "Unique crochet bags & purses",
    image: "/back-accesories (2).jfif",
    size: "",
  },
  {
    name: "Home & Decor",
    description: "Cozy handmade pieces for your space",
    image: "/back-accesories (39).jfif",
    size: "md:col-span-2",
  },
];

const Categories = () => {
  return (
    <section className="w-full bg-white px-5 py-16 md:px-10 lg:px-16">
      
    
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#B026FF]">
          Shop by style
        </p>

        <h2 className="font-heading text-4xl font-semibold text-gray-900 md:text-5xl">
          Explore Our Categories
        </h2>

        <p className="mt-4 text-sm leading-7 text-gray-500 md:text-base">
          Discover handcrafted crochet pieces made to bring personality,
          comfort, and style into your everyday life.
        </p>
      </div>

      
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2">
        
        {categories.map((category) => (
          <button
            key={category.name}
            className={`group relative h-[280px] overflow-hidden rounded-3xl text-left ${category.size} md:h-full md:min-h-[260px]`}
          >
            
            <img
              src={category.image}
              alt={category.name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-[#1b0625]/90 group-hover:via-[#B026FF]/20" />

            
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
              
              <div>
                <h3 className="font-heading text-2xl font-semibold text-white md:text-3xl">
                  {category.name}
                </h3>

                <p className="mt-1 max-w-[230px] text-sm text-white/75">
                  {category.description}
                </p>

                <span className="mt-4 inline-block text-sm font-medium text-white transition-all duration-300 group-hover:text-[#d98cff]">
                  Explore collection →
                </span>
              </div>

              
              <div className="ml-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-gray-900 transition-all duration-300 group-hover:bg-[#B026FF] group-hover:text-white group-hover:rotate-45">
                <ArrowUpRight size={22} strokeWidth={2} />
              </div>

            </div>
          </button>
        ))}

      </div>
    </section>
  );
};

export default Categories;