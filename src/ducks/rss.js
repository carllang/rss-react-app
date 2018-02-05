import update from 'immutability-helper'
import { getUniqueId } from '../helper'
const ADD_FEED = 'ADD_FEED'
const SET_ACTIVE = 'SET_ACTIVE'
const SET_ACTIVE_BY_INDEX = 'SET_ACTIVE_BY_INDEX'
const REMOVE_FEED = 'REMOVE_FEED'
const initialState = {
  feeds: [],
  activeFeed: {}
}

export function addFeed(response) {
  return {
    type: ADD_FEED,
    feed: response.feed,
    items: response.items
  }
}

export function setActiveFeed(response) {
  return {
    type: SET_ACTIVE,
    feed: response.feed,
    items: response.items
  }
}

export function setActiveFeedbyIndex(index) {
  return {
    type: SET_ACTIVE_BY_INDEX,
    index
  }
}

export function removeFeed(index) {
  return {
    type: REMOVE_FEED,
    index
  }
}

export default function feedme(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_FEED:
      return update(state, { feeds: { $push: [{ feed: action.feed, items: action.items, feedId: getUniqueId() }] }})
    case SET_ACTIVE:
      if (state.feeds.length > 0 ){
        return update(state, { activeFeed: { $set: state.feeds[state.feeds.length-1] }})
      }
      return state
    case SET_ACTIVE_BY_INDEX:
      return update(state, { activeFeed: { $set: state.feeds.filter((elem) => (elem.feedId === action.index))[0] }})
    case REMOVE_FEED:
      return update(state, { feeds: { $splice: [[state.feeds.findIndex((elem) => (elem.feedId === action.index)), 1]] }})
    default:
      return state
  }
}