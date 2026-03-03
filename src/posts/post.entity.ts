import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { PostType } from './dtos/create-post.dto';
import { PostStatus } from './dtos/create-post.dto';
import { MetaOption } from '../meta-options/meta-option.entiti';

// Entity 설정에 있어서 length의 길이의 설정같은 validation 기능은 제공하지 않는다
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'enum', enum: PostType, nullable: false })
  postType: PostType;

  @Column({ type: 'varchar', length: 255, nullable: false })
  slug: string;

  @Column({ type: 'enum', enum: PostStatus, nullable: false })
  status: PostStatus;

  @Column({ type: 'text', nullable: true })
  content: string;

  @Column({ type: 'json', nullable: true })
  schema: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  featureIamgeUrl: string;

  @Column({ type: 'timestamp', nullable: true })
  publishOn: Date;

  @OneToOne(() => MetaOption)
  // JoinColumn은 unidirectional relationship을 사용할 시에 필요한 녀석이다
  @JoinColumn()
  metaOptions?: MetaOption;
}
