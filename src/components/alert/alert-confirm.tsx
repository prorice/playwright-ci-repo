import { Alert } from './alert';

export const AlertConfirm = async (addConfirmText: string) => {
  return Alert({
    text: `${addConfirmText} 하시겠습니까?`,
    icon: 'warning',
    showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
    confirmButtonText: '승인',
    cancelButtonText: '취소',
  });
};

export const AlertConfirmSuccess = async () => {
  return Alert({
    title: '성공',
    text: '승인이 완료되었습니다.',
    icon: 'success',
    confirmButtonText: '확인',
  });
};

export const AlertConfirmFail = async () => {
  return Alert({
    title: '실패',
    text: '승인에 실패하였습니다.',
    icon: 'error',
    confirmButtonText: '확인',
  });
};
