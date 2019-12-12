export class ModelService{
    public id: number;
    public name: string;
    public icon: string;

    constructor(id, name, icon){
        this.id = id;
        this.name = name;
        this.icon = icon;
    }
}