import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: AuthDto): Promise<import("mongoose").Document<unknown, {}, import("../users/user.schema").User, {}, {}> & import("../users/user.schema").User & Required<{
        _id: import("mongoose").Types.ObjectId;
    }> & {
        __v: number;
    }>;
    login(dto: AuthDto): Promise<{
        access_token: string;
    }>;
}
