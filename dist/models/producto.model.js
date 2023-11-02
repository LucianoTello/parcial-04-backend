"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductoSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
    },
    descripcion: {
        type: String,
        lowercase: true,
    },
    precio: {
        type: Number,
        required: [true, "El precio del producto es obligatorio"],
    },
    imageUrl: {
        type: String,
        default: "https://producto.jpg"
    }
}, {
    timestamps: { createdAt: true, updatedAt: true },
});
exports.default = (0, mongoose_1.model)("Producto", ProductoSchema);
