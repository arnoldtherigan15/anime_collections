import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { string } from 'prop-types'

const Heading1 = styled.h1(props => ({
	font: 'normal normal 400 30px "Montserrat", sans-serif !important',
	color: props.textColor,
	letterSpacing: '-1.5px',
	textAlign: props.textAlign
}))

const Default = styled.p(props => ({
	font: 'normal normal 600 16px "Montserrat", sans-serif !important',
	color: props.textColor,
	letterSpacing: '0.25px',
	textAlign: props.textAlign
}))



const Typography = ({ variant, children, textAlign, textColor }) => {
	switch (variant) {
		case "h1":
			return <Heading1 textAlign={textAlign} textColor={textColor}>{children}</Heading1>
	}
	return <Default textAlign={textAlign} textColor={textColor}>{children}</Default>
}

Typography.defaultProps = {
	variant: 'default',
	children: '',
	textAlign: 'left',
	textColor: 'black',
}

Typography.propTypes = {
	variant: string,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]),
	textAlign: string,
	textColor: string,
}


export default Typography