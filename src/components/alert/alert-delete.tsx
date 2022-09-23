import { Alert } from './alert';

export const AlertDelete = async (addDeleteText: string) => {
  return Alert({
    text: `${addDeleteText}를 삭제 하시겠습니까?`,
    icon: 'warning',
    showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
    confirmButtonText: '삭제',
    cancelButtonText: '취소',
  });
};

export const AlertDeleteSuccess = async () => {
  return Alert({
    title: '성공',
    text: '삭제하였습니다.',
    icon: 'success',
    confirmButtonText: '확인',
  });
};

export const AlertDeleteFail = async () => {
  return Alert({
    title: '실패',
    text: '삭제에 실패하였습니다.',
    icon: 'error',
    confirmButtonText: '확인',
  });
};
