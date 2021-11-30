import logo from './logo.svg';
import './App.css';
import { Navbar, Container, Nav, Modal, Button } from 'react-bootstrap';
import SunburstChart from "./SunburstChart";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  
  const [showSunburst, setShowSunburst] = useState(false);

  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-light bg-light position-fixed w-200px">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <a class="navbar-brand m-auto" href="#home">ITOExplorer</a>
          <ul class="navbar-nav mr-auto flex-column vertical-nav">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#processes">Processes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#data">Data</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <h1 id="home" className="title">
          Intelligence Task Ontology and Knowledge Graph (ITO)
          <p align="center">
            <a href="https://github.com/OpenBioLink/ITO" className="mx-2">
              <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/OpenBioLink/ITO?style=social"/>
            </a>
            <a href="https://bioportal.bioontology.org/ontologies/ITO" className="mx-2">
              <img alt="BioPortal ontology" src="https://img.shields.io/badge/BioPortal-ontology-success"/>
            </a>
          </p>
        </h1>
        The Intelligence Task Ontology and Knowledge Graph (ITO) provides a comprehensive, curated model of artificial intelligence tasks, benchmarks and benchmark results, including the biomedical domain.

        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   

  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   

  Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   

  Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.   

  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.   

  At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
        <h1 id="processes" className="header">Processes Sunburst</h1>
        <SunburstChart width="900" url="https://raw.githubusercontent.com/OpenBioLink/ITOExplorer/main/sunburst.json" id="sunburst-processes" root="Process"/>
        <h1 id="data" className="header">Data Sunburst</h1>
        <SunburstChart width="900" url="https://raw.githubusercontent.com/OpenBioLink/ITOExplorer/main/data.json" id="sunburst-data" root="Data"/>
      </div>
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sunburst
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default App;
