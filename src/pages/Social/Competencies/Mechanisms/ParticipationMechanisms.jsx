import { mechanismItems } from '.'
import { ContentsTable, SectionTitle, TopWave } from '../../../../components'

export const ParticipationMechanisms = () => {
	return (
		<div className='homeCard'>
			<TopWave />
			<SectionTitle title='Mecanismos de participación' />
			<ContentsTable items={mechanismItems} />

			<div
				className='subjectCard mb-5 ownShadow'
				data-aos='fade-up'
				data-aos-duration='700'
				data-aos-once='true'
			>
				<p>
					"Son mecanismos de participación del pueblo en ejercicio de su
					soberanía: el voto, el plebiscito, el referendo, la consulta popular,
					el cabildo abierto, la iniciativa legislativa y la revocatoria del
					mandato…" Artículo 103 de la constitución política de Colombia 1991.
				</p>
				<hr />
				<div>
					<h4>El voto</h4>
					<p>
						Es un Mecanismo de Participación Ciudadana y a la vez un derecho y
						deber ciudadano (este último se encuentra plasmado en Artículo 258)
						que permite a estos participar en la toma de decisiones políticas.
						De este modo, es el mecanismo por el cual expresamos nuestra
						voluntad y elegimos a nuestros representantes de gobierno,
						dependiendo del nivel se pueden escoger: A nivel nacional, el
						presidente, senadores y representantes a la cámara. A nivel
						departamental, gobernadores y diputados. Finalmente, a nivel
						municipal y distrital, los alcaldes, concejales y ediles. Además,
						sirve como medio para la realización de los otros Mecanismos de
						Participación Ciudadana instituidos por la Constitución.
					</p>
					<p>
						<b>Ejemplo:</b> Las elecciones del año 2023 a nivel municipal en el
						mes de octubre en la ciudad de Barranquilla, ganó Alex Char como
						alcalde y a nivel departamental en el Atlántico quedó como
						gobernador Eduardo Verano.
					</p>
				</div>
				<hr />
				<div>
					<h4>Revocatoria de mandato</h4>
					<p>
						La revocatoria de mandato es el derecho que poseen los ciudadanos
						para remover del cargo a aquellas personas que han elegido
						popularmente para representarlos en la alcaldía y gobernación,
						cuando se encuentren inconformes con su mandato.
						<br /> <br />
						Los candidatos a ser elegidos popularmente como gobernadores y
						alcaldes deberán presentar e inscribir un programa de gobierno ante
						las autoridades electorales respectivas, esto se relaciona con el
						concepto de voto programático, con este, la Constitución de 1991
						obliga a los gobernantes a cumplir sus promesas electorales.
						<br /> <br />
						El programa se convierte en la base para la elaboración del plan de
						desarrollo y constituye el indicador clave para que la ciudadanía
						evalúe la gestión realizada por parte de alcaldes y gobernadores.
						<br />
						<br />
						De este modo, en el caso de que la gestión del mandatario sea
						deficiente en lo concerniente al programa de gobierno inscrito, se
						brinda a los ciudadanos la posibilidad de removerlos del cargo.
					</p>
					<h5>1. Requisitos</h5>
					<ul>
						<li>
							Haber transcurrido al menos un año contado a partir de la posesión
							del mandatario.{' '}
						</li>
						<li>
							Presentar por escrito ante la Registraduría Nacional la solicitud
							de convocatoria a pronunciamiento popular para revocar el mandato,
							acompañada de un número de firmas no inferior al 40% del total de
							votos que obtuvo el gobernante al ser elegido que se pretende
							revocar.
						</li>
					</ul>
					<h5>2. Procedimiento</h5>
					<ul>
						<li>
							Se presenta la solicitud ante el Registrador de la correspondiente
							entidad territorial y se revisa y aprueba los apoyos consignados
							por la ciudadanía en las firmas.
						</li>
						<li>
							Los ciudadanos del respectivo municipio o departamento serán
							convocados a la votación de la revocatoria dentro de un plazo no
							superior a 2 meses contados a partir de la certificación de la
							Registraduría.{' '}
						</li>
					</ul>
					<h5>3. Votación y aprobación de la revocatoria</h5>
					<p>
						Para que prospere la iniciativa de revocatoria del mandato se
						requieren dos cosas:{' '}
					</p>
					<ol>
						<li>
							Por lo menos cuarenta por ciento (40%) de la votación válida total
							del día en que se eligió el mandatario debe participar en la
							revocatoria del respectivo.
						</li>
						<li>
							Pronunciamiento a favor de la mitad más uno (50%+1) de los votos
							de los ciudadanos que participen en la respectiva convocatoria.
						</li>
					</ol>
					<br />
					<p>
						<b>Ejemplo:</b>
					</p>
					<ul>
						<li>
							<i>Revocatoria de mandato al alcalde de Popayán en 2015:</i> El
							alcalde Carlos Alberto Suarez Chacón fue revocado de su cargo tras
							una votación en la que el 53% de los ciudadanos votaron a favor
							debido al incumplimiento del programa de gobierno y la falta de
							transparencia del Alcalde.
						</li>
						<li>
							<i>
								<b>Intento</b> de revocatoria de mandato al alcalde de Medellín
								en 2023:
							</i>{' '}
							Daniel Quintero Calle pero la iniciativa no tuvo éxito, aunque
							hubieran pruebas desfavorecedoras hacia su mandato y el número de
							firmas necesarias se superará, la participación en la votación fue
							inferior al 40%{' '}
						</li>
					</ul>
				</div>
				<hr />
				<div>
					<h4>Iniciativa Popular</h4>
					<p>
						Oportunidad que tiene el pueblo de presentar proyectos de ley para
						que el congreso u otra corporación pública lo estudie y determine si
						lo aprueba o la rechaza. Existen dos tipos de iniciativas:
					</p>
					<p>
						Se habla de iniciativas legislativas cuando se refiere a leyes o
						actos legislativos que le conciernen por su carácter nacional al
						Congreso de la República. Y de iniciativas normativas aquellas que
						se refieren a actos administrativos que les corresponde expedir a
						Corporaciones Públicas de orden territorial: asambleas
						departamentales, concejos municipales y distritales.
					</p>
					<h5>Requisitos</h5>
					<p>
						{' '}
						Participación de un número de ciudadanos equivalente al 0.05% de la
						población electoral nacional para su presentación ante el Congreso
						de la República.En el caso de los gobiernos regionales o locales se
						requiere del 0.3% de su correspondiente electorado.
					</p>

					<p>
						<b>Ejemplo:</b> Prohibición del Fracking en 2015. Se presentó una
						iniciativa popular ante el congreso de la República para prohibir la
						exploración y explotación de yacimientos no convencionales mediante
						la técnica de frankenstein en todo el territorio nacional. Esta
						iniciativa logró recolectar más de 1.3 millones de firmas superando
						el 5% del censo electoral requerido. Sin embargo, el proyecto fue
						archivado.
					</p>
				</div>
				<hr />
				<div>
					<h4>Plebiscito:</h4>
					<p>
						Es la convocatoria que hace al pueblo el Presidente de la República,
						con la firma de todos los Ministros y previo concepto favorable del
						Congreso de la República, para legitimar una forma de gobierno,
						respaldar o rechazar una decisión del ejecutivo que afecte al Estado
						y a la sociedad.
						<br />
						<br />
						El Congreso de la República deberá pronunciarse sobre la
						conveniencia de la convocatoria a plebiscito. Cuando dentro del mes
						siguiente a la fecha en la que el Presidente de la República haya
						informado sobre su decisión de realizar un plebiscito, ninguna de
						las dos cámaras por la mayoría simple haya manifestado su rechazo,
						el Presidente podrá convocarlo.
						<br />
						<br />
						<small>
							<b>Nota:</b>Se requiere la mayoría de votos del censo electoral
							para la validación del mecanismo.{' '}
						</small>
					</p>
					<p>
						<b>Ejemplo:</b>
					</p>
					<ul>
						<li>
							<i>Plebiscito de 1957:</i> convocado por la junta militar de
							gobierno tras el derrocamiento del presidente Gustavo Rojas
							Pinilla. Este plebiscito aprobó la creación del Frente Nacional.
						</li>
						<li>
							En el 2016, el presidente Juan Manuel Santos instauró el
							plebiscito para legitimar el acuerdo de paz firmado con las Farc
							(en este gano el No, es decir, que la mayoría de la población
							colombiana no estaba de acuerdo con la realización de este
							acuerdo).
						</li>
					</ul>
				</div>
				<hr />
				<div>
					<h4>Referendo</h4>
					<p>
						Puede ser de origen ciudadano o de autoridad pública para convocar
						al pueblo a la aprobación o rechazo de un proyecto de norma jurídica
						o derogue o no de una norma ya vigente. El referendo puede ser
						nacional, regional, departamental, distrital, municipal o local.
						Además, este mecanismo es el único que tiene una doble connotación
						debido a que es un mecanismo de participación y reforma de la
						constitución.
					</p>
					<p>
						Un referendo derogatorio es sometimiento a estudio de un acto
						legislativo o de una ley, de en alguna de sus partes o en su
						totalidad, a consideración del pueblo para que éste decida si lo
						deroga o no. En cambio, un referendo aprobatorio es el sometimiento
						a estudio de un proyecto de acto legislativo o de una ley, de
						iniciativa popular que no haya sido adoptado por el Congreso, a
						consideración del pueblo para que éste decida si lo aprueba o lo
						rechaza, total o parcialmente.
					</p>
					<p>
						<small>
							<b>Notas:</b>
							1. Un referendo puede ser derogatorio* y aprobatorio 2.*Derogar:
							Dejar sin efecto una norma vigente. (Anular, rechazar)
						</small>
					</p>
				</div>
				<hr />
				<div>
					<h4>Consulta Popular</h4>
					<p>
						Es un mecanismo en el cual el presidente, el gobernador o alcalde
						puede convocar al pueblo para que responda una pregunta de carácter
						general sobre un tema de trascendencia nacional, departamental,
						distrital, municipal o local.
					</p>
					<p>
						<b>Ejemplo:</b> En el 2018, en el municipio de Fusagasugá en
						Cundinamarca, se preguntó a los habitantes: está usted de acuerdo si
						o no que en el municipio se realicen actividades de exploración,
						perforación y producción de hidrocarburos, fracking y minería a gran
						escala. En la cual ganó el No, con 39.175 votos.
					</p>
				</div>
				<hr />
				<div>
					<h4>Cabildo abierto</h4>
					<p>
						El Cabildo abierto es una reunión pública donde coinciden los
						concejos distritales, municipales o de las juntas administradoras
						locales (JAL), en la cual los habitantes pueden participar
						directamente con el fin de discutir asuntos de interés para la
						comunidad. El resultado es un informe con recomendaciones para la
						mejora o implementación de otros aspectos en proyectos de interés
						general.
					</p>
                    <p>
                        <b>Ejemplo:</b> Plan de desarrollo distrital (2024-2028) en la ciudad de Bogotá en el cual entre los participantes se encontraba Claudia Lopez (Alcalde de Bogotá periodo de 2020 a 2024), Concejo de Bogotá y ciudadanos de Bogotá, se comenzó con los principales aspectos del plan, seguida por la intervención de los ciudadanos en los cuales se expusieron inquietudes, preguntas y propuestas generando un debate entre los participante para poder concluir la reunión.     
                    </p>
				</div>
				<br />
				<img src="/img/mecanismosParticipacion.png" alt="Mecanismos de participación gráfico" className='w-100 rounded mx-auto d-block'/>
                <hr />
                <h5>Bibliografía</h5>
                <ul>
                    <li>Registro Nacional del Estado Civil. (Dakota del Norte). Iniciativa popular legislativa y normativa . Registro Nacional del Estado Civil. Recuperado el 4 de julio de 2024, de https://www.registraduria.gov.co/-Iniciativa-popular-legislativa-y-normativa-1349-.html</li>
                    <li>(N.d.). Org.Co. Retrieved July 4, 2024, from<br /><small>https://moe.org.co/wp-content/uploads/2017/07/<br />Libro_mecanismos_de_participaci<br />%C3%B3n_ciudadana_2012.pdf</small></li>
                    <li>(Nd-b). Gov.Co. Recuperado el 4 de julio de 2024, de <small>https://www.mincit.gov.co/ministerio<br />/normograma-sig/procesos-estrategicos/gestion-de-informacion-y-comunicacion/leyes/ley-134-de-1994.aspx#:~:text=El%20plebiscito<br />%20es%20el%20<br />pronunciamiento,C%2D180%20<br />de%201994).&text=%2F8.01.99</small>.</li>
                    <li>Registraduria general de la Nacion (2023). Histórico de consultas populares
                    https://www.registraduria.gov.co/<br />Historico-de-consultas-populares.html </li>
                    <li>Felipe, R. S. (2015). Voto programático y programas de gobierno en Colombia. https://repository.urosario.edu.co/<br />items/5db015ca-bdb6-405e-87a8-f9bf5dbd11f6  </li>
                </ul>
			</div>
		</div>
	)
}
