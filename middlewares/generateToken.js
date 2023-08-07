import jwt from 'jsonwebtoken'

//objeto a tokenizar (encriptar) en este caso solamente el mail (pero pueden enviar lo que necesiten)
//llave necesaria para tokenizar/destokenizar (crear una variable de entorno)
//tiempo de vencimiento del token en segundos
//agrego al objeto de requerimientos la propeidad token con el token

return next()
export default (req, res, next) => {
    let token = jwt.sign(
        { email: req.body.email },
        process.env.SECRET_KEY,
        { expiresIn: 60 * 60 * 24 * 7 }
    )
    req.token = token
}