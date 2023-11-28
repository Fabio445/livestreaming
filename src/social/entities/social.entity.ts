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
import { Canale } from '../../canale/entities/canale.entity';

@Entity()
export class Social {
  @PrimaryGeneratedColumn()
  idSocial: number;

  @Column()
  nome: string;

  @Column()
  url: string;

<<<<<<< HEAD
  @OneToMany(() => Canale, (canale) => canale.socials)
  canale: Canale[];
}
=======
	@Column()
	url: string

    @OneToMany(() => Canale, canale => canale.socials)
    canale: Canale;  //entità che dà la fk
	
	
}
>>>>>>> 963dea0cae55a473beb18314cbb67b229356689b
