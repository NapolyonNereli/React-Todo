import './App.css';
import Content from './components/Content';
import ContentFooter from './components/ContentFooter';
import Header from './components/Header';

function App() {
  return (
    <section className='todoapp'>
      <Header />
      <Content />
    </section>
  );
}

export default App;
