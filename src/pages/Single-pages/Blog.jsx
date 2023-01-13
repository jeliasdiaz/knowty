import BlogCard from "../../components/BlogCard"
import TopWave from "../../components/TopWave"

const Blog = () => {
    return (
        <div className="blogContainer">
            <TopWave />
            <div className="containerCards">
                <BlogCard title="¿Sueles olvidar lo que aprendiste?" content="Entra aquí para aprender la mejor forma de recordar." />
            </div>
        </div>
    )
}

export default Blog