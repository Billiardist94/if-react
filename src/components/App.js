import '../styles/components/App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopSection from './TopSection/TopSection';
import HomesGuestLoves from './HomesGuestLoves/HomesGuestLoves';
import AvailHotelCard from './AvailableHotels/AvailHotelCard';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/hotels/:id">
            <AvailHotelCard />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

function HomePage() {
  return (
    <>
      <TopSection className="intro" />
      <HomesGuestLoves className="homes-guests-loves" />
    </>
  );
}

export default App;
