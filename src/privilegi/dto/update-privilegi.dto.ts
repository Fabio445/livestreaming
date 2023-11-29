import { PartialType } from '@nestjs/mapped-types';
import { CreatePrivilegiDto } from './create-privilegi.dto';

export class UpdatePrivilegiDto extends PartialType(CreatePrivilegiDto) {}
