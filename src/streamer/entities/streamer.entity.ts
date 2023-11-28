import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Timestamp,
  OneToOne,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Canale } from '../../canale/entities/canale.entity';

@Entity()
export class Streamer {
  @PrimaryGeneratedColumn()
  idStreamer: number;

  @OneToOne(() => User, (user) => user.streamer)
  @JoinColumn({ name: 'idUser' })
  user: User[];

<<<<<<< HEAD
  @OneToOne(() => Canale, (canale) => canale.streamer)
  canale: Canale[];
}
=======
	
    @OneToOne(() => User, user => user.streamer)
    @JoinColumn({name: "idUser"})
    user: User;

    @OneToOne(() => Canale, canale => canale.streamer)
	canale: Canale[]; 
  }
>>>>>>> 963dea0cae55a473beb18314cbb67b229356689b
