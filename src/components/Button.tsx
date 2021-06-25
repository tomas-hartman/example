import * as React from 'react';
import PropTypes from 'prop-types';

import s from './Button.css';

interface Props {
	color: string,
	size: 'small' | 'normal' | 'large',
	children: React.ReactElement | React.ReactElement[],
	sizes: {
		[key: string]: string,
	}
}

/**
 * The only true button.
 */
const Button: React.FC<Props> = (props: Props) => {
	const {
		color = '#333',
		size = 'normal',
		children,
		sizes = {
			small: '10px',
			normal: '14px',
			large: '18px',
		}
	} = props;

	let styles = {
		color,
		fontSize: sizes[size],
	};

	/** Some kind of silly mistake */
	// const =

	return (
		<button className={s.root} style={styles}>
			{children}
		</button>
	);
};

export default Button;
