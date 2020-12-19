// METODO PARA REGISTRAR NUEVA TAREA
function nuevaTarea({ fk_usuario, titulo, descripcion, prioridad }) {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO s9q90jl9ash7sm2k.tareas (fk_usuario,titulo,descripcion,prioridad) VALUES (?,?,?,?)',
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

// METODO PARA OBTENER LAS TAREAS DE UN USUARIO
function getTareasById(fk_usuario) {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM s9q90jl9ash7sm2k.tareas WHERE fk_usuario=?',
            [fk_usuario],
            (error, result) => {
                if (error) { return reject(error) }
                else {
                    resolve(result);
                    console.log(result);
                }
            })
    })
};

// METODO PARA BORRAR UNA TAREA
function borrarTarea(pId) {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM s9q90jl9ash7sm2k.tareas WHERE id=?',
            [pId],
            (error, result) => {
                if (error) { return reject(error) }
                else { resolve(result) }
            })
    })
};

module.exports = { nuevaTarea, getTareasById, borrarTarea };