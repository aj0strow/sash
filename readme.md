# Sash

Sash is a more refined alternative to ulility belt libraries such as underscore, lodash, mout, and many more. Sash emphasizes composing higher-order expressions instead of pollyfilling javascript objects, which works especially well when dealing with promises and arrays. 

```
$ npm install sash --save
```

### API

As a rule, methods that take arguments are functions, methods that do not take methods are properties.

#### identity

Always return the same value, no matter the input.

```javascript
var me = sash.identity('AJ')
[ 1, 2 ].map(me) == [ 'AJ', 'AJ' ]
```

#### prop

Try to follow a path of property keys through a json object. Useful for working with external APIs. 

```javascript
var getX = sash.prop('data', 0, 'x');
getX({ data: [ { x: 5, y: 10 } ] }) == 5
```

#### pick & omit

Pick properties from an object. 

```javascript
var present = sash.pick('id', 'name');
present({ id: 5, name: 'AJ', age: 20 }) == { id: 5, name: 'AJ' }

var present = sash.omit('password');
present({ id: 5, password: 'secret stuff' }) == { id: 5 }
```

#### squish

Trim the string and replace whitespace with one space. 

```javascript
sash.squish('   hello  world ') == 'hello world'
```

### Chaining

All sash functions and property functions can be chained which pipes the output of the first to the next function.

```javascript
var object = { input: '  messy ' };
var getName = sash.prop('input').squish;
getName(object) == 'messy'
```

### Notes

Please share ideas and report bugs. Sash should be intuitive and lead to cleaner code. Otherwise it needs improvement!

License: **MIT**
