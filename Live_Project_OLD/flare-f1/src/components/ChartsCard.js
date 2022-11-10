import * as d3 from "d3";
import {JSDOM} from "jsdom";

const jsdom = new JSDOM(html);
const svg = select(jsdom.window.document.body).append("svg");


const div = d3.selectAll("div");

