# search and follow in twitter browser

## overview

search tweet query and follow users of the results
then delete the card DOMs.
So you can continue this flow with only 1 click

## usage

1. follow anybody
2. copy the request as curl
3. replace the url.
```javascript
curl ('.*?')
↓
xhr.open('POST', $1, false);

-H '(.*?): (.*?)'
↓
\nxhr.setRequestHeader('$1', '$2');

--data ('.*?')
↓
\nxhr.send($1);
```
4. paste 3. to  // TODO: [request send]
5. exec javascript on same session of the 1. page
