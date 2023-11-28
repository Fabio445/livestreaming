import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CanaleService } from './canale.service';
import { CreateCanaleDto } from './dto/create-canale.dto';
import { UpdateCanaleDto } from './dto/update-canale.dto';

@Controller('canale')
export class CanaleController {
  constructor(private readonly canaleService: CanaleService) {}

  @Post()
  create(@Body() createCanaleDto: CreateCanaleDto) {
    return this.canaleService.create(createCanaleDto);
  }

  @Get()
  findAll() {
    return this.canaleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.canaleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCanaleDto: UpdateCanaleDto) {
    return this.canaleService.update(+id, updateCanaleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.canaleService.remove(+id);
  }
}
