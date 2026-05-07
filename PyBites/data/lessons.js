// ═══════════════════════════════════════════════════════════
//  PyBites — Data de lecciones
//  Estructura: lessons[id] = { info, slides, questions }
// ═══════════════════════════════════════════════════════════

const lessons = {
    l1: {
        id: 'l1',
        title: '¿Qué es Python?',
        section: 'Sección 1 — Fundamentos',
        xpReward: 50,

        // ── Diapositivas de teoría ──────────────────────────
        slides: [
            {
                id: 's1',
                heading: '¿Qué es Python?',
                emoji: '🐍',
                body: 'Python es un <strong>lenguaje de programación</strong> de alto nivel, interpretado y de propósito general. Fue creado por <strong>Guido van Rossum</strong> y lanzado en 1991. Es famoso por su sintaxis clara y legible, que se parece al inglés cotidiano.'
            },
            {
                id: 's2',
                heading: '¿De dónde viene el nombre?',
                emoji: '🎭',
                body: 'Contrariamente a lo que mucha gente piensa, el nombre <strong>no viene de la serpiente</strong>. Guido van Rossum eligió el nombre en honor al grupo de comedia británico <strong>Monty Python\'s Flying Circus</strong>, ya que quería un nombre corto, único y un poco misterioso.'
            },
            {
                id: 's3',
                heading: '¿Para qué sirve Python?',
                emoji: '🚀',
                body: 'Python es increíblemente versátil. Se usa en <strong>desarrollo web</strong> (Django, Flask), <strong>ciencia de datos e IA</strong> (NumPy, Pandas, TensorFlow), <strong>automatización</strong> de tareas, <strong>scripting</strong>, desarrollo de videojuegos, aplicaciones de escritorio y mucho más.'
            }
        ],

        // ── Preguntas (mínimo 3, máximo 5) ─────────────────
        questions: [
            {
                id: 'q1',
                type: 'choice',           // tipo: opción múltiple
                question: '¿En qué año fue lanzado Python por primera vez?',
                options: ['1985', '1991', '1998', '2003'],
                correct: '1991',
                explanation: '¡Correcto! Python fue lanzado en 1991 por Guido van Rossum.'
            },
            {
                id: 'q2',
                type: 'drag',             // tipo: arrastrar y ordenar
                question: 'Ordena estos pasos para describir cómo Python ejecuta tu código:',
                items: [
                    { id: 'd1', text: '📝 Escribes el código .py' },
                    { id: 'd2', text: '🔍 El intérprete lo lee línea a línea' },
                    { id: 'd3', text: '⚙️ Se convierte a bytecode' },
                    { id: 'd4', text: '💻 El resultado aparece en pantalla' }
                ],
                correctOrder: ['d1', 'd2', 'd3', 'd4'],
                explanation: '¡Perfecto! Python es un lenguaje interpretado: lee y ejecuta el código de arriba a abajo.'
            },
            {
                id: 'q3',
                type: 'choice',
                question: '¿De dónde viene realmente el nombre "Python"?',
                options: [
                    'De la serpiente pitón',
                    'Del grupo de comedia Monty Python',
                    'Del matemático Pythagoras',
                    'Del proyecto PYTHON de la NASA'
                ],
                correct: 'Del grupo de comedia Monty Python',
                explanation: '¡Exacto! Guido van Rossum era fan de Monty Python\'s Flying Circus.'
            },
            {
                id: 'q4',
                type: 'drag',
                question: 'Arrastra cada uso al campo correcto — ¿cuáles son usos reales de Python?',
                items: [
                    { id: 'e1', text: '🤖 Inteligencia Artificial' },
                    { id: 'e2', text: '🌐 Desarrollo web' },
                    { id: 'e3', text: '📊 Ciencia de datos' },
                    { id: 'e4', text: '🔧 Automatización' }
                ],
                correctOrder: ['e1', 'e2', 'e3', 'e4'],
                explanation: '¡Todos son usos reales de Python! Es uno de los lenguajes más versátiles del mundo.'
            },
            {
                id: 'q5',
                type: 'choice',
                question: '¿Cuál de estas afirmaciones sobre Python es FALSA?',
                options: [
                    'Python es un lenguaje interpretado',
                    'Python fue creado por Guido van Rossum',
                    'Python solo sirve para hacer páginas web',
                    'Python tiene una sintaxis muy legible'
                ],
                correct: 'Python solo sirve para hacer páginas web',
                explanation: '¡Correcto! Python es de propósito general y se usa en muchísimos campos distintos.'
            }
        ]
    }
};

// ── Resultados de los usuarios ──────────────────────────────
// Se actualiza dinámicamente desde l1.html al completar la lección
const results = {
    l1: {
        completed: false,
        score: 0,
        totalQuestions: 0,
        xpEarned: 0,
        completedAt: null
    }
};

// Guarda el resultado de una lección
function saveResult(lessonId, score, total) {
    results[lessonId] = {
        completed: true,
        score,
        totalQuestions: total,
        xpEarned: score === total ? lessons[lessonId].xpReward : Math.floor(lessons[lessonId].xpReward * (score / total)),
        completedAt: new Date().toISOString()
    };
    console.log(`[PyBites] Lección ${lessonId} completada:`, results[lessonId]);
    return results[lessonId];
}