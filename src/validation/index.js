import { check, validationResult } from "express-validator"


const runValidation = (req, res, next) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        return res.status(404).json({
            status: false,
            massage: errors.array()[0].msg
        })
    }
    next()
}

const validationCheck = [
    check('email', 'email harap di isi dengan benar')
    .notEmpty().isEmail(),
    check('password', 'password tidak boleh kosong')
    .notEmpty()
    .isLength({min: 8})
    .withMessage('password minimal 8 karakter'),
]

export {runValidation, validationCheck}