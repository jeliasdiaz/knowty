import "./Footer.css"

export const Footer = () => {
  return (
    <footer>
      <div className="footerContent container">
        <div className="textFooter 	d-none d-md-block d-lg-block">
          <h1>Knowty</h1>
          <div className="d-flex">
            <div className="teamCard" data-aos="zoom-in" data-aos-duration="1000">
              <h4>Jose Díaz</h4>
              <p>Creador y líder del proyecto, programador de la página y creador de materiales para YouTube</p>
            </div>
            <div className="teamCard" data-aos="zoom-in" data-aos-duration="1000">
              <h4>Wilmar Fontalvo</h4>
              <p>Creador de videos del canal de YouTube y delegado principal de este</p>
            </div>
            <div className="teamCard" data-aos="zoom-in" data-aos-duration="1000">
              <h4>Yader Vega</h4>
              <p>Encargado del marketing de la página y proyecto, así como contribuidor del diseño de la misma</p>
            </div>
            <div className="teamCard" data-aos="zoom-in" data-aos-duration="1000">
              <h4>Mauricio Lopez</h4>
              <p>Principal encargado del marketing de la página y proyecto</p>
            </div>
            <div className="teamCard" data-aos="zoom-in" data-aos-duration="1000">
              <h4>David Cáceres</h4>
              <p>Encargado de la creación de videos para el canal de YouTube</p>
            </div>
          </div>
        </div>

        <div className="textFooter d-block d-sm-none">
          <h1>Knowty</h1>
          <div className="d-flex">
            <div className="teamCard" data-aos="zoom-in" data-aos-duration="1000">
              <h4>David Cáceres</h4>
              <p>Encargado de la creación de videos para el canal de YouTube</p>
            </div>
            <div className="teamCard" data-aos="zoom-in" data-aos-duration="1000">
              <h4>Wilmar Fontalvo</h4>
              <p>Creador de videos del canal de YouTube y delegado principal de este</p>
            </div>
          </div>
          <div>
            <div className="teamCardCenter" data-aos="zoom-in" data-aos-duration="1000">
              <h4>Jose Díaz</h4>
              <p>Creador y líder del proyecto, programador de la página y creador de materiales para YouTube</p>
            </div>
          </div>
          <div className="d-flex">
            <div className="teamCard" data-aos="zoom-in" data-aos-duration="1000">
              <h4>Yader Vega</h4>
              <p>Encargado del marketing del proyecto, así como contribuidor del diseño de la página</p>
            </div>
            <div className="teamCard" data-aos="zoom-in" data-aos-duration="1000">
              <h4>Mauricio Lopez</h4>
              <p>Principal encargado del marketing de la página y proyecto</p>
            </div>
          </div>
        </div>

        <div className="moreInformation" data-aos="zoom-in-down" data-aos-duration="1200">
          <h2>¿Quieres saber más del proyecto?</h2>
          <div className="flex-1 justify-content-evenly">
            <div className="mx-2">
              <a href="mailto:formuapp2022@gmail.com"><i className='bx bxl-gmail bx-lg'></i></a>
            </div>
            <div>
              <a href="https://www.youtube.com/channel/UCS96F-FxnqVtHP7_TEVmmjg" className="text-white" target="_blank" rel="noreferrer"><i className='bx bxl-youtube bx-lg'></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
