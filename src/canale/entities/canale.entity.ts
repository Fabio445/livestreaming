import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  Timestamp,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Social } from '../../social/entities/social.entity';
import { Streamer } from '../../streamer/entities/streamer.entity';
@Entity()
export class Canale {
  @PrimaryGeneratedColumn()
  idCanale: number;

  @Column()
  descrizione: string;

  @Column()
  trailer: string;

  @Column()
  immagine: string;

  @ManyToOne(() => Social, (social) => social.canale)
  @JoinColumn({ name: 'idSocial' })
  socials: Social;

<<<<<<< HEAD
  @OneToOne(() => Streamer, (streamer) => streamer.canale)
  @JoinColumn({ name: 'idStreamer' })
  streamer: Streamer;
}
=======
	@ManyToOne(() => Social, social => social.canale)
	@JoinColumn({ name: 'idSocial' })
	socials: Social[];  //entità che prende la fk

	@OneToOne(() => Streamer, streamer => streamer.canale)
	@JoinColumn({ name: 'idStreamer' })
    streamer: Streamer;  

}
>>>>>>> 963dea0cae55a473beb18314cbb67b229356689b
