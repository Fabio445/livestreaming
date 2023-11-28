import { PrimaryGeneratedColumn, Column, Entity, Timestamp, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Canale } from "../../canale/entities/canale.entity";


@Entity()
export class Streamer {

    @PrimaryGeneratedColumn()
	idStreamer: number

	
    @OneToOne(() => User, user => user.streamer)
    @JoinColumn()
    user: User;

    @ManyToOne(() => Canale, canale => canale.streamer)
	@JoinColumn({ name: 'idStreamer' })
	canale: Canale[]; 
  }
