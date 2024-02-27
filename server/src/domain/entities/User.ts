import { Column, Entity }from "typeorm"
import { BaseEntity } from "./index";



@Entity({name:"Users"})
export class User extends BaseEntity{

        @Column()
        slug:string;
        @Column()
        email:string;
        @Column()
        phone:string;
        @Column()
        role:string;
        @Column()
        avatar:string;
        @Column()
        bio:string
}
