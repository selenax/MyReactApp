import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  Container,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from 'semantic-ui-react';

const getWidth = () => {
  const isSSR = typeof window === 'undefined';

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Imagine-a-Company"
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em'
      }}
    />
    <Header
      as="h2"
      content="Do whatever you want when you want to."
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em'
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class DesktopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: null
    };
  }

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  renderContent = () => {
    switch (this.props.isAuth) {
      case null:
        return;
      case false:
        return this.setState({ auth: false });
      default:
        return this.setState({ auth: true });
    }
  };

  render() {
    const { isAuth } = this.props;
    const { fixed } = this.state;

    console.log(this.props.isAuth, '🍓🍓🍓');

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Work</Menu.Item>
                <Menu.Item as="a">Company</Menu.Item>
                <Menu.Item as="a">Careers</Menu.Item>
                <Menu.Item position="right">
                  {!isAuth ? (
                    <Button
                      as="a"
                      href="/auth/google"
                      onClick={this.renderContent}
                      inverted={!fixed}
                    >
                      Log in
                    </Button>
                  ) : (
                    <Button as="a" href="/api/logout" inverted={!fixed}>
                      Log out
                      {console.log(isAuth, 'clicked logout 💟💟')}
                    </Button>
                  )}
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  renderContent = () => {
    switch (this.props.isAuth) {
      case null:
        return;
      case false:
        console.log('log out clicked');

        return this.setState({ auth: false });
      default:
        return this.setState({ auth: true });
    }
  };

  render() {
    const { isAuth } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          {!isAuth ? (
            <Menu.Item as="a" href="/auth/google" onClick={this.renderContent}>
              Log in
            </Menu.Item>
          ) : (
            <Menu.Item as="a" href="/api/logout">
              Log out
            </Menu.Item>
          )}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  {!isAuth ? (
                    <Button
                      as="a"
                      href="/auth/google"
                      onClick={this.renderContent}
                      inverted
                    >
                      Log in
                    </Button>
                  ) : (
                    <Button
                      as="a"
                      href={'/api/logout'}
                      inverted
                      style={{ marginLeft: '0.5em' }}
                    >
                      Log out
                    </Button>
                  )}
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.auth, '🔴🔴🔴');
    const { auth } = this.props;
    return (
      <div>
        <DesktopContainer isAuth={auth} />
        <MobileContainer isAuth={auth} />
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavBar);
