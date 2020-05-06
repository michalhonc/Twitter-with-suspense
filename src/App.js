import React, { Suspense, SuspenseList } from 'react';
import './App.css';

const Feed = React.lazy(() => import('./components/Feed'));
const WhoToFollow = React.lazy(() => import('./components/WhoToFollow'));
const TrendsForYou = React.lazy(() => import('./components/TrendsForYou'));

const App = () => {
    return (
        <div className="App">
            <div className="Column Column--left">
                Icons
            </div>
            <SuspenseList>
                <div className="Column Column--middle">
                    <Suspense fallback="Loading..">
                        <Feed />
                    </Suspense>
                </div>
                <div className="Column Column--right">
                    <Suspense fallback="Loading..">
                        <WhoToFollow />
                    </Suspense>
                    <Suspense fallback="Loading..">
                        <TrendsForYou />
                    </Suspense>
                </div>
            </SuspenseList>
        </div>
    );
}

export default App;
