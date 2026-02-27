import { Model } from 'mongoose';
import { Task } from './task.schema';
export declare class TasksService {
    private taskModel;
    constructor(taskModel: Model<Task>);
    create(title: string, userId: string): Promise<import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(userId: string): Promise<(import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    update(id: string, completed: boolean): Promise<(import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, Task, {}, {}> & Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
