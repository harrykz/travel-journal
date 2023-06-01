import './App.css';
import './styles.css'

import travelData from './dataFiles/travelData';

import NavigationBar from './components/NavigationBar';
import JournalCards from './components/JournalCards';

function App() {

  let travellingData = travelData.map((items)=>{
    return <JournalCards 
      key={items.id}
      fullobj={items}
    />
  })

  return (
    <div>
      <NavigationBar />
      <section className='travel--cards_holder'>
        {travellingData}
      </section>
    </div>
  );
}

export default App;
