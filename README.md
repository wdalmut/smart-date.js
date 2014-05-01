# AngularJS Filter Test

[![Build Status](https://travis-ci.org/wdalmut/smart-date.js.svg?branch=master)](https://travis-ci.org/wdalmut/smart-date.js)

The simple filter transforma a date into a more simple string

```javascript
angular.module('corley.filters');
```

In your views

```html
<p>{{ updateOn | smartDate | translate }}</p>
```

The filter uses `angular-translate` in order to provides internationalization


## Testing

Just an example of how to test AngularJS filters

```
karma start
```