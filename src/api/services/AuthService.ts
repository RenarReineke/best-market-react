import api from "../config";
import { AxiosResponse } from "axios";
import { ILoginResponse } from "@api/response/LoginResponse";
import { ILoginRequest } from "@api/request";

export class AuthService {
    static registerUrl: string = "/registration";
    static loginUrl: string = "/login";

    static register(user: ILoginRequest): Promise<AxiosResponse<ILoginResponse>> {
        return api.post(AuthService.registerUrl, user);
    }

    static signIn(user: ILoginRequest): Promise<AxiosResponse<ILoginResponse>> {
        return api.post(AuthService.loginUrl, user);
    }
}