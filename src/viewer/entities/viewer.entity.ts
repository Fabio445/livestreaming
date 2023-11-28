import { PrimaryGeneratedColumn, Column, Entity, Timestamp, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { User } from "../../user/entities/user.entity";



@Entity()
export class Viewer {

    @PrimaryGeneratedColumn()
	idViewer: number

	
    @OneToOne(() => User, user => user.viewer)
    @JoinColumn({name:'idUser'})
    user: User;

 }

