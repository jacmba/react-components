import Header from "./Header";
import Speakers from "./Speakers";
import Layout from "./Layout";
import AuthProvider from "../contexts/AuthContext";

const App = () => (
  <AuthProvider initialLoggedInUser="Fulanito">
    <Layout startingTheme="light">
      <div>
        <Header />
        <Speakers />
      </div>
    </Layout>
  </AuthProvider>
);

export default App;
