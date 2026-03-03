import { Injectable } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from '../dtos/create-post-meta-options.dto';
import { MetaOption } from '../meta-option.entiti';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MetaOptionsService {
  constructor(
    // InjectRepository는 데이터 베이스의 metaOption 테이블에 접근하여
    // 생성, 조회, 수정, 삭제 작업을 수행해야 할 때 사용한다.
    @InjectRepository(MetaOption)
    private readonly metaOptionRepository: Repository<MetaOption>,
  ) {}
  /**
   * Inject metaOptionRepository
   */

  public async create(createPostMetaOptionsDto: CreatePostMetaOptionsDto) {
    const metaOption = this.metaOptionRepository.create(
      createPostMetaOptionsDto,
    );
    return await this.metaOptionRepository.save(metaOption);
  }
}
