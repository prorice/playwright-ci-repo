// 컴포넌트 자체 prop interface가 아닌 아이템에 설정에 사용될 prop
export interface IListItems {
  label: string | number;
  disabled?: boolean;
  subHeader?: string; // 아이템 헤더 설정
  prefixElement?: React.ReactNode; // 앞에 적용할 수 있는 엘리먼트
  suffixElement?: React.ReactNode; // 뒤에 적용할 수 있는 엘리먼트
  divider?: boolean;
  selected?: boolean; // 선택되는 아이템 버튼
  onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
  // list item button 클릭시 이벤트 발생
  nestedItems?: IListItems[]; // 전체 반복
}
