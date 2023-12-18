import { Button } from '@ui-kit/components/button/Button';

console.log('[App.tsx]', `Hello world from Electron ${process.versions.electron}!`);

function App() {
  return (
    <div className='App'>
      Electron App
      <Button className='min-w-[175px]'>Start</Button>
    </div>
  );
}

export default App;
