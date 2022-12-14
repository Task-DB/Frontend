import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteAnswer, deleteComment } from "../api";
import { useRouter } from "next/router";
import { deleteBoard } from "../../write/api";
import { DynamicRouteType } from "../interface";
import { EditorFormValue } from "../../write/interface";

const ITEM_HEIGHT = 22;

export default function AdminMenu({
  boardId,
  boardData,
  method,
  type,
  setIsEdit,
}: {
  boardData?: EditorFormValue;
  boardId: DynamicRouteType | number;
  method: string;
  type: "comment" | "answer" | "board";
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [options, setOptions] = React.useState(["삭제하기"]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();
  React.useEffect(() => {
    if (method === "put") {
      setOptions((prev) => [...prev, "수정하기"]);
    }
  }, [method]);
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon style={{ color: "white" }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((data, idx) => (
          <MenuItem
            key={idx}
            onClick={() => {
              if (type === "board") {
                if (data === "삭제하기") {
                  deleteBoard(boardId).then(() => {
                    alert("삭제가 완료되었습니다.");
                    location.href = "/";
                  });
                } else {
                  router.push(`/board/${boardId}/edit`);
                }
              } else if (type === "answer") {
                deleteAnswer(boardId).then((_) => {
                  alert("삭제가 완료되었습니다.");
                  router.reload();
                });
              } else {
                deleteComment(boardId).then((_) => {
                  alert("삭제가 완료되었습니다.");
                  router.reload();
                });
              }

              handleClose();
            }}
          >
            {data}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
