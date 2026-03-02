import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { PostType } from './dtos/create-post.dto';
import { PostStatus } from './dtos/create-post.dto';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';

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

  @Column({ type: 'varchar', length: 3, nullable: true })
  tags: string[];
  metaOptions: CreatePostMetaOptionsDto[];
}
