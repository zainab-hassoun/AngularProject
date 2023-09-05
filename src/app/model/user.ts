export class User{
    name: string
    email : string
    password : string
    birthday:string
    Gender:string
    static genId:number=1
    id:number
    constructor(name:string , email:string,password:string,birthday:string,Gender:string){
        this.id=User.genId++;
        this.name=name
        this.email=email
        this.password=password
        this.birthday=birthday
            this.Gender=Gender
    }
}