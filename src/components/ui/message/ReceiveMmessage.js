const ReceiveMessage = (props) => {
  const messageMargin = {
    top: '16px 0px 2px 0px',
    mid: '2px 0px 2px 0px',
    end: '2px 0px 16px 0px',
    single: '20px 0px 20px 0px',
  };

  const messageStyles2 = {
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
    <>
      <div>
        <div
          className={`container d-flex ${
            props.msgType !== 'resMsg'
              ? 'justify-content-end'
              : 'justify-content-start'
          }`}
          style={{
            margin:
              messageStyles2[props.msgType].msgPosition[props.messagePosition]
                .margin,
          }}
        >
          <div
            className="flex-grow-0 message-outer p-3 bg-warning "
            style={{
              margin: messageStyles2[props.msgType].widthMargin,
              borderRadius:
                messageStyles2[props.msgType].msgPosition[props.messagePosition]
                  .borderRadius,
            }}
          >
            <div>
              {' '}
              <p class="fw-medium mb-1">Steve</p>
            </div>
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
                    <p class="fw-medium m-0">You</p>
                  </div>
                  <div>{props.replyMessage}</div>
                </div>
              )}
              <div>{props.message}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceiveMessage;
