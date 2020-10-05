// METODO PARA REGISTRAR NUEVO USUARIO

function registroUsuario({ usuario, email, password }) {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO todo.usuarios (usuario,email,password) VALUES (?,?,?)',
            [usuario, email, password],
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

// METODO PARA OBTENER EL ID DE UN USUARIO A PARTIR DEL EMAIL (LOGIN)
function getIdByUser(pUsuario) {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM todo.usuarios WHERE usuarios.usuario=?',
            [pUsuario],
            (error, result) => {
                if (error) { return reject(error) }
                else {
                    resolve(result[0])
                    console.log(result[0]);
                }
            })
    })
};

module.exports = { registroUsuario, getIdByUser }

