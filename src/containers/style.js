import { css } from '@emotion/react'

const container = css`
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background: #edf1f5;
`

const hero = css`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  padding: 40px 20px 10px;
  background: #16212f;
  position: relative;
`

const imageHero1 = css`
  width: 160px;
  object-fit: contain;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
`

const textBox = css`
  position: relative;
  top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 370px) {
    > h1 {
      font-size: 26px !important;
    }
  }
`

const searchBox = css`
  width: 90%;
  height: 80px;
  box-shadow: 0 14px 30px rgba(22, 33, 47, 0.2), 0 4px 4px rgba(22, 33, 47, 0.1);
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%, 0);
  background: white;
  z-index: 1;
  border-radius: 10px;
  height: 42px;
`

const searchInput = css`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  padding: 0 20px;
  &:focus {
    outline: none;
  }
`

const main = css`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
`

const divider = css`
  width: 100%;
  height: 40px;
`

const tab = css`
  overflow-x: auto;
  width: 100%;
  display: flex;
  padding-left: 9vw;
  div:not(:last-child) {
    margin-right: 10px;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`

const tabItem = css`
  background: #16212f;
  padding: 8px 15px;
  border-radius: 10px;
  ${'' /* height: 20px; */}
  white-space: nowrap;
  cursor: pointer;
`

const cardContainer = css`
  padding: 0 20px 20px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
  grid-gap: 25px 20px;
  @media (max-width: 1540px) {
    grid-gap: 25px 20px;
    grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));
  }
  @media (max-width: 1065px) {
    grid-gap: 25px 14px;
    grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));
  }
  @media (max-width: 1040px) {
    padding: 0 20px;
    grid-template-columns: repeat(auto-fill, minmax(138px, 1fr));
    grid-gap: 25px 20px;
    justify-content: center;
  }
  @media (max-width: 760px) {
    grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
    grid-gap: 25px 20px;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-gap: 20px 12px;
    padding: 0 10px;
  }
`

const cardItem = css`
  width: 100%;
  display: grid;
  grid-template-rows: -webkit-min-content auto;
  grid-template-rows: min-content auto;
  position: relative;
  img {
    width: 100%;
  }
  .rank {
    height: 30px;
    top: -5px;
    width: 30px;
    background: #16212f;
    color: white;
    display: flex;
    left: -8px;
    overflow: hidden;
    position: absolute;
    z-index: 6;
    border-radius: 100%;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    .hash {
      font-size: 0.8rem;
    }
  }
`
const cardImageBox = css`
  height: 200px;
  border-radius: 5px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  width: 100%;
  text-decoration: none;
  box-shadow: 0 14px 30px rgba(22, 33, 47, 0.15),
    0 4px 4px rgba(22, 33, 47, 0.2);
  outline: 0;
  img {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    vertical-align: text-top;
    border-style: none;
  }
`

const cardTitleBox = css`
  position: relative;
  margin-top: 10px;
  overflow: hidden;
  transition: color 0.2s ease;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  text-decoration: none;
  outline: 0;
`

const titleBox = css`
  padding: 0 20px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  @media (max-width: 400px) {
    padding: 0 10px;
  }
  .button-title {
    cursor: pointer;
  }
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

const imageBook = css`
  position: absolute;
  width: 150px;
  object-fit: contain;
  right: -90px;
  bottom: 30px;
`

const loadingBox = css`
  display: flex;
  flex-direction: column;
  background: red;
  width: 100px;
  height: 100px;
`

const buttonCollection = css`
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 2;
  background: #16212f;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 14px 30px rgba(22, 33, 47, 0.2), 0 4px 4px rgba(22, 33, 47, 0.1);
`

export {
  container,
  searchBox,
  hero,
  imageHero1,
  main,
  tab,
  tabItem,
  divider,
  cardContainer,
  cardItem,
  cardTitleBox,
  cardImageBox,
  titleBox,
  searchInput,
  imageCircle1,
  imageCircle2,
  imageBook,
  loadingBox,
  buttonCollection,
  textBox,
}
