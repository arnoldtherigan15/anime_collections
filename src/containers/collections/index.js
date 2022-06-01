/** @jsx jsx */
import { useEffect, useState } from 'react'
import { jsx, css } from '@emotion/react'
import { useRouter } from 'next/router'
import Typography from '@/atoms/typography'
import Navigation from '@/molecules/navigation'
import ArrowBack from '../../../public/img/arrow-left.svg'

const container = css`
  height: 100vh;
  width: 100vw;
  ${
    '' /* display: flex;
	flex-direction: column;
	overflow-x: hidden; */
  }
`

const image = css`
  width: 230px;
  object-fit: contain;
  position: absolute;
  top: 40%;
  right: 0%;
  transform: translate(20%, 0);
`

const imageBox = css`
  width: 100%;
  height: 120px;
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
  ${'' /* flex-grow: 1; */}
  padding-top: 20px;
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
  width: 50px;
  object-fit: contain;
  left: 0;
  top: 55%;
  transform: translate(0, -60%);
`

const imageCircle2 = css`
  position: absolute;
  width: 60px;
  object-fit: contain;
  right: 30px;
  top: 0;
`

const containerCollection = css`
  padding: 0 20px 20px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(105px, 1fr));
  grid-gap: 25px 20px;
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
  .action-box {
    position: absolute;
    display: flex;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
  }
  .button-delete {
    width: 60%;
    background: #e84118;
    border: none;
    padding: 5px 10px;
    ${'' /* box-shadow: 0 4px 2px -2px grey; */}
    border-top-right-radius: 5px;
    cursor: pointer;
  }
  .button-edit {
    width: 40%;
    background: #4cd137;
    border: none;
    padding: 5px 10px;
    ${'' /* box-shadow: 0 4px 2px -2px grey; */}
    border-top-left-radius: 5px;
    cursor: pointer;
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
  position: absolute;
  bottom: 0;
  left: 0;
  margin-top: 10px;
  ${'' /* transition: color .2s ease; */}
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  ${'' /* height: 1.2em;  */}
  white-space: nowrap;
  text-align: center;
  background: #16212f;
  color: white;
  padding: 10px;
  font-size: 14px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`

const box2 = css`
  margin-bottom: 20px;
  display: flex;
  padding-left: 20px;
  .button-create {
    border-radius: 5px;
    border: none;
    background: #16212f;
    box-shadow: 0 4px 2px -2px #d9d4d7;
    cursor: pointer;
    padding: 10px;
  }
`

const modalInitial = css`
  .black-layer {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(30, 39, 46, 0.4);
  }
  .form1-container {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 999;
    transform: translate(-50%, -50%);
    -webkit-animation: fadein 0.7s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.7s; /* Firefox < 16 */
    -ms-animation: fadein 0.7s; /* Internet Explorer */
    -o-animation: fadein 0.7s; /* Opera < 12.1 */
    animation: fadein 0.7s;
    .input1 {
      padding: 20px;
      width: 80vw;
      border-radius: 10px;
      border: 2px solid #16212f;
      box-shadow: 0 14px 30px rgba(22, 33, 47, 0.2),
        0 4px 4px rgba(22, 33, 47, 0.1);
      font-weight: 600;
      ::placeholder {
        color: #16212f;
        text-align: center;
        opacity: 1; /* Firefox */
      }
      :-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: #16212f;
        text-align: center;
        opacity: 1;
      }
      ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: #16212f;
        text-align: center;
        opacity: 1;
      }
    }
    .imgForm1 {
      width: 160px;
      object-fit: contain;
      position: absolute;
      top: 5%;
      left: 50%;
      transform: translate(-50%, -90%);
      z-index: 2;
    }
    @keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Firefox < 16 */
    @-moz-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Safari, Chrome and Opera > 12.1 */
    @-webkit-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Internet Explorer */
    @-ms-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Opera < 12.1 */
    @-o-keyframes fadein {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`

