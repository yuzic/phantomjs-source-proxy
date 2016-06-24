var system = require('system');

var url = system.args[1];

if (!url || url == '--help') {
    console.log("Usage: <docker-image-run> URL");
    phantom.exit();
}

var page = require('webpage').create();
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';

page.open(url, function (status) {
    if (status !== 'success') {
        console.log('Unable to load the address!');
        phantom.exit();
    } else {
        window.setTimeout(function () {
            // page.render(output);
            console.log(page.content);
            phantom.exit();
        }, 2000);
    }
});
