# Service worker and caching

Service worker and caching helps us in accessing webpages even in offline mode, instead of the 404 or the mario game page that shows up.
learn about service workers and how to use them to cache pages for offline viewing. Service workers are a huge aspect of PWA's 
or "Progressive Web Apps". We will add a service worker to a tiny sample website so that if the connection goes out, 
users can still view the pages.

* [Utube](https://www.youtube.com/watch?v=ksXwaWHCW6k)

## Learnings - Errors encountered
* https://stackoverflow.com/a/68310400 [could not register in main.js, hence moved to index.html; stack overflow suggestion]
* navigator is like browser object
* https://stackoverflow.com/questions/66529102/uncaught-in-promise-typeerror-failed-to-execute-cache-on-addall-request

## Caching Strategy:
```
Cache all our pages including the assets (js,css)
Two ways to achieve:
a] cache individual pages
b] cache the entire response [website]
```

### Commands

```
mkdir service-worker-caching
cd service-worker-caching

mkdir css
mkdir js

cd . > index.html
cd . > about.html
```

### Git commands
```
echo "# mtalikoti.github.io" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M master
git remote add origin https://github.com/MahanteshTalikoti-git/mtalikoti.github.io.git
git push -u origin master
```

### mysqlsh commands
```
mysqlsh
\connect social-media-user@localhost:3306
\sql
use social-media-database
select * from user_details;
select * from post;
\quit
```