const CollectionsContainer = () => {
  const router = useRouter()
  const [collections, setCollections] = useState([])
  const [isShowModal1, setIsShowModal1] = useState(false)
  const [isShowModal2, setIsShowModal2] = useState(false)
  const [isShowModal3, setIsShowModal3] = useState(false)
  const [colName, setColName] = useState('')
  const [editColNewName, setEditColNewName] = useState('')
  const [deleteColName, setDeleteColName] = useState('')
  const [editColName, setEditColName] = useState('')
  const [deleteText, setDeleteText] = useState('')

  useEffect(() => {
    if (!localStorage.getItem('collections')) {
      localStorage.setItem('collections', JSON.stringify([]))
    }
    setCollections(JSON.parse(localStorage.getItem('collections')))
  }, [])

  const openModal1 = () => {
    // if (!collections.length) setIsShowModal1(true)
    setIsShowModal1(true)
    // else setIsShowModal2(true)
  }

  const onCreateCollection = () => {
    openModal1()
  }

  const onSubmitCollection = (e) => {
    e.preventDefault()
    const isExists = collections.filter((el) => el.name === colName).length
      ? true
      : false
    if (isExists) {
      // alert
    } else {
      setCollections([...collections, { name: colName, data: [] }])
      localStorage.setItem(
        'collections',
        JSON.stringify([...collections, { name: colName, data: [] }])
      )
      setIsShowModal1(false)
    }
    setColName('')
  }

  const onOpenDeleteModal = (name) => {
    setDeleteColName(name)
    setIsShowModal2(true)
  }
  const onOpenEditModal = (name) => {
    setEditColName(name)
    setEditColNewName(name)
    setIsShowModal3(true)
  }

  const onDeleteCollection = (e) => {
    e.preventDefault()
    if (deleteText === 'delete') {
      const foundIndex = collections.findIndex((x) => x.name == deleteColName)
      let tempData = [...collections]
      tempData.splice(foundIndex, 1)
      setCollections(tempData)
      localStorage.setItem('collections', JSON.stringify(tempData))
      setIsShowModal2(false)
    }
  }

  const onEditCollection = (e) => {
    e.preventDefault()
    const foundIndex = collections.findIndex((x) => x.name == editColName)
    let tempData = [...collections]
    tempData[foundIndex].name = editColNewName
    setCollections(tempData)
    localStorage.setItem('collections', JSON.stringify(tempData))
    setIsShowModal3(false)
  }

  return (
    <div css={container}>
      <div css={imageBox}>
        <Navigation onNav={() => router.push('/')}>
          <ArrowBack />
        </Navigation>
        <img css={imageCircle1} src="/img/circle-1.png" alt="circle patter" />
        <img css={imageCircle2} src="/img/circle-2.png" alt="circle patter" />
        <div css={textBox}>
          <Typography
            variant="h1"
            marginBottom="14px"
            textAlign="center"
            textColor="white"
          >
            Anime Collections
          </Typography>
        </div>
      </div>
      <div css={main}>
        <div css={box2}>
          <button className="button-create" onClick={onCreateCollection}>
            <Typography variant="caption" textAlign="center" textColor="white">
              Create new collection
            </Typography>
          </button>
        </div>
        <div css={containerCollection}>
          {collections.map((el, idx) => (
            <div css={cardItem}>
              <div className="action-box">
                <button
                  className="button-edit"
                  onClick={() => onOpenEditModal(el.name)}
                >
                  <Typography
                    variant="caption"
                    textAlign="center"
                    textColor="white"
                  >
                    Edit
                  </Typography>
                </button>
                <button
                  className="button-delete"
                  onClick={() => onOpenDeleteModal(el.name)}
                >
                  <Typography
                    variant="caption"
                    textAlign="center"
                    textColor="white"
                  >
                    delete
                  </Typography>
                </button>
              </div>
              <a
                css={cardImageBox}
                onClick={() => router.push(`/collections/${el.name}`)}
              >
                <img
                  src={el?.data[0]?.coverImage?.large || '/img/default.jpeg'}
                  alt="cover image"
                />
              </a>
              <div
                css={cardTitleBox}
                onClick={() => router.push(`/collections/${el.name}`)}
              >
                {el.name}
              </div>
            </div>
          ))}
        </div>
      </div>
      {isShowModal1 && (
        <div css={modalInitial}>
          <div className="black-layer" onClick={() => setIsShowModal1(false)} />
          <div className="form1-container">
            <form className="form-box1" onSubmit={onSubmitCollection}>
              <img
                className="imgForm1"
                src="/img/men-smile.png"
                alt="men smile"
              />
              <input
                className="input1"
                type="text"
                value={colName}
                placeholder="Type the collection name ?"
                onChange={(e) =>
                  setColName(e.target.value.replace(/[^\w\s]/gi, ''))
                }
              />
            </form>
          </div>
        </div>
      )}
      {isShowModal2 && (
        <div css={modalInitial}>
          <div className="black-layer" onClick={() => setIsShowModal2(false)} />
          <div className="form1-container">
            <form className="form-box1" onSubmit={onDeleteCollection}>
              <img
                className="imgForm1"
                src="/img/men-smile.png"
                alt="men smile"
              />
              <input
                className="input1"
                type="text"
                placeholder="Type delete to confirm"
                onChange={(e) => setDeleteText(e.target.value)}
              />
            </form>
          </div>
        </div>
      )}
      {isShowModal3 && (
        <div css={modalInitial}>
          <div className="black-layer" onClick={() => setIsShowModal3(false)} />
          <div className="form1-container">
            <form className="form-box1" onSubmit={onEditCollection}>
              <img
                className="imgForm1"
                src="/img/men-smile.png"
                alt="men smile"
              />
              <input
                className="input1"
                type="text"
                value={editColNewName}
                placeholder="enter new collection name"
                onChange={(e) => setEditColNewName(e.target.value)}
              />
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default CollectionsContainer
