import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Task.name) private taskModel: Model<Task>,
  ) {}

  async create(title: string, userId: string) {
    return this.taskModel.create({ title, user: userId });
  }

  async findAll(userId: string) {
    return this.taskModel.find({ user: userId });
  }

  async update(id: string, completed: boolean) {
    return this.taskModel.findByIdAndUpdate(
      id,
      { completed },
      { new: true }
    );
  }

  async delete(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}