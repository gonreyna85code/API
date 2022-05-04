import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn({
        type: "integer"
        
    })
    id: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    firstName: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    lastName: string;

    @Column({
        type: 'varchar',
        nullable: true
    })
    email: string;

    @Column({
        type: 'varchar',
        nullable: true
    })
    password: string;

}






