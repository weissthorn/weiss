import Page from '../components/Page';

export default function Login() {
  return (
    <Page grey>
      <div className="form-container">
        <form>
          <input className="block" type="email" name="" placeholder="Email " />
          <input type="password" name="" placeholder="Password" />
        </form>
      </div>
    </Page>
  );
}
