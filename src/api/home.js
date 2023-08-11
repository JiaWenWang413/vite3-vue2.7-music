import request from '@/utils/request';

// 发送验证码
export function loginRequest (params) {
    return request.post(
      `/captcha/sent`,
      params
    );
  }
 
