import DoneIcon from '@mui/icons-material/Done';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const ReceiveMessage = (props) => {
  // messages status icons
  const messageStatus = {
    send: <DoneIcon fontSize="small" />,
    received: <DoneAllIcon fontSize="small" />,
    viewed: <DoneAllIcon color="primary" sx={{ fontSize: 20 }} />,
  };

  // margins for messages
  const messageMargin = {
    top: '16px 0px 2px 0px',
    mid: '2px 0px 2px 0px',
    end: '2px 0px 16px 0px',
    single: '20px 0px 20px 0px',
  };

  // styles for message box respond and send message
  const messageStyles = {
    resMsg: {
      widthMargin: '0rem 10rem 0rem 0rem',
      msgPosition: {
        top: { borderRadius: '18px 18px 18px 5px', margin: messageMargin.top },
        mid: { borderRadius: '5px 18px 18px 5px', margin: messageMargin.mid },
        end: { borderRadius: '5px 18px 18px 18px', margin: messageMargin.end },
        single: {
          borderRadius: '18px 18px 18px 18px',
          margin: messageMargin.single,
        },
      },
    },
    sendMsg: {
      widthMargin: '0rem 0rem 0rem 10rem',
      msgPosition: {
        top: { borderRadius: '18px 18px 5px 18px', margin: messageMargin.top },
        mid: { borderRadius: '18px 5px 5px 18px', margin: messageMargin.mid },
        end: { borderRadius: '18px 5px 18px 18px', margin: messageMargin.end },
        single: {
          borderRadius: '18px 18px 18px 18px',
          margin: messageMargin.single,
        },
      },
    },
  };

  return (
    <div>
      {/* main container */}
      <div
        className={`container d-flex ${
          props.msgType !== 'resMsg'
            ? 'justify-content-end'
            : 'justify-content-start'
        }`}
        style={{
          margin:
            messageStyles[props.msgType].msgPosition[props.messagePosition]
              .margin,
        }}
      >
        {/* Message container */}
        <div
          className="flex-grow-0 message-outer p-3 bg-warning "
          style={{
            margin: messageStyles[props.msgType].widthMargin,
            borderRadius:
              messageStyles[props.msgType].msgPosition[props.messagePosition]
                .borderRadius,

            minWidth: '150px',
          }}
        >
          {/* sender name , messagestatus and time */}
          <div className="d-flex  justify-content-between">
            <p class="fw-medium mb-1">{props.senderName}</p>
            <div className="d-flex  justify-content-between">
              {props.msgType === 'sendMsg' &&
                messageStatus[props.messageStatus]}
              <p class="fw-light mb-1 ms-1">{props.sendTime}</p>
            </div>
          </div>
          {/* Mentioned message */}
          <div>
            {props.mentioned && (
              <div
                style={{
                  borderLeft: 'solid 4px #ff7f50',
                  backgroundColor: '#eccc68',
                  padding: '0.6rem',
                  borderRadius: '11px',
                  marginLeft: '-7px',
                  marginBottom: '7px',
                  marginTop: '8px',
                }}
              >
                <div>
                  <p class="fw-medium m-0">
                    {props.replyName ? props.replyName : 'You'}
                  </p>
                </div>
                <div>{props.replyMessage}</div>
              </div>
            )}
            {/* Message */}
            <div>{props.message}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveMessage;

/*

<Message
messageStatus
            senderName="Steve Rojers"
            sendTime="20:56"
            messagePosition="mid"
            msgType="resMsg"
            mentioned={true}
            replyName="Kavinda"
            replyMessage="MUI customization. Suddenly, YouTube suggested your
            channel to me. I learned so much from your videos, and it was
            worth spending my time."
            message="Recently,Recently, I searched Recently, I searched for some videos
              to learn MUI customization. Suddenly, YouTube suggested your
              channel to me. I learned so much from your videos, and it was
              worth spending my time."
          />



*/
