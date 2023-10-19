import React, { PropsWithChildren } from 'react';

//
//

export const Decorator: React.FC<PropsWithChildren> = ({ children }) => (
  <section className='w-screen h-screen bg-colorBackground -m-[1rem] flex justify-center items-center'>
    {children}
  </section>
);
