# Image searching application

### Demo
> A demo version of this project is available at http://photo-search.surge.sh/

![screenshot](./public/screenshot.PNG)

### configuration
`actions.js`
```yml pro
  ...
 process.env.REACT_APP_UNSPLASH_ACCESS_KEY  #replace your unsplash access key
  ...
```

### Running application:
```cmd
npm start
```

## Functionality
* Enter your search term in the input bod and press `Enter` key. 
application will fetches the matching images and displays it on screen.
* When there are more than 10 matching images, `Load more` we can click on the button to load more matching images.
