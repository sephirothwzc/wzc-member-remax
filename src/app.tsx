import * as React from 'react';
import AppPage from '@/plugin/app-page';
import './app.scss';
import 'annar/dist/annar.css';

interface AppProp {
  children: React.ReactElement;
}

const App: React.FC<AppProp> = ({ children }) => <AppPage>{children}</AppPage>;

export default App;
