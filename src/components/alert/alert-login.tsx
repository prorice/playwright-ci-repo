import { Alert } from './alert';

export const AlertLoginSuccess = async () => {
  return Alert({
    title: '로그인 성공',
    icon: 'success',
    confirmButtonText: '확인',
  });
};

export const AlertLoginFail = async () => {
  return Alert({
    title: '로그인 실패',
    text: '아이디/비밀번호가 일치하지 않습니다.',
    icon: 'error',
    confirmButtonText: '확인',
  });
};
