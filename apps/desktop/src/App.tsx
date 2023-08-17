import './tailwind.css';
import { Loader } from '@ui-kit/components/loader/Loader';
import { Button } from '@ui-kit/components/button/Button';

//
//

const App = () => (
  <div className='bg-slate-100 w-screen h-screen'>
    <h1 className='text-center text-xl text-black'>Hello from Electron!</h1>
    <Button>Click me!</Button>
    <Loader />
  </div>
);

export default App;
