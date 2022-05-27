import { css } from '@emotion/react'

const container = css`
  padding: 40px 30px 20px;
  height: 100vh;
  background: #e3ecf0;
	display: flex;
  flex-direction: column;
  align-items: center;
`

const infoBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
	width: 60vw;
`

export {
	container,
	infoBox
}