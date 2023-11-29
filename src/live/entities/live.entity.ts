import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, ManyToOne, JoinTable, ManyToMany, OneToMany } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Canale } from "../../canale/entities/canale.entity";
import { Tag } from "../../tag/entities/tag.entity";
import { Watch } from "../../watch/entities/watch.entity";

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

	@ManyToOne(() => Canale, canale => canale.live)
	@JoinColumn({ name: 'idCanale' })
	canale: Canale[];

	@ManyToMany(() => Tag)
	@JoinTable({ name: 'LiveTag' })
	tag: Tag[];

	
	@OneToMany(() => Watch, watch => watch.live)
	watch: Watch;
}
