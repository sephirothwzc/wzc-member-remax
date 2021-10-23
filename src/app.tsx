import * as React from 'react';
import './app.css';
import AppPage from '@/plugin/app-page';

interface AppProp {
  children: React.ReactElement;
}

const App: React.FC<AppProp> = ({ children }) => <AppPage>{children}</AppPage>;

export default App;
