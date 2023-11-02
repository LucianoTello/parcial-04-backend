import { check, ValidationChain } from "express-validator";

export const productovalidator: Array<ValidationChain> = [
 check("nombre").isLength({min: 3, max: 20}).withMessage("El nombre debe tener un minimo de 3 caracteres y un maximo de 20")
 .isLowercase().withMessage("El nombre debe ser en minuscula"),
 check("descripcion").isLength({min:10 , max: 200}).withMessage("La descripcion tiene un maximo de 200 caracteres y un minimo de 10"),
 check("precio").isFloat().withMessage("El precio debe ser un numero")
 .custom((value) =>{if(value<=0){throw new Error('El precio no puede ser menor a 0');}return true;})
 .withMessage("El precio deber ser mayor a 0"),
 check("imageUrl").isURL().withMessage("El formato de la URL de la imagen no es correcto")
];

export const mongoIdValidator: ValidationChain = check("id")
  .isMongoId()
  .withMessage("El ID proporcionado no es válido para MongoDB.");