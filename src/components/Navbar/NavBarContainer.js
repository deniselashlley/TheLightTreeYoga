import React, { useState, useEffect} from "react";
import { Link } from 'gatsby';
import { AnchorLink } from 'gatsby-plugin-anchor-links';

import "./styles.scss";

const NavbarContainer = ({data}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageUrl, setPageUrl] = useState(''); 

  useEffect(() => {
    if (typeof window !== undefined) {
      setPageUrl(window.location.pathname) 
    }
  }, [pageUrl])

  const handleShowMenu = (event) => {
    event.preventDefault();
    setMenuOpen((prevState) => !prevState);
  }

  const menuClass = menuOpen ? 'open' : 'close';
  const activeState = menuClass === 'open' ? 'active' : 'inactive';

  return (
      <header className="site-header">  
        <div className="container navbar-container">
      <nav className="navbar">
        <div className="site-brand">
        <Link to="/"
          className="site-logo"
        >
          <span>The Light Tree</span>
        </Link>
        </div>
          <a 
          href="/" 
          className={`navbar-btn ${activeState} `}
          onClick={e => handleShowMenu(e)}
          >
          <span/>
        </a>
        <div className={`navbar-wrapper ${menuClass}`}>
          {data.menuItems.length > 0 && (
            <ul className="navbar-menu">
              {data.menuItems.map(({linkURL,label}) => (
                <li key={linkURL} className="navbar-menu-item">
                  { pageUrl !== '/' ? (                    
                  <AnchorLink to={linkURL} title={label} label={label} className="navbar-menu-link"/>
                  ) : (
                    <Link to={linkURL} className="navbar-menu-link">{label}</Link>
                  )
                  }   
                </li>
              ))}
            </ul>
          )}
          { data.socialLinks.length > 0 && (
            <ul className="social-icons">
              {data.socialLinks.map(socialitems => (
                <li key={socialitems.linkURL} className="social-icons--item">
                  <a 
                    href={socialitems.linkURL}
                    aria-label={socialitems.label}
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`icon icon-${socialitems.type} `} />
                    <span>{socialitems.hiddenText}</span>
                  </a>
                </li>
              ))}
            </ul>
            )
          }
        </div>
      </nav>
    </div>
      </header>
    );
  }

  export default NavbarContainer;
