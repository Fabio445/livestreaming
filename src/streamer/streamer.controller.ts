import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StreamerService } from './streamer.service';
import { CreateStreamerDto } from './dto/create-streamer.dto';
import { UpdateStreamerDto } from './dto/update-streamer.dto';

@Controller('streamer')
export class StreamerController {
  constructor(private readonly streamerService: StreamerService) {}

  @Post()
  create(@Body() createStreamerDto: CreateStreamerDto) {
    return this.streamerService.create(createStreamerDto);
  }

  @Get()
  findAll() {
    return this.streamerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.streamerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStreamerDto: UpdateStreamerDto,
  ) {
    return this.streamerService.update(+id, updateStreamerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.streamerService.remove(+id);
  }
}
