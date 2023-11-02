"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrar = exports.buscar = exports.crear = exports.listar = void 0;
const producto_model_1 = __importDefault(require("../models/producto.model"));
const http_exception_1 = require("../utils/http.exception");
const listar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield producto_model_1.default.find();
        return res.status(200).json(productos);
    }
    catch (error) {
        return next(error);
    }
});
exports.listar = listar;
const crear = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, descripcion, precio, imageUrl } = req.body;
        const producto = new producto_model_1.default({
            nombre,
            descripcion,
            precio,
            imageUrl,
        });
        yield producto.save();
        return res.status(200).json(producto);
    }
    catch (error) {
        return next(error);
    }
});
exports.crear = crear;
const buscar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const producto = yield producto_model_1.default.findById(id).orFail(new http_exception_1.NotFoundException("Product not found"));
        return res.status(200).json(producto);
    }
    catch (error) {
        return next(error);
    }
});
exports.buscar = buscar;
const borrar = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const producto = yield producto_model_1.default.findById(id).orFail(new http_exception_1.NotFoundException("prduct not found"));
        yield producto.deleteOne();
        return res.status(200).json(producto);
    }
    catch (error) {
        return next(error);
    }
});
exports.borrar = borrar;
