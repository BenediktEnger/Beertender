import React, { createContext, useContext } from 'react';
import { domainService } from '../../config/bootstrap';


const ServiceContext = createContext(domainService);

export const DomainServiceProvider = ({ children }: { children: React.ReactNode }) => <ServiceContext.Provider value={domainService}>
  {children}
</ServiceContext.Provider>;
export const useDomainServices = () => useContext(ServiceContext);
