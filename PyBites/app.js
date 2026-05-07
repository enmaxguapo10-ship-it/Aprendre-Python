// ══ ÚNICA línea que debes tocar para añadir/quitar círculos ══
const CIRCULOS = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'];
// ═════════════════════════════════════════════════════════════

function drawPath() {
    const lessons = document.getElementById('lessons');
    const svg     = document.getElementById('hilo');
    const path    = document.getElementById('curva');
    const box     = lessons.getBoundingClientRect();

    // Calcula el centro de cada círculo relativo al contenedor #lessons
    function center(id) {
        const r = document.getElementById(id).getBoundingClientRect();
        return {
            x: r.left - box.left + r.width  / 2,
            y: r.top  - box.top  + r.height / 2
        };
    }

    svg.setAttribute('viewBox', `0 0 ${box.width} ${box.height}`);

    const pts = CIRCULOS.map(center);

    // Construye la curva Bézier pasando por todos los puntos en orden
    let d = `M ${pts[0].x},${pts[0].y}`;

    for (let i = 0; i < pts.length - 1; i++) {
        const a  = pts[i];
        const b  = pts[i + 1];
        // Punto de control: mitad horizontal, más abajo que los dos extremos
        const cx = (a.x + b.x) / 2;
        const cy = Math.max(a.y, b.y) + Math.abs(b.x - a.x) * 0.35;
        d += ` C ${cx},${cy} ${cx},${cy} ${b.x},${b.y}`;
    }

    path.setAttribute('d', d);
}

window.addEventListener('load',   drawPath);
window.addEventListener('resize', drawPath);