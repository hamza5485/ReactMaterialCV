import MqImage from '../images/mq.png';
import SwanseaImage from '../images/swan.png';
import CourseraImage from '../images/coursera.png';
import AWSImage from '../images/aws.png';

const education = {
	schooling: [
		{
			name: "Macquarie University",
			image: MqImage,
			course: "Masters of Information Technology (MIT)",
			specialization: "Internetworking and Cybersecurity",
			location: "Sydney, Australia",
			dates: {
				start: 'June 2017',
				end: 'December 2019',
			},
			url: "https://mq.edu.au",
			courseUrl: "https://courses.mq.edu.au/2017/international/postgraduate/master-of-information-technology-internetworking-and-cyber-security/"
		},
		{
			name: "Swansea University",
			image: SwanseaImage,
			course: "Bachelors of Science (BSc) (Hons)",
			specialization: "Software Engineering",
			location: "Swansea, UK",
			dates: {
				start: 'September 2013',
				end: 'June 2016',
			},
			url: "https://www.swansea.ac.uk",
			courseUrl: "https://www.swansea.ac.uk/undergraduate/courses/science/computer-science/bsc-software-engineering-g600/"
		}
	],
	certs: [
		{
			name: "AWS Certified Developer – Associate",
			image: AWSImage,
			org: "Amazon Web Services Training and Certification",
			completionDate: "September, 2020",
			url: "https://www.youracclaim.com/badges/c1109a51-b76f-4ab7-a7b2-c75679303465/public_url"
		},
		{
			name: "Programming Mobile Applications for Android Handheld Systems",
			image: CourseraImage,
			org: "Coursera Verified Certificates",
			completionDate: "August, 2015",
			url: "https://www.coursera.org/account/accomplishments/certificate/Y3MFHBG52F"
		},
	]
}

export default education;
