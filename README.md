# News Summary Challenge

### About the project

This is a single page application that uses Javascript, built in React + Vite, to send requests to the Guardian API which retrieves the latest headlines(along with thumbnails), and displays them on a static page, so that the user may view the latest news.

### Layout of Project

The project consists of Components: Headlines, Header, Footer, App, and  a Util folder which holds the DataService file which is responsible for making the external calls using Axios. For organizational purposes, I created a Test folder which holds the tests for the App and Headlines.

In the DataService.js file is where the external call is made. Normally, an API Key would not be so freely exposed and would typically be placed within a .env file, but for the purposes of this project, which is for learning purposes, I placed the URL and API key within a const variable so that anyone who uses this project/clones it will be able to see how it works. 

In a normal situation, a .env file would be created to conceal the API key.

Component Hierarchy:
  App
    -Header
    -Headlines
      -Thumbnail
      -Article Headline
    -Footer

## Approach


## User Stories

### Standard
```
As a busy politician
So I know what the big stories of the day are
I can see all of today's headlines in one place
```

```
As a busy politician
So that I have something nice to look at
I can see a relevant picture to illustrate each news article when I browse headlines
```


## Mockups

### Headlines page

![Headlines page mockup](/images/news-summary-project-headlines-page-mockup.png)

### Article summary page

![Article page mockup](/images/news-summary-project-article-page-mockup.png)

## How to Use:
```
For Testing Purposes: Open an integrated terminal from 'Test Folder' and in the terminal in Vs Code type: npm run test. You should see that all tests pass.

To view the webpage in your browser: Open an integrated terminal in the root of the project and in the terminal write :

 npm run dev.   

 The server will redirect to portal 3000 where you can view the news. If you want to update your news feed, you can refresh the page and new headlines and thumbnails will be displayed. 


```




