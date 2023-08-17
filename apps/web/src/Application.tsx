import { Loader } from '@ui-kit/components/loader/Loader';
import { Button } from '@ui-kit/components/button/Button';

//
//

export const Application: React.FC = () => (
  <div>
    <h1 className='text text-left text-2xl'>Hello from NextJS</h1>
    <div className='w-12 h-12 bg-slate-300 rounded-full' />
    <Loader />
    <Button>Click me!</Button>
  </div>
);
