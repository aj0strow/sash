# Sash

Sash is a more refined alternative to ulility belt libraries such as underscore, lodash, mout, and many more. Sash emphasizes composing higher-order expressions instead of pollyfilling javascript objects, which works especially well when dealing with promises. 

```
$ npm install sash --save
```

### API

All functions are higher-order, returning a function.

```javascript
// sash.identity

var greeting = sash.identity('hello');
greeting() == 'hello'


// sash.prop

var json = { data: [ { x: 5, y: 10 } ] };
var getX = sash.prop('data', 0, 'x');
getX(json) == 5


// sash.slice

var json = { lots: {}, of: {}, extra: {}, keys: {}, status: 200, data: [] };
var useful = sash.slice('status', 'data');
useful(json) == { status: 200, data: [] }
```

### Notes

Please share ideas and report bugs. Sash should be intuitive and lead to cleaner code. Otherwise it needs improvement!

License: **MIT**
