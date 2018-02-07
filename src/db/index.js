import Dexie from 'dexie';

const db = new Dexie('rssDB');
db.version(1).stores({ feeds: '++id' });

export default db;
