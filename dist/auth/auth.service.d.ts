import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/user.schema';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    register(email: string, password: string): Promise<import("mongoose").Document<unknown, {}, User, {}, {}> & User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
