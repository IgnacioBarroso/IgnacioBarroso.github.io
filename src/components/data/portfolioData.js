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
			'Análisis con IA la superficie de las vainas de los elementos combustibles para detectar fallas en la superficie y separar las NOK con un brazo robótico.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/soldaduras.jpg',
		title: 'Supervisión de soldaduras',
		skills: ['Python', 'Colab', 'Qt', 'OpenCV', 'Tensorflow', 'PyTorch', 'Windows'],
		descripcion:
			'Análisis con varios modelos de IA para detectar y clasificar los defectos en las soldaduras de tapones de los elementos combustibles.',
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
			'Analisis con filtros complejos de OpenCV e IA para detectar, medir y clasificar fallas en las pastillas de uranio y separar las NOK con un brazo robótico.',
		demoURL: '',
		repoURL: '',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/full-ret.png',
		title: 'RAG LangChain',
		skills: ['Python', 'Ubuntu', 'Colab', 'Langchain'],
		descripcion:
			'RAG basado en LangChain arquitectura Parent Retriever para la generación de respuestas en base a varios documentos .pdf previamente cargados.',
		demoURL: 'https://github.com/IgnacioBarroso/RAG-project/archive/refs/heads/master.zip',
		repoURL: 'https://github.com/IgnacioBarroso/RAG-project',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/pastillas.jpg',
		title: 'Python Offensive Tools',
		skills: ['Python', 'Ubuntu', 'Docker'],
		descripcion:
			'Conjunto de herramientas ofensivas en Python para realizar ataques de fuerza bruta, sniffing, escaneo de puertos, malware, etc.',
		demoURL: 'https://github.com/IgnacioBarroso/Python-Offensive-Tools/archive/refs/heads/master.zip',
		repoURL: 'https://github.com/IgnacioBarroso/Python-Offensive-Tools',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/pastillas.jpg',
		title: 'ETL/Analytics - Bs.As. Crime',
		skills: ['Python', 'Colab', 'Ubuntu'],
		descripcion:
			'Proyecto de ETL y análisis de datos de crimen en Buenos Aires, Argentina. Se realiza la extracción, transformación y carga de los datos, y se realiza un análisis exploratorio de los mismos.',
		demoURL: 'https://github.com/IgnacioBarroso/BsAs-CrimeData-Analysis/archive/refs/heads/master.zip',
		repoURL: 'https://github.com/IgnacioBarroso/BsAs-CrimeData-Analysis',
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
	SciKit: 'skill-icons:scikitlearn-dark',
	Langchain: 'simple-icons:langchain',
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
