# Double Option Button - JQuery Plugin
WIth it, you will can create a totally customizable double option button, dynamically functional.

## How to use

    $(".double-option").dblOption();

## Options
    $(".option-container").dblOption({
      width: '200px', // Always in pixels (default: '220px')
      height: '30px', // Also always in pixels (default: '30px')
      initSide: 'left', // Side selected in function initialization (default: 'right')
      leftLabel: 'OPÇÃO 1', // Label text of left side of the button (default: 'OPÇÃO 1')
      rightLabel: 'OPÇÃO 2', // Label text of right side of the button (default: 'OPÇÃO 2')
      callOnInit: true, // Choose if the callback functions will be triggered on initialize function  (default: true)
      bgSelector: 'cornFlowerBlue', // Background of the slider selector  (default: '#363b44')
      animation: true, // Control of animation (default: true)
      onRight: function () { // Callback of event triggered on choose the right side of button
        console.log('right');
      },
      onLeft: function () { // Callback of event triggered on choose the left side of button
        console.log('left');
      }
    })
    
## Usage Example
https://jsfiddle.net/SamirChaves/waq42Lu9/
