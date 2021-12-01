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
        <h1 id="home" className="title display-4">
          Intelligence Task Ontology and Knowledge Graph (ITO)
        </h1>
        <p align="center" className="mt-3 mb-5">
            <a href="https://github.com/OpenBioLink/ITO" className="mx-1">
              <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/OpenBioLink/ITO?style=social"/>
            </a>
            <a href="https://bioportal.bioontology.org/ontologies/ITO" className="mx-1">
              <img alt="BioPortal ontology" src="https://img.shields.io/badge/BioPortal-ontology-success"/>
            </a>
            <a href="https://arxiv.org/abs/2110.01434" className="mx-1">
              <img alt="Arxiv paper" src="https://img.shields.io/badge/arXiv-paper-success"/>
            </a>
        </p>
        <blockquote class="blockquote">
          <p>
            The Intelligence Task Ontology and Knowledge Graph (ITO) provides a comprehensive, curated model of artificial intelligence tasks, benchmarks and benchmark results, including the biomedical domain. 
          </p>
        </blockquote>
        Research in artificial intelligence (AI) is addressing a growing number of tasks through a rapidly 
        growing number of models and methodologies. This makes it difficult to keep track of where novel 
        AI methods are successfully – or still unsuccessfully – applied, how progress is measured, how 
        different advances might synergize with each other, and how future research should be prioritized. 
        To help address these issues, we created the Intelligence Task Ontology and Knowledge Graph (ITO), 
        a comprehensive, richly structured and manually curated resource on artificial intelligence tasks, 
        benchmark results and performance metrics. The current version of ITO contain 685,560 edges, 
        1,100 classes representing AI processes and 1,995 properties representing performance metrics. 
        The goal of ITO is to enable precise and network-based analyses of the global landscape of AI tasks 
        and capabilities. ITO is based on technologies that allow for easy integration and enrichment with 
        external data, automated inference and continuous, collaborative expert curation of underlying 
        ontological models. We make the ITO dataset and a collection of Jupyter notebooks utilising ITO 
        openly available.

        <h1 id="processes" className="header">Processes Sunburst</h1>
        <SunburstChart width="900" url="https://raw.githubusercontent.com/OpenBioLink/ITOExplorer/main/processes.json" id="sunburst-processes" root="Process"/>
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
