import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import NoteList from './components/NoteList';

function App() {
  return (
    <>
      <section className='todoapp'>
        <Header />
        <Content />
      </section>
      <NoteList />
    </>
  );
}

export default App;
