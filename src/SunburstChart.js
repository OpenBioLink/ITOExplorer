
import React, {Component} from 'react';
import * as d3 from "d3";
import {get} from "./rest";
import {tree} from "./d3sparql";

class SunburstChart extends Component {

    componentDidMount() {
        get(this.props.url).then((data) => {
            this.drawChart(data);
        })
    }

    /*
    drawLoading(){
        var width = 900
        var radius = width / 6
        var format = d3.format(",d")

        var arc = d3.arc()
            .startAngle(d => d.x0)
            .endAngle(d => d.x1)
            .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
            .padRadius(radius * 1.5)
            .innerRadius(d => d.y0 * radius)
            .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))
        
        var color = d3.interpolateReds
        const svg = d3.select("#sunburst").append("svg")
            .attr("width", width)
            .attr("height", width)
            .attr("viewBox", [0, 0, width, width])
            .style("font", "13px helvetica sans-serif");


        var root = {"name": "root", "children": []}
        var data = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]
        data.forEach((elem,idx) => {
            var children = data.slice(0,idx)
            children.forEach((elem_,idx_) => {
                children[idx_] = {"name": elem_, "value": elem_}
            });
            root.children.push({"name": elem, "children": children})
        });

        root = d3.hierarchy(root)
                    .sum(d => d.value)
                    .sort((a, b) => b.value - a.value);
        root.each(d => d.current = d);
        console.log(root);
            
        var part = d3.partition().size([2 * Math.PI, 3])(root);

        console.log(part)
        
        const g = svg.append("g")
            .attr("transform", `translate(${width / 2},${width / 2})`);

        const path = g.append("g")
            .selectAll("path")
            .data(part.descendants().slice(1))
            .join("path")
            .attr("fill", d => { return color(d.value / root.children[0].value); })
            .attr("d", d => arc(d.current));

        path.filter(d => d.children)
                .style("cursor", "pointer")
                .on("end", transition);

        transition();
        function transition(){
            root.each(d => d.target = {
                x0: -d.current.x0,
                x1: -d.current.x1,
                y0: d.current.y0,
                y1: d.current.y1
            });

            console.log("clicked")
            const t = g.transition().duration(250);
            path.transition(t)
                .tween("data", d => {
                    const i = d3.interpolate(d.current, d.target);
                    return t => d.current = i(t);
                })
                .attrTween("d", d => () => arc(d.current))
        }
    }
    */

    drawChart(data) {
        
        var width = this.props.width
        var radius = width / 6
        var format = d3.format(",d")

        var arc = d3.arc()
            .startAngle(d => d.x0)
            .endAngle(d => d.x1)
            .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
            .padRadius(radius * 1.5)
            .innerRadius(d => d.y0 * radius)
            .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))

        var partition = data => {
            const root = d3.hierarchy(data)
                .sum(d => d.value)
                .sort((a, b) => b.value - a.value);
            return d3.partition()
                .size([2 * Math.PI, root.height + 1])
              (root);
          }

        data = tree(data, this.props.root);
        const root = partition(data);
        var color = d3.interpolateReds
        root.each(d => d.current = d);
        
        const svg = d3.select("#" + this.props.id).append("svg")
            .attr("width", width)
            .attr("height", width)
            .attr("viewBox", [0, 0, width, width])
            .style("font", "13px helvetica sans-serif");
        
        const g = svg.append("g")
            .attr("transform", `translate(${width / 2},${width / 2})`);
        
        const path = g.append("g")
            .selectAll("path")
            .data(root.descendants().slice(1))
            .join("path")
            .attr("fill", d => { return color(d.value / (d.parent.value*0.5)); })
            .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
            .attr("d", d => arc(d.current));
        
        path.filter(d => d.children)
            .style("cursor", "pointer")
            .on("click", clicked);
        
        path.append("title")
            .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);
        
        const label = g.append("g")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .style("user-select", "none")
            .selectAll("text")
            .data(root.descendants().slice(1))
            .join("text")
            .attr("dy", "0.35em")
            .attr("fill-opacity", d => +labelVisible(d.current))
            .attr("transform", d => labelTransform(d.current))
            .text(d => d.data.name);
        
        const parent = g.append("circle")
            .datum(root)
            .attr("r", radius)
            .attr("fill", "none")
            .attr("pointer-events", "all")
            .on("click", clicked);
        
        function clicked(event, p) {
            parent.datum(p.parent || root);
        
            root.each(d => d.target = {
            x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            y0: Math.max(0, d.y0 - p.depth),
            y1: Math.max(0, d.y1 - p.depth)
            });
        
            const t = g.transition().duration(750);
        
            // Transition the data on all arcs, even the ones that aren’t visible,
            // so that if this transition is interrupted, entering arcs will start
            // the next transition from the desired position.
            path.transition(t)
                .tween("data", d => {
                const i = d3.interpolate(d.current, d.target);
                return t => d.current = i(t);
                })
            .filter(function(d) {
                return +this.getAttribute("fill-opacity") || arcVisible(d.target);
            })
                .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
                .attrTween("d", d => () => arc(d.current));
        
            label.filter(function(d) {
                return +this.getAttribute("fill-opacity") || labelVisible(d.target);
            }).transition(t)
                .attr("fill-opacity", d => +labelVisible(d.target))
                .attrTween("transform", d => () => labelTransform(d.current));
        }
        
        function arcVisible(d) {
            return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
        }
        
        function labelVisible(d) {
            return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
        }
        
        function labelTransform(d) {
            const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
            const y = (d.y0 + d.y1) / 2 * radius;
            return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
        }
        
        //return svg.node();
        
    }

    render() {
        return <div id={this.props.id} className="mt-2 text-center"/>;
      }
  
  

}

export default SunburstChart;