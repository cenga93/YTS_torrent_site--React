import React from "react";
import "./vpnSection.scss";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const VPNSection = () => {
  return (
    <section className="vpn_section pt-5">
      <Container className="p-0">
        <div className="vpn_border">
          <Row className="justify-content-center">
            <div className="col-11 p-0">
              <h1 className="mb-2 p-2 text-center">Warning! Download only with VPN...</h1>

              <p className="text-center">
                Downloading torrents is risky for you: your IP and leaked private data being actively tracked by your <b>ISP</b> and <b>Government Agencies</b>. Protect yourself from expensive
                lawsuits and fines NOW! You must use a VPN like Nord. It is the only way to download torrents fully anonymous by encrypting all traffic with zero logs.
              </p>

              <p className="details">
                Personal data disclosing your real identity: your IP address, <span className="ip_address">178.148.40.33</span> is exposed, which points directly to your location in{" "}
                <span className="location">Belgrade, SERBIA</span>. You are browsing with <span className="os">Chrome 80.0.3987.149 (Windows 10)</span> , monitor res.{" "}
                <span className="resolution">1366x768px</span>, <span className="cpu">2-cores CPU</span>.
              </p>

              <h6 className="text-center m-3">″Do not risk it! Protect yourself right now by downloading Nord VPN″ - William</h6>

              <Row className="justify-content-center mb-3">
                <Link to="/nesto" className="download_link">
                  <FontAwesomeIcon icon={faDownload} size="lg" className="downloadIcon mr-3" />
                  Download Nord VPN
                </Link>
              </Row>
            </div>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default VPNSection;
