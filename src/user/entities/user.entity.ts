<<<<<<< HEAD
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Timestamp,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Streamer } from '../../streamer/entities/streamer.entity';
import { Viewer } from '../../viewer/entities/viewer.entity';
import { Portafoglio } from '../../portafoglio/entities/portafoglio.entity';

//import { Portafoglio } from "../portafoglio/entities/portafoglio.entity";
=======
import { PrimaryGeneratedColumn, Column, Entity, Timestamp, JoinColumn, OneToOne } from "typeorm";
import { Streamer } from "../../streamer/entities/streamer.entity";
import { Viewer } from "../../viewer/entities/viewer.entity";
import { Portafoglio } from "../../portafoglio/entities/portafoglio.entity";
>>>>>>> 963dea0cae55a473beb18314cbb67b229356689b

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  idUser: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'date' })
  dataNascita: Date;

<<<<<<< HEAD
  @Column()
  numeroTelefono: string;
=======
	@Column({type: 'date'})
	dataNascita: Date
>>>>>>> 963dea0cae55a473beb18314cbb67b229356689b

  @Column({ type: 'timestamp', nullable: true })
  deleteAt: Date;

  @OneToOne(() => Viewer, (viewer) => viewer.user)
  viewer: Viewer[];

  @OneToOne(() => Streamer, (streamer) => streamer.user)
  streamer: Streamer[];

<<<<<<< HEAD
  @OneToOne(() => Portafoglio, (portafoglio) => portafoglio.user)
  portafoglio: Portafoglio[];
=======
	@OneToOne(() => Viewer, viewer => viewer.user)
	viewer: Viewer;

	@OneToOne(() => Streamer, streamer => streamer.user)
	streamer: Streamer;

	@OneToOne(() => Portafoglio, portafoglio => portafoglio.user)
	portafoglio: Portafoglio;

>>>>>>> 963dea0cae55a473beb18314cbb67b229356689b
}
