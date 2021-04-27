import Page from '../components/Page';

export default function Login() {
  return (
    <Page grey>
      <div className="form-container">
        {/* <h1 className="title">Weiss</h1> */}
        <form>
          <h3>Sign into your account</h3>
          <input className="block" type="email" name="" placeholder="Email " />
          <input className="block" type="password" name="" placeholder="Password" />
          <button className="btn success fill block">Login</button>
        </form>
      </div>
    </Page>
  );
}
