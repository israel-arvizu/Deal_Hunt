# Music Hunt
Music Hunt is a web application for sharing and discovering music albums. It was inspired by Product Hunt. The app will have complete functionaility with the ability to search and view albums. Albums can leave reviews on albums.

Discover new albums here: https://musichunt-app.herokuapp.com/

# Technologies Used
- PostgreSQL
- Heroku
- GitHub
- Express
- Front-End Vanilla JS
- Sequelize
- HTML
- CSS
- PUG

# Images

![alt text](https://github.com/israel-arvizu/Music_Hunt/blob/main/public/SS.jpg)


![alt text](https://github.com/israel-arvizu/Music_Hunt/blob/main/public/ScreenShot2.jpg)

![alt text](https://github.com/israel-arvizu/Music_Hunt/blob/main/public/ScreenShot3.jpg)






# Technical Details

Music Hunt users are able to optimize their navigation by searching through all albums.

The search bar option allows the user to dynamically search with each character that filters each and every existing album and pulls a result list to all be viewed towards the user.


 ``` router.post("/search/results", csrfProtection, asyncHandler(async(req,res,next) => {

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
```




# MVP Features - Music Hunt

1. Profile Page

> Unregistered users can sign up via a generic sign-up submission form.
> User's profile page contains a list posts created by the user.
> Users can save albums which are stored in saved lists.

2. Albums

> Albums fetched from database
> Album description
> Album name & rating

3. Album Reviews

> Users can leave a review via form submission
> Post board contains all reviews about a particular product
> Users can leave a comment on a review

4. Search Bar

> Search Database by user, and/or product

# Bonus

> Option to log in as a demo user
> Users have the option to add and remove albums to favorite list


# Challenges

> Music Hunt is a first in the line of apps we got a chance to make as a team, and in a way the most imporant one. It has been a rollercoaster of a journey, with great highs and some hard lows. After adding finishing touches to our code and making the app look how we envisioned it, we looked back at the amount of code written and realized how much work we have collectively put into it. We learned that starting small and then branching out is a way to go. This project will serve as a great base for the upcoming projects.
