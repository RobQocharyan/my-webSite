
import { instance,ApiResponseType, ResultCodeCaptchaEnum, ResultCodeEnum } from './Api';


type MeResponseDataType = {
    id: number;
    email: string;
    login: string;
};

type LoginResponseDataType = {
    userId: number;
};



export const authAPI = {
  async me() {
    const res = await instance.get<ApiResponseType<MeResponseDataType>>(`auth/me`);
    return res.data;
  },
  async login(
    email: string,
    password: string,
    rememberMe: boolean = false,
    captcha: null | string = null
  ) {
    const res = await instance
      .post<ApiResponseType<LoginResponseDataType,ResultCodeCaptchaEnum | ResultCodeEnum>>(`auth/login`, { email, password, rememberMe, captcha });
    return res.data;
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};