import { useState } from "react";

interface CarouselProps {
  images: string[];
}

const PortfolioCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((index - 1 + images.length) % images.length);
  const next = () => setIndex((index + 1) % images.length);

  return (
    <div className="relative w-full h-64">
      <img src={images[index]} alt="" className="w-full h-full object-cover rounded" />
      <button onClick={prev} className="carousel-btn left-2">
        ◀
      </button>
      <button onClick={next} className="carousel-btn right-2">
        ▶
      </button>
    </div>
  );
};

export default PortfolioCarousel;
