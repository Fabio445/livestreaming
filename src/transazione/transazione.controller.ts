import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransazioneService } from './transazione.service';
import { CreateTransazioneDto } from './dto/create-transazione.dto';
import { UpdateTransazioneDto } from './dto/update-transazione.dto';

@Controller('transazione')
export class TransazioneController {
  constructor(private readonly transazioneService: TransazioneService) {}

  @Post()
  create(@Body() createTransazioneDto: CreateTransazioneDto) {
    return this.transazioneService.create(createTransazioneDto);
  }

  @Get()
  findAll() {
    return this.transazioneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transazioneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransazioneDto: UpdateTransazioneDto) {
    return this.transazioneService.update(+id, updateTransazioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transazioneService.remove(+id);
  }
}
