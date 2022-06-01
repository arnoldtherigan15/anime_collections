/** @jsx jsx */
import React, { useEffect, useState } from 'react'
import { jsx, css } from '@emotion/react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Typography from '@/atoms/typography'
import { useRouter } from 'next/router'
import Navigation from '@/molecules/navigation'
import Api from '../services/api'
import ArrowBack from '../../public/img/arrow-left.svg'

const container = css`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  background: #edf1f5;
`

const header = css`
  width: 100vw;
  height: 210px;
  position: relative;

  .banner-image {
    width: 100%;
    height: 210px;
    object-fit: cover;
  }
  .white-bg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: inset 0 -10px 50px -5px #000000;
  }
  .cover-image {
    position: absolute;
    margin-top: -100px;
    padding: 0 20px;
    @media (max-width: 767px) {
      align-items: flex-end;
    }
    display: flex;
    width: 100%;
    & .cover-image-body {
      display: flex;
      flex-direction: column;
    }
    & .header-container {
      margin-top: 120px;
      margin-left: 20px;
      display: flex;
      flex-grow: 1;
      flex-direction: column;
      padding-right: 40px;
      @media (max-width: 767px) {
        margin-left: 20px;
        padding-right: 0;
      }
      .header-large {
        @media (max-width: 767px) {
          display: none;
        }
      }
    }
    & > .cover-image-left {
      width: 140px;
      height: 197px;
      border-radius: 5px;
      & img {
        width: 100%;
        height: 100%;
        box-shadow: 0 14px 30px rgba(22, 33, 47, 0.15),
          0 4px 4px rgba(22, 33, 47, 0.2);
      }
      @media (min-width: 768px) {
        box-shadow: none;
        width: 243px !important;
        height: 344px !important;
        & img {
          width: 243px !important;
          height: 344px !important;
        }
      }
    }
    & .button-add-large {
      width: 243px !important;
      margin-top: 10px;
      @media (max-width: 768px) {
        display: none;
      }
    }
    & .button-add {
      background: #16212f;
      border: none;
      color: white;
      padding: 10px 20px;
      border-radius: 5px;
      width: 100%;
    }
    & .button-add-mobile {
      @media (min-width: 768px) {
        display: none;
        margin-left: 20px;
        margin-bottom: 120px;
      }
    }
  }
`

const loaderLarge = css`
  @media (max-width: 767px) {
    display: none;
  }
`
const loaderSmall = css`
  @media (min-width: 768px) {
    display: none;
  }
`

const mainLarge = css`
  padding: 20px;
  width: 100%;
  @media (max-width: 767px) {
    display: none;
  }
  .box {
    padding: 20px 10px;
    border-radius: 5px;
    background: white;
  }
  .loading-box1 {
    margin-top: 20px;
  }
  .info-box {
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    & > div {
      min-width: 135px;
      margin-right: 20px;
    }
    & > div:not(:last-child) {
      margin-right: 10px;
    }
    width: 62vw;
    @media (min-width: 998px) {
      width: 70vw;
    }
    @media (min-width: 1024px) {
      width: 75vw;
    }
    overflow-x: auto;
  }
  .desc-box {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .relation-box {
    width: 62vw;
    @media (min-width: 998px) {
      width: 70vw;
    }
    @media (min-width: 1024px) {
      width: 75vw;
    }
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    .card-relation {
      display: flex;
      .img-relation {
        width: 85px;
        height: 115px;
      }
      .relation-body {
        width: 160px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: white;
        p {
          font-size: 12px;
        }
        .relation-body-bot {
          display: flex;
        }
      }
    }
    .card-relation:not(:last-child) {
      margin-right: 20px;
    }
  }
  .character-box {
    margin-top: 20px;
    .card-character {
      display: flex;
      justify-content: space-between;
      background: white;
      border-radius: 5px;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      .left-char {
        display: flex;
        > img {
          width: 60px;
          height: 83px;
          object-fit: cover;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        > div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px;
          & p:not(:last-child) {
            font-weight: bold !important;
          }
        }
      }
      .right-char {
        display: flex;
        > img {
          width: 60px;
          height: 83px;
          object-fit: cover;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        > div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px;
          & p:not(:last-child) {
            font-weight: bold !important;
          }
        }
      }
    }
  }
`

