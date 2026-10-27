import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#111111] pt-6 px-8">
      <div className="w-[90%] max-w-7xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="
            flex
            items-center
            gap-2
            text-white
            text-sm
            hover:text-[#D8FF2F]
            transition-colors
            duration-300
          "
        >
          <FaArrowLeft />
          Back
        </button>
      </div>
    </section>
  );
};

export default BackButton;