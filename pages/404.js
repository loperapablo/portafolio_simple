import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';

const custom404 = () => {
	return (
		<Layout>
			<div className='text-center'>
				<h3>404</h3>
				<p>
					Esta página no existe, vuelve al{' '}
					<Link href='/' legacyBehavior>
						<a>Home</a>
					</Link>
				</p>
			</div>
		</Layout>
	);
};

export default custom404;
