# mvpmatch blogpost app

This showcase app was built in context of an application for a developer position at [mvpmatch](https://mvpmatch.co).
Basically, it consists of two separate services. The backend part is written in nodejs. It is heavily using expressjs.
The frontend part on the other hand is a typical react app which is using react-router and redux-toolkit.

# How-To

### Run with docker
The easiest way to run the app is by running the service containers defined in docker-compose.yml  
Note: You will need [docker](https://docker.com) for this!

<pre>
docker compose up -d
</pre>

The backend service will run on port 8000. The frontend service will run on port 3000.  
To try the app, just open [http://localhost:3000](http://localhost:3000) in your browser.
