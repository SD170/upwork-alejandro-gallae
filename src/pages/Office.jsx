import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import CardOffice from '../components/CardOffice.jsx';
import OfficeButtons from '../components/OfficeButtons.jsx';
import Navigation from '../components/Navigation.jsx';

class Office extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Navigation />
        <div className="office-page" >
          <section className="pt-48" style={{ 'min-height': '465x', marginBottom:'20.4vh' }}>
            <CardOffice/>
          </section>
          <OfficeButtons />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Office;