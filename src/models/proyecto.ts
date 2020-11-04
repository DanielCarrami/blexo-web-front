import {Sesion} from './sesion';

export class Proyecto{
    constructor(
        public nombre: string,
        public descripcion: string,
        public fecha_inicio: string,
        public sesion: Sesion[]
    ) { }
}
