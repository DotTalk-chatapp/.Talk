import IconButton from '@mui/material/IconButton';
import PositionedMenu from '../../atoms/PositionedMenu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import SearchIcon from '@mui/icons-material/Search';
import EastIcon from '@mui/icons-material/East';
import ReplyIcon from '@mui/icons-material/Reply';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

const InboxHeader = (props) => {
  return (
    <>
      <div className="container p-2 bg-light">
        <div class="d-flex align-items-center">
          <div class="p-2 flex-grow-1  d-flex align-items-center">
            <div>
              <Tooltip title="View Profile">
                <Avatar
                  alt={props.alt}
                  src={props.imgUrl}
                  sx={{ width: 56, height: 56 }}
                />
              </Tooltip>
            </div>
            <div className="ms-3">
              <span class=" fs-5 fw-semibold">Nisal </span>
            </div>
          </div>
          <div class="p-2">
            <Tooltip title="Reply">
              <IconButton color="primary" aria-label="Reply">
                <ReplyIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div class="p-2">
            <Tooltip title="Save ">
              <IconButton color="primary" aria-label="Save">
                <BookmarkAddIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div class="p-2">
            <Tooltip title="Delete">
              <IconButton color="primary" aria-label="Delete">
                <DeleteForeverIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div class="p-2">
            <Tooltip title="Forward">
              <IconButton color="primary" aria-label="Forward">
                <EastIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div class="p-2">
            <Tooltip title="Search">
              <IconButton color="primary" aria-label="Search">
                <SearchIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div class="p-2">
            <PositionedMenu />
          </div>
        </div>
      </div>
    </>
  );
};

export default InboxHeader;
