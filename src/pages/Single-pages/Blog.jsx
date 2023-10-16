import { BlogCard, TopWave } from "../../components/";

export const Blog = () => {
  return (
    <div className="blogContainer">
      <TopWave />
      <div className="containerCards">
        <BlogCard
          title="¿Sueles olvidar lo que aprendiste?"
          content="Entra aquí para aprender la mejor forma de recordar."
          to="/repeticion-espaciada"
          img="consejos.jpg"
        />
        <BlogCard
          title="Recursos que todo estudiante debería conocer"
          content="Descubre las mejores herramientas para estudiantes."
          to="/recursos-para-estudiantes"
          img="blogTwo.jpg"
        />
      </div>
    </div>
  );
};
