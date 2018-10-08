// #region load dependencies
import React from 'react';
import PropTypes from 'prop-types';
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
const Avatar = ({
  name = 'John Doe',
  photoUrl = '',
  showInfo = false,
  info = '',
}) => (
  <div className="app-avatar">
    <img className="photo" src={photoUrl} alt="Moi Name" />
    {showInfo && (
      <p className="info">
        <span className="quote">&ldquo;</span>
        <span className="name link">{info}</span>
        <span className="quote">&rdquo;</span>
        <span className="quote">&nbsp;-&nbsp;</span>
        <span className="quote">{name}</span>
        <span className="quote">&nbsp;-</span>
      </p>
    )}
  </div>
);

/**
 * @name Avatar PropTypes
 * @memberof components/presentational/Avatar
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @param {String} name         - Profile name
 * @param {String} photoUrl     - Profile url photo
 * @param {String} profEmail    - Profile profesional email
 * @param {Boolean} showInfo    - Show Profile info logan
 * @param {String} info         - Profile info logan
 * @return {Array} React PropTypes
 */
Avatar.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string.isRequired,
  showInfo: PropTypes.bool.isRequired,
  info: PropTypes.string.isRequired,
};

export default Avatar;
