import BlogCard from "../../components/BlogCard"

const Blog = () => {
    return (
        <div className="blogContainer">
            <img src="/img/waveThree.svg" alt="" />
            <div className="containerCards">
                <BlogCard title="¿Sueles olvidar lo que aprendiste?" content="Entra aquí para aprender la mejor forma de recordar." />
            </div>
        </div>
    )
}

export default Blog