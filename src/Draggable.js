import interact from 'interactjs';

interact('.draggable').draggable({
    listeners: {
      move(event) {
        const target = event.target;
        const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
        const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;
  
        target.style.transform = `translate(${x}px, ${y}px)`;
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      }
    }
  });

  // enable draggables to be dropped into this
interact('.dropzone').dropzone({
    // only accept elements matching this CSS selector
    accept: '.draggable',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
  
    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
  
      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target')
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target')
    },
    ondrop(event) {
        const target = event.relatedTarget; // The dragged element

        // Define separate grid sizes
        const gridWidth = 60;  // Grid spacing in X direction
        const gridHeight = 20; // Grid spacing in Y direction

        // Get current position
        let x = parseFloat(target.getAttribute('data-x')) || 0;
        let y = parseFloat(target.getAttribute('data-y')) || 0;

        // Snap to nearest grid point
        let snappedX = Math.round(x / gridWidth) * gridWidth;
        let snappedY = Math.round(y / gridHeight) * gridHeight;

        target.style.transform = `translate(${snappedX}px, ${snappedY}px)`;
        target.setAttribute('data-x', snappedX);
        target.setAttribute('data-y', snappedY);
      },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active')
      event.target.classList.remove('drop-target')
    }
  });
  