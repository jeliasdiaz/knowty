import { Link } from "react-router-dom"

const BlogCard = ({ title, content, to, img }) => {
    return (
        <div data-aos="fade-up" data-aos-duration="700" data-aos-once="true">
            <div className="blogCard ownShadow" >
                <Link to={to} className="d-flex text-decoration-none">
                    <img src={`/img/${img}`} alt="Card img" className="blogCardImg" />
                    <div className="blogCardText">
                        <h4 className="blogCardTitle">{title}</h4>
                        <p>{content}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BlogCard