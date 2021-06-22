import * as React from 'react';
import PropTypes from 'prop-types';

import s from './Button.css';

interface Props {
	color: unknown,
	size: unknown,
	children: unknown
}

/**
 * The only true button.
 */
const Button: React.FC<Props> = ({ color, size, children }: Props) => {
	let styles = {
		color,
		fontSize: Button.sizes[size],
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

Button.propTypes = {
	/**
	 * Button label.
	 */
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	size: PropTypes.oneOf(['small', 'normal', 'large']),
};
Button.defaultProps = {
	color: '#333',
	size: 'normal',
};
Button.sizes = {
	small: '10px',
	normal: '14px',
	large: '18px',
};
