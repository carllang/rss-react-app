import update from 'immutability-helper'
import db from '../db';
import { getUniqueId } from '../helper'

const ADD_FEED = 'ADD_FEED'
const SET_ACTIVE = 'SET_ACTIVE'
const SET_ACTIVE_BY_INDEX = 'SET_ACTIVE_BY_INDEX'
const REMOVE_FEED = 'REMOVE_FEED'
const LOAD_FEEDS = 'LOAD_FEEDS'

const initialState = {
  feeds: [],
  activeFeed: {}
}

export function loadFeeds() {
  return (dispatch) => {
    db.table('feeds')
      .toArray()
      .then((feeds) => {
        dispatch({
          type: LOAD_FEEDS,
          payload: feeds,
        })
      })
  }
}

export function addFeed(response) {
  return (dispatch) => {
    const activeId = getUniqueId()
    const payload = {
      feed: response.feed,
      items: response.items,
      feedId: activeId,
      activeId: activeId
    }
    db.table('feeds')
      .add(payload)
      .then((id) => {
         dispatch({
          type: ADD_FEED,
          ...payload
         })
      })
  }
}

export function setActiveFeedbyIndex(index) {
  console.log('index', index)
  return (dispatch) => {
    db.table('feeds')
    .put({ activeId: index })
    .then((id) => {
      dispatch({
        type: SET_ACTIVE_BY_INDEX,
        index
      })
    })
  }
}

export function removeFeed(index) {
  return {
    type: REMOVE_FEED,
    index
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_FEEDS: 
      return update(state, { feeds: { $set: action.payload }})
    case ADD_FEED:
      return update(state, { feeds: { $push: [{ feed: action.feed, items: action.items, feedId: action.feedId }] }, activeId: { $set: action.feedId }})
    case SET_ACTIVE_BY_INDEX:
      return update(state, { activeId: { $set: action.index }})
    case REMOVE_FEED:
      return update(state, { feeds: { $splice: [[state.feeds.findIndex((elem) => (elem.feedId === action.index)), 1]] }})
    default:
      return state
  }
}