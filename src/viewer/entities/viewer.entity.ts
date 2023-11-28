import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Timestamp,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Viewer {
  @PrimaryGeneratedColumn()
  idViewer: number;

<<<<<<< HEAD
  @OneToOne(() => User, (user) => user.viewer)
  @JoinColumn({ name: 'idUser' })
  user: User;
}
=======
    @PrimaryGeneratedColumn()
	idViewer: number

	
   @OneToOne(() => User, user => user.viewer)
    @JoinColumn({name: "idUser"})  //chi avrà la colonna
    user: User; 
 }

>>>>>>> 963dea0cae55a473beb18314cbb67b229356689b
