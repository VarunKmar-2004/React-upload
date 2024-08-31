import Navbar from '../src/Components/Navbar.jsx';
import Hero from '../src/Components/Hero.jsx'
import Analytics from '../src/Components/Analytics.jsx'
import Newletter from '../src/Components/Newletter.jsx'
import Card from '../src/Components/Card.jsx'
import Footer from '../src/Components/Footer.jsx'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newletter/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
