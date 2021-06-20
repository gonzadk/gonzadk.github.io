import {createContext, ReactNode} from 'react';

import { RESUME, TResume } from './resume.types';

export const ResumeContext = createContext<TResume>(RESUME);

export const ResumeContextProvider = ({ children }: { children: ReactNode }) => {
  return <ResumeContext.Provider value={RESUME}>{children}</ResumeContext.Provider>;
};
