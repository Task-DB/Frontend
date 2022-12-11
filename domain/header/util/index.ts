export const handleLogout = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("fcmToken");
  location.href = "/";
  alert("로그아웃 되었습니다.");
};
