export const handleLogout = () => {
  localStorage.removeItem("accessToken");
  location.href = "/";
  alert("로그아웃 되었습니다.");
};
