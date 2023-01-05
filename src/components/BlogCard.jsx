import { Link } from "react-router-dom"

const BlogCard = ({ title, content, to }) => {
    return (
        <div className=" blogCard ownShadow" data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
            <Link to={to} className="d-flex text-decoration-none">
                <img src="/img/consejos.jpg" alt="" className="blogCardImg" />
                <div className="blogCardText">
                    <h4>{title}</h4>
                    <p>{content}</p>
                </div>
            </Link>
        </div>
    )
}

export default BlogCard