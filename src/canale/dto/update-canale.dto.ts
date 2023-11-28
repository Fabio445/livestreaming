import { PartialType } from '@nestjs/mapped-types';
import { CreateCanaleDto } from './create-canale.dto';

export class UpdateCanaleDto extends PartialType(CreateCanaleDto) {}
