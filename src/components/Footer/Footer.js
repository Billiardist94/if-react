/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React from 'react';
import './Footer.css';
import {footer, link} from "./Footer.styles";

const Footer = () => {
  return (
    <footer css={footer}>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-card col-4 col-sm-2">
            <h4 className="footer-card-item">About</h4>
            <p className="footer-card-item">
              <a href="/" css={link}>
                How Triphouse works
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" css={link}>
                Careers
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" css={link}>
                Privacy
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" css={link}>
                Terms
              </a>
            </p>
          </div>
          <div className="footer-card col-4 col-sm-2">
            <h4 className="footer-card-item">Property types</h4>
            <p className="footer-card-item">
              <a href="/" css={link}>
                Guest houses
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" css={link}>
                Hotels
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" css={link}>
                Apartments
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" css={link}>
                Villas
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" css={link}>
                Holiday homes
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" css={link}>
                Hostels
              </a>
            </p>
          </div>
          <div className="footer-card col-4 col-sm-2">
            <h4 className="footer-card-item">Support</h4>
            <p className="footer-card-item">
              <a href="/" css={link}>
                Contact Customer Service
              </a>
            </p>
            <p className="footer-card-item">
              <a href="/" css={link}>
                FAQ
              </a>
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">
            <p>© 2020 Triphouse, Inc. All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
