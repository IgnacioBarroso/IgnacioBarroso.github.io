/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/vainas.jpg',
		title: 'Análisis superficie de vainas',
		skills: ['Python', 'Colab', 'Qt', 'OpenCV', 'Tensorflow', 'PyTorch', 'Windows'],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/soldaduras.jpg',
		title: 'Supervisión de soldaduras',
		skills: ['Python', 'Colab', 'Qt', 'OpenCV', 'Tensorflow', 'PyTorch', 'Windows'],
		descripcion:
			' Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/pastillas.jpg',
		title: 'Detección de fallas en Uranio',
		skills: ['Python', 'Colab', 'OpenCV', 'Tensorflow', 'PyTorch', 'Docker', 'Ubuntu'],
		descripcion:
			'Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.Laboris ex laboris mollit esse fugiat aute cillum nostrud enim dolor sit. Reprehenderit et non nulla irure aute nostrud commodo aute.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
];

const skillIcons = {
	CSS: 'skill-icons:css-dark',
	Python: 'skill-icons:python-dark',
	HTML: 'skill-icons:html',
	Qt: 'skill-icons:qt-dark',
	PyTorch: 'skill-icons:pytorch-dark',
	Tensorflow: 'skill-icons:tensorflow-dark',
	Docker: 'skill-icons:docker',
	OpenCV: 'skill-icons:opencv-dark',
	Colab: 'devicon:googlecolab',
	Jupyter: 'devicon:jupyter-wordmark',
	Numpy: 'devicon:numpy',
	Ubuntu: 'skill-icons:ubuntu-dark',
	Windows: 'skill-icons:windows-dark',
	SciKit: 'skill-icons:scikitlearn-dark'
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
