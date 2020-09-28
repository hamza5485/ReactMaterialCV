import ItiImage from '../images/iti.png';
import VambImage from '../images/v.jpeg';
import IticImage from '../images/itic.jpeg';
import InnovSqrImage from '../images/is.png';
import CyberVisImage from '../images/cv.png';
import skillData from './skillsData';

const experience = [
	{
		title: 'Software Engineer',
		image: ItiImage,
		company: 'Intuitive Technology Innovations',
		type: 'Fulltime',
		location: 'Sydney, Australia',
		current: true,
		comments: [
			"Writing integration services for telephony services",
			"Providing feature enrichment for partner products",
			"Creating and deploying functional prototypes",
		],
		techStack: [
			skillData.technologies.Cloud,
			skillData.technologies.Telephony,
			skillData.technologies["C#"],
			skillData.technologies.JavaScript],
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
		comments: [
			"Devlivered MVP ahead of time which was approved",
			"Wrote 90% of code base and configured AWS architecture for deployment",
			"Worked on a global virtual internship platform",
		],
		techStack: [skillData.technologies.Cloud, skillData.technologies.JavaScript],
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
		comments: [
			"Hired as full time developer in child company based on performance as intern",
			"Worked on frontend and backend micro-services for an online learning platform",
			"Won scholarship award provided by company",
			"Selected for intern position based on high distinction achieved in university research course",
		],
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
		comments: [
			"Project lead and developer for budget tracking application for Centre for Peace and Development Initiatives (CPDI) which was later covered by the local news",
			"Project lead and developer for grocery delivery application",
			"Part of multiple android projects and development teams",
			"Performed mentorship role for multiple interns and junior developers",
			"Part of technical interview team for human resource onboarding",
		],
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
		comments: [
			"Developed and deployed the Mayor of Islamabad's corporate website which was later covered by the local news"
		],
		techStack: [skillData.technologies.PHP],
		dates: {
			start: 'August 2016',
			end: 'December 2016',
		}
	},
];

export default experience;
