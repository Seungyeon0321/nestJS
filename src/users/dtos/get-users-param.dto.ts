import { IsOptional, IsInt } from 'class-validator';
import { Type, Transform } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class GetUsersParamDto {
  @ApiProperty({
    description: 'The id of the user',
    required: false,
    example: 1,
  })
  @IsOptional()
  @Transform(({ value }) => (value === '' ? undefined : value))
  @Type(() => Number)
  @IsInt()
  id: number;
}
