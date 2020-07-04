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

const useStyles = makeStyles(theme => ({
    image: {
        margin: theme.spacing(1),
        borderRadius: '50%',
        width: '50%',
        border: '4px solid #2ca8dc',
        padding: theme.spacing(.5),
        backgroundColor: 'white'
    },
    typo: {
        color: '#2ca8dc'
    },
    sub: {
        color: '#ffffff'
    },
    section: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4),
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
    },
    sectionHeading: {
        marginBottom: theme.spacing(2),
        textAlign: 'end',
        color: '#2ca8dc',
        borderBottom: '2px solid #ffffff',
    },
    summary: {
        color: '#ffffff',
        textAlign: 'left'
    },
    avatar: {
        backgroundColor: '#ffffff00',
        border: '3px solid white',
        color: '#2ca8dc'
    },
    listItem: {
        paddingLeft: 0,
        paddingRight: 0
    }
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