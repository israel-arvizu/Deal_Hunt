# Music_Hunt
Music Hunt is a web application for sharing and discovering music albums. It was inspired by Product Hunt.

Discover new albums here: <LIVELINK>

Technologies Used
-JSON API
-PostgreSQL
-Heroku
-GitHub

Images













Technical Details

Music Hunt users are able to optimize their navigation by searching through all albums.

The search bar option allows the user to dynamically search with each character that filters each and every existing album and pulls a result list to all be viewed towards the user.


 router.post("/search/results", csrfProtection, asyncHandler(async(req,res,next) => {

  const {SearchName} = req.body

  let searchArray = SearchName.split(' ')
  let searchFilters = []
  const albumResults = await db.Album.findAll()
    albumResults.map(album => {
      searchArray.map(filtered => {
        if (album.name.toLowerCase().includes(filtered.toLowerCase())) {
        searchFilters.push(album)
      }

      })
    })

  if(req.session.auth) {
    const {userId} = req.session.auth;
    res.render('search-results', {
      title: 'search-results',
      errors: [],
      csrfToken: req.csrfToken(),
      searchFilters,
      userId
    })
  } else {
    res.render('guest-search-results', {
      title: 'Search-Results',
      errors: [],
      csrfToken: req.csrfToken(),
      searchFilters
    })
  }
}))





Features
-Add / Update / Delete reviews
-Able to add albums to a favorite list
-See featured albums of the month





struggled,
keyfeatures,
reflection,
learning prcoess,
experienece,
technologies USED :

{
summary

techno used

key features

code snippets : learning process, img , gifs,

REFLECTION
}
