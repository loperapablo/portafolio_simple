import { Fragment } from 'react';
import Layout from '../components/Layout';
import {
	skills,
	experiences,
	projects,
} from '../profile';

const Home = () => {
	return (
		<Layout>
			<header className='row'>
				<div className='row border-bottom'>
					<div className='col-md-8'>
						<div className='card card-body bg-light border-0 '>
							<h1>PABLO LOPERA</h1>

							<h5>
								DESARROLLADOR DE SOFTWARE Y
								DISEÑADOR GRÁFICO
							</h5>
						</div>
					</div>
					<div className='col-md-4 btn-contacto'>
						<a
							className='btn btn-warning'
							href='mailto:pablolope8@gmail.com'
						>
							Contáctame
						</a>
					</div>
				</div>
				<div className='row py-2 '>
					<div className='col-md-4'>
						<div className='card border-0'>
							<div className='card-body'>
								<h2>HABILIDADES</h2>

								{skills.map(
									(
										{ skill, percentage },
										i
									) => (
										<div
											className='py-2'
											key={i}
										>
											<div className='row'>
												<p className='col-md-4'>
													{skill}
												</p>
												<div className='progress col-md-8'>
													<div
														className='progress-bar'
														role='progressbar'
														style={{
															width: `${percentage}%`,
														}}
														aria-valuenow='50'
														aria-valuemin='0'
														aria-valuemax='100'
													></div>
												</div>
											</div>
										</div>
									)
								)}
							</div>
						</div>
					</div>
					<div className='col-md-8'>
						<div className='card border-0'>
							<div className='card-body'>
								<h2>EXPERIENCIA LABORAL</h2>
								{experiences.map(
									(experience, i) => (
										<div
											className='row py-2'
											key={i}
										>
											<div className='col-md-4'>
												<h3>
													{experience.fechas}
												</h3>
												<h5>
													{experience.empresa}
												</h5>
											</div>
											<div className='col-md-8'>
												<h4 className='bg-primary p-1 text-light'>
													{experience.title}
												</h4>
												{
													experience.description
												}
											</div>
										</div>
									)
								)}
							</div>
						</div>
					</div>
				</div>
				<div className='row'>
					<div className='col-md-12'>
						<div className='card card-body bg-primary'>
							<div className='row'>
								<div className='col-md-12'>
									<h1 className='text-center text-light'>
										Portafolio
									</h1>
								</div>
								{projects.map((project, i) => (
									<div
										className='col-md-4 py-2'
										key={i}
									>
										<div className='card h-100'>
											<div className='overflow'>
												<img
													src={project.image}
													alt=''
													className='card-img-top'
												/>
											</div>
											<div className='card-body'>
												<h3>{project.name}</h3>
												<p>
													{project.description}
												</p>
												<a
													href={project.enlace}
													className='btn btn-outline-dark'
													target={'_blank'}
												>
													Ver más
												</a>
											</div>
										</div>
									</div>
								))}
							</div>
							<h5
								className='text-light text-center pt-3
							'
							>
								Sección en construcción
							</h5>
						</div>
					</div>
				</div>
			</header>
		</Layout>
	);
};

export default Home;
