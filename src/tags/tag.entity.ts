import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  DeleteDateColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 256, nullable: false, unique: true })
  name: string;

  @Column({ type: 'varchar', length: 256, nullable: false, unique: true })
  slug: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'json', nullable: true })
  schema?: string;

  @Column({ type: 'varchar', length: 1024, nullable: true })
  featureImageUrl?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  //soft deletion
  @DeleteDateColumn()
  deletedAt?: Date;
}
