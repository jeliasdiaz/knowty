import { Link } from "react-router-dom";

export const NoResultCard = () => {
  return (
    <div className="dataResult" data-aos="fade-up" data-aos-duration="500">
      <Link to="/busqueda" className="text-decoration-none" key="Not found">
        <div className="dataItem shadow d-flex align-items-center p-3 my-3">
          <img
            src="/img/notFound.png"
            alt="Ningún resultado"
            className="CardImg pe-3"
          />
          Ningún resultado
        </div>
      </Link>
    </div>
  );
};
