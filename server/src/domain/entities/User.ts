import { Column, Entity }from "typeorm"
import { BaseEntity } from "./index";



@Entity({name:"Users"})
export class User extends BaseEntity{
        @Column({ nullable: true })
        name:string
        @Column({ nullable: true })
        slug:string;
        @Column()
        email:string;
        @Column()
        password:string
        @Column({ nullable: true })
        phone:string;
        @Column({ nullable: true })
        role:string;
        @Column({ nullable: true })
        avatar:string;
        @Column({ nullable: true })
        bio:string
}
