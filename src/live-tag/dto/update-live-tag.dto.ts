import { PartialType } from '@nestjs/mapped-types';
import { CreateLiveTagDto } from './create-live-tag.dto';

export class UpdateLiveTagDto extends PartialType(CreateLiveTagDto) {}
