// import logo from './logo.svg';
// import './App.css';
import './universities.css'
import UniversityList from "./components/UniversityList";
// import UniversityData from "./data/UniversityData";
import { UniversityProvider } from './components/context/UniversityContext';

function App() {

  return (
    <UniversityProvider>
    <div className="App">
      <h1 className=' text-center text-2xl my-4 md:text-3xl lg:text-4xl xl:text-6xl font-medium'>
        List of All Nigerian Univerisities
      </h1>
      <section className='main'>
        <UniversityList/>
      </section>

    </div>
    </UniversityProvider>
  );
}

export default App;
