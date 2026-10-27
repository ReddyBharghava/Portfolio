import Navbar from "../HomePage/Navbar";
import BackButton from "../ProjectDescriptionComponents/BackButton";
import Todo from "../ProjectDescriptionComponents/TodoInfo";
import FeaturesSection from "../ProjectDescriptionComponents/FeaturesSection";
import FooterSection from "../AboutComponents/FooterSection";

const TodoDiscription = () => {
  return (
    <div className="min-h-screen bg-[#111111]">
      <Navbar activePage="projects" />

      <main>
        <BackButton />

        <Todo />

        <FeaturesSection />
      </main>

      <FooterSection />
    </div>
  );
};

export default TodoDiscription;