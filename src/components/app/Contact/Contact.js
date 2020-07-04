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
        border: '3px solid white'
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
                Summary
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.summary}>
                {data.summary}
            </Typography>
        </div>
    );

    const contactMe = () => (
        <div className={classes.section}>
            <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                Contact Me
            </Typography>
            <List>
                <ListItem className={classes.listItem} component="a" target="_blank" href={data.links.website}>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <LanguageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="hamzaanas.dev" className={classes.summary} />
                </ListItem>
                <ListItem className={classes.listItem} component="a" target="_blank" href={data.links.email}>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <MailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="hamza5485@gmail.com" className={classes.summary} />
                </ListItem>
                <ListItem className={classes.listItem} component="a" target="_blank" href={data.links.number}>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <CallIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="(+61) 413 385 999" className={classes.summary} />
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <LocationOnIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={data.location} className={classes.summary} />
                </ListItem>
            </List>
        </div>
    );

    const social = () => (
        <div className={classes.section}>
            <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                Social
            </Typography>
            <List>
                <ListItem className={classes.listItem} component="a" target="_blank" href={data.links.linkedin}>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <LinkedInIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="hamzaanas" className={classes.summary} />
                </ListItem>
                <ListItem className={classes.listItem} component="a" target="_blank" href={data.links.twitter}>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <TwitterIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="@hamza_anas5" className={classes.summary} />
                </ListItem>
                <ListItem className={classes.listItem} component="a" target="_blank" href={data.links.github}>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <GitHubIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="hamza5485" className={classes.summary} />
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <img alt="hamza" src="me.jpg" className={classes.image} />
            <Typography variant="h4" className={classes.typo} gutterBottom>
                {data.name}
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