# Polygon

Polygon is management console for Minio written using [Facebook React](http://facebook.github.io/react/) and [Material UI](http://callemall.github.io/material-ui/)

## Building with Grunt

```
$ mkdir -p ${HOME}/.minio
$ cd ${HOME}/.minio
$ git clone http://github.com/minio-io/polygon
$ cd polygon
$ sudo npm install -g grunt-cli

$ npm install
$ grunt
```

## Build Minio

[Build instructions](https://github.com/Minio-io/minio/blob/master/CONTRIBUTING.md)

## Start ``minio`` service

```
$ minio
2015/02/11 00:12:07 Starting HTTP Server on: :9000
2015/02/11 00:12:07 Starting HTTP Server on: :9001
```

Now open a tab on your browser

```
$ sensible-browser http://localhost:9001
```
