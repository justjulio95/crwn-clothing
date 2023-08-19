import Directory from './directory/directory.component';
import categories from './components/category-menu/category-menu.component';

const App = () => {
  return (
    <Directory categories={categories}/>
  );
}

export default App;
