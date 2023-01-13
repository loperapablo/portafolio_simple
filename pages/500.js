import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const custom500 = () => {
	return (
		<Layout>
			<div className='text-center'>
				<h3>500</h3>
				<p>
					Error del servidor, vuelve al{' '}
					<Link href='/' legacyBehavior>
						<a>Home</a>
					</Link>
				</p>
			</div>
		</Layout>
	);
};

export default custom500;
