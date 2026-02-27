import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  Req,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('tasks')
@UseGuards(AuthGuard('jwt'))
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  create(@Body() body, @Req() req) {
    return this.tasksService.create(body.title, req.user.userId);
  }

  @Get()
  findAll(@Req() req) {
    return this.tasksService.findAll(req.user.userId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.tasksService.update(id, body.completed);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }
}