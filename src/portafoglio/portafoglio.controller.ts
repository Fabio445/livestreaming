import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PortafoglioService } from './portafoglio.service';
import { CreatePortafoglioDto } from './dto/create-portafoglio.dto';
import { UpdatePortafoglioDto } from './dto/update-portafoglio.dto';

@Controller('portafoglio')
export class PortafoglioController {
  constructor(private readonly portafoglioService: PortafoglioService) {}

  @Post()
  create(@Body() createPortafoglioDto: CreatePortafoglioDto) {
    return this.portafoglioService.create(createPortafoglioDto);
  }

  @Get()
  findAll() {
    return this.portafoglioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.portafoglioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePortafoglioDto: UpdatePortafoglioDto) {
    return this.portafoglioService.update(+id, updatePortafoglioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.portafoglioService.remove(+id);
  }
}
