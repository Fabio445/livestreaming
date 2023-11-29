import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { Live } from "../../live/entities/live.entity";

@Entity()
export class LiveTag {

	@PrimaryGeneratedColumn()
	idLiveTag: number

    @OneToMany(() => Live, live => live.categoria)
    live: Live;
 
}
