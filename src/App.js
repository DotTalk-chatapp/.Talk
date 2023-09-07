import Textbox from './components/atoms/Textbox';
import Button from './components/atoms/Button';

import './App.css';
import Card from './components/atoms/Card';
import Chatbox from './components/ui/chatbox/Chatbox';
import ChatPanelHeader from './components/ui/chatPanelHeader/ChatPanelHeader';
import InboxHeader from './components/ui/inboxHeader/InboxHeader';
import Message from './components/ui/message/Message';

function App() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: 'auto' }}
      >
        <Card width="45rem" height="auto">
          <p class="fs-4">Sign in</p>
          <Textbox
            label="Email address"
            type="email"
            areaDescribeBy="emailHelp"
            addCss="mb-1"
          />

          <Textbox
            label="Password"
            type="password"
            areaDescribeBy="passwordHelp"
            addCss="mb-3"
          />
          <div className="d-flex justify-content-end">
            {/*<Button text="Cancel" color="btn-outline-dark" /> */}

            <Button text="Sign in" color="btn-dark" type="submit" />
          </div>

          <ChatPanelHeader
            imgUrl="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
            alt="chatAvatarImage"
          />
          <br />
          <InboxHeader
            imgUrl="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
            alt="chatAvatarImage"
          />
          <br />

          <Chatbox
            imgUrl="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
            alt="chatAvatarImage"
            personName="Kavinda Madhuranga"
            lastMessagedPerson="You"
            lastMessage="Lorem ipsum qeteys..."
            date="Monday"
            lastMessageStatus="🕑"
          />
          <Chatbox
            imgUrl="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
            alt="chatAvatarImage"
            personName="Kavinda Madhuranga"
            lastMessagedPerson="You"
            lastMessage="Lorem ipsum qeteys..."
            date="Monday"
            lastMessageStatus="🕑"
          />
          <Chatbox
            imgUrl="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
            alt="chatAvatarImage"
            personName="Kavinda Madhuranga"
            lastMessagedPerson="You"
            lastMessage="Lorem ipsum qeteys..."
            date="Monday"
            lastMessageStatus="🕑"
          />

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
        </Card>
      </div>
    </>
  );
}

export default App;
