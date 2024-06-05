import NavComponent from './components/NavComponent';
import SidebarComponent from './components/SidebarComponent';
import ContentComponent from './components/ContentComponent';
import SearchComponent from './components/SearchComponent';

function App() {
  return (
    <div className="app flex flex-col">
      <NavComponent></NavComponent>
      <div className="app-body flex flex-col pl-4 pr-4 md:pl-20 md:pr-20 box-border-none">
        <SearchComponent></SearchComponent>
        <div className='app-content flex'>
          <SidebarComponent></SidebarComponent>
          <ContentComponent></ContentComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
