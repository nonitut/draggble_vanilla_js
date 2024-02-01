

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



// объяснение 
// 
// document.addEventListener("DOMContentLoaded", function() { // Ждем, пока весь DOM загрузится

//   // Используем библиотеку Interact.js для добавления перетаскиваемости к элементам с классом 'box'
//   interact('.box').draggable({
//     listeners: {
//       // Событие начала перетаскивания
//       start(event) {
//         // Устанавливаем zIndex элемента на '9999', чтобы он был выше других элементов
//         event.target.style.zIndex = '9999';
//       },
//       // Событие движения элемента в процессе перетаскивания
//       move(event) {
//         // Получаем текущие координаты (x, y) элемента и обновляем его положение
//         const target = event.target;
//         const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
//         const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

//         // Применяем трансформацию для перемещения элемента
//         target.style.transform = `translate(${x}px, ${y}px)`;
        
//         // Обновляем атрибуты data-x и data-y для сохранения координат
//         target.setAttribute('data-x', x);
//         target.setAttribute('data-y', y);
//       },
//       // Событие завершения перетаскивания
//       end(event) {
//         // Сбрасываем zIndex на 'auto' после завершения перетаскивания
//         event.target.style.zIndex = 'auto';
//       }
//     }
//   });
// });

