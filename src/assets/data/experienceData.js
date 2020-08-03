import ItiImage from '../images/iti.png';
import VambImage from '../images/v.jpeg';
import IticImage from '../images/itic.jpeg';
import InnovSqrImage from '../images/is.png';
import CyberVisImage from '../images/cv.png';
import skillData from './skillsData';
// import NhaImage from '../images/nha.png';

const experience = [
	{
		title: 'Software Engineer',
		image: ItiImage,
		company: 'Intuitive Technology Innovations',
		type: 'Fulltime',
		location: 'Sydney, Australia',
		current: true,
		// comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis auctor felis nec varius. Curabitur.",
		techStack: [skillData.technologies["C#"], skillData.technologies.JavaScript],
		dates: {
			start: 'October 2019',
			end: null,
		}
	},
	{
		title: 'Software Engineer',
		image: VambImage,
		company: 'vAmbition',
		type: 'Fulltime',
		location: 'Sydney, Australia',
		current: false,
		// comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis auctor felis nec varius. Curabitur.",
		techStack: [skillData.technologies.AWS, skillData.technologies.JavaScript],
		dates: {
			start: 'October 2019',
			end: 'March 2020',
		}
	},
	{
		title: 'Software Developer Intern',
		image: IticImage,
		company: 'ITIC - IT Training & Resourcing',
		type: 'Internship',
		location: 'Sydney, Australia',
		current: false,
		// comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis auctor felis nec varius. Curabitur.",
		techStack: [skillData.technologies.JavaScript],
		dates: {
			start: 'August 2019',
			end: 'October 2019',
		}
	},
	{
		title: 'Android Developer',
		image: InnovSqrImage,
		company: 'Innovation Square Pvt Ltd',
		type: 'Fulltime',
		location: 'Islamabad, Pakistan',
		current: false,
		// comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis auctor felis nec varius. Curabitur.",
		techStack: [skillData.technologies.Java, skillData.technologies.PHP],
		dates: {
			start: 'January 2017',
			end: 'July 2019',
		}
	},
	{
		title: 'PHP Web Developer',
		image: CyberVisImage,
		company: 'CyberVision International',
		type: 'Fulltime',
		location: 'Islamabad, Pakistan',
		current: false,
		// comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis auctor felis nec varius. Curabitur.",
		techStack: [skillData.technologies.PHP],
		dates: {
			start: 'August 2016',
			end: 'December 2016',
		}
	},
	// {
	// 	title: 'PHP Developer Intern',
	// 	image: NhaImage,
	// 	company: 'National Highway Authority',
	// 	type: 'Internship',
	// 	location: 'Islamabad, Pakistan',
	// 	current: false,
		// comments: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sagittis auctor felis nec varius. Curabitur.",
	// 	techStack: [skillData.technologies.PHP],
	// 	dates: {
	// 		start: 'September 2015',
	// 		end: 'September 2015',
	// 	}
	// },
];

export default experience;
