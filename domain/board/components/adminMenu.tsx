import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { deleteAnswer, deleteComment, putAnswer, putComment } from "../api";

const options = ["수정하기", "삭제하기"];
const ITEM_HEIGHT = 22;

export default function AdminMenu({
  boardId,
  type,
}: {
  boardId: number;
  type: "comment" | "answer";
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
                if (data === "수정하기") {
                  putAnswer(boardId).then((_) => {
                    alert("수정이 완료되었습니다.");
                  });
                } else {
                  deleteAnswer(boardId).then((_) => {
                    alert("삭제가 완료되었습니다.");
                  });
                }
              } else {
                if (data === "수정하기") {
                  putComment(boardId).then((_) => {
                    alert("수정이 완료되었습니다..");
                  });
                } else {
                  deleteComment(boardId).then((_) => {
                    alert("삭제가 완료되었습니다..");
                  });
                }
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
