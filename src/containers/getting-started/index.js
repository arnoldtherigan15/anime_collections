/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import Typography from "@/atoms/typography"

const container = css`
  height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	overflow-x: hidden;
`

const image = css`
	width: 300px;
	object-fit: contain;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, 0);
`

const imageBox = css`
  width: 100%;
	height: 35%;
	display: flex;
	justify-content: center;
	padding: 40px 20px 10px;
	background: #16212f;
	position: relative;
`

const textBox = css`
  position: relative;
	top: 10%;
	display: flex;
	flex-direction: column;
	align-items: center;
`

const main = css`
	flex-grow: 1;
`

const imageBook = css`
	position: absolute;
	width: 200px;
	object-fit: contain;
	right: -90px;
	bottom: 30px;
`

const button = css`
  background: #16212f;
	padding: 10px;
	border-radius: 10px;
	margin-bottom: 30px;
	margin: 0 20px 40px;
	box-shadow: 0 4px 2px -2px #d9d4d7;
	cursor: pointer;
`

const imageCircle1 = css`
	position: absolute;
	width: 60px;
	object-fit: contain;
	left: 0;
	top: 60%;
	transform: translate(0, -60%);
`

const imageCircle2 = css`
	position: absolute;
	width: 60px;
	object-fit: contain;
	right: 30px;
	top: 0;
`

const box1 = css`
	width: 75vw;
`

// const cardCategory = css`
// 	width: 80px
// `

const GettingStartedContainer = () => {
	return (
		<div css={container}>
			<div css={imageBox}>
				<img css={imageCircle1} src="/img/circle-1.png" alt="circle patter" />
				<img css={imageCircle2} src="/img/circle-2.png" alt="circle patter" />
				<img css={image} src="/img/people-reading-book.png" alt="men reading illustration" />
				<img css={imageBook} src="/img/book-stack.png" alt="book stack" />
				<div css={textBox}>
					<Typography variant="h1" marginBottom='14px' textAlign="center" textColor="white">Read More Great Books</Typography>
					<div css={box1}>
						<Typography variant="caption" textAlign="center" textColor="white">Choose your genre to find your favorite anime here!</Typography>
					</div>
				</div>
			</div>
			<div css={main}>
				{/* <div css={cardCategory}>

				</div> */}
			</div>
			<div css={button}>
				<Typography variant="h1" textAlign="center" textColor="white">Start Reading</Typography>
			</div>
		</div>
	)
}

export default GettingStartedContainer