import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrivilegiService } from './privilegi.service';
import { CreatePrivilegiDto } from './dto/create-privilegi.dto';
import { UpdatePrivilegiDto } from './dto/update-privilegi.dto';

@Controller('privilegi')
export class PrivilegiController {
  constructor(private readonly privilegiService: PrivilegiService) {}

  @Post()
  create(@Body() createPrivilegiDto: CreatePrivilegiDto) {
    return this.privilegiService.create(createPrivilegiDto);
  }

  @Get()
  findAll() {
    return this.privilegiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.privilegiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePrivilegiDto: UpdatePrivilegiDto) {
    return this.privilegiService.update(+id, updatePrivilegiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.privilegiService.remove(+id);
  }
}
