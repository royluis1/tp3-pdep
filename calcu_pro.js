/* Paradigma: Orientado a Objetos (Basado en Prototipos)
   Lenguaje: JavaScript (ES5 Style)
*/

// 1. Función Constructora para una Tarea individual
function Tarea(descripcion) {
    this.descripcion = descripcion;
    this.completada = false;
    this.fechaCreacion = new Date();
}

// Método agregado al prototipo de Tarea (se comparte entre todas las tareas)
Tarea.prototype.marcarCompletada = function() {
    this.completada = true;
    console.log(`La tarea '${this.descripcion}' ha sido completada.`);
};

Tarea.prototype.toString = function() {
    return `[${this.completada ? 'X' : ' '}] ${this.descripcion}`;
};

// 2. Función Constructora para el Gestor de Tareas
function ListaDeTareas() {
    this.tareas = []; // Estado interno
}

// Métodos del Gestor agregados a su prototipo
ListaDeTareas.prototype.agregarTarea = function(descripcion) {
    const nuevaTarea = new Tarea(descripcion);
    this.tareas.push(nuevaTarea);
    console.log(`Tarea agregada: ${descripcion}`);
};

ListaDeTareas.prototype.mostrarTareas = function() {
    console.log("--- Mis Tareas ---");
    if (this.tareas.length === 0) {
        console.log("No hay tareas pendientes.");
        return;
    }
    
    // Usamos .forEach pero mantenemos el contexto 'this' si fuera necesario
    // aunque aquí accedemos a los métodos del prototipo de cada 'tarea'
    this.tareas.forEach(function(tarea, indice) {
        console.log(`${indice + 1}. ${tarea.toString()}`);
    });
};

// --- Uso del Prototipo ---
const miLista = new ListaDeTareas();

miLista.agregarTarea("Estudiar Paradigmas");
miLista.agregarTarea("Comprar café");

miLista.mostrarTareas();

// Accedemos a la instancia de tarea interna para usar su prototipo
miLista.tareas[0].marcarCompletada(); 

miLista.mostrarTareas();