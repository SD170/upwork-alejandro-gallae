import React, { Component } from 'react'

class CardOffice extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className='card-office' >

        <div className="mx-auto grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 sm:gap-6 md:gap-4" >
          <div className="pb-10 leading-snug card-office-box">
            <div className="city uppercase helvetica-neue-bold font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>Geneva</div>
            <div className="address helvetica-neue-medium" style={{ 'font-size': '13px' }}>17 Boulevard des Philosophes</div>
            <div className="country helvetica-neue-medium" style={{ 'font-size': '13px' }}>205 Genève, Switzerland</div>
            <div className="e-mail helvetica-neue-medium" style={{ 'font-size': '13px' }}>
            <a href="">info@systemagency.com</a>
            </div>
          </div>

          <div className="pb-10 leading-snug card-office-box">
            <div className="city uppercase helvetica-neue-bold font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>Paris</div>
            <div className="address helvetica-neue-medium" style={{ 'font-size': '13px' }}>275 Rue St. Denis</div>
            <div className="country helvetica-neue-medium" style={{ 'font-size': '13px' }}>75002 Paris, France</div>
            <div className="e-mail helvetica-neue-medium" style={{ 'font-size': '13px' }}>
            <a href="">paris@systemagency.com</a>
            </div>
          </div>

          <div className="pb-10 leading-snug card-office-box">
            <div className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>BUENOS AIRES</div>
            <div className="address helvetica-neue-medium" style={{ 'font-size': '13px' }}>Av. Cramer 1663</div>
            <div className="country helvetica-neue-medium" style={{ 'font-size': '13px' }}>Buenos Aires, Argentina</div>
            <div className="e-mail helvetica-neue-medium" style={{ 'font-size': '13px' }}>
            <a href="">argentina@systemagency.com</a> </div>
          </div>

          <div className="pb-10 leading-snug card-office-box">
            <div className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>MONTREAL</div>
            <div className="address helvetica-neue-medium" style={{ 'font-size': '13px' }}>2065 Rue Parthenais, Suite 270</div>
            <div className="country helvetica-neue-medium" style={{ 'font-size': '13px' }}>H2K 3S9 Montreal, QC, Canada</div>
            <div className="e-mail helvetica-neue-medium" style={{ 'font-size': '13px' }}>
              <a href="">canada@systemagency.com</a>
            </div>
          </div>

          <div className="pb-10 leading-snug card-office-box">
            <div className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>BARCELONA</div>
            <div className="address helvetica-neue-medium" style={{ 'font-size': '13px' }}>Carrer de Sant Eusebi 7</div>
            <div className="country helvetica-neue-medium" style={{ 'font-size': '13px' }}>08006 Barcelona, Spain</div>
            <div className="e-mail helvetica-neue-medium" style={{ 'font-size': '13px' }}>
              <a href="">spain@systemagency.com</a>
            </div>
          </div>

          <div className="pb-10 leading-snug card-office-box">
            <div className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>BELGRADE</div>
            <div className="address helvetica-neue-medium" style={{ 'font-size': '13px' }}>21 Divizije 6/-1</div>
            <div className="country helvetica-neue-medium" style={{ 'font-size': '13px' }}>Belgrade, Serbia</div>
            <div className="e-mail helvetica-neue-medium" style={{ 'font-size': '13px' }}>
              <a href="">serbia@systemagency.com</a>
            </div>
          </div>

          <div className="pb-10 leading-snug card-office-box">
            <div className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>KIEV</div>
            <div className="address helvetica-neue-medium" style={{ 'font-size': '13px' }}>10 Volodymyrska</div>
            <div className="country helvetica-neue-medium" style={{ 'font-size': '13px' }}>Kiev, Ukraine</div>
            <div className="e-mail helvetica-neue-medium" style={{ 'font-size': '13px' }}>
              <a href="">ukraine@systemagency.com</a>
            </div>
          </div>

          <div className="pb-10 leading-snug card-office-box">
            <div className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>MOSCOW</div>
            <div className="address helvetica-neue-medium" style={{ 'font-size': '13px' }}>Spartakovsky per. 2/1</div>
            <div className="country helvetica-neue-medium" style={{ 'font-size': '13px' }}>Moscow, Russia</div>
            <div className="e-mail helvetica-neue-medium" style={{ 'font-size': '13px' }}>
              <a href="">russia@systemagency.com</a>
            </div>
          </div>

          <div className="pb-10 leading-snug card-office-box">
            <div className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>PODGORICA</div>
            <div className="address helvetica-neue-medium" style={{ 'font-size': '13px' }}>Radoja Dakica 4-5</div>
            <div className="country helvetica-neue-medium" style={{ 'font-size': '13px' }}>81000 Podgorica, Montenegro</div>
            <div className="e-mail helvetica-neue-medium" style={{ 'font-size': '13px' }}>
              <a href="">adria@systemagency.com</a>
            </div>
          </div>

          <div className="pb-10 leading-snug card-office-box">
            <div className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>TALLINN</div>
            <div className="address helvetica-neue-medium" style={{ 'font-size': '13px' }}>Tina 1a</div>
            <div className="country helvetica-neue-medium" style={{ 'font-size': '13px' }}>10126 Tallinn, Estonia</div>
            <div className="e-mail helvetica-neue-medium" style={{ 'font-size': '13px' }}>
              <a href="">estonia@systemagency.com</a>
            </div>
          </div>

          <div className="pb-10 leading-snug card-office-box">
            <div className="city uppercase helvetica-neue-bold  font-bold" style={{ 'font-size': '13px', 'font-weight': '500' }}>RIGA</div>
            <div className="address helvetica-neue-medium" style={{ 'font-size': '13px' }}>Kungu iela 8</div>
            <div className="country helvetica-neue-medium" style={{ 'font-size': '13px' }}>LV-1050 Riga, Latvia</div>
            <div className="e-mail helvetica-neue-medium" style={{ 'font-size': '13px' }}>
              <a href="">latvia@systemagency.com</a>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default CardOffice;
