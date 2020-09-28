import React from 'react';
import {
    makeStyles,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    Collapse,
    Chip,
    ListItemIcon
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
import DescriptionIcon from '@material-ui/icons/Description';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeIcon from '@material-ui/icons/DateRange';
import LinkIcon from '@material-ui/icons/Link';
import DialerSipIcon from '@material-ui/icons/DialerSip';

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
        paddingLeft: theme.spacing(12),
        //remove inline styles
    },
}));

const Body = () => {
    const classes = useStyles();
    const [expandExp, setExpandExp] = React.useState(
        experience.map(() => { return { expand: false } })
    );
    const [expandUni, setExpandUni] = React.useState(
        education.schooling.map(() => { return { expand: false } })
    );

    const handleExpClick = (i) => {
        let list = [...expandExp];
        list[i].expand = !list[i].expand;
        setExpandExp(list);
    };

    const handleUniClick = (i) => {
        let list = [...expandUni];
        list[i].expand = !list[i].expand;
        setExpandUni(list);
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
            <div key={i}>
                <ListItem className={classes.listItem} onClick={() => handleUniClick(i)}>
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
                                {/* <Typography
                                gutterBottom
                                className={classes.summary}
                                color="textPrimary"
                                component="span"
                            >
                                {obj.specialization}
                            </Typography> */}
                                {/* <Typography
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
                            </Typography> */}
                            </React.Fragment>
                        }
                    />
                    {expandUni[i].expand ? <ExpandLess style={{ color: COLORS.light }} /> :
                        <ExpandMore style={{ color: COLORS.light }} />}
                </ListItem>
                <Collapse in={expandUni[i].expand} timeout="auto" unmountOnExit>
                    <div>
                        <List disablePadding component={'div'}>
                            <ListItem className={classes.nested}>
                                <ListItemIcon>
                                    <DescriptionIcon style={{ color: COLORS.light }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={obj.specialization}
                                    className={classes.summary} />
                            </ListItem>
                            <ListItem className={classes.nested}>
                                <ListItemIcon>
                                    <DateRangeIcon style={{ color: COLORS.light }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`${obj.dates.start} - ${obj.current ? 'Present' : obj.dates.end}`}
                                    className={classes.summary} />
                            </ListItem>
                            <ListItem className={classes.nested}>
                                <ListItemIcon>
                                    <LocationOnIcon style={{ color: COLORS.light }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={obj.location}
                                    className={classes.summary} />
                            </ListItem>
                            <ListItem className={classes.nested} component="a" href={obj.courseUrl} target="_blank">
                                <ListItemIcon>
                                    <LinkIcon style={{ color: COLORS.light }} />
                                </ListItemIcon>
                                <ListItemText style={{ textDecoration: 'underline' }}
                                    primary="View Course"
                                    className={classes.summary} />
                            </ListItem>
                        </List>
                    </div>
                </Collapse>
            </div>
        )
    };

    const experienceSection = (obj, i) => {
        return (
            <div key={i}>
                <ListItem className={classes.listItem} onClick={() => handleExpClick(i)}>
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
                            </React.Fragment>
                        }
                    />
                    {expandExp[i].expand ? <ExpandLess style={{ color: COLORS.light }} /> :
                        <ExpandMore style={{ color: COLORS.light }} />}
                </ListItem>
                <Collapse in={expandExp[i].expand} timeout="auto" unmountOnExit>
                    <div>
                        <List disablePadding component={'div'}>
                            <ListItem className={classes.nested}>
                                <ListItemIcon>
                                    <DateRangeIcon style={{ color: COLORS.light }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`${obj.dates.start} - ${obj.current ? 'Present' : obj.dates.end}`}
                                    className={classes.summary} />
                            </ListItem>
                            <ListItem className={classes.nested}>
                                <ListItemIcon>
                                    <LocationOnIcon style={{ color: COLORS.light }} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={obj.location}
                                    className={classes.summary} />
                            </ListItem>
                            <ListItem className={classes.nested}>
                                <ListItemIcon>
                                    <DescriptionIcon style={{ color: COLORS.light }} />
                                </ListItemIcon>
                                <ul style={{ color: 'white', padding: 0 }}>
                                    {obj.comments.map((el, j) => {
                                        return (
                                            <li key={j}>
                                                <Typography
                                                    gutterBottom
                                                    className={classes.summary}
                                                    color="textPrimary">{el}</Typography>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ListItem>
                            {obj.techStack.map((tech, i) => {
                                return (
                                    <ListItem key={i} className={classes.nested} style={{ display: 'block' }}>
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
                                                        {tech.type === 'comsys' &&
                                                            <DialerSipIcon className={classes.icon} />}

                                                    </Avatar>
                                                }
                                            />
                                        })}
                                    </ListItem>
                                )
                            })}
                        </List>
                    </div>
                </Collapse>
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
                    {experience.map((obj, i) => experienceSection(obj, i))}
                </List>
            </div>
        )
    };

    const getEducation = () => {
        return (
            <div className={classes.section}>
                <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                    EDUCATION
                </Typography>
                <List>
                    {education.schooling.map((obj, i) => educationSection(obj, i))}
                </List>
            </div>
        )
    };

    const getCerts = () => {
        return (
            <div className={classes.section}>
                <Typography variant="h6" className={classes.sectionHeading} gutterBottom>
                    CERTIFICATIONS
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