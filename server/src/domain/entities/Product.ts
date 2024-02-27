import { Column, Entity }from "typeorm"
import { BaseEntity } from "./index";



@Entity({name:"Product"})
export class User extends BaseEntity{

        @Column({ nullable: true })
       title:string;
       @Column({ nullable: true })
       image:string
       @Column({ nullable: true })
       description:string
       @Column({ nullable: true })
       price:number;
       @Column({ nullable: true })
       tags:string[]
       
       
}