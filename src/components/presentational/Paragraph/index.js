// #region load dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// #endregion

/**
 * @file components/presentational/Avatar/index.js
 * @module components/presentational/Avatar
 * @desc This is the stateless functional component for Center.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} Avatar component
 * @example
 * <Avatar name={profileName} photoUrl={photoUrl} profEmail={emails.prof} codeEmail={emails.code} />
 */
const Social = ({ profileInfo }) => (
  <div className="app-paragraph">
    <p className="info">
      <span className="quote">&ldquo;</span>
      <span className="name link">{profileInfo}</span>
      <span className="quote">&rdquo;</span>
      <span className="quote">&nbsp;-&nbsp;</span>
      <span className="quote">carlos lenon</span>
      <span className="quote">&nbsp;-</span>
    </p>
  </div>
);

const mapStateToProps = state => ({
  profileInfo: state.profile.info,
});

/**
 * @name Avatar PropTypes
 * @memberof components/presentational/Avatar
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
Social.propTypes = {
  profileInfo: PropTypes.string,
};

Social.defaultProps = {
  profileInfo: '',
};

export default connect(mapStateToProps)(Social);
