interface UseMoveScrollNameType {
  name: string;
}

export interface UserInfoMenuType {
  element: React.RefObject<HTMLDivElement>;
  onMoveToElement: Function;
  namae: UseMoveScrollNameType;
}

export interface UserInfoRightPropsType {
  moveRef: React.RefObject<HTMLDivElement>;
  ref: React.RefCallback<HTMLDivElement>;
  isTop: boolean;
}
