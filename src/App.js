import Textbox from './components/atoms/Textbox';
import Button from './components/atoms/Button';

import './App.css';
import Card from './components/atoms/Card';
import Chatbox from './components/ui/chatbox/Chatbox';

function App() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: '90vh' }}
      >
        <Card width="32rem" height="auto">
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
        </Card>
      </div>
    </>
  );
}

export default App;
