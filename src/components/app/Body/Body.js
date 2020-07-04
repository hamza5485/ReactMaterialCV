import React from 'react';
import {
    makeStyles,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar
} from '@material-ui/core';
import {
    COLORS,
    typo,
    sub,
    section,
    sectionHeading,
    summary,
    bullet,
    listItem
} from '../../../assets/styles';
import education from './educationData';
import experience from './experienceData';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        backgroundColor: COLORS.dark,
        height: '100%'
    },
    typo,
    sub,
    section,
    sectionHeading,
    summary,
    bullet,
    listItem
}));

const Body = () => {
    const classes = useStyles();

    const getEducation = () => (
        <div className={classes.section}>
            <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                EDUCATION
            </Typography>
            <List>
                {education.schooling.map((obj, i) => {
                    return (
                        <ListItem
                            key={i}
                            className={classes.listItem}
                        >
                            <ListItemAvatar>
                                <Avatar className={classes.bullet}>
                                    <FiberManualRecordIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={obj.name}
                                className={classes.summary}
                            />
                            <div style={{ width: '50%' }}>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    className={classes.typo}
                                >
                                    {obj.course}
                                </Typography>
                                <Typography
                                    variant="subtitle2"
                                    gutterBottom
                                    className={classes.summary}
                                >
                                    {obj.specialization}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    className={classes.summary}
                                >
                                    {obj.duration}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    className={classes.summary}
                                >
                                    {obj.location}
                                </Typography>
                            </div>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );

    const getExpereience = () => (

        <div className={classes.section}>
            <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                EXPERIENCE
            </Typography>
            <List>
                {experience.map((obj, i) => {
                    return (
                        <ListItem
                            key={i}
                            className={classes.listItem}
                        >
                            <ListItemAvatar>
                                <Avatar className={classes.bullet}>
                                    <FiberManualRecordIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={obj.company}
                                className={classes.summary}
                            />

                            <div style={{ width: '50%' }}>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    className={classes.typo}
                                >
                                    {obj.title}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    className={classes.summary}
                                >
                                    {`${obj.dates.start} - ${obj.current ? 'Present' : obj.dates.end}`}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    className={classes.summary}
                                >
                                    {obj.location}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    style={{ color: COLORS.grey }}
                                >
                                    {obj.comments}
                                </Typography>
                            </div>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            {getExpereience()}
            {getEducation()}
        </div>
    );
};

export default Body;