import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteAnswer, deleteComment, putAnswer, putComment } from "../api";
import { useRouter } from "next/router";

const options = ["삭제하기"];
const ITEM_HEIGHT = 22;

export default function AdminMenu({
  boardId,
  type,
  setIsEdit,
}: {
  boardId: number;
  type: "comment" | "answer";
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter();

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
              if (type === "answer") {
                deleteAnswer(boardId).then((_) => {
                  alert("삭제가 완료되었습니다.");
                  router.reload();
                });
              } else {
                deleteComment(boardId).then((_) => {
                  alert("삭제가 완료되었습니다..");
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
