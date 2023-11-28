<<<<<<< HEAD
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Timestamp,
  JoinColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
=======
import { PrimaryGeneratedColumn, Column, Entity, Timestamp, JoinColumn, OneToOne, OneToMany, ManyToOne } from "typeorm";
import { User } from "../../user/entities/user.entity";
>>>>>>> 963dea0cae55a473beb18314cbb67b229356689b

@Entity()
export class Portafoglio {
  @PrimaryGeneratedColumn()
  idPortafoglio: number;

  @Column()
  bit: number;

<<<<<<< HEAD
  @OneToOne(() => User, (user) => user.portafoglio)
  @JoinColumn({ name: 'IdUser' })
  user: User;
}
=======
	@Column()
	bit: number

    @OneToOne(() => User, user => user.portafoglio)
	@JoinColumn({ name: 'idUser' })
    user: User; 

}
>>>>>>> 963dea0cae55a473beb18314cbb67b229356689b
