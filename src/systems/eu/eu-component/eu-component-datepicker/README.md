# Datepickers

## Why and how to use this component

Users need a way to scan quickly a date related to an event.

This component appears when you need to enter a date.

By clicking in the date field a pop-up displays a calendar. It allows the user
to select a time or a date value instead of typing it. This greatly reduces the
likelihood of mistakes.

### When to use this component

* on the filter component, date field

### Do not use this component

* outside of the filter component

## Implementation notes

Component `ecl-datepickers` depends on [Pikaday](https://github.com/dbushell/Pikaday). Please follow the [installation guide](https://github.com/dbushell/Pikaday#installation) of the library in order to add the JavaScript behaviors of datepickers to your project.

Because `Pikaday` works as a global, a possible way to include it in your site would be:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/pikaday/1.6.1/pikaday.min.js"></script>
```

If you're using a bundler for your assets (like `webpack` or `rollup`), please keep in mind the list of [known issues](https://github.com/dbushell/Pikaday/search?q=moment&type=Issues&utf8=%E2%9C%93) regarding how `Pikaday` handles dependencies to `moment.js` which you might not need.

Then, add an instantiation script similar to this:

```javascript
var picker = new Pikaday({
  field: document.getElementById('datepicker'),
  firstDay: 1,
  maxDate: new Date(2020, 12, 31),
  theme: 'ecl-pika-theme',
  yearRange: [2000, 2020],
});
```

The most important setting is the `theme: 'ecl-pika-theme'` which will add the necessary styling of ECL on datepickers.

Please make sure you detach other libraries from the inputs of type dates like jQuery or its UI datepicker, which will conflict when having several behaviors attached to same elements.
