import { Canale } from "../../canale/entities/canale.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Subscription } from "../../subscription/entities/subscription.entity";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne, JoinColumn } from "typeorm";

@Entity()
export class Media {

	@PrimaryGeneratedColumn()
	idMedia: number

	@Column()
	titolo: string

    @Column()
	durata: string

    @Column()
	url: string

    @Column()
	tipo: boolean  //true 

    @ManyToOne(() => Canale, canale => canale.media)
    @JoinColumn({ name: 'idCanale' })
	canale: Canale;

    @ManyToOne(() => Categoria, categoria => categoria.media)
    @JoinColumn({ name: 'idCategoria' })
	categoria: Categoria;

}
