// #region load dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';
// #endregion
// #region load components
import Avatar from '../../presentational/Avatar';
import { getInfo } from '../../../services/profile';
// #endregion

/**
 * @file components/containers/App/index.js
 * @class components/containers/App
 * @extends React.Component
 * @classdesc This is the main app component. Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <App />
 */
class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getInfo());
  }

  /**
   * @function
   * @name render
   * @memberof components/containers/App
   * @description Render all components
   * @return {JSX} Components for App
   */
  render() {
    const profileName = 'Don Draper';
    const photoUrl = 'https://plainjs.com/static/img/logo_640.png';
    const emails = {
      prof: 'dev@carloslenon.com',
    };
    const { showProfileInfo, profileInfo } = this.props;

    return (
      <Avatar
        name={profileName}
        photoUrl={photoUrl}
        profEmail={emails.prof}
        codeEmail={emails.code}
        showInfo={showProfileInfo}
        info={profileInfo}
      />
    );
  }
}

/**
 * @function
 * @name mapStateToProps
 * @memberof components/containers/App
 * @description Set props to state
 * @param {Object} state    - list of state
 * @return {Object} state from store
 */
const mapStateToProps = state => ({
  showProfileInfo: state.profile.showInfo,
  profileInfo: state.profile.info,
});

App.propTypes = {
  showProfileInfo: PropTypes.bool,
  profileInfo: PropTypes.string,
  dispatch: PropTypes.func,
};

App.defaultProps = {
  showProfileInfo: false,
  profileInfo: '',
  dispatch: '',
};

export default hot(module)(connect(mapStateToProps)(App));
