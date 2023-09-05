import Textbox from './components/ui/Textbox';
import Button from './components/ui/Button';

import './App.css';
import Card from './components/ui/Card';

function App() {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ height: '90vh' }}
      >
        <Card width="20rem" height="auto">
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
        </Card>
      </div>
    </>
  );
}

export default App;
