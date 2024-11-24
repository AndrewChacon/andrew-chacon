import './Hero.css';
// &ensp;

const Hero = () => {
	return (
		<div className='hero'>
			<p data-text='ANDREW' className='glitch hero-title'>
				ANDREW
			</p>
			<p data-text='CHACON_' className='glitch hero-title bottom'>
				CHACON_
			</p>
			<h1 className='hero-desc'>
				Im just a chill guy that low key doesnt give a fuck and i make
				websites on the on my free time
			</h1>

			<a
				href='https://github.com/AndrewChacon'
				className='hero-button'
				target='_blank'
				rel='noopener noreferrer'>
				Github_
			</a>
		</div>
	);
};

export default Hero;
