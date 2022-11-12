import { GetUsersType, instance, ApiResponseType } from "./Api";


export const usersAPI = {
  getUsers(currentPage=1, pageSize=10,term:string="",friend:null | boolean = null) {

    return instance.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend===null ? '':`&friend=${friend}`)).then(res => res.data)
  },

  follow(userId: number) {
    return instance.post<ApiResponseType>(`follow/${userId}`).then(res => res.data);
  },

  unfollow(userId: number) {
    return instance.delete(`follow/${userId}`).then(res => res.data) as Promise<ApiResponseType>;
  }
};