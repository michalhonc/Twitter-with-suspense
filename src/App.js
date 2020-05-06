import React, { Suspense, SuspenseList } from 'react';
import './App.css';
import { Loader } from './components/Loader';

const delay = (time: number) => (promiseResult: any): Promise<any> =>
  new Promise(resolve => setTimeout(() => resolve(promiseResult), time));

const Feed = React.lazy(() => import('./components/Feed').then(delay(1500)));
const WhoToFollow = React.lazy(() => import('./components/WhoToFollow').then(delay(700)));
const TrendsForYou = React.lazy(() => import('./components/TrendsForYou').then(delay(800)));

const App = () => {
    return (
        <div className="App">
            <div className="Column Column--left">
                <span>Home</span>
                <span>Explore</span>
                <span>Notifications</span>
                <span>Messages</span>
                <span>Bookmarks</span>
                <span>Lists</span>
                <span>Profile</span>
                <span>More</span>
            </div>
            <SuspenseList revealOrder="together">
                <div className="Column Column--middle">
                    <Suspense fallback={<Loader />}>
                        <Feed />
                    </Suspense>
                </div>
                <div className="Column Column--right">
                    <Suspense fallback={<Loader className="TrendsForYou" />}>
                        <TrendsForYou />
                    </Suspense>
                    <Suspense fallback={<Loader className="WhoToFollow"  />}>
                        <WhoToFollow />
                    </Suspense>
                </div>
            </SuspenseList>
        </div>
    );
}

export default App;
