import './App.css';
import Body from './components/Body';
import store from './util/store';
import { Provider } from 'react-redux';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Categories from './components/Categories';
import SearchVideos from './components/SearchVideos';

const appRouter =createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:"/",
    element:<MainContainer/>
  },
  {
    path:"/watch",
    element:<WatchPage/>
  },
  {
    path:"/category/:id",
    element:<Categories/>
  },{
    path:"/results",
    element:<SearchVideos/>
  }
]

 
}
])
function App() {


  return (
    <Provider store={store}>
    <div>
    
      <RouterProvider router={appRouter}/>
      </div>
    </Provider>
   
  );
}

export default App;
