import React from 'react'

import PropTypes from 'prop-types'

import './feature-card.css'

const FeatureCard = (props) => {
  return (
    <div className="feature-card-card">
      <img
        alt={props.image_alt1}
        src={props.image_src1}
        className="feature-card-image"
      />
      <h4 className="feature-card-text">{props.heading}</h4>
      <span className="feature-card-text1">{props.text}</span>
    </div>
  )
}

FeatureCard.defaultProps = {
  text: "The first step to any child's education is finding the right teacher. But how do you find the right one?",
  heading: 'Find the right mentor',
  image_alt1: 'image',
  image_src1: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
}

FeatureCard.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
}

export default FeatureCard
