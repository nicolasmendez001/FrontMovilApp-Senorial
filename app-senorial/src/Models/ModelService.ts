export class ModelService{
    public id: number;
    public name: string;
    public icon: string;
    public color: string;

    constructor(id, name, icon, color){
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.color = color;
    }
}

