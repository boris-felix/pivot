# Pivot App

![](https://github.com/boris-felix/pivot/blob/master/Screen%20Shot%202016-09-07%20at%2012.12.46.png)

## DEVELOPMENT

### REQUIREMENTS

- Node and npm : https://nodejs.org/
- Ruby and compass : http://compass-style.org/install/

When that is done install the npm dependencies :

```
npm install
```

Then compile the css like this

```
compass watch --force
```

And into a separate tab, for running the http server and the js auto compilation do this :

```
npm run start:dev
```

You can now see your application running by opening a page on your prefered browser here :

```
http://localhost:9001/debug.html
```

### RELEASE TO PRODUCTION

Saying that you have used a CI (Travis, Jenkins or Codeship) and configured it properly, the project have to be entirely pushed on the server into the folder of your preference.

Then connect yourself to the server by SSH and go into this folder.

We assume that you have already installed to the complete docker toolbox. If not install it as described here : https://www.docker.com/products/docker#/linux

Then run this :

```
./deploy/run.prod.sh
```

That will install all the dependencies to build the project (Javascripts files and Css linting and minification) and the http server ( Nginx ) and then run the web server. The application will then be accessible on the port 8080 :

```
http://${SERVER IP}:8080
```

### NOTE

You will probably notice that the build are bit long for what it is. If you have the ability to only send to the folder only the public folder with the already compiled files ( let's say that the CI have already done it ), you can just build and start the nginx container :

```
docker-compose build nginx
```

then

```
docker-compose up -d nginx
```

## QUESTIONS :

- What event is triggering the loading of the datas ? Then when this event is triggered, should we update the page constantly or should it be updated only when the user refresh the page ?
- For every items in the list, what information should also be a link ? What should be the identifier for each item ? We may need an ID for each of them.
- On appendix 1, the phone screen is more looking like an account page than a responsive view of the accounts list page. Do a click on any account item lead to this page ? If not, do the phone screenshot is reflecting the selected item ?
- Should the column be sortable ?
- Should the user be able to filter the values by name through a text input ?

