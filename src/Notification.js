

import React from 'react'
import { Transition } from 'react-transition-group';


const duration = 300;

const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0,
}

const transitionStyles = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0 },
};

function Notification({ in: inProp }) {
	return (
		<Transition in={inProp} timeout={duration}>
			{(transitionState) => {
				return (
					<div className="status" style={{
						...defaultStyle,
						...transitionStyles[transitionState]
					}}>
						All changes saved
					</div>
				)
			}}

		</Transition>
	)
}

export default Notification
