import Navbar from './Navbar';

const Layout = ({ children }) => {
	return (
		<>
			{/* <Navbar /> */}
			<main className='container py-4'>
				{children}
			</main>
			<footer className='bg-primary text-light text-center'>
				<div className='container p-4'>
					<h1 className='text-light'>
						&copy; Pablo Lopera - Portafolio
					</h1>
					<p>All rights reserved</p>
				</div>
			</footer>
		</>
	);
};

export default Layout;
