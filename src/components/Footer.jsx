import { Link } from 'react-router-dom'
import '../css/Footer.css'
import { MembersCard } from './'
import { AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import { BsChatSquareTextFill } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { HiCode } from 'react-icons/hi'
import { ContactForm } from './ContactForm'

export const Footer = () => {
	const date = new Date()
	const currentYear = date.getFullYear()

	return (
		<footer className='footer'>
			<div className='footerContent container'>
				<div className='textFooter '>
					<h1>Knowty</h1>
					<div className='membersContainer'>
						<MembersCard
							name='José Elías Díaz'
							description='Creador del proyecto, página y encargado del canal YouTube.'
							icon={<HiCode size={34} />}
							iconTwo={<AiFillYoutube size={36} />}
							optionalLink='https://jeliasdiaz.netlify.app/'
							delay={0}
						/>

						<MembersCard
							name='Wilmar Fontalvo'
							description='Creador de videos. Encargado de animar y editar.'
							icon={<AiFillYoutube size={36} />}
							delay={200}
						/>

						<MembersCard
							name='David Cáceres'
							description='Encargado de la creación de videosy explicaciones para la página.'
							icon={<AiFillYoutube size={36} />}
							delay={400}
						/>

						<MembersCard
							name='Danna Sanchez'
							description='Encargada del area de humanidades dentro de la página.'
							icon={<BsChatSquareTextFill size={34} />}
							delay={600}
						/>

						<MembersCard
							name='Enrique Peinado'
							description='Encargado de las explicaciones de la página.'
							icon={<BsChatSquareTextFill size={34} />}
							delay={800}
						/>
						<MembersCard
							name='Yader Vega'
							description='Encargado de la edición de videos.'
							icon={<AiFillYoutube size={36} />}
							delay={1000}
						/>
					</div>
				</div>
			</div>

			<ContactForm />

			<div className='footerContainer'>
				<div className='d-flex justify-content-between'>
					<div className='mb-3'>
						<h3 className='contactUs'>¡Nuestras redes!</h3>
						<div className='d-flex gap-2 '>
							<a
								href='mailto:knowtyinfo@gmail.com'
								target='_blank'
								rel='noreferrer'
								className='footerIcons ownShadow-sm'
							>
								<SiGmail size={30} className='contactIcon' />
							</a>
							<a
								href='https://www.youtube.com/@KnowtyChannel'
								target='_blank'
								rel='noreferrer'
								className='footerIcons ownShadow-sm'
							>
								<AiFillYoutube size={30} className='contactIcon' />
							</a>
							<a
								href='https://www.instagram.com/knowtyland/'
								target='_blank'
								rel='noreferrer'
								className='footerIcons ownShadow-sm'
							>
								<AiFillInstagram size={30} className='contactIcon' />
							</a>
						</div>
					</div>

					<div className='d-flex footerSecondFlex'>
						<div className='creditos'>
							<h5 className='sectionTitle'>Extra</h5>
							<div className='sectionsLinks'>
								<Link to='/iconos' className='d-block text-black'>
									Iconos
								</Link>
								<Link to='/info' className='d-block text-black'>
									Nosotros
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className='d-flex border-top copyright'>
					<p>Copyright &copy; 2022 - {currentYear} Knowty.</p>
				</div>
			</div>
		</footer>
	)
}
