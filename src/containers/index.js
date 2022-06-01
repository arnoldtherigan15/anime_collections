/** @jsx jsx */
import React, { useEffect, useState } from 'react'
import { jsx } from '@emotion/react'
import { useRouter } from 'next/router'
import InfiniteScroll from 'react-infinite-scroller'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Typography from '@/atoms/typography'
import Api from '../services/api'
import {
  container,
  hero,
  imageHero1,
  searchBox,
  main,
  searchInput,
  tab,
  tabItem,
  divider,
  cardContainer,
  cardItem,
  cardTitleBox,
  cardImageBox,
  titleBox,
  imageCircle1,
  imageCircle2,
  imageBook,
  loadingBox,
  buttonCollection,
  textBox,
} from './style'

const Container = () => {
  const [data, setData] = useState({
    popular: [],
    trending: [],
    top: [],
  })
  const [isLoadData, setIsLoadData] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [isSearch, setIsSearch] = useState(false)
  const [searchData, setSearchData] = useState([])
  const [isLoadingSearchText, setIsLoadingSearchText] = useState(false)

  const [userList, setUserList] = useState([])
  const [loadingUser, setLoadingUser] = useState(false)
  const [hasMoreItems, setHasMoreItems] = useState(true)
  const [pageUser, setPageUser] = useState(1)
  const [isFirstLoadUser, setIsFirstLoadUser] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const query = `query {
			trending: Page(page: 1, perPage: 8) {
				media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
					...media
				}
			}
			popular: Page(page: 1, perPage: 8) {
				media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
					...media
				}
			}
			top: Page(page: 1, perPage: 10) {
				media(sort: SCORE_DESC, type: ANIME, isAdult: false) {
					...media
				}
			}
		}
		fragment media on Media {
			id
			title {
				userPreferred
			}
			coverImage {
				extraLarge
				large
				color
			}
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
			bannerImage
			season
			seasonYear
			description
			type
			format
			status(version: 2)
			episodes
			duration
			chapters
			volumes
			genres
			isAdult
			averageScore
			popularity
			mediaListEntry {
				id
				status
			}
			nextAiringEpisode {
				airingAt
				timeUntilAiring
				episode
			}
			studios(isMain: true) {
				edges {
					isMain
					node {
						id
						name
					}
				}
			}
		}			
		`
    setIsLoadData(true)
    Api()
      .post('/', { query })
      .then(({ data }) => {
        setData({
          ...data,
          trending: data.data.trending.media,
          popular: data.data.popular.media,
          top: data.data.top.media,
        })
      })
      .catch((err) => {
        console.log(err, '>>>>>>>>>>> erroor')
      })
      .finally((_) => {
        setIsLoadData(false)
      })
  }, [])

  useEffect(() => {
    if (searchText) {
      const delayDebounceFn = setTimeout(() => {
        const query = `query (
					$page: Int = 1
					$id: Int
					$type: MediaType
					$isAdult: Boolean = false
					$search: String
					$format: [MediaFormat]
					$status: MediaStatus
					$countryOfOrigin: CountryCode
					$source: MediaSource
					$season: MediaSeason
					$seasonYear: Int
					$year: String
					$onList: Boolean
					$yearLesser: FuzzyDateInt
					$yearGreater: FuzzyDateInt
					$episodeLesser: Int
					$episodeGreater: Int
					$durationLesser: Int
					$durationGreater: Int
					$chapterLesser: Int
					$chapterGreater: Int
					$volumeLesser: Int
					$volumeGreater: Int
					$licensedBy: [Int]
					$isLicensed: Boolean
					$genres: [String]
					$excludedGenres: [String]
					$tags: [String]
					$excludedTags: [String]
					$minimumTagRank: Int
					$sort: [MediaSort] = [POPULARITY_DESC, SCORE_DESC]
				) {
					Page(page: $page, perPage: 20) {
						pageInfo {
							total
							perPage
							currentPage
							lastPage
							hasNextPage
						}
						media(
							id: $id
							type: $type
							season: $season
							format_in: $format
							status: $status
							countryOfOrigin: $countryOfOrigin
							source: $source
							search: $search
							onList: $onList
							seasonYear: $seasonYear
							startDate_like: $year
							startDate_lesser: $yearLesser
							startDate_greater: $yearGreater
							episodes_lesser: $episodeLesser
							episodes_greater: $episodeGreater
							duration_lesser: $durationLesser
							duration_greater: $durationGreater
							chapters_lesser: $chapterLesser
							chapters_greater: $chapterGreater
							volumes_lesser: $volumeLesser
							volumes_greater: $volumeGreater
							licensedById_in: $licensedBy
							isLicensed: $isLicensed
							genre_in: $genres
							genre_not_in: $excludedGenres
							tag_in: $tags
							tag_not_in: $excludedTags
							minimumTagRank: $minimumTagRank
							sort: $sort
							isAdult: $isAdult
						) {
							id
							title {
								userPreferred
							}
							coverImage {
								extraLarge
								large
								color
							}
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
							bannerImage
							season
							seasonYear
							description
							type
							format
							status(version: 2)
							episodes
							duration
							chapters
							volumes
							genres
							isAdult
							averageScore
							popularity
							nextAiringEpisode {
								airingAt
								timeUntilAiring
								episode
							}
							mediaListEntry {
								id
								status
							}
							studios(isMain: true) {
								edges {
									isMain
									node {
										id
										name
									}
								}
							}
						}
					}
				}
				`

        setIsLoadingSearchText(true)
        setIsSearch(true)
        const variables = {
          type: 'ANIME',
          search: searchText,
        }
        Api()
          .post('/', { query, variables })
          .then(({ data }) => {
            setSearchData(data.data.Page.media || [])
            router.push('')
          })
          .catch((err) => {
            console.log(err, '>>>>>>>>>>> erroor search')
          })
          .finally((_) => {
            setIsLoadingSearchText(false)
          })
      }, 500)

      return () => clearTimeout(delayDebounceFn)
    }
    if (isSearch && !searchText) {
      setIsSearch(false)
    }
  }, [searchText])

  const loadUserList = (page) => {
    setLoadingUser(true)
    setTimeout(() => {
      const newPage = page + 1
      const query = `query {
				popular: Page(page: ${newPage}, perPage: 8) {
					media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
						...media
					}
				}
			}
			fragment media on Media {
				id
				title {
					userPreferred
				}
				coverImage {
					extraLarge
					large
					color
				}
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
				bannerImage
				season
				seasonYear
				description
				type
				format
				status(version: 2)
				episodes
				duration
				chapters
				volumes
				genres
				isAdult
				averageScore
				popularity
				mediaListEntry {
					id
					status
				}
				nextAiringEpisode {
					airingAt
					timeUntilAiring
					episode
				}
				studios(isMain: true) {
					edges {
						isMain
						node {
							id
							name
						}
					}
				}
			}			
			`
      Api()
        .post('/', { query })

        .then(({ data }) => {
          const newList = userList.concat(data.data.popular.media)

          setUserList(newList)
          setPageUser(newPage)
          if (data.data.popular.media.length === 0) {
            setHasMoreItems(false)
          } else {
            setHasMoreItems(true)
          }
        })
        .catch((err) => {
          console.log(err, '>>>>>>>>>>> erroor')
        })
        .finally((_) => {
          setLoadingUser(false)
        })
      // --
    }, 1500)
  }

  useEffect(() => {
    loadUserList(pageUser)
  }, [])
  const handleScroll = (e) => {
    if (
      Math.ceil(e.target.scrollHeight - e.target.scrollTop) ===
      e.target.clientHeight
    ) {
      if (hasMoreItems) {
        setIsFirstLoadUser(false)
        loadUserList(pageUser)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div css={container} onScroll={handleScroll}>
      <div css={hero}>
        <img css={imageCircle1} src="/img/circle-1.png" alt="circle patter" />
        <img css={imageCircle2} src="/img/circle-2.png" alt="circle patter" />
        <img css={imageBook} src="/img/book-stack.png" alt="book stack" />
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
        <form css={searchBox}>
          <input
            css={searchInput}
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="search..."
          />
        </form>
      </div>
      <div css={divider} />
      <div css={main}>
        {isSearch ? (
          <div>
            <div css={cardContainer}>
              {isLoadingSearchText
                ? [...Array(10)].map((el, idx) => (
                    <div css={cardItem} key={idx}>
                      <SkeletonTheme
                        height="200px"
                        baseColor="#16212f"
                        highlightColor="#ffc641"
                      >
                        <Skeleton count={1} />
                      </SkeletonTheme>
                      <SkeletonTheme
                        height="20px"
                        width="80%"
                        baseColor="#16212f"
                        highlightColor="#ffc641"
                      >
                        <Skeleton count={1} />
                      </SkeletonTheme>
                    </div>
                  ))
                : searchData.map((el, idx) => (
                    <div
                      key={idx}
                      css={cardItem}
                      onClick={() => router.push(`/detail/${el.id}`)}
                    >
                      <a css={cardImageBox}>
                        <img
                          src={el.coverImage.large}
                          loading="lazy"
                          alt="cover image"
                        />
                      </a>
                      <a css={cardTitleBox}>{el.title.userPreferred}</a>
                    </div>
                  ))}
            </div>
          </div>
        ) : (
          <>
            <div css={titleBox}>
              <Typography marginBottom="20px">Top 10 Anime</Typography>
            </div>
            <div css={cardContainer}>
              {isLoadData
                ? [...Array(10)].map((el, idx) => (
                    <div css={cardItem} key={idx}>
                      <SkeletonTheme
                        height="200px"
                        baseColor="#16212f"
                        highlightColor="#ffc641"
                      >
                        <Skeleton count={1} />
                      </SkeletonTheme>
                      <SkeletonTheme
                        height="20px"
                        width="80%"
                        baseColor="#16212f"
                        highlightColor="#ffc641"
                      >
                        <Skeleton count={1} />
                      </SkeletonTheme>
                    </div>
                  ))
                : data.top.map((el, idx) => (
                    <div
                      key={idx}
                      css={cardItem}
                      onClick={() => router.push(`/detail/${el.id}`)}
                    >
                      <div className="rank circle">
                        <span className="hash">#</span>
                        {idx + 1}
                      </div>
                      <a css={cardImageBox}>
                        <img
                          src={el.coverImage.large}
                          loading="lazy"
                          alt="cover image"
                        />
                      </a>
                      <a css={cardTitleBox}>{el.title.userPreferred}</a>
                    </div>
                  ))}
            </div>
            <div css={titleBox}>
              <Typography marginBottom="20px">Trending Now</Typography>
            </div>
            <div css={cardContainer}>
              {isLoadData
                ? [...Array(8)].map((el, idx) => (
                    <div css={cardItem} key={idx}>
                      <SkeletonTheme
                        height="200px"
                        baseColor="#16212f"
                        highlightColor="#ffc641"
                      >
                        <Skeleton count={1} />
                      </SkeletonTheme>
                      <SkeletonTheme
                        height="20px"
                        width="80%"
                        baseColor="#16212f"
                        highlightColor="#ffc641"
                      >
                        <Skeleton count={1} />
                      </SkeletonTheme>
                    </div>
                  ))
                : data.trending.map((el, idx) => (
                    <div
                      key={idx}
                      css={cardItem}
                      onClick={() => router.push(`/detail/${el.id}`)}
                    >
                      <a css={cardImageBox}>
                        <img
                          src={el.coverImage.large}
                          loading="lazy"
                          alt="cover image"
                        />
                      </a>
                      <a css={cardTitleBox}>{el.title.userPreferred}</a>
                    </div>
                  ))}
            </div>
            <div css={titleBox}>
              <Typography marginBottom="20px">All Time Popular</Typography>
            </div>
            <div css={cardContainer}>
              {loadingUser && isFirstLoadUser
                ? [...Array(8)].map((el, idx) => (
                    <div css={cardItem} key={idx}>
                      <SkeletonTheme
                        height="200px"
                        baseColor="#16212f"
                        highlightColor="#ffc641"
                      >
                        <Skeleton count={1} />
                      </SkeletonTheme>
                      <SkeletonTheme
                        height="20px"
                        width="80%"
                        baseColor="#16212f"
                        highlightColor="#ffc641"
                      >
                        <Skeleton count={1} />
                      </SkeletonTheme>
                    </div>
                  ))
                : userList.map((el, idx) => (
                    <div
                      key={idx}
                      css={cardItem}
                      onClick={() => router.push(`/detail/${el.id}`)}
                    >
                      <a css={cardImageBox}>
                        <img
                          src={el.coverImage.large}
                          loading="lazy"
                          alt="cover image"
                        />
                      </a>
                      <a css={cardTitleBox}>{el.title.userPreferred}</a>
                    </div>
                  ))}
              {loadingUser
                ? [...Array(8)].map((el, idx) => (
                    <div css={cardItem} key={idx}>
                      <SkeletonTheme
                        height="200px"
                        baseColor="#16212f"
                        highlightColor="#ffc641"
                      >
                        <Skeleton count={1} />
                      </SkeletonTheme>
                      <SkeletonTheme
                        height="20px"
                        width="80%"
                        baseColor="#16212f"
                        highlightColor="#ffc641"
                      >
                        <Skeleton count={1} />
                      </SkeletonTheme>
                    </div>
                  ))
                : ''}
              {!hasMoreItems ? (
                <div className="text-center">no data anymore ...</div>
              ) : (
                ''
              )}
            </div>
          </>
        )}
        <button
          css={buttonCollection}
          onClick={() => router.push('/collections')}
        >
          <Typography variant="caption" textAlign="center" textColor="white">
            Collections
          </Typography>
        </button>
      </div>
    </div>
  )
}

export default Container