const main = css`
  padding: 20px;
  @media (min-width: 768px) {
    display: none;
  }
  @media (max-width: 768px) {
    margin-top: 100px;
  }
  .box {
    padding: 20px 10px;
    border-radius: 5px;
    background: white;
  }
  .loading-box1 {
    margin-top: 20px;
  }
  .info-box {
    margin-top: 20px;
    display: flex;
    & > div {
      min-width: 100px;
    }
    & > div:not(:last-child) {
      margin-right: 10px;
    }
    width: 100%;
    overflow-x: auto;
  }
  .desc-box {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .relation-box {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    .card-relation {
      display: flex;
      .img-relation {
        width: 85px;
        height: 115px;
      }
      .relation-body {
        width: 160px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: white;
        p {
          font-size: 12px;
        }
        .relation-body-bot {
          display: flex;
        }
      }
    }
    .card-relation:not(:last-child) {
      margin-right: 20px;
    }
  }
  .character-box {
    margin-top: 20px;
    .card-character {
      display: flex;
      justify-content: space-between;
      background: white;
      border-radius: 5px;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      .left-char {
        display: flex;
        > img {
          width: 60px;
          height: 83px;
          object-fit: cover;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
        }
        > div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px;
          & p:not(:last-child) {
            font-weight: bold !important;
          }
        }
      }
      .right-char {
        display: flex;
        > img {
          width: 60px;
          height: 83px;
          object-fit: cover;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
        }
        > div {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 10px;
          & p:not(:last-child) {
            font-weight: bold !important;
          }
        }
      }
    }
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
    z-index: 99;
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

const DetailContainer = () => {
  const router = useRouter()
  const { id } = router.query
  const [data, setData] = useState()
  const [isLoadData, setIsLoadData] = useState(false)
  const [isShowModal1, setIsShowModal1] = useState(false)
  const [colName, setColName] = useState('')
  const [collections, setCollections] = useState([])

  useEffect(() => {
    if (id) {
      const query = `query ($id: Int, $isAdult: Boolean) {
				Media(id: $id, isAdult: $isAdult) {
					id
					title {
						userPreferred
						english
					}
					coverImage {
						large
					}
          status
          format
          episodes
          duration
          season
          genres
					bannerImage
					startDate {
						year
						month
						day
					}
					endDate {
						year
						month
						day
					}
					description
					genres
					meanScore
					averageScore
					popularity
					favourites
					relations {
						edges {
							id
							relationType(version: 2)
							node {
								id
								title {
									english
								}
								format
								type
								status(version: 2)
								bannerImage
								coverImage {
									large
								}
							}
						}
					}
					characterPreview: characters(perPage: 6, sort: [ROLE, RELEVANCE, ID]) {
						edges {
							id
							role
							name
							voiceActors(language: JAPANESE, sort: [RELEVANCE, ID]) {
								id
								name {
									userPreferred
								}
								language: languageV2
								image {
									large
								}
							}
							node {
								id
								name {
									userPreferred
								}
								image {
									large
								}
							}
						}
					}
					staffPreview: staff(perPage: 8, sort: [RELEVANCE, ID]) {
						edges {
							id
							role
							node {
								id
								name {
									userPreferred
								}
								language: languageV2
								image {
									large
								}
							}
						}
					}
					studios {
						edges {
							isMain
							node {
								id
								name
							}
						}
					}
					reviewPreview: reviews(perPage: 2, sort: [RATING_DESC, ID]) {
						pageInfo {
							total
						}
						nodes {
							id
							summary
							rating
							ratingAmount
							user {
								id
								name
								avatar {
									large
								}
							}
						}
					}
					recommendations(perPage: 7, sort: [RATING_DESC, ID]) {
						pageInfo {
							total
						}
						nodes {
							id
							rating
							userRating
							mediaRecommendation {
								id
								title {
									userPreferred
								}
								format
								type
								status(version: 2)
								bannerImage
								coverImage {
									large
								}
							}
							user {
								id
								name
								avatar {
									large
								}
							}
						}
					}
					streamingEpisodes {
						site
						title
						thumbnail
						url
					}
					trailer {
						id
						site
					}
					rankings {
						id
						rank
						type
						format
						year
						season
						allTime
						context
					}
					tags {
						id
						name
						description
						rank
						isMediaSpoiler
						isGeneralSpoiler
						userId
					}
					mediaListEntry {
						id
						status
						score
					}
					stats {
						statusDistribution {
							status
							amount
						}
						scoreDistribution {
							score
							amount
						}
					}
				}
			}
					
			`
      let variables = {
        isAdult: false,
        id,
      }
      setIsLoadData(true)
      Api()
        .post('/', { query, variables })
        .then(({ data }) => {
          setData(data.data.Media)
        })
        .catch((err) => {
          console.log(err, '>>>>>>>>>>> erroor')
        })
        .finally((_) => {
          setIsLoadData(false)
        })
    }
  }, [id])

  useEffect(() => {
    setCollections(JSON.parse(localStorage.getItem('collections')))
  }, [])

  const openModal1 = () => {
    setIsShowModal1(true)
  }

  const submitColFirst = (e) => {
    e.preventDefault()
    const isExists = collections.filter((el) => el.name === colName).length
      ? true
      : false
    if (isExists) {
      const foundIndex = collections.findIndex((x) => x.name == colName)
      let tempData = [...collections]
      tempData[foundIndex].data.push(data)
      setCollections(tempData)
      localStorage.setItem('collections', JSON.stringify(tempData))
      setIsShowModal1(false)
      router.push('/collections')
    } else {
      setCollections([...collections, { name: colName, data: [data] }])
      localStorage.setItem(
        'collections',
        JSON.stringify([...collections, { name: colName, data: [data] }])
      )
      setIsShowModal1(false)
      router.push('/collections')
    }
    setColName('')
  }

  return (
    <>
      <div css={container}>
        <div css={header}>
          <Navigation onNav={() => router.back()}>
            <ArrowBack />
          </Navigation>
          <div className="white-bg" />
          {isLoadData ? (
            <SkeletonTheme
              height="210px"
              baseColor="#16212f"
              highlightColor="#ffc641"
            >
              <Skeleton count={1} />
            </SkeletonTheme>
          ) : (
            <img
              className="banner-image"
              src={data?.bannerImage || '/img/default1.jpeg'}
              alt="banner image"
            />
          )}
          <div className="cover-image">
            {isLoadData ? (
              <>
                <div css={loaderSmall}>
                  <SkeletonTheme
                    height="198px"
                    width="140px"
                    baseColor="#16212f"
                    highlightColor="#ffc641"
                  >
                    <Skeleton count={1} />
                  </SkeletonTheme>
                </div>
                <div css={loaderLarge}>
                  <SkeletonTheme
                    height="344px"
                    width="243px"
                    baseColor="#16212f"
                    highlightColor="#ffc641"
                  >
                    <Skeleton count={1} />
                  </SkeletonTheme>
                </div>
              </>
            ) : (
              <div className="cover-image-left">
                <img src={data?.coverImage?.large} alt="image cover" />
                <button
                  className="button-add button-add-large"
                  onClick={openModal1}
                >
                  Add to collections
                </button>
              </div>
            )}
            <div className="cover-image-body">
              <div className="header-container">
                <div className="header-large">
                  {isLoadData ? (
                    <SkeletonTheme
                      // height="198px"
                      width="62vw"
                      baseColor="#16212f"
                      highlightColor="#ffc641"
                    >
                      <Skeleton count={11} />
                    </SkeletonTheme>
                  ) : (
                    <>
                      <Typography marginBottom="20px">
                        {data?.title?.english}
                      </Typography>
                      <div className="box">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: data?.description,
                          }}
                        ></p>
                      </div>
                    </>
                  )}
                </div>
                <button
                  className="button-add button-add-mobile"
                  onClick={openModal1}
                >
                  Add to collections
                </button>
              </div>
              <div css={mainLarge}>
                {isLoadData ? (
                  <SkeletonTheme
                    height="20px"
                    width="62vw"
                    baseColor="#16212f"
                    highlightColor="#ffc641"
                  >
                    <Skeleton count={1} />
                  </SkeletonTheme>
                ) : (
                  <Typography>{data?.title?.english}</Typography>
                )}

                {isLoadData ? (
                  <div className="loading-box1">
                    <SkeletonTheme
                      height="75px"
                      width="62vw"
                      baseColor="#16212f"
                      highlightColor="#ffc641"
                    >
                      <Skeleton count={1} />
                    </SkeletonTheme>
                  </div>
                ) : (
                  <div className="info-box box">
                    <div>
                      <Typography variant="caption">Format</Typography>
                      <Typography>{data?.format || '- '}</Typography>
                    </div>
                    <div>
                      <Typography variant="caption">Episodes</Typography>
                      <Typography>{data?.episodes || '- '}</Typography>
                    </div>
                    <div>
                      <Typography variant="caption">
                        Episodes Duration
                      </Typography>
                      <Typography>{data?.duration || '- '} min</Typography>
                    </div>
                    <div>
                      <Typography variant="caption">Status</Typography>
                      <Typography>{data?.status || '- '}</Typography>
                    </div>
                    <div>
                      <Typography variant="caption">Season</Typography>
                      <Typography>{data?.season || '- '}</Typography>
                    </div>
                    <div>
                      <Typography variant="caption">Avg Score</Typography>
                      <Typography>{data?.averageScore || '- '}%</Typography>
                    </div>
                    <div>
                      <Typography variant="caption">Mean Score</Typography>
                      <Typography>{data?.meanScore || '-'}%</Typography>
                    </div>
                    <div>
                      <Typography variant="caption">Popularity</Typography>
                      <Typography>{data?.popularity || '- '}</Typography>
                    </div>
                    <div>
                      <Typography variant="caption">Favorites</Typography>
                      <Typography>{data?.favourites || '- '}</Typography>
                    </div>
                    <div>
                      <Typography variant="caption">Genres</Typography>
                      <Typography>{data?.genres.join(',') || '- '}</Typography>
                    </div>
                  </div>
                )}

                <Typography marginBottom="20px">Relations</Typography>
                <div className="relation-box">
                  {isLoadData ? (
                    <SkeletonTheme
                      height="75px"
                      width="300px"
                      baseColor="#16212f"
                      highlightColor="#ffc641"
                    >
                      <Skeleton count={1} />
                    </SkeletonTheme>
                  ) : (
                    data?.relations?.edges.map((el) => (
                      <div
                        key={el.node.id}
                        className="card-relation"
                        onClick={() => router.push(`/detail/${el.node.id}`)}
                      >
                        <img
                          className="img-relation"
                          src={el.node.coverImage.large}
                          alt="image cover"
                        />
                        <div className="relation-body">
                          <div>
                            <p>{el.relationType}</p>
                            <p>{el.node.title.english}</p>
                          </div>
                          <div className="relation-body-bot">
                            <p>{el.node.format}</p>
                            <p>.</p>
                            <p>{el.node.status}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="character-box">
                  <Typography marginBottom="20px">Characters</Typography>
                  {data?.characterPreview.edges.map((el, idx) => (
                    <div className="card-character" key={idx}>
                      <div className="left-char">
                        <img src={el.node.image.large} alt="char" />
                        <div>
                          <Typography variant="caption" textColor="#16212f">
                            {el.node.name.userPreferred}
                          </Typography>
                          <Typography variant="caption">{el.role}</Typography>
                        </div>
                      </div>
                      <div className="right-char">
                        <div>
                          <Typography variant="caption" textAlign="right">
                            {el.voiceActors[0].name.userPreferred}
                          </Typography>
                          <Typography variant="caption" textAlign="right">
                            {el.voiceActors[0].language}
                          </Typography>
                        </div>
                        <img src={el.voiceActors[0].image.large} alt="char" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div css={main}>
          {isLoadData ? (
            <SkeletonTheme
              height="20px"
              width="100px"
              baseColor="#16212f"
              highlightColor="#ffc641"
            >
              <Skeleton count={1} />
            </SkeletonTheme>
          ) : (
            <Typography>{data?.title?.english}</Typography>
          )}

          {isLoadData ? (
            <div className="loading-box1">
              <SkeletonTheme
                height="75px"
                baseColor="#16212f"
                highlightColor="#ffc641"
              >
                <Skeleton count={1} />
              </SkeletonTheme>
            </div>
          ) : (
            <div className="info-box box">
              <div>
                <Typography variant="caption">Format</Typography>
                <Typography>{data?.format || '- '}</Typography>
              </div>
              <div>
                <Typography variant="caption">Status</Typography>
                <Typography>{data?.status || '- '}</Typography>
              </div>
              <div>
                <Typography variant="caption">Avg Score</Typography>
                <Typography>{data?.averageScore || '- '}%</Typography>
              </div>
              <div>
                <Typography variant="caption">Mean Score</Typography>
                <Typography>{data?.meanScore || '-'}%</Typography>
              </div>
              <div>
                <Typography variant="caption">Popularity</Typography>
                <Typography>{data?.popularity || '- '}</Typography>
              </div>
              <div>
                <Typography variant="caption">Favorites</Typography>
                <Typography>{data?.favourites || '- '}</Typography>
              </div>
            </div>
          )}

          <div className="desc-box">
            {isLoadData ? (
              <SkeletonTheme
                height="20px"
                width="100px"
                baseColor="#16212f"
                highlightColor="#ffc641"
              >
                <Skeleton count={1} />
              </SkeletonTheme>
            ) : (
              <Typography marginBottom="20px">Description</Typography>
            )}
            {isLoadData ? (
              <div className="loading-box1">
                <SkeletonTheme
                  height="70vw"
                  baseColor="#16212f"
                  highlightColor="#ffc641"
                >
                  <Skeleton count={1} />
                </SkeletonTheme>
              </div>
            ) : (
              <div className="box">
                <p
                  dangerouslySetInnerHTML={{
                    __html: data?.description,
                  }}
                ></p>
              </div>
            )}
          </div>
          <Typography marginBottom="20px">Relations</Typography>
          <div className="relation-box">
            {isLoadData ? (
              <SkeletonTheme
                height="75px"
                width="300px"
                baseColor="#16212f"
                highlightColor="#ffc641"
              >
                <Skeleton count={1} />
              </SkeletonTheme>
            ) : (
              data?.relations?.edges.map((el) => (
                <div
                  key={el.node.id}
                  className="card-relation"
                  onClick={() => router.push(`/detail/${el.node.id}`)}
                >
                  <img
                    className="img-relation"
                    src={el.node.coverImage.large}
                    alt="image cover"
                  />
                  <div className="relation-body">
                    <div>
                      <p>{el.relationType}</p>
                      <p>{el.node.title.english}</p>
                    </div>
                    <div className="relation-body-bot">
                      <p>{el.node.format}</p>
                      <p>.</p>
                      <p>{el.node.status}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="character-box">
            <Typography marginBottom="20px">Characters</Typography>
            {data?.characterPreview.edges.map((el, idx) => (
              <div className="card-character" key={idx}>
                <div className="left-char">
                  <img src={el.node.image.large} alt="char" />
                  <div>
                    <Typography variant="caption" textColor="#16212f">
                      {el.node.name.userPreferred}
                    </Typography>
                    <Typography variant="caption">{el.role}</Typography>
                  </div>
                </div>
                <div className="right-char">
                  <div>
                    <Typography variant="caption" textAlign="right">
                      {el.voiceActors[0].name.userPreferred}
                    </Typography>
                    <Typography variant="caption" textAlign="right">
                      {el.voiceActors[0].language}
                    </Typography>
                  </div>
                  <img src={el.voiceActors[0].image.large} alt="char" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {isShowModal1 && (
          <div css={modalInitial}>
            <div
              className="black-layer"
              onClick={() => setIsShowModal1(false)}
            />
            <div className="form1-container">
              <form className="form-box1" onSubmit={submitColFirst}>
                <img
                  className="imgForm1"
                  src="/img/men-smile.png"
                  alt="men smile"
                />
                <input
                  className="input1"
                  type="text"
                  value={colName}
                  placeholder="Type the collection name"
                  onChange={(e) =>
                    setColName(e.target.value.replace(/[^\w\s]/gi, ''))
                  }
                />
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default DetailContainer
