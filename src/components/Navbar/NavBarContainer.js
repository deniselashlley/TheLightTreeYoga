import React, { useState, useEffect} from "react";

import "./styles.scss";
import CustomLink from "../CustomLink";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import useSiteMetadata from '../SiteMetadata'

const NavbarContainer = ({data}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pageUrl, setPageUrl] = useState(''); 
  const { siteUrl } = useSiteMetadata()

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
        <CustomLink 
          linkURL="/" 
          linkType="internal" 
          className="site-logo"
        >
          <span>The Light Tree</span>
        </CustomLink>
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
              {data.menuItems.map(menuItem => (
                <li key={menuItem.linkURL} className="navbar-menuItem">
                  { pageUrl !== '/' ?
                    <CustomLink  
                      linkURL={`${siteUrl}/${menuItem.linkURL}`} 
                      className="navbar-menuLink"
                    >
                      {menuItem.label}
                    </CustomLink>
                    :
                    <AnchorLink href={menuItem.linkURL} className="navbar-menuLink">
                      {menuItem.label}
                    </AnchorLink>
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
