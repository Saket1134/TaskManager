import { TasksService } from './tasks.service';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    create(body: any, req: any): Promise<import("mongoose").Document<unknown, {}, import("./task.schema").Task, {}, {}> & import("./task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(req: any): Promise<(import("mongoose").Document<unknown, {}, import("./task.schema").Task, {}, {}> & import("./task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    update(id: string, body: any): Promise<(import("mongoose").Document<unknown, {}, import("./task.schema").Task, {}, {}> & import("./task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    delete(id: string): Promise<(import("mongoose").Document<unknown, {}, import("./task.schema").Task, {}, {}> & import("./task.schema").Task & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
}
