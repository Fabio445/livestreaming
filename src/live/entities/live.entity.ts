import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity()
export class Live {

	@PrimaryGeneratedColumn()
	idLive: number

	@Column()
	titolo: string

    @Column()
	url: string

    @Column({nullable: true, type: 'date'})
	dataPrevista: Date

    @Column({ type: 'timestamp', nullable: true })
	dataInizio: Date

    @Column({ type: 'timestamp', nullable: true })
	dataFine: Date

    @ManyToOne(() => Categoria, categoria => categoria.live)
	@JoinColumn({ name: 'idCategoria' })
	categoria: Categoria[];
}
