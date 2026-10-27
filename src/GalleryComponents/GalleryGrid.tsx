import img1 from "../assets/gallery/img1.png";
import img2 from "../assets/gallery/img2.png";
import img3 from "../assets/gallery/img3.png";
import img4 from "../assets/gallery/img4.png";
import img5 from "../assets/gallery/img5.png";
import img6 from "../assets/gallery/img6.png";
import img7 from "../assets/gallery/img7.png";
import img8 from "../assets/gallery/img8.png";
import img9 from "../assets/gallery/img9.png";
import img10 from "../assets/gallery/img10.png";
import img11 from "../assets/gallery/img11.png";
import img12 from "../assets/gallery/img12.png";
import img13 from "../assets/gallery/img13.png";
import img14 from "../assets/gallery/img14.png";
import img15 from "../assets/gallery/img15.png";
import img16 from "../assets/gallery/img16.png";
import img17 from "../assets/gallery/img17.png";
import img18 from "../assets/gallery/img18.png";
import img19 from "../assets/gallery/img19.png";
import img20 from "../assets/gallery/img20.png";
import img21 from "../assets/gallery/img21.png";
import img22 from "../assets/gallery/img22.png";
import img23 from "../assets/gallery/img23.png";
import img24 from "../assets/gallery/img24.png";
import img25 from "../assets/gallery/img25.png";
import img26 from "../assets/gallery/img26.png";
import img27 from "../assets/gallery/img27.png";
import img28 from "../assets/gallery/img28.png";
import img29 from "../assets/gallery/img29.png";
import img30 from "../assets/gallery/img30.png";


const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30
];

const GalleryGrid = () => {
  return (
    <section className="bg-[#111111] py-10 px-8">
      <div className="w-[90%] max-w-7xl mx-auto">

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">

          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="
                mb-4
                w-full
                rounded-lg
                object-cover
                cursor-pointer
                transition-transform
                duration-300
                hover:scale-105
              "
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default GalleryGrid;