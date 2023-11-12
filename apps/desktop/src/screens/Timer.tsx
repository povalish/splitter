import React, { useState } from 'react';

import { Screen } from '@ui-kit/layouts/screen/Screen';
import { Input } from '@ui-kit/components/input/Input';
import { Button } from '@ui-kit/components/button/Button';

import { Periods } from '@modules/timer/views/Periods';
import { Countdown } from '@modules/timer/views/Countdown';

//
//

export const Timer: React.FC = () => {
  const [inputText, setInputText] = useState('');
  return (
    <Screen className='w-screen h-screen'>
      <div className='container mx-auto w-full h-full px-4 flex flex-col'>
        <main className='flex flex-grow flex-col items-center justify-center gap-6'>
          <Periods />
          <Countdown seconds={120} />
          <Button className='min-w-[175px]'>Start</Button>
        </main>

        <div className='flex justify-center pb-12 md:pb-16 mt-10'>
          <Input
            className='w-full sm:max-w-[320px]'
            label='Main focus on this time?'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
      </div>
    </Screen>
  );
};
