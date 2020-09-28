import React from 'react';
import clsx from 'clsx';
import {
    makeStyles,
    List,
    Collapse,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Typography,
    IconButton,
    Drawer,
    useTheme,
    Divider
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
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1),
        backgroundColor: COLORS.dark,
        height: '100%',
        display: 'flex',
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
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

const CustomList = (props) => {
    const classes = useStyles();
    const { data } = props;
    const { type } = props;
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleDrawerClick = () => {
        setDrawerOpen(!drawerOpen);
    };

    const experienceSection = (obj, i) => {
        return (
            <div>
                <main
                    className={clsx(classes.content, {
                        [classes.contentShift]: drawerOpen,
                    })}
                >
                    <ListItem className={classes.listItem} key={i} button onClick={handleDrawerClick}>
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
                    {/* <List disablePadding component={'div'}>
                    {obj.techStack.map((tech, i) => { */}
                    {/* /**
                         * fucks up responsive design on very small screens
                         */ }
                    {/* return (
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
                </List> */}
                </main>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="right"
                    open={drawerOpen}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={handleDrawerClick}>
                            {theme.direction === 'rtl' ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                            <ListItem button key={text}>
                                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem button key={text}>
                                {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
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

    const getExperience = () => {
        return (
            <div>

                <List>
                    {experienceSection(data[0], 0)}
                    {experienceSection(data[1], 1)}
                    <Collapse in={open} timeout="auto" unmountOnExit >
                        <List>
                            {data.map((obj, i) => {
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

    return (
        <div>
            {type === "exp" && getExperience()}
        </div>
    )
};

export default CustomList;