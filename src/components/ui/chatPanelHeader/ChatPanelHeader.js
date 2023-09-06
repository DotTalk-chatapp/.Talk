import IconButton from '@mui/material/IconButton';
import AddCommentIcon from '@mui/icons-material/AddComment';
import TollIcon from '@mui/icons-material/Toll';
import Groups2Icon from '@mui/icons-material/Groups2';
import PositionedMenu from '../../atoms/PositionedMenu';
import Avatar from '@mui/material/Avatar';

const ChatPanelHeader = (props) => {
  return (
    <>
      <div className="container p-2 bg-light">
        <div class="d-flex align-items-center">
          <div class="p-2 flex-grow-1  ">
            <Avatar
              alt={props.alt}
              src="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
              sx={{ width: 56, height: 56 }}
            />
          </div>
          <div class="p-2">
            <IconButton color="primary" aria-label="add to shopping cart">
              <Groups2Icon />
            </IconButton>
          </div>
          <div class="p-2">
            <IconButton color="primary" aria-label="add to shopping cart">
              <TollIcon />
            </IconButton>
          </div>
          <div class="p-2">
            <IconButton color="primary" aria-label="add to shopping cart">
              <AddCommentIcon />
            </IconButton>
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
