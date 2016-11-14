var Navbar = React.createClass({
  componentDidMount: function() {
    $(".button-collapse").sideNav({
      closeOnClick: true
    });
  },
  render: function() {
    return(
      <div className="navbar-fixed">
        <nav role="navigation">
          <div className="container">
            <div className="nav-wrapper">
              <a data-activates="nav-mobile" className="button-collapse" href="#"><i className="mdi mdi-menu"></i></a>
              <a href="#">
                <img className="brand-logo center circle" src="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477079274/pet/pet_wn9jqn.png"/>
              </a>
              <ul className="left hide-on-med-and-down">
                <li><a className="font-light logo" href="https://www.facebook.com/petinformatica">PET-Informática</a></li>
              </ul>
              <ul className="right hide-on-med-and-down">
                <li><a className="font-light" href="#activity-board">Atividades</a></li>
                <li><a className="font-light" href="#member-board">Petianos</a></li>
                <li><a className="font-light" href="#faq-board">FAQ</a></li>
                <li><a className="font-light" href="#footer">Contato</a></li>
              </ul>
              <ul id="nav-mobile" className="side-nav">
                <li><a className="font-light center" href="#about-board">Sobre</a></li>
                <li><a className="font-light center" href="#activity-board">Atividades</a></li>
                <li><a className="font-light center" href="#member-board">Petianos</a></li>
                <li><a className="font-light center" href="#faq-board">FAQ</a></li>
                <li><a className="font-light center" href="#footer">Contato</a></li>
                <li>
                    <a className="white-text side_margin" href="https://www.facebook.com/petinformatica">
                      <div className="center"> <i className="font-light white-text small mdi mdi-facebook-box"></i> </div>
                    </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
