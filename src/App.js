import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';
import WishListCart from './pages/WishListCart';
import Error from './pages/Error';


const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppProvider />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/wishlist",
        element: <WishListCart />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <RouterProvider router={appRoute} />
      </Provider>
    </div>
  );
}

function AppProvider() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App;
