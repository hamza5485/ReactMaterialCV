import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme();

export const COLORS = {
    primary: "#333333",
    light: "darkorange",
    dark: "#212121",
    grey: "#bdbdbd",
};

export const typo = {
    color: COLORS.light,
    fontWeight: 'bold'
};

export const sub = {
    color: '#ffffff'
};

export const section = {
    margin: theme.spacing(1),
    padding: theme.spacing(1),
    textAlign: 'center',
    borderRadius: '1em',
    '&:hover': {
        backgroundColor: COLORS.dark,
    }
};

export const sectionHeading = {
    textAlign: 'start',
    color: COLORS.light,
    fontWeight: 'bold',
    borderBottom: `2px solid ${COLORS.light}`
};

export const summary = {
    color: '#ffffff',
    textAlign: 'start',
    display: 'block'
};

export const avatar = {
    backgroundColor: '#ffffff00',
    border: `3px solid ${COLORS.light}`,
    color: COLORS.light,
    borderRadius: '5em',
};

export const bullet = {
    backgroundColor: '#ffffff00',
    color: COLORS.light
};

export const listItem = {
    paddingLeft: theme.spacing(.5),
    paddingRight: theme.spacing(.5),
    borderRadius: '1em',
    '&:hover': {
        backgroundColor: COLORS.primary,
        cursor: 'pointer'
    }
};

export const chip = {
    margin: '.5em .5em',
    padding: '.5em',
    cursor: 'pointer',
    color: COLORS.dark,
    backgroundColor: COLORS.light,
    borderRadius: '.5em',
    '&:hover': {
        backgroundColor: COLORS.primary,
        color: COLORS.light,
    }
};

export const chipIcon = {
    backgroundColor: COLORS.light
};
