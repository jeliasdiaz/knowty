import BlogCard from "../../components/BlogCard"

const Blog = () => {
    return (
        <div className="blogContainer">
            <img src="/img/waveThree.svg" alt="" />
            <div className="containerCards">
                <BlogCard title="La mejor forma de recordar" content="Sueles olvidar lo que aprendiste? Gracias al método que verás, podrás mejorar esta habilidad" to="/repeticion-espaciada" />
            </div>
        </div>
    )
}

export default Blog