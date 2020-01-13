export class ModelService {


  setData(id_user: number, nombre: string, apellido: string, celular: string, correo: string, nombreCategoria: string) {
    this.id_user = id_user;
    this.nombre = nombre;
    this.apellido = apellido;
    this.celular = celular;
    this.correo = correo;
    this.correo = correo;
    this.nombreCategoria = nombreCategoria;
}
    public id_user: number;
    public id_service: number;
    public nombre: string;
    public apellido: string;
    public celular: string;
    public direccion: string;
    public correo: string;
    public estado: string;
    public valor: number;
    public fecha_servicio: string;
    public horario: string;
    public nColaboradores: number;
    public fecha: string;
    public tipoServicio: string; // opciones de cada servicio
    public comentario: string;
    public observacion: string;
    public nombreCategoria: string;// categoria general

    constructor() {
        this.id_service = 0;
        this.direccion = "";
        this.estado = "pendiente";
        this.valor = 0;
        this.fecha_servicio = "";
        this.horario = "";
        this.nColaboradores = 0;
        this.fecha = "";
        this.comentario = "";
        this.tipoServicio = "";
        this.observacion = "";
    }


}

