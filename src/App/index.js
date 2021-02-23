import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import LinearProgress from '@material-ui/core/LinearProgress';
import getMuiTheme, { getGlobalCss } from 'utils/getMuiTheme';
import getPrefersColorScheme from 'utils/getPrefersColorScheme';
import { PRESENTENSE_SITE_PREFERS_COLOR_SCHEME, COLOR_SCHEME_CODE_MAP } from 'resources/constants';
import palette from 'resources/palette';
import siteManifestLight from 'resources/theme/light/site.webmanifest';
import siteManifestDark from 'resources/theme/dark/site.webmanifest';
import lightFavicon from 'resources/theme/light/favicon.ico';
import lightFavicon16 from 'resources/theme/light/favicon-16x16.png';
import lightFavicon32 from 'resources/theme/light/favicon-32x32.png';
import lightFavicon194 from 'resources/theme/light/favicon-194x194.png';
import darkFavicon from 'resources/theme/dark/favicon.ico';
import darkFavicon16 from 'resources/theme/dark/favicon-16x16.png';
import darkFavicon32 from 'resources/theme/dark/favicon-32x32.png';
import darkFavicon194 from 'resources/theme/dark/favicon-194x194.png';
import lightAndroidChrome192 from 'resources/theme/light/android-chrome-192x192.png';
import darkAndroidChrome192 from 'resources/theme/dark/android-chrome-192x192.png';
import Page from 'templates/Page';
import useDrawer from 'hooks/useDrawer';
import Header from 'components/Header';
import Drawer from 'components/Drawer';
import Root from 'App/Root';
import './index.css';
import ReactGA from 'react-ga';
import RouteChangeTracker from 'components/Analytics'

const TRACKING_ID = "UA-190432287-1";
ReactGA.initialize(TRACKING_ID);

export const Home = React.lazy(() => import('routes/Home'));
export const Links = React.lazy(() => import('routes/Links'));
export const Projects = React.lazy(() => import('routes/Projects'));
export const Lessons = React.lazy(() => import('routes/Lessons'));
export const Us = React.lazy(() => import('routes/Us'));

export const togglePrefersColorScheme = (SELECTED_COLOR_SCHEME, setCookie) => () =>
  setCookie(
    PRESENTENSE_SITE_PREFERS_COLOR_SCHEME,
    SELECTED_COLOR_SCHEME === COLOR_SCHEME_CODE_MAP.DARK
      ? COLOR_SCHEME_CODE_MAP.LIGHT
      : COLOR_SCHEME_CODE_MAP.DARK,
    {
      path: '/',
    },
  );

export const normalizePath = hash =>
  hash
    .split('')
    .filter((char, indexOfChar) => char !== '/' || char !== hash[indexOfChar + 1])
    .join('')
    .substring(1);

export const Main = styled.div`
  flex: 1 1 auto;
  display: flex;
`;

export const getHelmet = isDark =>
  isDark ? (
    <Helmet>
      <link rel="shortcut icon" href={darkFavicon} />
      <link rel="icon" type="image/png" sizes="16x16" href={darkFavicon16} />
      <link rel="icon" type="image/png" sizes="32x32" href={darkFavicon32} />
      <link rel="icon" type="image/png" sizes="194x194" href={darkFavicon194} />
      <link rel="icon" type="image/png" sizes="192x192" href={darkAndroidChrome192} />
      <link rel="manifest" href={siteManifestDark} />
      <meta name="theme-color" content={palette.DARK.primary.main} />
    </Helmet>
  ) : (
    <Helmet>
      <link rel="shortcut icon" href={lightFavicon} />
      <link rel="icon" type="image/png" sizes="16x16" href={lightFavicon16} />
      <link rel="icon" type="image/png" sizes="32x32" href={lightFavicon32} />
      <link rel="icon" type="image/png" sizes="194x194" href={lightFavicon194} />
      <link rel="icon" type="image/png" sizes="192x192" href={lightAndroidChrome192} />
      <link rel="manifest" href={siteManifestLight} />
      <meta name="theme-color" content={palette.LIGHT.primary.main} />
    </Helmet>
  );

export default function App() {
  const { hash } = window.location;
  const [open, toggleDrawer] = useDrawer();
  const [cookies, setCookie] = useCookies([PRESENTENSE_SITE_PREFERS_COLOR_SCHEME]);
  const SELECTED_COLOR_SCHEME =
    cookies[PRESENTENSE_SITE_PREFERS_COLOR_SCHEME] || getPrefersColorScheme();

  const theme = getMuiTheme(SELECTED_COLOR_SCHEME);
  const GlobalCss = getGlobalCss(theme);

  return (
    <MuiThemeProvider theme={theme}>
      {getHelmet(SELECTED_COLOR_SCHEME === COLOR_SCHEME_CODE_MAP.DARK)}
      <CssBaseline />
      <GlobalCss />
      <Router>
        <Drawer open={open} toggleDrawer={toggleDrawer} />
        <Root open={open}>
          <Header
            open={open}
            toggleDrawer={toggleDrawer}
            togglePrefersColorScheme={togglePrefersColorScheme(SELECTED_COLOR_SCHEME, setCookie)}
          />
          <Main>
            <Page open={open}>
              <Suspense fallback={<LinearProgress color="secondary" />}>
                <Switch>
                  <Route exact path="/home/" component={Home} />
                  <Route exact path="/links/" component={Links} />
                  <Route exact path="/projects/:postId?" component={Projects} />
                  <Route exact path="/lessons/:postId?" component={Lessons} />
                  <Route exact path="/Us/" component={Us} />
                  {!!hash && <Redirect to={normalizePath(hash)} />}
                  <Route exact path="/" component={Home} />
                  <Redirect to="/home/" />
                </Switch>
              </Suspense>
            </Page>
          </Main>
        </Root>
      </Router>
    </MuiThemeProvider>
  );
}
