import { Module } from '@nestjs/common';
import { MetaOptionsController } from './meta-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MetaOption } from './meta-option.entiti';
import { MetaOptionsService } from './providers/meta-options.service';

@Module({
  controllers: [MetaOptionsController],
  // providers: [MetaOptionsService],
  imports: [TypeOrmModule.forFeature([MetaOption])],
  providers: [MetaOptionsService],
})
export class MetaOptionsModule {}
