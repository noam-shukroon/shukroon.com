window.onload = function() {
    const canvas = document.getElementById('warpingGrid');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let interactionStarted = false;

    // Event listener for mouse movement
    canvas.addEventListener('mousemove', function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        interactionStarted = true;
    });

    function drawGrid() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 2.5;

        const gridSize = 35;
        const time = Date.now() * 0.001;

        // Calculate the number of grid lines based on window dimensions
        const verticalLines = Math.ceil(canvas.width / gridSize) + 1;
        const horizontalLines = Math.ceil(canvas.height / gridSize) + 1;

        // Draw vertical lines
        for (let i = 0; i < verticalLines; i++) {
            ctx.beginPath();
            for (let j = 0; j < horizontalLines; j++) {
                let x = i * gridSize;
                let y = j * gridSize;
                let dx = x - mouseX;
                let dy = y - mouseY;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let influence = interactionStarted ? Math.max(0, 1 - distance / 200) : 0;

                let nx = interactionStarted ? x + Math.sin((x + time) * 0.02 + dy * 0.01) * 20 * influence * Math.cos((y + time) * 0.01) : x;
                let ny = interactionStarted ? y + Math.sin((y + time) * 0.03 + dx * 0.01) * 15 * influence * Math.cos((x + time) * 0.005) : y;

                if (j === 0) {
                    ctx.moveTo(nx, ny);
                } else {
                    ctx.lineTo(nx, ny);
                }
            }
            ctx.stroke();
        }

        // Draw horizontal lines
        for (let j = 0; j < horizontalLines; j++) {
            ctx.beginPath();
            for (let i = 0; i < verticalLines; i++) {
                let x = i * gridSize;
                let y = j * gridSize;
                let dx = x - mouseX;
                let dy = y - mouseY;
                let distance = Math.sqrt(dx * dx + dy * dy);
                let influence = interactionStarted ? Math.max(0, 1 - distance / 200) : 0;

                let nx = interactionStarted ? x + Math.sin((x + time) * 0.02 + dy * 0.01) * 20 * influence * Math.cos((y + time) * 0.01) : x;
                let ny = interactionStarted ? y + Math.sin((y + time) * 0.03 + dx * 0.01) * 15 * influence * Math.cos((x + time) * 0.005) : y;

                if (i === 0) {
                    ctx.moveTo(nx, ny);
                } else {
                    ctx.lineTo(nx, ny);
                }
            }
            ctx.stroke();
        }

        requestAnimationFrame(drawGrid);
    }

    drawGrid();
};