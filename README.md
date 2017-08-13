# Double-Option-Button---JQuery-Plugin
WIth it, you will can create a totally customizable double option button, dynamically functional.

## How to use

    $(".double-option").dblOption();

## Options
    $(".option-container").dblOption({
      width: '200px', // Always in pixels
      height: '30px', // Also always in pixels
      initSide: 'left', // Side selected in function initialization
      leftLabel: 'OPÇÃO 1', // Label text of left side of the button
      rightLabel: 'OPÇÃO 2', // Label text of right side of the button
      bgSelector: 'cornFlowerBlue', // Background of the slider selector 
      animation: true, // Control of animation
      onRight: function () { // Callback of event triggered on choose the right side of button
        console.log('right');
      },
      onLeft: function () { // Callback of event triggered on choose the left side of button
        console.log('left');
      }
    })
    
## Usage Example
https://jsfiddle.net/SamirChaves/waq42Lu9/1/
