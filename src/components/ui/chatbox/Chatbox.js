import classes from './Chatbox.module.css';
import Badge from '@mui/material/Badge';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const Chatbox = (props) => {
  return (
    <>
      <div
        className={`container outer mt-2 mb-2  pe-3 ps-4 pt-2 pb-2 ${classes.outer} `}
      >
        <div
          className="row inner d-flex"
          style={{
            height: '6rem',
          }}
        >
          <div
            className="col-2 image d-flex align-items-center justify-content-center"
            style={{ minWidth: '80px' }}
          >
            {''}
            <Badge color="success" overlap="circular" badgeContent="99+">
              <img
                src={props.imgUrl}
                alt={props.alt}
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '100%',
                }}
              />
            </Badge>

            {''}
          </div>
          <div className="flex-grow-1 col-5  texts d-flex align-items-center">
            <div className="row">
              <div className="row chatname ">
                <span class=" fs-5 fw-semibold ">{props.personName}</span>
              </div>
              <div className="row name-lastMessage">
                <span class="fw-normal">
                  {`${props.lastMessagedPerson} : ${props.lastMessage}`}
                </span>
              </div>
            </div>
          </div>
          <div
            className="col-2   date-notification d-flex align-items-center"
            style={{ maxWidth: '90px', minWidth: '80px' }}
          >
            <div>
              <div className="row">
                <span class=" fst-italic">{props.date}</span>
              </div>
              <div className="row mt-2">
                <span class="fs-6 d-flex justify-content-center">
                  <DoneAllIcon />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbox;
