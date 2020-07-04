import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme();

export const COLORS = {
    primary: "#2e3f4f",
    light: "#2ca8dc",
    dark: "#2c394a",
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
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
};

export const sectionHeading = {
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: 'end',
    color: COLORS.light,
    fontWeight: 'bold',
    borderBottom: '2px solid #ffffff',
};

export const summary = {
    color: '#ffffff',
    textAlign: 'left'
};

export const avatar = {
    backgroundColor: '#ffffff00',
    border: '3px solid white',
    color: COLORS.light
};

export const bullet = {
    backgroundColor: '#ffffff00',
    color: COLORS.light
};

export const listItem = {
    paddingLeft: 0,
    paddingRight: 0
};
