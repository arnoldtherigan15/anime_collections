/** @jsx jsx */
import { jsx } from '@emotion/react'
import Typography from "@/atoms/typography"
import { container, infoBox } from './style'

const Container = () => {
	return (
		<div css={container}>
			<div css={infoBox}>
				<Typography variant="h1">Let us know!</Typography>
				<Typography textAlign="center">Choose your genre to find your favorite anime here!</Typography>
			</div>
		</div>
	)
}

export default Container