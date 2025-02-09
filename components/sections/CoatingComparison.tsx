import React from "react";
import { Star, StarOff } from "lucide-react";
import Image from "next/image";

const CoatingComparison = () => {
  const products = [
    {
      name: "CSL",
      image: "/images/CSL.png",
      duration: "3 años de protección",
      guarantee: true,
    },
    {
      name: "CSL + EvoV5",
      image: "/images/CSL+ExoV5.png",
      duration: "5 años de protección",
      guarantee: true,
    },
    {
      name: "Crystal Serum Ultra",
      image: "/images/CLU.png",
      duration: "9 años de protección",
      guarantee: true,
    },
  ];

  const comparisons = [
    {
      name: "Durabilidad",
      ratings: [4, 4, 5],
    },
    {
      name: "Facilidad de aplicación",
      ratings: [2, 2, 2],
    },
    {
      name: "Brillo",
      ratings: [4, 5, 5],
    },
    {
      name: "Profundidad de brillo",
      ratings: [4, 5, 5],
    },
    {
      name: "Resistencia a rayones",
      ratings: [5, 5, 5],
    },
    {
      name: "Repelencia agua/suciedad",
      ratings: [2, 5, 5],
    },
    {
      name: "Resistencia química",
      ratings: [5, 5, 5],
    },
    {
      name: "Resistencia UV",
      ratings: [4, 5, 5],
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <Star
              key={i}
              className="w-4 h-4 text-primary-gold"
              fill="currentColor"
            />
          ) : (
            <StarOff key={i} className="w-4 h-4 text-gray-400" />
          )
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white/5 rounded-lg p-6 border border-gray-800">
      <div className="overflow-x-auto">
        <div className="min-w-[768px] grid grid-cols-4 gap-6">
          {/* Header */}
          <div className="col-span-1"></div>
          {products.map((product) => (
            <div key={product.name} className="text-center space-y-4">
              <div className="relative w-32 h-32 mx-auto">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={128}
                  height={128}
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-bold">{product.name}</h3>
              <p className="text-gray-300 text-sm">{product.duration}</p>
              {product.guarantee && (
                <div className="flex justify-center">
                  <div className="bg-primary-gold/10 text-primary-gold text-sm py-1 px-3 rounded-full">
                    Garantía
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Comparison rows */}
          {comparisons.map((comparison) => (
            <React.Fragment key={comparison.name}>
              <div className="text-gray-300 flex items-center">
                {comparison.name}
              </div>
              {comparison.ratings.map((rating, idx) => (
                <div key={idx} className="flex justify-center items-center">
                  {renderStars(rating)}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="mt-8 text-gray-400 text-sm italic">
        Recomendamos: Mientras más invierta en protección, más duraderos serán
        los resultados
      </div>
    </div>
  );
};

export default CoatingComparison;
