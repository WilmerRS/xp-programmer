import PrimaryButton from "../shared/button/PrimaryButton";
import SecondaryButton from "../shared/button/SecondaryButton";
import GradientText from "../shared/text/GradientText";

const CreateProjectsTitle = () => {
  return (
    <section>
      <header className="max-w-lg">
        <h1 className="text-3xl font-bold text-black-500">
          Bienvenido a la creación de un
        </h1>
        <p>
          <GradientText>Nuevo Proyecto</GradientText>
        </p>
      </header>
    </section>
  );
};

export default CreateProjectsTitle;
