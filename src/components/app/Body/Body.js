import React from 'react';
import {
    makeStyles,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    IconButton,
    Collapse,
    Chip
} from '@material-ui/core';
import {
    COLORS,
    typo,
    sub,
    section,
    sectionHeading,
    summary,
    avatar,
    bullet,
    listItem,
    chip,
    chipIcon
} from '../../../assets/styles/styles';
import education from '../../../assets/data/educationData';
import experience from '../../../assets/data/experienceData';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';
import BrushIcon from '@material-ui/icons/Brush';
import CloudIcon from '@material-ui/icons/Cloud';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        backgroundColor: COLORS.dark,
        height: '100%'
    },
    typo,
    sub,
    section,
    sectionHeading,
    summary,
    bullet,
    avatar,
    listItem,
    chip,
    chipIcon,
    justify: {
        textAlign: 'justify',
    },
    btn: {
        margin: theme.spacing(1),
        backgroundColor: COLORS.light,
        "&:hover": {
            backgroundColor: COLORS.light,
        }
    },
    icon: {
        color: COLORS.dark,
        marginLeft: 0,
        marginRight: 0,
    },
    expandButton: {
        backgroundColor: COLORS.light,
        color: COLORS.dark,
        margin: '.5em .5em',
        padding: '.5em',
        '&:hover': {
            backgroundColor: COLORS.primary,
            color: COLORS.light,
        }

    },
    nested: {
        paddingLeft: theme.spacing(5),
        display: 'block'
    },
}));

const Body = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const certificationSection = (obj, i) => {
        return (
            <ListItem className={classes.listItem} button component="a" href={obj.url} target="_blank">
                <ListItemAvatar>
                    <img
                        alt={obj.certId}
                        src={obj.image}
                        className={classes.avatar}
                        style={{ width: '60px' }}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={obj.name}
                    className={classes.typo}
                    variant="h6"
                    style={{ padding: '0 1em' }}
                    secondary={
                        <React.Fragment>
                            <Typography
                                gutterBottom
                                className={classes.summary}
                                color="textPrimary"
                                component="span"
                            >
                                {obj.org}
                            </Typography>
                            <Typography
                                gutterBottom
                                className={classes.summary}
                                color="textPrimary"
                                component="span"
                            >
                                {obj.certId}
                            </Typography>
                            <Typography
                                gutterBottom
                                className={classes.summary}
                                color="textPrimary"
                                component="span"
                            >
                                {obj.completionDate}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        );
    };

    const educationSection = (obj, i) => {
        return (
            <ListItem className={classes.listItem} button component="a" href={obj.courseUrl} target="_blank">
                <ListItemAvatar>
                    <img
                        alt={obj.company}
                        src={obj.image}
                        className={classes.avatar}
                        style={{ width: '60px' }}
                    />
                </ListItemAvatar>
                <ListItemText
                    primary={obj.name}
                    className={classes.typo}
                    style={{ padding: '0 1em' }}
                    secondary={
                        <React.Fragment>
                            <Typography
                                gutterBottom
                                className={classes.summary}
                                color="textPrimary"
                                component="span"
                            >
                                {obj.course}
                            </Typography>
                            <Typography
                                gutterBottom
                                className={classes.summary}
                                color="textPrimary"
                                component="span"
                            >
                                {obj.specialization}
                            </Typography>
                            <Typography
                                gutterBottom
                                className={classes.summary}
                                color="textPrimary"
                                component="span"
                            >
                                {`${obj.dates.start} - ${obj.current ? 'Present' : obj.dates.end}`}
                            </Typography>
                            <Typography
                                variant="body1"
                                gutterBottom
                                className={classes.summary}
                                component="span"
                            >
                                {obj.location}
                            </Typography>
                        </React.Fragment>
                    }
                />
            </ListItem>
        )
    };

    const listExpand = () => {
        return (
            <ListItem style={{ justifyContent: 'center' }}>
                <IconButton
                    className={classes.expandButton}
                    aria-label="upload picture"
                    component="span"
                    onClick={handleClick}
                >
                    {open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </ListItem>
        );
    };

    const experienceSection = (obj, i) => {
        return (
            <div className={classes.listItem} key={i}>
                <ListItem>
                    <ListItemAvatar>
                        <img
                            alt={obj.company}
                            src={obj.image}
                            className={classes.avatar}
                            style={{ width: '60px' }}
                        />
                    </ListItemAvatar>
                    <ListItemText
                        primary={obj.title}
                        className={classes.typo}
                        style={{ padding: '0 1em' }}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    gutterBottom
                                    className={classes.summary}
                                    color="textPrimary"
                                    component="span"
                                >
                                    {obj.company}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    className={classes.summary}
                                    color="textPrimary"
                                    component="span"
                                >
                                    {`${obj.dates.start} - ${obj.current ? 'Present' : obj.dates.end}`}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    className={classes.summary}
                                    component="span"
                                >
                                    {obj.location}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    className={classes.summary}
                                    component="span"
                                >
                                    {obj.type}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    gutterBottom
                                    style={{ color: COLORS.grey }}
                                    component="span"
                                >
                                    {obj.comments}
                                </Typography>
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <List disablePadding component={'div'}>
                    {obj.techStack.map((tech, i) => {
                        /**
                         * fucks up responsive design on very small screens
                         */
                        return (
                            <ListItem key={i} className={classes.nested}>
                                {tech.stack.map((el, j) => {
                                    return <Chip
                                        label={el} key={j}
                                        className={classes.chip}
                                        avatar={
                                            <Avatar className={classes.chipIcon}>
                                                {tech.type === 'code' &&
                                                    <CodeIcon className={classes.icon} />}
                                                {tech.type === 'storage' &&
                                                    <StorageIcon className={classes.icon} />}
                                                {tech.type === 'ui' &&
                                                    <BrushIcon className={classes.icon} />}
                                                {tech.type === 'cloud' &&
                                                    <CloudIcon className={classes.icon} />}

                                            </Avatar>
                                        }
                                    />
                                })}
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        )
    };

    const getExpereience = () => {
        return (
            <div className={classes.section}>
                <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                    WORK EXPERIENCE
                </Typography>
                <List>
                    {experienceSection(experience[0], 0)}
                    {experienceSection(experience[1], 1)}
                    <Collapse in={open} timeout="auto" unmountOnExit >
                        <List>
                            {experience.map((obj, i) => {
                                if (i > 1) return experienceSection(obj, i)
                                else return null;
                            })}
                        </List>
                    </Collapse>
                    {listExpand()}
                </List>
            </div>
        )
    };

    const getEducation = () => {
        return (
            <div className={classes.section}>
                <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                    Education
                </Typography>
                <List>
                    {education.schooling.map((obj, i) => {
                        return (
                            <div key={i}>
                                {educationSection(obj, i)}
                            </div>
                        );
                    })}
                </List>
            </div>
        )
    };

    const getCerts = () => {
        return (
            <div className={classes.section}>
                <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                    Certifications
                </Typography>
                <List>
                    {education.certs.map((obj, i) => {
                        return (
                            <div key={i}>
                                {certificationSection(obj, i)}
                            </div>
                        );
                    })}
                </List>
            </div>
        )
    };

    return (
        <div className={classes.root}>
            {getExpereience()}
            {getEducation()}
            {getCerts()}
        </div>
    );
};

export default Body;