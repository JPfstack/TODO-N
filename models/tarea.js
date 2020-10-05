// METODO PARA REGISTRAR NUEVA TAREA
function nuevaTarea({ fk_usuario, titulo, descripcion, prioridad }) {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO todo.tareas (fk_usuario,titulo,descripcion,prioridad) VALUES (?,?,?,?)',
            [fk_usuario, titulo, descripcion, prioridad],
            (error, result) => {
                if (error) { return reject(error) }
                else {
                    resolve(result);
                    console.log(result);
                }
            }
        )
    })
};

module.exports = { nuevaTarea };