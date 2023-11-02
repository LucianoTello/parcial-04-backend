import { Request, Response, NextFunction } from "express";
import Producto from "../models/producto.model";
import IProducto from "../interfaces/producto.interface";
import { NotFoundException } from "../utils/http.exception";

export const listar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const productos = await Producto.find();
    return res.status(200).json(productos);
  } catch (error) {
    return next(error);
  }
};

export const crear = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { nombre, descripcion, precio, imageUrl } = req.body;

    const producto: IProducto = new Producto({
      nombre,
      descripcion,
      precio,
      imageUrl,
    });

    await producto.save();

    return res.status(200).json(producto);
  } catch (error) {
    return next(error);
  }
};

export const buscar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findById(id).orFail(
      new NotFoundException("Product not found")
    );
    return res.status(200).json(producto);
  } catch (error) {
    return next(error);
  }
};

export const borrar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findById(id).orFail(
      new NotFoundException("prduct not found")
    );
    await producto.deleteOne();
    return res.status(200).json(producto);
  } catch (error) {
    return next(error);
  }
};