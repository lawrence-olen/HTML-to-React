import React from 'react'
import propTypes from 'prop-types'
import { Fade } from 'react-reveal'

const Features = (props) => {
    return (
        <div className="tiles-item">
            <Fade bottom delay={props.delayInMS}>
                <div className="tiles-item-inner">
                    <div className="features-tiles-item-header">
                        <div
                            className="features-tiles-item-image mb-16"
                        >
                            <img
                                src={props.data.imgSrc}
                                alt={props.data.imgAlt}
                                width="64"
                                height="64"
                            />
                        </div>
                    </div>
                    <div
                        className="features-tiles-item-content"
                    >
                        <h4 className="mt-0 mb-8">
                            {props.data.title}
                        </h4>
                        <p className="m-0 text-sm">
                            {props.data.description}
                        </p>
                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Features

Features.propTypes = {
    delayInMS: propTypes.number,
    data: propTypes.object,
}
