import { gql } from '@apollo/client'

export const GET_ALL = () => {
  return gql`
    query {
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
}
