import { PrimaryGeneratedColumn, Column, Entity, Timestamp, OneToOne, JoinColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";



@Entity()
export class Viewer {

    @PrimaryGeneratedColumn()
	idViewer: number

	
    @OneToOne(() => User, user => user.viewer)
    @JoinColumn()
    user: User;
 }

