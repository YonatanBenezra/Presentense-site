import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@mdi/react';
import {
  mdiHome,
  mdiBrain,
  mdiTypewriter,
  mdiLink,
  mdiHead,
} from '@mdi/js';
import { RouterLink } from 'components/Link';

export const getCurrentPath = currentPath => (currentPath === '' ? 'explore' : currentPath);

export const getLinks = (listItems, toggleDrawer) =>
  listItems.map(
    ({ name, href, iconPath, secondaryAction, transform, component = RouterLink, target }) => {
      const path = name.toLowerCase();
      const to = `/${path}/`;
      const currentPath = getCurrentPath(window.location.pathname.split('/')[1]);
      const selected = currentPath === path;

      return (
        <ListItem
          button
          key={name}
          component={component}
          to={to}
          href={href}
          onClick={toggleDrawer}
          selected={selected}
          target={target}
        >
          <ListItemIcon>
            <Icon path={iconPath} size={1} color="currentColor" transform={transform} />
          </ListItemIcon>
          <ListItemText primary={name} />
          {secondaryAction && <ListItemSecondaryAction>{secondaryAction}</ListItemSecondaryAction>}
        </ListItem>
      );
    },
  );

export default function Links({ toggleDrawer }) {
  return (
    <>
      <Divider />
      <List>
        {getLinks(
          [
            { name: 'Home', iconPath: mdiHome },
            { name: 'Links', iconPath: mdiLink },
            {
              name: 'Projects',
              iconPath: mdiBrain,
            },
            { name: 'Lessons', iconPath: mdiTypewriter },
          ],
          toggleDrawer,
        )}
        <Divider />
        {getLinks([{ name: 'Us', iconPath: mdiHead }], toggleDrawer)}
        <Hidden smUp>
          <Divider />
        </Hidden>
      </List>
    </>
  );
}

Links.propTypes = {
  toggleDrawer: PropTypes.func,
};

Links.defaultProps = {
  toggleDrawer: noop,
};
