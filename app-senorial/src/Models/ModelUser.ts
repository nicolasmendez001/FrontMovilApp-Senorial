export class ModelUser {

    public id_user: number;
    public nombre: string;
    public apellido: string;
    public telefono: string;
    public direccion: Array<string>;
    public correo: string;
    public edad: number;
    public uID: string;

    constructor() {
        this.id_user = 0;
        this.nombre = "";
        this.apellido = "";
        this.telefono = "";
        this.direccion = new Array<string>();
        this.correo = "";
        this.uID = "";
    }
}