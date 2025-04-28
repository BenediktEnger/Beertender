// app/ServiceContext.tsx
import React, { createContext, useContext } from 'react';
import { services } from './bootstrap';

const ServiceContext = createContext(services);

export const ServiceProvider = ({ children }: { children: React.ReactNode }) => <ServiceContext.Provider value={services}>
  {children}
</ServiceContext.Provider>;
export const useServices = () => useContext(ServiceContext);
