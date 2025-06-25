import Marquee from "react-fast-marquee";

const CarouselUrls = [
    "/carousel1.webp",
    "/carousel2.webp",
    "/carousel3.webp",
    "/carousel4.webp"
];

const Carousel: React.FC = () => {

    return (
        <Marquee
            speed={30}
            gradient={true}
            gradientColor="#ffffff"
            gradientWidth={5}
            className="py-8 overflow-y-hidden"
            pauseOnHover={true}
            autoFill={true}

        >
            {CarouselUrls.map((url, index) => {
                return (
                    <div key={index} className="flex-shrink-0">
                        <img
                            src={url}
                            alt={`Carousel Image ${index + 1}`}
                            className={`h-60 xl:h-72 object-cover rounded-lg shadow-lg mx-4 ${index % 2 === 0 ? 'mt-16' : ''}`}
                        />
                    </div>
                );
            })}

        </Marquee>
    );
}

export default Carousel;