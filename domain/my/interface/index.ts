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
  uRef: React.RefCallback<HTMLDivElement>;
}
