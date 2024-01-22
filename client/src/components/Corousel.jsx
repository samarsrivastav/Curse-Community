import { Carousel } from "@material-tailwind/react";
import img1 from '../assets/images/corousel/c-1.png'
import img2 from '../assets/images/corousel/c-2.png'
 function CarouselComponent() {
  return (
    <Carousel
      className="rounded-xl "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2 ">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src={img1}
        alt="image 1"
        className="h-100 w-full "
      />
      <img
        src={img2}
        alt="image 2"
        className="h-100 w-full"
      />
      
    </Carousel>
  );
}
export default CarouselComponent