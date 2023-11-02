import { Document } from "mongoose";

interface IProducto extends Document {
    nombre: string;
    descripcion: string;
    precio: number;
    imageUrl: string
}

export default IProducto;