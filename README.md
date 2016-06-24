# ABOUT #


Package to fetch js-generated web pages Based on code from https://github.com/fizzka/phantomjs-source-capture

## REQUIREMENTS ##

[Docker](https://www.docker.com/) installed

## ATTENTION ##

Package runs not so fast, so do not use it as default to parse billion pages ;)

## USAGE ##

```
composer install
./phantomjs-source-proxy <PROXY_IP> <URL>
```

or

```
composer require yuzic/phantomjs-source-proxy
./vendor/bin/phantomjs-source-proxy <URL>
```
