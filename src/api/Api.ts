import axios from "axios";
import {  PhotosType, UserType } from "../type/type";

export const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",

  headers: {
    "API-KEY": "ebd41fc4-5254-47ae-be09-bcca76e1b927",
  },
});

export type GetUsersType = {
  items: Array<UserType>
  totalCount: number;
  error: string | null;
};




export type UpdateStateusTpe  = { 
  resultCode:ResultCodeEnum
  messages:string[]
  data:{}
}

export type SavePhotoType   = { 
  data:{
    photos:PhotosType
  }
  resultCode:ResultCodeEnum
  messages:string[]
}

export type SaveProfileType  = { 
  data:{}
  resultCode:ResultCodeEnum
  messages:string[]
}

export enum ResultCodeEnum {
  Success = 0,
  Error = 1,
  CaptchaIsRequired
}

export enum ResultCodeCaptchaEnum {
  CaptchaIsRequired = 10,
}
export type ApiResponseType<D = {},RC=ResultCodeEnum> = {
  photos(photos: any): any;
  data:D  
  messages: Array<string>;
  resultCode: RC

}

