import TagFacesIcon from '@mui/icons-material/TagFaces';
import AddIcon from '@mui/icons-material/Add';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import Textbox from '../../atoms/Textbox';
import Card from '../../atoms/Card';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const SendMessageBox = (props) => {
  return (
    <div className="container mb-2">
      <Card>
        <div className="d-flex align-items-center">
          <div className="">
            <Tooltip title="Emoji">
              <IconButton color="primary" aria-label="Emoji">
                <TagFacesIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className="">
            <Tooltip title="Add">
              <IconButton color="primary" aria-label="Add">
                <AddIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className="">
            <Tooltip title="Voice Message">
              <IconButton color="primary" aria-label="Add">
                <KeyboardVoiceIcon />
              </IconButton>
            </Tooltip>
          </div>
          <div className="flex-grow-1 ">
            <Tooltip title="Enter Message">
              <Textbox addCss="m-0 " />
            </Tooltip>
          </div>
          <div className="">
            <Tooltip title="Send">
              <IconButton color="primary" aria-label="Add">
                <SendIcon />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SendMessageBox;
