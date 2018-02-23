import React from 'react';
import PropTypes from 'prop-types';

const defaultQuery = {
  controls: 0,
  showInfo: 0,
  modestbranding: 1,
  rel: 0,
  autoplay: 1,
  loop: 1,
  fs: 0,
  cc_load_policy: 0,
  iv_load_policy: 3,
  playlist: '7AKhdwMbWOU',
  autohide: 0,
  mute: 1,
  start: 60 * 7
};

const queryfy = options => {
  const result = Object
    .keys(options)
    .reduce((acc, key) => {
      return [...acc, key + '=' + options[key]]
    }, []).join('&');

  return result ? '?'.concat(result) : '';
};
const VideoBackground = props => {
  const query = { ...defaultQuery, ...props.query };
  const videoSrc = 'https://www.youtube.com/embed/7AKhdwMbWOU' + queryfy(query);

  return (
    <div className="video-background">
      <div className="video-foreground">
        <iframe
          src={videoSrc}
          frameBorder="0"
          allowFullScreen
        />
        {props.children}
      </div>
    </div>
  );
};

VideoBackground.propTypes = {
  children: PropTypes.node,
};

VideoBackground.defaultProps = {
  query: defaultQuery,
};

export default VideoBackground;