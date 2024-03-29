# NC NEWS

## About App

This is a React App called FE-NC-News-Gary-Su.

Utilising the API calls: GET, POST, PATCH and DELETE we are able to add functionailty to the app.
To get the data we use HTTP request to interact with the back end of this project which allows the app to display all the data for NC News, the user is able to navigate with the navigation bar to the Home, Articles and Topics page.

Before you can access all the pages you must login in and once you've logged in you can vote, sort articles, add comment and delete comments.

You can also check out the backend for this project [HERE](https://github.com/GxrySu/BE-NC-News-Gary-Su)

**Styled With CSS & HTML**

### Articles page:

- _Shows all articles by date (default)_
- _User can up vote up vote articles_
- _Sort articles by Title, Topic, Author, Date and Votes_
- _Click into any article showing more information_

### Topic Page:

- _Shows all topics_
- _Click into topic and shows all articles for the specified topic_
- _Click into articles and show more information_

### Article Page:

- _Shows all information about the specified article_
- _Shows all comments for the specified article_
- _User can up vote article_
- _User can comment on the article and delete comments created by the user_



## Hosting on local server

Get started by forking and cloning the repository from https://github.com/GxrySu/BE-NC-News-Gary-Su

    $ git clone *your forked repository*

    $ npm install (install all dependencies)
    ---Current Node version: v19.0.0---

    $ npm run build

    $ npm start

## View Deployed App

*Hosted App can be viewed* **_[here](https://fe-nc-news-gary-su.vercel.app/)_**

#### NODE MODULES USED:

    - react
    - react-router-dom
    - axios
