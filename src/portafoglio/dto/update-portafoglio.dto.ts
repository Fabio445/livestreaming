import { PartialType } from '@nestjs/mapped-types';
import { CreatePortafoglioDto } from './create-portafoglio.dto';

export class UpdatePortafoglioDto extends PartialType(CreatePortafoglioDto) {}
