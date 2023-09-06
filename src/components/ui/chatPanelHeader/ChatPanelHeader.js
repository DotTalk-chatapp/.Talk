import IconButton from '@mui/material/IconButton';
import AddCommentIcon from '@mui/icons-material/AddComment';
import TollIcon from '@mui/icons-material/Toll';
import Groups2Icon from '@mui/icons-material/Groups2';
import PositionedMenu from '../../atoms/PositionedMenu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';

const ChatPanelHeader = (props) => {
  return (
    <>
      <div className="container p-2 bg-light">
        <div class="d-flex align-items-center">
          <div class="p-2 flex-grow-1  ">
            <Tooltip title="Your Profile">
              <Avatar
                alt={props.alt}
                src={props.imgUrl}
                sx={{ width: 56, height: 56 }}
              />
            </Tooltip>
          </div>
          <div class="p-2">
            <Tooltip title="Groups">
              <IconButton color="primary" aria-label="Groups">
                <Groups2Icon />
              </IconButton>
            </Tooltip>
          </div>
          <div class="p-2">
            <Tooltip title="Stories">
              <IconButton color="primary" aria-label="Stories">
                <TollIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div class="p-2">
            <Tooltip title="New Chat">
              <IconButton color="primary" aria-label="New Chat">
                <AddCommentIcon />
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

export default ChatPanelHeader;
