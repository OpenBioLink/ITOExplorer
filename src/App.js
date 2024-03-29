import logo from './logo.svg';
import './App.css';
import SunburstChart from "./SunburstChart";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  
  const [showSunburst, setShowSunburst] = useState(false);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-200px">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand m-auto" href="#home">ITO Explorer</a>
          <ul className="navbar-nav mr-auto flex-column vertical-nav">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#processes">Processes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#data">Data</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#benchmarks">Benchmarks</a>
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
        <blockquote className="blockquote">
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
        <p className="description">Click on a segment to zoom in on a sub-process, click on the center of the sunburst to return to its parent. Hover over class to see the number of children.</p>
        <SunburstChart width="900" url="https://raw.githubusercontent.com/OpenBioLink/ITOExplorer/main/processes.json" id="sunburst-processes" root="Process"/>
        <h1 id="data" className="header">Data Sunburst</h1>
        <p className="description">Click on a segment to zoom in on a sub-process, click on the center of the sunburst to return to its parent. Hover over class to see the number of children.</p>
        <SunburstChart width="900" url="https://raw.githubusercontent.com/OpenBioLink/ITOExplorer/main/data.json" id="sunburst-data" root="Data"/>
        <h1 id="benchmarks" className="header">Benchmarks</h1>
        

        <h2 id="nlp" className="header">Natural language processing</h2>
          <h3>Trajectories for average gain ratio</h3>
            Global SOTA trajectory map for AI tasks in natural language processing. Vertical dashes represent anchors (i.e. first results establishing a new benchmark for a given task). Diamonds represent gains in a SOTA trajectory. Diamond colors represent the ratio of the gain, i.e. darker diamonds represent stronger gains.
            <iframe id="cv_traj_grp" className="mt-2" style={{border:"none"}} seamless="seamless" src="/ITOExplorer/natural_language_processing_grp.html" height="725" width="100%"></iframe>
            <div class="alert alert-light mb-5 pt-0 text-center" role="alert">
              Interactive: Hover mouse over data items to display details.
            </div>
          <h3>Pictorial chart</h3>
            <iframe id="cv_pikto" className="mt-2 mb-0" style={{border:"none", display:"block", marginLeft:"auto", marginRight:"auto"}} seamless="seamless" src="/ITOExplorer/natural_language_processing_pikto.html" height="725" width="100%"></iframe>
            <div class="alert alert-light mb-5 pt-0 text-center" role="alert">
              Interactive: Hover mouse over data items to display details.
            </div>

        <h2 id="vp" className="header">Computer vision</h2>
          <h3>Trajectories for average gain ratio</h3>
            Global SOTA trajectory map for AI tasks in natural language processing. Vertical dashes represent anchors (i.e. first results establishing a new benchmark for a given task). Diamonds represent gains in a SOTA trajectory. Diamond colors represent the ratio of the gain, i.e. darker diamonds represent stronger gains.
            <iframe id="cv_traj_grp" className="mt-2" style={{border:"none"}} seamless="seamless" src="/ITOExplorer/vision_process_grp.html" height="725" width="100%"></iframe>
            <div class="alert alert-light mb-5 pt-0 text-center" role="alert">
              Interactive: Hover mouse over data items to display details.
            </div>
          <h3>Pictorial chart</h3>
            <iframe id="cv_pikto" className="mt-2 mb-0" style={{border:"none", display:"block", marginLeft:"auto", marginRight:"auto"}} seamless="seamless" src="/ITOExplorer/vision_process_pikto.html" height="725" width="100%"></iframe>
            <div class="alert alert-light mb-5 pt-0 text-center" role="alert">
              Interactive: Hover mouse over data items to display details.
            </div>
      </div>
      <div class="footer" className="mb-4 border-top">
        <span class="footer_about">
          <p className="mt-2">Work received funding from</p>
          <a id="simplex-logo" href="https://www.netidee.at" target="_blank"><img alt="Netidee logo" src="/ITOExplorer/netidee-Logo.svg"/></a>
          <p>This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a><br/>
            <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style={{borderWidth:0}} src="https://i.creativecommons.org/l/by-sa/4.0/80x15.png"/></a>
          </p>
      </span>
      </div>
    </div>
  );
}

export default App;
