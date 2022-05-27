/** @jsx jsx */
import { jsx } from '@emotion/react'
import Typography from "@/atoms/typography"
import { container, infoBox } from './style'

const Container = () => {
	return (
		<div css={container}>
			<div css={infoBox}>
				<Typography variant="h1" marginBottom='16px'>Let us know !</Typography>
				<Typography variant="caption" textAlign="center">Choose your genre to find your favorite anime here!</Typography>
			</div>
			<div>

			</div>
		</div>
	)
}

export default Container