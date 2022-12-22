import "./Footer.css"

export const Footer = () => {
  return (
    <footer>
      <div className="footerContent container">
        <div className="textFooter 	d-none d-md-block d-lg-block">
          <h1>Knowty</h1>
          <div className="d-flex">
            <div className="teamCard" data-aos="zoom-in-down" data-aos-duration="1400">
              <h4>Jose Díaz</h4>
              <p>Creador del proyecto, programador de la página y creador de materiales para YouTube</p>
              <i class='bx bxl-dev-to bx-md text-black position-absolute bottom-0 end-0 mb-2'></i>
              <i class='bx bxl-youtube bx-md text-black position-absolute bottom-0 end-0 mb-2 me-5' ></i>
            </div>
            <div className="teamCard" data-aos="zoom-in-down" data-aos-duration="1400">
              <h4>Wilmar Fontalvo</h4>
              <p>Creador de videos y encargado principal de Youtube</p>
              <i class='bx bxl-youtube bx-md text-black position-absolute bottom-0 end-0 mb-2' ></i>

            </div>
            <div className="teamCard" data-aos="zoom-in-down" data-aos-duration="1400">
              <h4>Yader Vega</h4>
              <p>Encargado del marketing y contribuidor al diseño de la página</p>
              <i class='bx bxs-user-voice bx-md text-black position-absolute bottom-0 end-0 mb-2' ></i>
            </div>
            <div className="teamCard" data-aos="zoom-in-down" data-aos-duration="1400">
              <h4>Mauricio Lopez</h4>
              <p>Principal encargado del marketing de la página y proyecto</p>
              <i class='bx bxs-user-voice bx-md text-black position-absolute bottom-0 end-0 mb-2' ></i>
            </div>
            <div className="teamCard" data-aos="zoom-in-down" data-aos-duration="1400">
              <h4>David Cáceres</h4>
              <p>Encargado de la creación de videos para el canal de YouTube</p>
              <i class='bx bxl-youtube bx-md text-black position-absolute bottom-0 end-0 mb-2' ></i>
            </div>
          </div>
        </div>

        <div className="textFooter d-block d-sm-none">
          <h1>Knowty</h1>
          <div className="d-flex">
            <div className="teamCard" data-aos="zoom-in-down" data-aos-duration="1400">
              <h4>David Cáceres</h4>
              <p>Encargado de la creación de videos para el canal de YouTube</p>
              <i class='bx bxl-youtube bx-sm text-black position-absolute bottom-0 end-0 mb-2' ></i>
            </div>
            <div className="teamCard" data-aos="zoom-in-down" data-aos-duration="1400">
              <h4>Wilmar Fontalvo</h4>
              <p>Creador de videos y encargado principal de Youtube</p>
              <i class='bx bxl-youtube bx-sm text-black position-absolute bottom-0 end-0 mb-2' ></i>
            </div>
          </div>
          <div>
            <div className="teamCardCenter" data-aos="zoom-in-down" data-aos-duration="1400">
              <h4>Jose Díaz</h4>
              <p>Creador del proyecto, programador de la página y creador de materiales para YouTube</p>
              <i class='bx bxl-dev-to bx-sm text-black position-absolute bottom-0 end-0 mb-2'></i>
              <i class='bx bxl-youtube bx-sm text-black position-absolute bottom-0 end-0 mb-2 me-5' ></i>
            </div>
          </div>
          <div className="d-flex">
            <div className="teamCard" data-aos="zoom-in-down" data-aos-duration="1400">
              <h4>Yader Vega</h4>
              <p>Encargado del marketing y contribuidor al diseño de la página</p>
              <i class='bx bxs-user-voice bx-sm text-black position-absolute bottom-0 end-0 mb-2' ></i>
            </div>
            <div className="teamCard" data-aos="zoom-in-down" data-aos-duration="1400">
              <h4>Mauricio Lopez</h4>
              <p>Principal encargado del marketing de la página y proyecto</p>
              <i class='bx bxs-user-voice bx-sm text-black position-absolute bottom-0 end-0 mb-2' ></i>
            </div>
          </div>
        </div>

        <div className="moreInformation" data-aos="fade-down" data-aos-duration="1400">
          <h2>¿Quieres saber más del proyecto?</h2>
          <div className="flex-1 justify-content-evenly">
            <div className="mx-2">
              <i className='bx bxl-gmail bx-lg '></i>
              <p className="boldFooterText">formuapp2022@gmail.com</p>
            </div>
            <div>
              <i className='bx bxl-youtube bx-lg'></i><br />
              <a href="https://www.youtube.com/@formuapp1757/videos" className="text-dark boldFooterText" target="_blank" rel="noreferrer">FormuApp</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
