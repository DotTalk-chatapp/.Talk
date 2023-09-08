import ChatPanel from '../../components/layout/ChatPanel';
import WindowLayout from '../../components/layout/windowLayout';

const ChatPage = (props) => {
  return (
    <>
      <WindowLayout left={<ChatPanel />} right={<ChatPanel />} />
    </>
  );
};

export default ChatPage;
