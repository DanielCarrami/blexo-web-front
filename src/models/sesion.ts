import {Experimento} from './experimento';

export class Sesion {
    constructor(
        public nombre: string,
        public descripcion: string,
        public edad: number,
        public sexo: string,
        public experimentos: Experimento[]
    ) { }
}