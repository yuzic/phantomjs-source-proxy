# ABOUT #


Package to fetch js-generated web pages Based on code from https://github.com/fizzka/phantomjs-source-capture

## REQUIREMENTS ##

[Docker](https://www.docker.com/) installed


## USAGE ##

```
composer install
./phantomjs-source-proxy <any phantomjs parametrs> printSource.js <URL>
```

or

```
composer require yuzic/phantomjs-source-proxy
./vendor/bin/phantomjs-source-proxy  <any phantomjs parametrs>  printSource.js <URL>
```
