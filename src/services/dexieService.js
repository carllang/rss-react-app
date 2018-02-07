import Dexie from 'dexie'

var db = new Dexie('rssDB')

function doDB(payload) {
  
  db.version(1).stores({ feeds: '++id, feedId' })

  db.open();

  db.feeds.add(payload)
}


export {
  doDB
}