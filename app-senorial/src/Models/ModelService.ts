export class ModelService{
    private id: number;
    private name: string;
    private icon: string;

    constructor(id, name, icon){
        this.id = id;
        this.name = name;
        this.icon = icon;
    }
}