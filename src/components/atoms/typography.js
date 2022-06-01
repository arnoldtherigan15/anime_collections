import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { string } from 'prop-types'

const Heading1 = styled.h1(props => ({
	font: 'normal normal 600 30px "Montserrat", sans-serif !important',
	color: props.textColor,
	letterSpacing: '-1.5px',
	textAlign: props.textAlign,
	marginBottom: props.marginBottom
}))

const Caption = styled.p(props => ({
	font: 'normal normal 400 14px "Montserrat", sans-serif !important',
	color: props.textColor,
	letterSpacing: '0.25px',
	textAlign: props.textAlign,
	marginBottom: props.marginBottom
}))

const Default = styled.p(props => ({
	font: 'normal normal 600 16px "Montserrat", sans-serif !important',
	color: props.textColor,
	letterSpacing: '0.25px',
	textAlign: props.textAlign,
	marginBottom: props.marginBottom
}))

const Typography = ({ variant, children, textAlign, textColor, marginBottom }) => {

	switch (variant) {
		case "h1":
			return <Heading1 textAlign={textAlign} textColor={textColor} marginBottom={marginBottom}>{children}</Heading1>
		case "caption":
			return <Caption textAlign={textAlign} textColor={textColor} marginBottom={marginBottom}>{children}</Caption>
	}
	return <Default textAlign={textAlign} textColor={textColor} marginBottom={marginBottom}>{children}</Default>
}

Typography.defaultProps = {
	variant: 'default',
	children: '',
	textAlign: 'left',
	textColor: 'black',
	marginBottom: '0px',
}

Typography.propTypes = {
	variant: string,
	children: PropTypes.oneOfType([
		PropTypes.node,
		PropTypes.arrayOf(PropTypes.node),
	]),
	textAlign: string,
	textColor: string,
	marginBottom: string,
}


export default Typography