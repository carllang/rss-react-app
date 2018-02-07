function getRssFeed(url) {
  return fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`)
}

export {
  getRssFeed
}