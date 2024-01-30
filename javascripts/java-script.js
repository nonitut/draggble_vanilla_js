

document.addEventListener("DOMContentLoaded", function() {
    interact('.box')
    .draggable({
      listeners: {
        start(event) {
          event.target.style.zIndex = '9999';
        },
        move(event) {
          const target = event.target;
          const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
          const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

          target.style.transform = `translate(${x}px, ${y}px)`;
          target.setAttribute('data-x', x);
          target.setAttribute('data-y', y);
        },
        end(event) {
          event.target.style.zIndex = 'auto';
        }
      }
    });

   
});
