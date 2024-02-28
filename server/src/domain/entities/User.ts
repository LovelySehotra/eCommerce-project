import { BeforeInsert, BeforeUpdate, Column, Entity }from "typeorm"
import { BaseEntity } from "./index";
import bcrypt from "bcryptjs";


@Entity({name:"Users"})
export class User extends BaseEntity{
        @Column({ nullable: true })
        name?:string
        @Column({ nullable: true })
        slug?:string;
        @Column()
        email:string;
        @Column()
        password:string
        @BeforeInsert()
        @BeforeUpdate()
        async savePassword() {
          if (this.password) {
            const hashedPassword = await bcrypt.hash(this.password, 10);
            this.password = hashedPassword;
          }
        }
        @Column({ nullable: true })
        phone?:string;
        @Column({ nullable: true })
        role?:string;
        @Column({ nullable: true })
        avatar?:string;
        @Column({ nullable: true })
        bio?:string
}
