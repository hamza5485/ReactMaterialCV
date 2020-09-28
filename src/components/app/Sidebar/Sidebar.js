import React from 'react';
import { makeStyles, Typography, Collapse, Chip } from '@material-ui/core';
import data from '../../../assets/data/profileData';
import skillData from '../../../assets/data/skillsData';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CallIcon from '@material-ui/icons/Call';
import LanguageIcon from '@material-ui/icons/Language';
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import HttpIcon from '@material-ui/icons/Http';
import CodeIcon from '@material-ui/icons/Code';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StorageIcon from '@material-ui/icons/Storage';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CloudIcon from '@material-ui/icons/Cloud';
import BrushIcon from '@material-ui/icons/Brush';
import BallotIcon from '@material-ui/icons/Ballot';
import DialerSipIcon from '@material-ui/icons/DialerSip';
import {
    COLORS,
    typo,
    sub,
    section,
    chip,
    chipIcon,
    sectionHeading,
    summary,
    avatar,
    listItem
} from '../../../assets/styles/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        textAlign: 'center',
        backgroundColor: COLORS.primary,
        height: '100%'
    },
    image: {
        margin: theme.spacing(1),
        borderRadius: '50%',
        width: '40%',
        border: `4px solid ${COLORS.light}`,
        padding: theme.spacing(.5),
        backgroundColor: 'white'
    },
    typo,
    sub,
    section,
    sectionHeading,
    summary,
    avatar,
    listItem,
    chip,
    chipIcon
}));

const Sidebar = () => {
    const classes = useStyles();
    const [expandList, setExpandList] = React.useState(
        skillData.skill.map(() => {
            return {
                expand: false
            };
        })
    );

    const handleClick = (i) => {
        let list = [...expandList];
        list[i].expand = !list[i].expand;
        setExpandList(list);
    };

    const summary = () => (
        <div className={classes.section}>
            <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                SUMMARY
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.summary}>
                {data.summary}
            </Typography>
        </div>
    );

    const contactMe = () => (
        <div className={classes.section}>
            <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                CONTACT
            </Typography>
            <List>
                {Object.keys(data.contact).map((obj, i) => {
                    return (
                        <ListItem
                            key={i}
                            className={classes.listItem}
                            component="a"
                            href={data.contact[obj].hasOwnProperty("link") ? data.contact[obj].link : ""}
                            target={data.contact[obj].hasOwnProperty("link") ? "_blank" : ""}
                        >
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    {obj === "location" && <LocationOnIcon />}
                                    {obj === "email" && <MailIcon />}
                                    {obj === "website" && <LanguageIcon />}
                                    {obj === "number" && <CallIcon />}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={data.contact[obj].text} className={classes.summary} />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );

    const links = () => (
        <div className={classes.section}>
            <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                LINKS
            </Typography>
            <List>
                {Object.keys(data.links).map((obj, i) => {
                    return (
                        <ListItem
                            key={i}
                            className={classes.listItem}
                            component="a"
                            href={data.links[obj].hasOwnProperty("link") ? data.links[obj].link : "#"}
                            target="_blank"
                        >
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    {obj === "resume" && <BallotIcon />}
                                    {obj === "linkedin" && <LinkedInIcon />}
                                    {obj === "github" && <GitHubIcon />}
                                    {obj === "twitter" && <TwitterIcon />}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={data.links[obj].text} className={classes.summary} />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );

    const getTechStack = (el) => {
        let stack;
        if (el === "Cloud Architecture") stack = [skillData.technologies.Cloud];
        if (el === "Communications") stack = [skillData.technologies.Telephony];
        if (el === "Web Development") stack = [
            skillData.technologies.JavaScript,
            skillData.technologies.Python,
            skillData.technologies["C#"],
            skillData.technologies.PHP,
            skillData.technologies.Design
        ];
        if (el === "Mobile Development") stack = [skillData.technologies.Java];
        if (el === "Database Development") stack = [skillData.technologies.Database];
        if (el === "Programming Languages") stack = [skillData.technologies.Languages];
        return (
            <div>
                {stack.map((obj, j) => {
                    return obj.stack.map((s, k) => {
                        return <Chip
                            label={s} key={k}
                            size="small"
                            className={classes.chip}
                            avatar={
                                <Avatar className={classes.chipIcon}>
                                    {obj.type === 'code' &&
                                        <CodeIcon fontSize="small" className={classes.icon} />}
                                    {obj.type === 'comsys' &&
                                        <DialerSipIcon fontSize="small" className={classes.icon} />}
                                    {obj.type === 'storage' &&
                                        <StorageIcon fontSize="small" className={classes.icon} />}
                                    {obj.type === 'ui' &&
                                        <BrushIcon fontSize="small" className={classes.icon} />}
                                    {obj.type === 'cloud' &&
                                        <CloudIcon fontSize="small" className={classes.icon} />}

                                </Avatar>
                            }
                        />

                    })
                })}
            </div>
        )
    };

    const skills = () => {
        return (
            <div className={classes.section}>
                <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                    SKILLS
                </Typography>
                <List>
                    {skillData.skill.map((el, i) => {
                        return (
                            <div key={i}>
                                <ListItem
                                    className={classes.listItem}
                                    button
                                    onClick={() => handleClick(i)}
                                >
                                    <ListItemAvatar>
                                        <Avatar className={classes.avatar}>
                                            {el === "Cloud Architecture" && <CloudIcon />}
                                            {el === "Communications" && <DialerSipIcon />}
                                            {el === "Web Development" && <HttpIcon />}
                                            {el === "Mobile Development" && <PhoneAndroidIcon />}
                                            {el === "Database Development" && <StorageIcon />}
                                            {el === "Programming Languages" && <CodeIcon />}
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary={el} className={classes.summary} />
                                    {expandList[i].expand ? <ExpandLess style={{ color: COLORS.light }} /> :
                                        <ExpandMore style={{ color: COLORS.light }} />}
                                </ListItem>
                                <Collapse in={expandList[i].expand} timeout="auto" unmountOnExit>
                                    {getTechStack(el)}
                                </Collapse>
                            </div>
                        )
                    })}
                </List>

            </div >
        );
    };


    return (
        <div className={classes.root}>
            <img alt="hamza" src="me.jpg" className={classes.image} />
            <Typography variant="h4" className={classes.typo} gutterBottom>
                {data.name.toUpperCase()}
            </Typography>
            <Typography variant="h6" className={classes.sub} gutterBottom>
                {data.title}
            </Typography>
            {summary()}
            {skills()}
            {contactMe()}
            {links()}
        </div>
    );
};

export default Sidebar;