export class Post {
    id:number;
    title: string;
    desc: string;
    date: Date; 
    author: string;


    constructor(id:number, title:string, desc:string, date:Date ,author:string){
      this.id = id;
      this.title = title;
      this.desc = desc;
      this.date = date;
      this.author = author;  
    }

}