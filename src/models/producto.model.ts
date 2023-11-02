import { model, Schema } from "mongoose";
import IProducto from "../interfaces/producto.interface";

const ProductoSchema = new Schema<IProducto>(
  {
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
  },
  {
    timestamps: { createdAt: true, updatedAt: true },
  }
);

export default model<IProducto>("Producto", ProductoSchema);