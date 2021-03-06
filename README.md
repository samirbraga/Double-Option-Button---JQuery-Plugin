# Double Option Button - JQuery Plugin
WIth it, you will can create a totally customizable double option button, dynamically functional.

## How to use

    $(".double-option").dblOption();

## Appearance

![Double Option - Appearance](images/Button%20Appearance.png)

## Options
```javascript
$(".option-container").dblOption({
  width: '200px',               // Any unit, px, pt, em, rem, vw, %, etc (default: '220px')
  height: '30px',               // Also any unit (default: '30px')
  initSide: 'left',             // Side selected in function initialization (default: 'right')
  leftLabel: 'OPTION 1',         // Label text of left side of the button (default: 'OPTION 1')
  rightLabel: 'OPTION 2',        // Label text of right side of the button (default: 'OPTION 2')
  callOnInit: true,             // Choose if the callback functions will be triggered on initialize function  (default: true)
  bgSelector: 'cornFlowerBlue', // Background of the slider selector  (default: '#363b44')
  animation: true,              // Control of animation (default: true)
  onChange: function () {       // Callback of event triggered on choose the any side of button
    console.log('changed!');
  },
  onRight: function () {        // Callback of event triggered on choose the right side of button
    console.log('right');
  },
  onLeft: function () {         // Callback of event triggered on choose the left side of button
    console.log('left');
  }
})
```

## Set Side Dynamically
```javascript
$('.option-button').setSide('right') // or 'left';
```

### Toggle Side
```javascript
$('.option-button').toggleSide();
```

### Get Side
```javascript
$('.option-button').getSide() // return or 'left' or 'right';
```

## [Usage Example](https://rawgit.com/samirbraga/Double-Option-Button---JQuery-Plugin/master/demo/demo.html)
