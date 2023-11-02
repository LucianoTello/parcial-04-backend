"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoIdValidator = exports.productovalidator = void 0;
const express_validator_1 = require("express-validator");
exports.productovalidator = [
    (0, express_validator_1.check)("nombre").isLength({ min: 3, max: 20 }).withMessage("El nombre debe tener un minimo de 3 caracteres y un maximo de 20")
        .isLowercase().withMessage("El nombre debe ser en minuscula"),
    (0, express_validator_1.check)("descripcion").isLength({ min: 10, max: 200 }).withMessage("La descripcion tiene un maximo de 200 caracteres y un minimo de 10"),
    (0, express_validator_1.check)("precio").isFloat().withMessage("El precio debe ser un numero")
        .custom((value) => { if (value <= 0) {
        throw new Error('El precio no puede ser menor a 0');
    } return true; })
        .withMessage("El precio deber ser mayor a 0"),
    (0, express_validator_1.check)("imageUrl").isURL().withMessage("El formato de la URL de la imagen no es correcto")
];
exports.mongoIdValidator = (0, express_validator_1.check)("id")
    .isMongoId()
    .withMessage("El ID proporcionado no es válido para MongoDB.");
