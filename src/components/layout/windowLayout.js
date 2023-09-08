import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import ChatPanelHeader from '../ui/chatPanelHeader/ChatPanelHeader';
import InboxHeader from '../ui/inboxHeader/InboxHeader';
import Chatbox from '../ui/chatbox/Chatbox';
import Message from '../ui/message/Message';
import SendMessageBox from '../ui/sendMessageBox/SendMessageBox';

const WindowLayout = (props) => {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid xs={4}>
            <Box sx={{ bgcolor: '#cfe8ef', height: '100vh' }}>
              <ChatPanelHeader imgUrl="https://shiftart.com/wp-content/uploads/2017/04/RC-Profile-Square.jpg" />

              <Chatbox
                imgUrl="https://images.unsplash.com/photo-1592334873219-42ca023e48ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80"
                alt="chatAvatarImage"
                personName="Ashen Silva"
                lastMessagedPerson="You"
                lastMessage="more great photos and..."
                date="Monday"
                lastMessageStatus="🕑"
              />
              <Chatbox
                imgUrl="https://i.pinimg.com/736x/70/03/0f/70030f44f8a17cb67bf1ce16331058c7.jpg"
                alt="chatAvatarImage"
                personName="Jenner Kelly"
                lastMessagedPerson="You"
                lastMessage="Lorem ipsum qeteys..."
                date="Monday"
                lastMessageStatus="🕑"
              />
              <Chatbox
                imgUrl="https://menhairstylesworld.com/wp-content/uploads/2019/01/bearded-man-black-vest.jpg"
                alt="chatAvatarImage"
                personName="Derek mark"
                lastMessagedPerson="You"
                lastMessage="Lorem ipsum qeteys..."
                date="Monday"
                lastMessageStatus="🕑"
              />
            </Box>
          </Grid>
          <Grid xs={8}>
            <Box
              sx={{
                bgcolor: '#cfe8fc',
                height: '100vh',
                overflow: 'auto',
              }}
            >
              <Box>
                <InboxHeader
                  imgUrl="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
                  alt="chatAvatarImage"
                />
              </Box>

              <Box
                sx={{
                  overflow: 'auto',
                }}
              >
                <Message
                  senderName="Steve Rojers"
                  sendTime="20:56"
                  messagePosition="top"
                  msgType="resMsg"
                  mentioned={false}
                  message="Recently,Recently, I searched Recently, I searched for some videos
              to learn MUI customization."
                />
                <Message
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
                <Message
                  senderName="Steve"
                  sendTime="20:56"
                  messagePosition="end"
                  msgType="resMsg"
                  mentioned={false}
                  message="spe"
                />

                <Message
                  messageStatus="viewed"
                  messagePosition="top"
                  senderName="Steve"
                  sendTime="20:56"
                  msgType="sendMsg"
                  mentioned={true}
                  replyName="Nisal"
                  replyMessage="MUI customization. Suddenly,"
                  message="Can you tell me more about the featur"
                />
                <Message
                  messageStatus="received"
                  messagePosition="mid"
                  senderName="Steve"
                  sendTime="20:56"
                  msgType="sendMsg"
                  mentioned={false}
                  message="Can you tell "
                />
                <Message
                  messageStatus="send"
                  messagePosition="end"
                  senderName="Steve"
                  sendTime="20:56"
                  msgType="sendMsg"
                  mentioned={false}
                  message="about the featur"
                />
              </Box>
              <Box>
                <SendMessageBox />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default WindowLayout;
