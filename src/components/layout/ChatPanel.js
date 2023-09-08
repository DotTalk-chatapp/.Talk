import ChatPanelHeader from '../ui/chatPanelHeader/ChatPanelHeader';
import Chatbox from './components/ui/chatbox/Chatbox';

const ChatPanel = () => {
  return (
    <>
      <div>
        <div>
          <ChatPanelHeader
            imgUrl="https://imgv3.fotor.com/images/gallery/watercolor-female-avatar.jpg"
            alt="chatAvatarImage"
          />
        </div>
        <div>
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
        </div>
      </div>
    </>
  );
};

export default ChatPanel;
