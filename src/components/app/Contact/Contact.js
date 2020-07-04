import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import data from './data';
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
import {
    COLORS,
    typo,
    sub,
    section,
    sectionHeading,
    summary,
    avatar,
    listItem
} from '../../../assets/styles';

const useStyles = makeStyles(theme => ({
    image: {
        margin: theme.spacing(1),
        borderRadius: '50%',
        width: '50%',
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
    listItem
}));


const Contact = () => {
    const classes = useStyles();

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
                CONTACT ME
            </Typography>
            <List>
                {Object.keys(data.contact).map((obj, i) => {
                    return (
                        <ListItem
                            key={i}
                            className={classes.listItem}
                            component="a"
                            href={data.contact[obj].hasOwnProperty("link") ? data.contact[obj].link : "#"}
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

    const social = () => (
        <div className={classes.section}>
            <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                SOCIAL
            </Typography>
            <List>
                {Object.keys(data.social).map((obj, i) => {
                    return (
                        <ListItem
                            key={i}
                            className={classes.listItem}
                            component="a"
                            href={data.social[obj].hasOwnProperty("link") ? data.social[obj].link : "#"}
                        >
                            <ListItemAvatar>
                                <Avatar className={classes.avatar}>
                                    {obj === "linkedin" && <LinkedInIcon />}
                                    {obj === "github" && <GitHubIcon />}
                                    {obj === "twitter" && <TwitterIcon />}
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={data.social[obj].text} className={classes.summary} />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );

    return (
        <div>
            <img alt="hamza" src="me.jpg" className={classes.image} />
            <Typography variant="h4" className={classes.typo} gutterBottom>
                {data.name.toUpperCase()}
            </Typography>
            <Typography variant="h6" className={classes.sub} gutterBottom>
                {data.title}
            </Typography>
            {summary()}
            {contactMe()}
            {social()}
        </div>
    );
};

export default Contact;