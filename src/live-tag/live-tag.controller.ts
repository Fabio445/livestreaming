import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LiveTagService } from './live-tag.service';
import { CreateLiveTagDto } from './dto/create-live-tag.dto';
import { UpdateLiveTagDto } from './dto/update-live-tag.dto';

@Controller('live-tag')
export class LiveTagController {
  constructor(private readonly liveTagService: LiveTagService) {}

  @Post()
  create(@Body() createLiveTagDto: CreateLiveTagDto) {
    return this.liveTagService.create(createLiveTagDto);
  }

  @Get()
  findAll() {
    return this.liveTagService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.liveTagService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLiveTagDto: UpdateLiveTagDto) {
    return this.liveTagService.update(+id, updateLiveTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.liveTagService.remove(+id);
  }
}
