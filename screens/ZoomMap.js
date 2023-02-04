
import * as React from "react"
import { auth } from '../firebase'
import { useState } from "react";
import {ImageBackground,View,TouchableOpacity,Text,StyleSheet} from "react-native";
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';

import Svg, { G, Path, Circle, Defs, ClipPath } from "react-native-svg"
import { useNavigation } from '@react-navigation/native'
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const image = {uri: 'https://images.wallpaperscraft.com/image/single/world_map_map_ancient_172687_1440x2560.jpg'};
const image2={uri:'https://i.pinimg.com/236x/49/d9/8e/49d98e7c7484054bbd7e04c74d08e4ef--iphone--wallpaper-backgrounds-wallpapers.jpg'};
function SvgComponent(props) {
  const navigation=useNavigation();
  
   
    let handlesignout=()=>{
      auth
      .signOut()
      .then(()=>{
        navigation.replace("Login")
      })
      .catch(error=>alert(error.message))
    }
  const [c1,setC1]=useState("green")
  const [c3, setC3] = useState("green");
  const [c2, setC2] = useState("green");
  const [c4, setC4] = useState("green");
  const [c5, setC5] = useState("green");
  const [c6, setC6] = useState("green");
  const [c7, setC7] = useState("green");
  const [c8, setC8] = useState("green");
  const [c9, setC9] = useState("green");
  const [c10, setC10] = useState("green");
  const [c11, setC11] = useState("green");
  const [c12, setC12] = useState("green");
  const [c13, setC13] = useState("green");
  const [c14, setC14] = useState("green");
  const [c15, setC15] = useState("green");
  const [c16, setC16] = useState("green");
  const [c17, setC17] = useState("green");
  const [c18, setC18] = useState("green");
  const [c19, setC19] = useState("green");
  const [c20, setC20] = useState("green");
  const [c21, setC21] = useState("green");
  const [c22, setC22] = useState("green");
  const [c23, setC23] = useState("green");
  const [c24, setC24] = useState("green");
  const [c25, setC25] = useState("green");
  const [c26, setC26] = useState("green");
  const [k,setk] = useState("");
  const [k1,setk1] = useState("");
  const [j, setj] = useState(0);
     
const reload=()=>{
  setk("");
  setk1("");
  setj(0);
  setC1("green")
  setC2("green")
  setC3("green")
  setC4("green")
  setC5("green")
  setC6("green")
  setC7("green")
  setC8("green")
  setC9("green")
  setC10("green")
  setC11("green")
  setC12("green")
  setC13("green")
  setC14("green")
  setC15("green")
  setC16("green")
  setC17("green")
  setC18("green")
  setC19("green")
  setC20("green")
  setC21("green")
  setC22("green")
  setC23("green")
  setC24("green")
  setC25("green")
  setC26("green")
}

  const update=()=>{
    console.log(k)
    console.log(k1)
    function PriorityQueue () {
      this._nodes = [];
    
      this.enqueue = function (priority, key) {
        this._nodes.push({key: key, priority: priority });
        this.sort();
      };
      this.dequeue = function () {
        return this._nodes.shift().key;
      };
      this.sort = function () {
        this._nodes.sort(function (a, b) {
          return a.priority - b.priority;
        });
      };
      this.isEmpty = function () {
        return !this._nodes.length;
      };
    }
    
    
    function Graph(){
      var INFINITY = 1/0;
      this.vertices = {};
    
      this.addVertex = function(name, edges){
        this.vertices[name] = edges;
      };
    
      this.shortestPath = function (start, finish) {
        var nodes = new PriorityQueue(),
            distances = {},
            previous = {},
            path = [],
            smallest, vertex, neighbor, alt;
    
        for(vertex in this.vertices) {
          if(vertex === start) {
            distances[vertex] = 0;
            nodes.enqueue(0, vertex);
          }
          else {
            distances[vertex] = INFINITY;
            nodes.enqueue(INFINITY, vertex);
          }
    
          previous[vertex] = null;
        }
    
        while(!nodes.isEmpty()) {
          smallest = nodes.dequeue();
    
          if(smallest === finish) {
            path = [];
    
            while(previous[smallest]) {
              path.push(smallest);
              smallest = previous[smallest];
            }
    
            break;
          }
    
          if(!smallest || distances[smallest] === INFINITY){
            continue;
          }
    
          for(neighbor in this.vertices[smallest]) {
            alt = distances[smallest] + this.vertices[smallest][neighbor];
    
            if(alt < distances[neighbor]) {
              distances[neighbor] = alt;
              previous[neighbor] = smallest;
    
              nodes.enqueue(alt, neighbor);
            }
          }
        }
    
        return path;
      };
    }
    var g = new Graph();
  g.addVertex('c1', {c2:3});
  g.addVertex('c2', {c1:3,c26:4,c24:3});
  g.addVertex('c3', {c4:2,c6:5});
  g.addVertex('c4', {c3:2,c11:6});
  g.addVertex('c5', {c6:4});
  g.addVertex('c6', {c26:3,c3:5,c19:3,c5:4});
  g.addVertex('c7', {c12:2,c13:3,c17:1});
  g.addVertex('c8', {c17:2,c19:1});
  g.addVertex('c9', {c11:4,c10:2,c16:3});
  g.addVertex('c10', {c9:2,c19:2});
  g.addVertex('c11', {c4:6,c9:4});
  g.addVertex('c12', {c7:2});
  g.addVertex('c13', {c7:3,c15:4});
  g.addVertex('c14', {c15:4});
  g.addVertex('c15', {c16:2,c14:4,c13:4});
  g.addVertex('c16', {c9:3,c15:2});
  g.addVertex('c17', {c7:1,c8:2});
  g.addVertex('c18', {c19:3});
  g.addVertex('c19', {c18:3,c10:2,c6:3,c8:1});
  g.addVertex('c20', {c23:2,c22:2});
  g.addVertex('c21', {c22:1});
  g.addVertex('c22', {c21:1,c20:2});
  g.addVertex('c23', {c20:2,c25:3});
  g.addVertex('c24', {c2:3,c25:4});
  g.addVertex('c25', {c24:4,c23:3});
  g.addVertex('c26', {c2:4,c6:3});
  
  console.log(g.shortestPath(k, k1).concat([k]).reverse());
  let mmm=g.shortestPath(k,k1).concat([k]).reverse();
  console.log(mmm)
    for(let i=0;i<mmm.length;i++){
       
        console.log(mmm[i]);
        if(mmm[i]=="c1"){
          setC1("red")
        }
        if(mmm[i]=="c2"){
          setC2("red")
        }
        if(mmm[i]=="c3"){
          setC3("red")
        }
        if(mmm[i]=="c4"){
          setC4("red")
        }
        if(mmm[i]=="c5"){
          setC5("red")
        }
        if(mmm[i]=="c6"){
          setC6("red")
        }
        if(mmm[i]=="c7"){
          setC7("red")
        }
        if(mmm[i]=="c8"){
          setC8("red")
        }
        if(mmm[i]=="c9"){
          setC9("red")
        }
        if(mmm[i]=="c10"){
          setC10("red")
        }
        if(mmm[i]=="c11"){
          setC11("red")
        }
        if(mmm[i]=="c12"){
          setC12("red")
        }
        if(mmm[i]=="c13"){
          setC13("red")
        }
        if(mmm[i]=="c14"){
          setC14("red")
        }
        if(mmm[i]=="c15"){
          setC15("red")
        }
        if(mmm[i]=="c16"){
          setC16("red")
        }
        if(mmm[i]=="c17"){
          setC17("red")
        }
        if(mmm[i]=="c18"){
          setC18("red")
        }
        if(mmm[i]=="c19"){
          setC19("red")
        }
        if(mmm[i]=="c20"){
          setC20("red")
        }
        if(mmm[i]=="c21"){
          setC21("red")
        }
        if(mmm[i]=="c22"){
          setC22("red")
        }
        if(mmm[i]=="c23"){
          setC23("red")
        }
        if(mmm[i]=="c24"){
          setC24("red")
        }
        if(mmm[i]=="c25"){
          setC25("red")
        }
        if(mmm[i]=="c26"){
          setC26("red")
        }
      }
}

 
let handlepress3=()=>{
  if(j==0){
    setC4("#1B06F1");
  setk("c4")
  setj(1);
  }else{
    setC4("#F82041");
  setk1("c4");
  setj(1);
  }
}
  let handlepress1=()=>{
    if(j==0){
      setC1("#1B06F1");
    setk("c1");
    setj(1);
    }
    else{
      setC1("#F82041");
    setk1("c1");
    setj(1);
    }
  }
  let handlepress2=()=>{
    if(j==0){
      setC2("#1B06F1");
    setk("c2")
    setj(1);
    }
    else{
      setC2("#F82041");
    setk1("c2");
    setj(1);
    }
  }
  let handlepress4=()=>{
    if(j==0){
      setC4("#1B06F1");
    setk("c4")
    setj(1);
    }else{
      setC4("#F82041");
    setk1("c4");
    setj(1);
    }
  }
  let handlepress5=()=>{
    if(j==0){
      setC5("#1B06F1");
    setk("c5")
    setj(1);
    }
     else{
      setC5("#F82041");
    setk1("c5");
    setj(1);
    }
  }
  let handlepress6=()=>{
    if(j==0){
      setC6("#1B06F1");
    setk("c6")
    setj(1);
    }
    else{
      setC6("#F82041");
    setk1("c6");
    setj(1);
    }
  }
  let handlepress7=()=>{
    if(j==0){
      setC7("#1B06F1");
    setk("c7")
    setj(1);
    }
    else{
      setC7("#F82041");
    setk1("c7");
    setj(1);
    }
  }
  let handlepress8=()=>{
    if(j==0){
      setC8("#1B06F1");
    setk("c8")
    setj(1);
    }
    else{
      setC8("#F82041");
    setk1("c8");
    setj(1);
    }
  }
  let handlepress9=()=>{
    if(j==0){
      setC9("#1B06F1");
    setk("c9")
    setj(1);
    }
    else{
      setC9("#F82041");
    setk1("c9");
    setj(1);
    }
  }
  let handlepress10=()=>{
    if(j==0){
      setC10("#1B06F1");
    setk("c10")
    setj(1);
    }
    else{
      setC10("#F82041");
    setk1("c10");
    setj(1);
    }
  }
  let handlepress11=()=>{
    if(j==0){
      setC11("#1B06F1");
    setk("c11")
    setj(1);
    }
    else{
      setC11("#F82041");
    setk1("c11");
    setj(1);
    }
  }
  let handlepress12=()=>{
    if(j==0){
      setC12("#1B06F1");
    setk("c12")
    setj(1);
    }
    else{
      setC12("#F82041");
    setk1("c12");
    setj(1);
    }
  }
  let handlepress13=()=>{
    if(j==0){
      setC13("#1B06F1");
    setk("c13")
    setj(1);
    }
    else{
      setC13("#F82041");
    setk1("c13");
    setj(1);
    }
  }
  let handlepress14=()=>{
    if(j==0){
      setC14("#1B06F1");
    setk("c14")
    setj(1);
    }
    else{
      setC14("#F82041");
    setk1("c14");
    setj(1);
    }
  }
  let handlepress15=()=>{
    if(j==0){
      setC15("#1B06F1");
    setk("c15")
    setj(1);
    }
    else{
      setC15("#F82041");
    setk1("c15");
    setj(1);
    }
  }
  let handlepress16=()=>{
    if(j==0){
      setC16("#1B06F1");
    setk("c16")
    setj(1);
    }
    else{
      setC16("#F82041");
    setk1("c16");
    setj(1);
    }
  }
  let handlepress17=()=>{
    if(j==0){
      setC17("#1B06F1");
    setk("c17")
    setj(1);
    }
    else{
      setC17("#F82041");
    setk1("c17");
    setj(1);
    }
  }
  let handlepress18=()=>{
    if(j==0){
      setC18("#1B06F1");
    setk("c18")
    setj(1);
    }
    else{
      setC18("#F82041");
    setk1("c18");
    setj(1);
    }
  }
  let handlepress19=()=>{
    if(j==0){
      setC19("#1B06F1");
    setk("c19")
    setj(1);
    }
    else{
      setC19("#F82041");
    setk1("c19");
    setj(1);
    }
  }
  let handlepress20=()=>{
    if(j==0){
      setC20("#1B06F1");
    setk("c20")
    setj(1);
    }
     else{
      setC20("#F82041");
    setk1("c20");
    setj(1);
    }
  }
  let handlepress21=()=>{
    if(j==0){
      setC21("#1B06F1");
    setk("c21")
    setj(1);
    }
    else{
      setC21("#F82041");
    setk1("c21");
    setj(1);
    }
  }
  let handlepress22=()=>{
    if(j==0){
      setC22("#1B06F1");
    setk("c22")
    setj(1);
    }
    else{
      setC22("#F82041");
    setk1("c22");
    setj(1);
    }
  }
  let handlepress23=()=>{
    if(j==0){
      setC23("#1B06F1");
    setk("c23")
    setj(1);
    }
    else{
      setC23("#F82041");
    setk1("c23");
    setj(1);
    }
  }
  let handlepress24=()=>{
    if(j==0){
      setC24("#1B06F1");
    setk("c24")
    setj(1);
    }
    else{
      setC24("#F82041");
    setk1("c24");
    setj(1);
    }
  }
  let handlepress25=()=>{
    if(j==0){
      setC25("#1B06F1");
    setk("c25")
    setj(1);
    }
    else{
      setC25("#F82041");
    setk1("c25");
    setj(1);
    }
  }
  let handlepress26=()=>{
    if(j==0){
      setC25("#1B06F1");
    setk("c26")
    setj(1);
    }
    else{
      setC25("#F82041");
    setk1("c26");
    setj(1);
    }
  }
  

  return (
    <View style={styles.container}>
     <ImageBackground source={image} resizeMode="cover" style={styles.image}> 
     <View style={{ margin:'2%',marginBottom:'3%',  height: 500, width: 360 }}>
    <ReactNativeZoomableView
          maxZoom={1.2}
          // Give these to the zoomable view so it can apply the boundaries around the actual content.
          // Need to make sure the content is actually centered and the width and height are
          // dimensions when it's rendered naturally. Not the intrinsic size.
          // For example, an image with an intrinsic size of 400x200 will be rendered as 300x150 in this case.
          // Therefore, we'll feed the zoomable view the 300x150 size.
          contentWidth={320}
          contentHeight={480}
        >
    <View style={styles.map}>
    
    <Svg

       width={360}
      height={480}
      viewBox="12 170 360 480"
      
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_1_3)">
        <Path
          d="M16 182h317v456H16V182z"
          fill="#F8F5F4"
          stroke="#6D4F48"
          strokeWidth={12}
        />
        <Path stroke="#6D4F48" strokeWidth={3} d="M101.5 182L101.5 292" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M20 287.5L53 287.5" />
        <Path stroke="#6D4F48" strokeWidth={4} d="M71 292L146 292" />
        <Path d="M243 187v68" stroke="#6D4F48" strokeWidth={3} />
        <Path stroke="#6D4F48" strokeWidth={4} d="M162 292L192 292" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M193.5 186L193.5 294" />
        <Path stroke="#6D4F48" strokeWidth={2} d="M193 256L211 256" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M225 255.5L245 255.5" />
        <Path stroke="#6D4F48" strokeWidth={5} d="M17 307.5L102 307.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M101.5 305L101.5 386" />
        <Path
          stroke="#6D4F48"
          strokeWidth={3}
          d="M65.5223 371.594L100.522 384.594"
        />
        <Path
          stroke="#6D4F48"
          strokeWidth={3}
          d="M20.5154 373.591L102.515 403.591"
        />
        <Path stroke="#6D4F48" strokeWidth={3} d="M101.5 402L101.5 454" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M71 452.5L100 452.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M48 475.5L101 475.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M20 556.5L100 556.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M192.5 469L192.5 558" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M119 470.5L191 470.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M119 556.5L192 556.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M120.5 471L120.5 524" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M120.5 542L120.5 558" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M101.5 474L101.5 488" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M101.5 501L101.5 558" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M20 574.5L53 574.5" />
        <Path stroke="#6D4F48" strokeWidth={4} d="M121 576L121 640" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M119 574.5L157 574.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M168 574.5L192 574.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M191.5 635L191.5 573" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M270 577.5L309 577.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M252 577.5L211 577.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M212.5 576L212.5 635" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M211 328.5L331 328.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M118 328.5L192 328.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M119.5 330L119.5 341" />
        <Path
          stroke="#6D4F48"
          strokeWidth={3}
          d="M119.499 360.946L120.499 388.946"
        />
        <Path
          stroke="#6D4F48"
          strokeWidth={3}
          d="M119.076 388.502L217.076 393.502"
        />
        <Path
          stroke="#6D4F48"
          strokeWidth={4}
          d="M243.615 426.82L262.615 452.82"
        />
        <Path stroke="#6D4F48" strokeWidth={3} d="M261 452.5L327 452.5" />
        <Path
          stroke="#6D4F48"
          strokeWidth={3}
          d="M119.058 407.501L171.058 409.501"
        />
        <Path
          stroke="#6D4F48"
          strokeWidth={3}
          d="M183.068 410.502L205.068 411.502"
        />
        <Path
          stroke="#6D4F48"
          strokeWidth={3}
          d="M204.211 411.114L234.211 452.114"
        />
        <Path stroke="#6D4F48" strokeWidth={3} d="M120.5 408L120.5 454" />
        <Path stroke="#6D4F48" strokeWidth={4} d="M119 451L146 451" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M163 451.5L233 451.5" />
        <Path stroke="#6D4F48" strokeWidth={4} d="M211 470L286 470" />
        <Path stroke="#6D4F48" strokeWidth={2} d="M305 471L333 471" />
        <Path
          stroke="#6D4F48"
          strokeWidth={2}
          d="M211.009 556L329.008 557.026"
        />
        <Path stroke="#6D4F48" strokeWidth={3} d="M212.5 471L212.5 505" />
        <Path stroke="#6D4F48" strokeWidth={2} d="M212 522L212 557" />
        <Path stroke="#6D4F48" strokeWidth={2} d="M66 575L120 575" />
        <Path
          stroke="#6D4F48"
          strokeWidth={3}
          d="M55.5145 369.419L17.5145 356.419"
        />
        <Path
          stroke="#6D4F48"
          strokeWidth={3}
          d="M216.183 393.078L262.183 452.078"
        />
        <Path stroke="#6D4F48" strokeWidth={3} d="M237 274.5L327 274.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M238.5 275L238.5 280" />
        <Path stroke="#6D4F48" strokeWidth={4} d="M239 296L239 328" />
        <Path stroke="#B5ABA7" strokeWidth={3} d="M241.5 276L241.5 282" />
        <Path stroke="#B5ABA7" strokeWidth={4} d="M98 187L98 292" />
        <Path stroke="#B5ABA7" strokeWidth={6} d="M79 289L98 289" />
        <Path fill="#D9D9D9" d="M22 187H96V285H22z" />
        <Path fill="#D9D9D9" d="M103 188H193V292H103z" />
        <Path stroke="#6D4F48" d="M103 188H193V292H103z" />
        <Path fill="#D9D9D9" d="M195 188H243V255H195z" />
        <Path fill="#D9D9D9" d="M240 276H327V328H240z" />
        <Path fill="#D9D9D9" d="M122 472H191V555H122z" />
        <Path fill="#D9D9D9" d="M214 472H327V555H214z" />
        <Path fill="#D9D9D9" d="M22 477H100V555H22z" />
        <Path fill="#D9D9D9" d="M23 576H119V632H23z" />
        <Path fill="#D9D9D9" d="M123 576H191V632H123z" />
        <Path fill="#D9D9D9" d="M214 579H305V632H214z" />
        <Path fill="#D9D9D9" d="M18 405H100V451H18z" />
        <Path
          d="M19 405v-30l81.5 30H19zM122.5 449.5v-40l81.5 4 26.5 36h-108z"
          fill="#D9D9D9"
          stroke="#D9D9D9"
        />
        <Path
          d="M122 386.467V330h205v121h-64.156l-44.609-60.5L122 386.467zM99.5 310H22v45.867L99.5 382.5V310z"
          fill="#D9D9D9"
          stroke="#D9D9D9"
        />
        <Path stroke="#6D4F48" strokeWidth={3} d="M21 188.5L52 188.5" />
        <Path d="M96 210l-1 77" stroke="#B5ABA7" strokeWidth={4} />
        <Path stroke="#6D4F48" strokeWidth={2} d="M23 248L23 285" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M104.5 187L104.5 293" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M106 188.5L192 188.5" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M105 191.5L145 191.5" />
        <Path stroke="#6D4F48" strokeWidth={4} d="M191 188L191 294" />
        <Path stroke="#B5ABA7" strokeWidth={5} d="M106 289.5L129 289.5" />
        <Path stroke="#B5ABA7" strokeWidth={5} d="M105.5 193L105.5 292" />
        <Path stroke="#B5ABA7" strokeWidth={3} d="M177 191.5L190 191.5" />
        <Path stroke="#B5ABA7" strokeWidth={4} d="M187 190L187 291" />
        <Path stroke="#B5ABA7" d="M157 290.5L187 290.5" />
        <Path fill="#B5ABA7" d="M108 276H112V287H108z" />
        <Path stroke="#B5ABA7" strokeWidth={8} d="M163 197L187 197" />
        <Path stroke="#B5ABA7" strokeWidth={6} d="M169 203L187 203" />
        <Path stroke="#B5ABA7" strokeWidth={3} d="M164 289.5L187 289.5" />
        <Path stroke="#6D4F48" strokeWidth={8} d="M214 583L237 583" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M215.5 587L215.5 593" />
        <Path stroke="#6D4F48" strokeWidth={4} d="M287 577L303 577" />
        <Path stroke="#B5ABA7" strokeWidth={2} d="M280 578L309 578" />
        <Path stroke="#B5ABA7" strokeWidth={4} d="M307 577L307 630" />
        <Path stroke="#B5ABA7" d="M213.995 631.5L315.995 630.51" />
        <Path stroke="#B5ABA7" strokeWidth={2} d="M228 631L316 631" />
        <Path stroke="#B5ABA7" strokeWidth={2} d="M305 577L305 604" />
        <Path fill="#B5ABA7" d="M193 188H205V221H193z" />
        <Path stroke="#B5ABA7" strokeWidth={10} d="M121 475L155 475" />
        <Path stroke="#B5ABA7" strokeWidth={5} d="M21 310.5L61 310.5" />
        <Path stroke="#B5ABA7" strokeWidth={4} d="M23 311L23 328" />
        <Path stroke="#B5ABA7" strokeWidth={2} d="M26 314L39 314" />
        <Path stroke="#B5ABA7" strokeWidth={4} d="M36 315L43 315" />
        <Path stroke="#B5ABA7" strokeWidth={3} d="M98.5 309L98.5 333" />
        <Path stroke="#B5ABA7" strokeWidth={4} d="M80 308L100 308" />
        <Path stroke="#B5ABA7" strokeWidth={10} d="M92 310L92 322" />
        <Path stroke="#B5ABA7" strokeWidth={4} d="M97 322L97 328" />
        <Path stroke="#B5ABA7" strokeWidth={4} d="M19 353L51 353" />
        <Path stroke="#B5ABA7" strokeWidth={4} d="M21 352L21 338" />
        <Path stroke="#B5ABA7" strokeWidth={12} d="M94 363L94 379" />
        <Path fill="#B5ABA7" d="M79 191H99V202H79z" />
        <Path fill="#B5ABA7" d="M25 215H34V255H25z" />
        <Path fill="#B5ABA7" d="M31 198H66V204H31z" />
        <Path fill="#B5ABA7" d="M251 623H308V632H251z" />
        <Path fill="#B5ABA7" d="M213 593H221V632H213z" />
        <Path stroke="#B5ABA7" strokeWidth={3} d="M216 588.5L247 588.5" />
        <Path fill="#B5ABA7" d="M300 579H304V597H300z" />
        <Path stroke="#B5ABA7" strokeWidth={6} d="M292 581L300 581" />
        <Path fill="#B5ABA7" d="M47 501H75V530H47z" />
        <Path fill="#6D4F48" d="M20 474H60V481H20z" />
        <Path stroke="#000" d="M20 474H60V481H20z" />
        <Path fill="#6D4F48" d="M93 505H102V555H93z" />
        <Path fill="#6D4F48" d="M11 552H75V555H11z" />
        <Path stroke="#6D4F48" strokeWidth={5} d="M73 477.5L101 477.5" />
        <Path fill="#B5ABA7" d="M21 481H30V520H21z" />
        <Path fill="#B5ABA7" d="M21 535H27V555H21z" />
        <Path stroke="#B5ABA7" strokeWidth={3} d="M27 550.5L53 550.5" />
        <Path fill="#B5ABA7" d="M30 481H44V493H30z" />
        <Path stroke="#B5ABA7" strokeWidth={2} d="M43 482L58 482" />
        <Path stroke="#B5ABA7" d="M30 493.5L41 493.5" />
        <Path stroke="#B5ABA7" d="M30.5 494L30.5 514" />
        <Path stroke="#B5ABA7" d="M76 480.5L94 480.5" />
        <Path fill="#B5ABA7" d="M94 480H100V484H94z" />
        <Path stroke="#B5ABA7" strokeWidth={5} d="M95.5 508L95.5 555" />
        <Path fill="#B5ABA7" d="M75 549H97V555H75z" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M19.5 408L19.5 374" />
        <Path stroke="#6D4F48" strokeWidth={4} d="M20 377L29 377" />
        <Path fill="#B5ABA7" d="M21 386H31V405H21z" />
        <Path fill="#B5ABA7" d="M18 418H23V445H18z" />
        <Path fill="#B5ABA7" d="M23 440H51V445H23z" />
        <Path fill="#B5ABA7" d="M58 405H68V433H58z" />
        <Path fill="#B5ABA7" d="M90 446H101V452H90z" />
        <Path stroke="#B5ABA7" d="M100.5 421L100.5 449" />
        <Path stroke="#B5ABA7" d="M74 448.5L92 448.5" />
        <Path stroke="#B5ABA7" d="M78 449.5L90 449.5" />
        <Path stroke="#B5ABA7" d="M96.5 447L96.5 428" />
        <Path stroke="#B5ABA7" d="M94.5 447L94.5 441" />
        <Path fill="#B5ABA7" d="M41 390H61V392H41z" />
        <Path fill="#B5ABA7" d="M71 339H75V356H71z" />
        <Path fill="#B5ABA7" d="M60 323H66V342H60z" />
        <Path stroke="#B5ABA7" d="M98.5 338L98.5 364" />
        <Path stroke="#B5ABA7" d="M67.178 371.533L88.178 379.533" />
        <Path stroke="#B5ABA7" d="M21.1682 355.529L49.1682 365.529" />
        <Path fill="#B5ABA7" d="M89 246H95V289H89z" />
        <Path fill="#B5ABA7" d="M107 193H125V224H107z" />
        <Path stroke="#B5ABA7" strokeWidth={3} d="M122 194.5L142 194.5" />
        <Path fill="#B5ABA7" d="M183 225H186V289H183z" />
        <Path fill="#D9D9D9" d="M223 188H243V196H223z" />
        <Path fill="#B5ABA7" d="M121 551H167V555H121z" />
        <Path fill="#B5ABA7" d="M183 516H188V555H183z" />
        <Path fill="#B5ABA7" d="M183 472H192V481H183z" />
        <Path fill="#B5ABA7" d="M121 498H153V501H121z" />
        <Path fill="#B5ABA7" d="M122 500H135V516H122z" />
        <Path fill="#B5ABA7" d="M140 542H155V553H140z" />
        <Path fill="#B5ABA7" d="M172 493H191V508H172z" />
        <Path fill="#B5ABA7" d="M122 479H125V498H122z" />
        <Path fill="#B5ABA7" d="M241 188H243V231H241z" />
        <Path fill="#B5ABA7" d="M235 241H243V255H235z" />
        <Path fill="#B5ABA7" d="M193 252H205V254H193z" />
        <Path stroke="#B5ABA7" d="M195.5 225L195.5 252" />
        <Path stroke="#B5ABA7" strokeWidth={3} d="M205 189.5L227 189.5" />
        <Path fill="#B5ABA7" d="M211 330H301V349H211z" />
        <Path fill="#B5ABA7" d="M151 333H170V349H151z" />
        <Path fill="#B5ABA7" d="M262 446H319V452H262z" />
        <Path fill="#B5ABA7" d="M120 330H183V333H120z" />
        <Path fill="#B5ABA7" d="M121 382H205V387H121z" />
        <Path stroke="#B5ABA7" strokeWidth={3} d="M121 380.5L181 380.5" />
        <Path stroke="#B5ABA7" strokeWidth={3} d="M119 333.5L151 333.5" />
        <Path stroke="#B5ABA7" strokeWidth={7} d="M219.8 389.9L264.8 449.9" />
        <Path fill="#B5ABA7" d="M21 576H44V584H21z" />
        <Path fill="#B5ABA7" d="M21 604H32V632H21z" />
        <Path fill="#B5ABA7" d="M65 627H119V632H65z" />
        <Path fill="#B5ABA7" d="M114 576H119V628H114z" />
        <Path stroke="#B5ABA7" strokeWidth={3} d="M112.5 609L112.5 576" />
        <Path stroke="#B5ABA7" strokeWidth={3} d="M77 577.5L114 577.5" />
        <Path stroke="#B5ABA7" d="M30 631.5L66 631.5" />
        <Path stroke="#B5ABA7" d="M22.5 583L22.5 604" />
        <Path stroke="#B5ABA7" d="M21.5 519L21.5 536" />
        <Path fill="#B5ABA7" d="M122 409H125V438H122z" />
        <Path fill="#B5ABA7" d="M121 447H141V451H121z" />
        <Path fill="#B5ABA7" d="M168 447H231V450H168z" />
        <Path stroke="#B5ABA7" d="M204.407 412.709L229.407 447.709" />
        <Path fill="#B5ABA7" d="M124 409H133V420H124z" />
        <Path fill="#B5ABA7" d="M139 414H167V417H139z" />
        <Path fill="#B5ABA7" d="M197 422H203V440H197z" />
        <Path fill="#B5ABA7" d="M171 425H181V438H171z" />
        <Path fill="#B5ABA7" d="M123 627H158V632H123z" />
        <Path fill="#B5ABA7" d="M123 576H125V612H123z" />
        <Path fill="#B5ABA7" d="M123 575H146V584H123z" />
        <Path fill="#B5ABA7" d="M146 576H152V580H146z" />
        <Path fill="#B5ABA7" d="M173 576H191V578H173z" />
        <Path fill="#B5ABA7" d="M188 578H191V632H188z" />
        <Path fill="#B5ABA7" d="M168 630H189V632H168z" />
        <Path fill="#B5ABA7" d="M183 588H189V616H183z" />
        <Path fill="#B5ABA7" d="M123 610H133V629H123z" />
        <Path fill="#B5ABA7" d="M237 579H252V587H237z" />
        <Path fill="#B5ABA7" d="M213 472H234V493H213z" />
        <Path fill="#B5ABA7" d="M252 472H286V479H252z" />
        <Path fill="#B5ABA7" d="M234 472H252V476H234z" />
        <Path fill="#B5ABA7" d="M213 549H273V556H213z" />
        <Path fill="#B5ABA7" d="M213 522H214V556H213z" />
        <Path fill="#B5ABA7" d="M281 554H328V556H281z" />
        <Path fill="#B5ABA7" d="M321 472H327V520H321z" />
        <Path fill="#B5ABA7" d="M325 527H327V554H325z" />
        <Path fill="#B5ABA7" d="M300 542H326V554H300z" />
        <Path fill="#B5ABA7" d="M214 527H218V543H214z" />
        <Path fill="#B5ABA7" d="M233 545H257V551H233z" />
        <Path fill="#B5ABA7" d="M316 480H322V509H316z" />
        <Path fill="#B5ABA7" d="M106 250H114V266H106z" />
        <Path fill="#B5ABA7" d="M180 240H184V272H180z" />
        <Path fill="#B5ABA7" d="M240 320H255V328H240z" />
        <Path fill="#B5ABA7" d="M240 296H243V321H240z" />
        <Path fill="#B5ABA7" d="M241 304H246V314H241z" />
        <Path fill="#B5ABA7" d="M239 276H279V279H239z" />
        <Path fill="#B5ABA7" d="M279 276H327V282H279z" />
        <Path fill="#B5ABA7" d="M273 324H327V328H273z" />
        <Path fill="#B5ABA7" d="M318 280H327V300H318z" />
        <Path fill="#B5ABA7" d="M323 300H327V326H323z" />
        <Path fill="#6D4F48" d="M221 313H237V327H221z" />
        <Path
          fill="#74544D"
          fillOpacity={0.42}
          stroke="#6D4F48"
          d="M298.5 372.5H334.5V406.5H298.5z"
        />
        <Path
          fill="#D9D9D9"
          stroke="#6D4F48"
          d="M318.5 560.5H336.5V586.5H318.5z"
        />
        <Path fill="#74544D" fillOpacity={0.42} d="M17 450H39V478H17z" />
        <Path
          stroke="#74544D"
          strokeOpacity={0.42}
          d="M17.5 450.5H38.5V477.5H17.5z"
        />
        <Path stroke="#6D4F48" d="M332.5 560L332.5 586" />
        <Path stroke="#6D4F48" d="M328.5 561L328.5 587" />
        <Path stroke="#74544D" strokeOpacity={0.42} d="M301.5 372L301.5 407" />
        <Path stroke="#74544D" strokeOpacity={0.42} d="M305.5 373L305.5 406" />
        <Path stroke="#74544D" strokeOpacity={0.42} d="M310.5 373L310.5 406" />
        <Path stroke="#74544D" strokeOpacity={0.42} d="M314.5 373L314.5 406" />
        <Path stroke="#74544D" strokeOpacity={0.42} d="M318.5 373L318.5 407" />
        <Path stroke="#74544D" strokeOpacity={0.42} d="M322.5 373L322.5 407" />
        <Path stroke="#74544D" strokeOpacity={0.42} d="M326.5 373L326.5 406" />
        <Path stroke="#74544D" strokeOpacity={0.42} d="M329.5 373L329.5 406" />
        <Path fill="#6D4F48" d="M18 445H33V451H18z" />
        <Path fill="#6D4F48" d="M313 454H328V471H313z" />
        <Path fill="#6D4F48" d="M193 597H200V636H193z" />
        <Path fill="#6D4F48" d="M200 623H211V632H200z" />
        <Path stroke="#6D4F48" strokeWidth={4} d="M205 629L205 602" />
        <Path fill="#6D4F48" d="M22 278H42V286H22z" />
        <Path fill="#6D4F48" d="M21 558H45V570H21z" />
        <Path fill="#6D4F48" d="M21 569H39V574H21z" />
        <Path fill="#6D4F48" d="M118 321H186V328H118z" />
        <Path fill="#6D4F48" d="M268 263H327V274H268z" />
        <G filter="url(#filter0_d_1_3)">
          <Path fill="#6D4F48" d="M306 256H328V272H306z" />
        </G>
        <Path stroke="#6D4F48" strokeWidth={2} d="M274 231L274 237" />
        <Path stroke="#6D4F48" strokeWidth={2} d="M274 236L331 236" />
        <Path stroke="#6D4F48" strokeWidth={2} d="M244 216L252 216" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M289.5 188L289.5 217" />
        <Path stroke="#6D4F48" strokeWidth={2} d="M268 216L288 216" />
        <Path stroke="#6D4F48" strokeWidth={2} d="M274 217L274 225" />
        <Path fill="#6D4F48" d="M311 188H328V237H311z" />
        <Path fill="#D9D9D9" d="M245 188H288V215H245z" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M245.5 187L245.5 214" />
        <Path fill="#D9D9D9" d="M291 188H311V235H291z" />
        <Path fill="#D9D9D9" d="M275 217H293V235H275z" />
        <Path stroke="#6D4F48" strokeWidth={4} d="M283 470L319 470" />
        <Path fill="#B5ABA7" d="M259 432H279V446H259z" />
        <Circle cx={64} cy={300} r={8} fill={c1}  onPress={handlepress1} stroke="#000" />
         {/* c1 nepaliart */}
        <Circle cx={112} cy={300} r={8} fill={c2}  onPress={handlepress2} stroke="#000" />
        {/*c2 nepali-tibetan-jun */}
        <Circle cx={177} cy={401} r={8} fill={c3}  onPress={handlepress3} stroke="#000" />
        {/* c3 artgallery */}

        <Circle cx={215} cy={407} r={8} fill={c4}  onPress={handlepress4} stroke="#000" />
        {/*c4 art ,entrance gallery turning */}
        <Circle cx={60} cy={378} r={8} fill={c5}  onPress={handlepress5} stroke="#000" />
        {/* c5 chinesegallery  */}
        <Circle cx={111} cy={395} r={8} fill={c6}  onPress={handlepress6} stroke="#000" />
        {/*c6  art-gallery,chinese,japaneese gallery,entrance, junc */}
        <Circle cx={111} cy={566} r={8} fill={c7}  onPress={handlepress7} stroke="#000" />
        {/*c7 natural,coin */}
        <Circle cx={111} cy={495} r={8} fill={c8}  onPress={handlepress8} stroke="#000" />
        {/*c8 arms ,armour */}
        <Circle cx={201} cy={462} r={8} fill={c9}  onPress={handlepress9} stroke="#000" />
        {/*c9 sculpture,art,indus jun */}
        <Circle cx={154} cy={462} r={8} fill={c10}  onPress={handlepress10} stroke="#000" />
        {/* c10 art-entrance2 */}
        <Circle cx={257} cy={462} r={8} fill={c11}  onPress={handlepress11} stroke="#000" />
        {/* c11 indus,entrance common */}
        <Circle cx={61} cy={566} r={8} fill={c12}  onPress={handlepress12} stroke="#000" />
        {/*c12 naturalhistorysel */}
        <Circle cx={163} cy={566} r={8} fill={c13}  onPress={handlepress13} stroke="#000" />
        {/* c13 coin */}
        <Circle cx={261} cy={566} r={8} fill={c14}  onPress={handlepress14} stroke="#000" />
        {/*c14 metalware */}
        <Circle cx={203} cy={566} r={8} fill={c15}  onPress={handlepress15} stroke="#000" />
        {/* c15 coin-metalware */}
        <Circle cx={202} cy={513} r={8} fill={c16}  onPress={handlepress16} stroke="#000" />
        {/*c16 indusvalley */}
        <Circle cx={110} cy={534} r={8} fill={c17}  onPress={handlepress17} stroke="#000" />
        {/* c17 sculpture */}
        <Circle cx={63} cy={462} r={8} fill={c18}  onPress={handlepress18} stroke="#000" />
        {/*c18 japanese */}
        <Circle cx={111} cy={462} r={8} fill={c19}  onPress={handlepress19} stroke="#000" />
        {/*c19 art,jap,scul,jap jun */}
        <Circle cx={217} cy={263} r={8} fill={c20}  onPress={handlepress20} stroke="#000" />
        {/*c20 textile */}
        <Circle cx={259} cy={229} r={8} fill={c21}  onPress={handlepress21} stroke="#000" />
        {/*c21 washrooms */}
        <Circle cx={259} cy={263} r={8} fill={c22}  onPress={handlepress22} stroke="#000" />
        {/* c22 washroom,textile jun*/}
        <Circle cx={231} cy={289} r={8} fill={c23}  onPress={handlepress23} stroke="#000" />
        {/*c23 himalayan */}
        <Circle cx={155} cy={300} r={8} fill={c24}  onPress={handlepress24} stroke="#000" />
        {/* c24 tibetan */}
        <Circle cx={202} cy={319} r={8} fill={c25}  onPress={handlepress25} stroke="#000" />
        {/* c25 entrace -2 */}
        <Circle cx={111} cy={354} r={8} fill={c26}  onPress={handlepress26} stroke="#000" />
        {/* c26 straightentrance */}
        <Path
          d="M69 300h38.5m9 0h34m9 0l38 17.5m9 0L229 293m0-8l-7.5-21.5H254m5.5-5v-25m-148 71.5v44.5m0 9.5v31m-5.5 5l-41.5-15.5m51 17l57 4.5m9.5 0l30 1.5m6.5 8L255 458m-2.5 5.5h-47m-9.5 0h-37.5m-9.5 0h-33.5m-9.5 0H67.5m44 3.5v23m0 10v29m0 10.5V561m4 6H158m-52 0H65.5m102.5 0h30.5m9.5 0h48.5m-53.5-6v-43.5m0-9V466"
          stroke="#74544D"
          strokeOpacity={0.74}
        />
        <Path d="M111 399.5v58" stroke="#000" />
        <Path
          d="M259 421.119h-7.273v-4.389h.782v3.509h2.457v-3.282h.781v3.282h2.472v-3.566H259v4.446zm-3.281-6.701H259v.838h-5.455v-.809h.853v-.071a1.557 1.557 0 01-.668-.583c-.17-.26-.256-.596-.256-1.008 0-.37.076-.693.228-.97.149-.277.376-.492.682-.646.303-.154.686-.231 1.15-.231H259v.838h-3.409c-.429 0-.762.112-1.002.334-.241.223-.362.528-.362.916 0 .268.058.507.174.718.116.208.286.372.508.493.223.121.493.181.81.181zm-2.174-7.383h.711v2.826h-.711v-2.826zm-1.306 2.002v-.838h5.199c.236 0 .414-.034.532-.103a.54.54 0 00.235-.269c.037-.112.056-.229.056-.352 0-.092-.004-.168-.014-.227l-.028-.142.753-.171a1.857 1.857 0 01.099.625c0 .237-.051.469-.153.696a1.377 1.377 0 01-.465.561c-.208.147-.471.22-.788.22h-5.426zm6.761-3.263h-5.455v-.81h.824v-.057a1.308 1.308 0 01-.657-.539 1.591 1.591 0 01-.252-.881 7.151 7.151 0 01.014-.44h.853a2.362 2.362 0 00-.032.195 1.874 1.874 0 00-.025.316c0 .265.056.502.167.71a1.221 1.221 0 001.111.668H259v.838zm.128-5.326c0 .346-.065.659-.195.941a1.616 1.616 0 01-.572.671c-.251.166-.554.249-.909.249-.313 0-.566-.062-.76-.185a1.296 1.296 0 01-.462-.493 2.596 2.596 0 01-.248-.682 8.164 8.164 0 01-.135-.757c-.043-.331-.075-.6-.096-.806-.024-.208-.063-.359-.117-.454-.055-.097-.15-.146-.285-.146h-.028c-.35 0-.623.096-.817.288-.194.189-.291.477-.291.863 0 .4.088.714.263.941.175.227.362.387.561.479l-.284.796a1.907 1.907 0 01-.774-.568c-.187-.24-.318-.5-.391-.782a3.23 3.23 0 01-.114-.838c0-.175.022-.376.064-.603.041-.23.125-.451.252-.665.128-.215.321-.394.579-.536.258-.142.604-.213 1.037-.213H259v.838h-.739v.043c.119.057.245.151.38.284.135.133.25.309.345.529.094.22.142.489.142.806zm-.753-.128c0-.331-.065-.61-.195-.838a1.34 1.34 0 00-1.154-.696h-.767c.042.036.081.114.117.235.033.118.062.255.088.412a16.838 16.838 0 01.107.802c.028.218.075.421.139.611.061.187.155.338.28.454.123.114.291.171.504.171.292 0 .512-.108.661-.323.147-.218.22-.494.22-.828zm-2.656-4.74H259v.839h-5.455v-.81h.853v-.071a1.557 1.557 0 01-.668-.583c-.17-.26-.256-.596-.256-1.008 0-.369.076-.693.228-.97.149-.277.376-.492.682-.646.303-.154.686-.231 1.15-.231H259v.838h-3.409c-.429 0-.762.112-1.002.334-.241.223-.362.528-.362.916 0 .268.058.507.174.718.116.208.286.373.508.493.223.121.493.181.81.181zm3.395-7.227c0 .511-.121.952-.363 1.321a2.362 2.362 0 01-.997.852c-.424.199-.908.299-1.453.299-.554 0-1.043-.102-1.466-.306a2.407 2.407 0 01-.998-.859c-.242-.37-.363-.8-.363-1.293 0-.383.071-.729.214-1.037.142-.308.34-.56.596-.756.256-.197.554-.319.895-.366v.838a1.301 1.301 0 00-.661.426c-.194.218-.291.512-.291.881 0 .327.085.613.256.859.168.244.406.435.714.572.305.135.664.203 1.076.203.421 0 .788-.067 1.101-.199a1.69 1.69 0 00.728-.569c.172-.246.259-.535.259-.866 0-.218-.038-.415-.114-.593a1.223 1.223 0 00-.838-.714v-.838a1.938 1.938 0 011.481 1.087c.149.303.224.656.224 1.058zm0-5.657c0 .526-.116.979-.348 1.36a2.338 2.338 0 01-.98.877c-.422.204-.912.306-1.471.306-.558 0-1.051-.102-1.477-.306a2.41 2.41 0 01-1.001-.859c-.242-.369-.363-.8-.363-1.293 0-.284.048-.564.142-.841a2.1 2.1 0 01.462-.757c.211-.227.49-.408.838-.543.348-.135.777-.202 1.286-.202h.355v4.204h-.725v-3.352c-.307 0-.582.061-.823.184a1.387 1.387 0 00-.572.519c-.14.222-.21.485-.21.788 0 .334.083.623.249.867.163.241.376.427.639.557.263.13.545.196.845.196h.483c.412 0 .761-.071 1.048-.213.284-.145.5-.345.65-.601.146-.255.22-.552.22-.891 0-.22-.031-.419-.093-.597a1.263 1.263 0 00-.284-.465 1.286 1.286 0 00-.475-.302l.227-.809c.274.085.516.228.724.429.206.202.367.45.483.746.114.296.171.629.171.998zm-.114-6.459h-7.273v-.881h3.239v-3.878h-3.239v-.881H259v.881h-3.253v3.878H259v.881zm.128-8.894c0 .345-.065.659-.195.941a1.629 1.629 0 01-.572.671c-.251.166-.554.248-.909.248-.313 0-.566-.061-.76-.184a1.298 1.298 0 01-.462-.494 2.583 2.583 0 01-.248-.682 8.203 8.203 0 01-.135-.756c-.043-.331-.075-.6-.096-.806-.024-.208-.063-.36-.117-.455-.055-.097-.15-.145-.285-.145h-.028c-.35 0-.623.096-.817.287-.194.19-.291.477-.291.863 0 .4.088.714.263.941.175.228.362.387.561.48l-.284.795c-.332-.142-.59-.331-.774-.568a2.12 2.12 0 01-.391-.781 3.236 3.236 0 01-.114-.838c0-.175.022-.377.064-.604a1.96 1.96 0 01.252-.664c.128-.215.321-.394.579-.536.258-.142.604-.213 1.037-.213H259v.838h-.739v.042c.119.057.245.152.38.284.135.133.25.309.345.53.094.22.142.488.142.806zm-.753-.128c0-.332-.065-.611-.195-.838a1.336 1.336 0 00-1.154-.696h-.767c.042.035.081.113.117.234.033.118.062.256.088.412a17.434 17.434 0 01.107.803c.028.217.075.421.139.61.061.187.155.339.28.455.123.114.291.17.504.17.292 0 .512-.107.661-.323.147-.218.22-.493.22-.827zm-6.648-4.74H259v.838h-7.273v-.838zm0-2.373H259v.838h-7.273v-.838zM258.683 198l-1.022-5.455h.88l.689 4.177h.057l1.655-4.177h.895l.66 4.162h.057l1.669-4.162h.881L262.803 198h-.824l-.703-4.19h-.086l-1.683 4.19h-.824zm8.487.128c-.345 0-.652-.065-.919-.195a1.376 1.376 0 01-.608-.572c-.137-.251-.185-.554-.145-.909.038-.313.13-.566.277-.76.147-.197.329-.351.547-.462.218-.114.454-.198.71-.252.258-.057.515-.101.771-.131.333-.043.604-.076.813-.1.21-.024.368-.063.472-.117.104-.054.165-.148.181-.281v-.028c.04-.348-.021-.619-.184-.813-.161-.197-.434-.295-.817-.295-.4 0-.728.088-.984.263a1.86 1.86 0 00-.557.561l-.757-.284c.18-.332.4-.59.661-.774a2.42 2.42 0 01.827-.391c.291-.076.574-.114.849-.114.175 0 .374.022.596.064.223.041.434.125.633.252.201.128.357.321.468.579.112.258.142.604.093 1.037l-.419 3.594h-.839l.093-.739h-.043a1.738 1.738 0 01-.33.38c-.147.135-.336.25-.568.345-.23.094-.503.142-.821.142zm.206-.753c.332 0 .62-.065.863-.195.244-.131.437-.299.579-.505.142-.206.226-.422.252-.649l.089-.767c-.04.042-.123.081-.248.117a4.497 4.497 0 01-.42.088 18.961 18.961 0 01-.809.107 3.4 3.4 0 00-.629.139c-.196.061-.36.155-.49.28a.795.795 0 00-.227.504c-.036.292.045.512.241.661.199.147.466.22.799.22zm8.192-3.608l-.781.213a1.22 1.22 0 00-.167-.369.834.834 0 00-.334-.295c-.147-.078-.343-.117-.589-.117-.334 0-.621.077-.86.231-.239.151-.37.344-.394.579-.026.205.03.37.167.493s.361.224.671.302l.788.199c.476.121.82.302 1.03.543.213.239.297.551.252.934a1.557 1.557 0 01-.369.838 2.11 2.11 0 01-.813.583 2.895 2.895 0 01-1.137.213c-.561 0-1.009-.121-1.345-.363-.337-.243-.527-.596-.572-1.058l.827-.199c.038.292.154.512.348.661.197.147.466.22.806.22.391 0 .712-.083.963-.249.253-.168.392-.369.415-.603a.561.561 0 00-.138-.48c-.116-.128-.31-.223-.583-.287l-.877-.213c-.487-.121-.834-.306-1.04-.554-.206-.249-.287-.561-.242-.938.038-.308.158-.58.359-.817.201-.236.46-.422.778-.557a2.68 2.68 0 011.054-.203c.54 0 .95.119 1.229.356.282.234.466.546.554.937zm2.082.952l-.38 3.281h-.838l.845-7.273h.838l-.305 2.671h.071c.156-.284.373-.509.65-.675.277-.166.63-.249 1.061-.249.372 0 .688.075.948.224.263.147.455.373.576.678.121.303.154.689.099 1.158l-.408 3.466h-.838l.397-3.409c.05-.433-.023-.768-.22-1.005-.196-.239-.491-.359-.884-.359-.275 0-.527.058-.756.174-.23.116-.421.286-.572.508a1.855 1.855 0 00-.284.81zm4.69 3.281l.639-5.455h.81l-.1.824h.057c.128-.27.333-.489.615-.657.281-.168.586-.252.912-.252.064 0 .141.001.231.004.092 0 .162.003.21.01l-.1.853a2.364 2.364 0 00-.192-.032 1.893 1.893 0 00-.319-.025c-.265 0-.508.056-.728.167-.218.109-.398.26-.54.454a1.374 1.374 0 00-.259.657l-.398 3.452h-.838zm5.805.114c-.497 0-.92-.119-1.268-.355a2.06 2.06 0 01-.763-.998c-.159-.429-.206-.928-.142-1.499.064-.561.22-1.05.469-1.467.251-.419.573-.743.966-.973a2.542 2.542 0 011.317-.348c.5 0 .922.12 1.268.359.348.237.601.571.76 1.002.161.428.209.93.145 1.505a3.56 3.56 0 01-.475 1.46 2.775 2.775 0 01-.963.969c-.388.23-.826.345-1.314.345zm.011-.753c.381 0 .707-.097.976-.291.273-.197.487-.454.643-.771.159-.32.259-.665.302-1.037.04-.357.021-.69-.057-.998a1.437 1.437 0 00-.437-.749c-.213-.192-.503-.288-.87-.288-.381 0-.707.1-.98.299a2.063 2.063 0 00-.646.777c-.156.32-.254.666-.295 1.037-.04.358-.022.69.054.998.078.305.223.553.436.742.216.187.507.281.874.281zm5.956.753c-.497 0-.92-.119-1.268-.355a2.06 2.06 0 01-.763-.998c-.159-.429-.206-.928-.142-1.499.064-.561.22-1.05.468-1.467.251-.419.573-.743.966-.973a2.545 2.545 0 011.318-.348c.499 0 .922.12 1.268.359.348.237.601.571.76 1.002.161.428.209.93.145 1.505-.064.557-.222 1.043-.476 1.46a2.773 2.773 0 01-.962.969c-.388.23-.826.345-1.314.345zm.011-.753c.381 0 .706-.097.976-.291.273-.197.487-.454.643-.771.159-.32.259-.665.302-1.037.04-.357.021-.69-.057-.998a1.443 1.443 0 00-.437-.749c-.213-.192-.503-.288-.87-.288-.381 0-.708.1-.98.299a2.054 2.054 0 00-.646.777 3.11 3.11 0 00-.295 1.037c-.04.358-.022.69.053.998.078.305.224.553.437.742.216.187.507.281.874.281zm3.715.639l.639-5.455h.81l-.099.853h.071c.146-.291.356-.518.628-.679.272-.163.586-.245.941-.245.358 0 .648.082.87.245.223.161.385.388.487.679h.056c.171-.284.405-.509.704-.675.3-.166.646-.249 1.037-.249.485 0 .865.153 1.139.459.277.305.379.777.306 1.416l-.43 3.651h-.838l.43-3.651c.045-.404-.033-.692-.235-.862a1.093 1.093 0 00-.745-.26c-.384 0-.694.115-.931.345a1.4 1.4 0 00-.415.877l-.419 3.551h-.853l.441-3.736c.033-.312-.039-.563-.217-.753-.177-.189-.426-.284-.746-.284-.217 0-.428.059-.632.178a1.555 1.555 0 00-.763 1.186l-.398 3.409h-.838zm13.052-4.233l-.781.213a1.22 1.22 0 00-.167-.369.834.834 0 00-.334-.295c-.146-.078-.343-.117-.589-.117-.334 0-.62.077-.86.231-.239.151-.37.344-.394.579-.026.205.03.37.167.493s.361.224.671.302l.789.199c.476.121.819.302 1.03.543.213.239.297.551.252.934a1.559 1.559 0 01-.37.838 2.11 2.11 0 01-.813.583 2.894 2.894 0 01-1.136.213c-.561 0-1.01-.121-1.346-.363-.336-.243-.527-.596-.572-1.058l.828-.199c.037.292.153.512.348.661.196.147.465.22.806.22.39 0 .711-.083.962-.249.253-.168.392-.369.416-.603a.562.562 0 00-.139-.48c-.116-.128-.31-.223-.582-.287l-.877-.213c-.488-.121-.835-.306-1.041-.554-.206-.249-.286-.561-.241-.938.037-.308.157-.58.358-.817.201-.236.461-.422.778-.557.32-.135.671-.203 1.055-.203.539 0 .949.119 1.228.356.282.234.467.546.554.937zM254.358 211l.511-4.364h.648l-.079.682h.056c.118-.233.285-.414.503-.542.218-.131.469-.196.753-.196.286 0 .518.065.696.196.178.128.308.309.389.542h.046c.136-.227.324-.407.562-.54.241-.132.517-.198.83-.198.388 0 .692.122.912.366.221.244.303.622.244 1.134l-.344 2.92h-.67l.344-2.92c.036-.324-.027-.554-.188-.691a.878.878 0 00-.597-.207c-.306 0-.554.092-.744.275-.189.184-.3.418-.332.702l-.336 2.841h-.681l.352-2.989c.026-.25-.031-.45-.173-.602-.142-.151-.341-.227-.597-.227a.992.992 0 00-.506.142 1.242 1.242 0 00-.61.949l-.319 2.727h-.67zm8.777.091c-.421 0-.772-.093-1.054-.279a1.569 1.569 0 01-.611-.784c-.123-.337-.159-.729-.108-1.176.051-.447.178-.841.381-1.182a2.29 2.29 0 01.781-.801 2.012 2.012 0 011.065-.289c.228 0 .448.037.662.113.214.076.402.199.563.369.163.169.281.393.355.671.076.278.09.621.043 1.028l-.032.284h-3.363l.062-.579h2.682c.03-.246.008-.466-.068-.659a.943.943 0 00-.361-.458 1.074 1.074 0 00-.614-.167 1.28 1.28 0 00-.701.202c-.21.134-.383.304-.517.511-.133.206-.211.42-.236.642l-.054.466c-.04.352-.017.637.068.855a.895.895 0 00.421.48c.193.1.429.151.707.151.178 0 .342-.025.491-.074a1.147 1.147 0 00.679-.608l.623.182a1.67 1.67 0 01-.41.579 1.933 1.933 0 01-.642.387c-.246.09-.517.136-.812.136zm3.815-2.716l-.304 2.625h-.671l.512-4.364h.647l-.079.682h.057c.125-.221.3-.399.525-.534.225-.136.503-.204.832-.204.294 0 .544.06.75.181.209.12.361.301.458.546.096.242.123.549.079.92L269.43 211h-.671l.318-2.727c.04-.341-.018-.608-.173-.801-.153-.194-.386-.29-.699-.29-.216 0-.413.046-.591.139a1.185 1.185 0 00-.443.406 1.531 1.531 0 00-.221.648zM303 232.737l-4.364.818v-.705l3.341-.551v-.045l-3.341-1.324v-.716l3.33-.528v-.046l-3.33-1.335v-.705l4.364 1.841v.659l-3.352.563v.068l3.352 1.347v.659zm.091-7.156c0 .398-.095.736-.284 1.015a1.643 1.643 0 01-.798.61c-.343.127-.743.165-1.199.114a2.906 2.906 0 01-1.174-.375 2.175 2.175 0 01-.778-.773 2.027 2.027 0 01-.278-1.054c0-.399.095-.737.286-1.014.19-.278.457-.481.802-.608.342-.129.744-.168 1.204-.116.445.051.834.178 1.168.38.331.201.59.458.775.77.184.311.276.661.276 1.051zm-.602-.008c0-.305-.078-.566-.233-.781a1.645 1.645 0 00-.617-.515 2.478 2.478 0 00-.829-.241 2.239 2.239 0 00-.799.045 1.154 1.154 0 00-.599.35c-.153.17-.23.402-.23.696 0 .305.079.566.238.784.158.218.365.39.623.517.255.125.532.204.829.236.286.032.552.018.798-.043a1.15 1.15 0 00.594-.349c.15-.173.225-.406.225-.699zM303 222.6l-4.364-.511v-.648l.682.08v-.057a1.28 1.28 0 01-.542-.503 1.43 1.43 0 01-.196-.753c0-.286.065-.518.196-.696a1.09 1.09 0 01.542-.389v-.045a1.491 1.491 0 01-.54-.563 1.694 1.694 0 01-.198-.829c0-.389.122-.693.366-.912.244-.222.622-.303 1.134-.245l2.92.344v.671l-2.92-.344c-.324-.036-.554.026-.691.187a.88.88 0 00-.207.597c0 .307.092.555.275.744.184.19.418.301.702.333l2.841.335v.682l-2.989-.353c-.25-.026-.45.032-.602.174-.151.142-.227.341-.227.596a.99.99 0 00.142.506 1.242 1.242 0 00.949.611l2.727.318v.67zm.091-8.776c0 .42-.093.771-.279 1.053a1.563 1.563 0 01-.784.611c-.337.123-.729.159-1.176.108a2.946 2.946 0 01-1.182-.38 2.293 2.293 0 01-.801-.782 2.012 2.012 0 01-.289-1.065c0-.227.037-.448.113-.662a1.42 1.42 0 01.369-.562c.169-.163.393-.282.671-.356.278-.075.621-.09 1.028-.042l.284.031v3.364l-.579-.063v-2.682a1.337 1.337 0 00-.659.069.941.941 0 00-.458.36c-.111.165-.167.37-.167.614 0 .256.067.49.202.702.134.21.304.382.511.517.206.132.42.211.642.236l.466.054c.352.039.637.017.855-.069a.897.897 0 00.48-.42c.1-.193.151-.429.151-.708a1.57 1.57 0 00-.074-.491 1.156 1.156 0 00-.227-.395 1.234 1.234 0 00-.381-.284l.182-.622c.219.093.413.229.579.409.165.18.294.394.387.642.09.246.136.517.136.813zm-2.716-3.815l2.625.304v.67l-4.364-.511v-.648l.682.08v-.057a1.44 1.44 0 01-.534-.526c-.136-.225-.204-.502-.204-.832 0-.294.06-.544.181-.75.12-.208.301-.361.546-.457.242-.097.549-.124.92-.08l2.773.327v.67l-2.727-.318c-.341-.04-.608.018-.801.173-.194.154-.29.387-.29.699 0 .216.046.413.139.591.093.178.228.326.406.443.178.116.394.19.648.222zM131.483 232.509v-.782h5.455v.782h-2.287V239h-.881v-6.491h-2.287zm6.7 6.491v-5.455h.838V239h-.838zm.426-6.364a.591.591 0 01-.422-.167.536.536 0 01-.174-.401c0-.156.058-.29.174-.401a.596.596 0 01.422-.167c.164 0 .303.056.419.167a.529.529 0 01.178.401c0 .156-.059.29-.178.401a.58.58 0 01-.419.167zM140.67 239v-7.273h.838v2.685h.071c.061-.095.147-.216.256-.362.111-.149.269-.282.475-.398.209-.118.49-.178.846-.178.459 0 .864.115 1.214.345.35.23.624.555.82.976.197.422.295.919.295 1.492 0 .578-.098 1.078-.295 1.502a2.323 2.323 0 01-.816.98c-.348.23-.75.345-1.204.345-.351 0-.631-.058-.842-.174a1.559 1.559 0 01-.486-.402 5.08 5.08 0 01-.263-.376h-.1V239h-.809zm.824-2.727c0 .412.06.775.181 1.09.12.312.297.557.529.735.232.175.516.263.852.263.35 0 .643-.093.877-.277.237-.187.415-.438.533-.753.121-.317.181-.67.181-1.058 0-.384-.059-.729-.178-1.037a1.601 1.601 0 00-.529-.735c-.234-.183-.529-.274-.884-.274-.341 0-.627.087-.859.26-.232.17-.407.409-.526.717a2.957 2.957 0 00-.177 1.069zm7.56 2.841c-.526 0-.979-.116-1.36-.348a2.338 2.338 0 01-.877-.98c-.204-.422-.306-.912-.306-1.471 0-.558.102-1.051.306-1.477a2.41 2.41 0 01.859-1.001c.369-.242.8-.363 1.293-.363.284 0 .564.048.841.142a2.1 2.1 0 01.757.462c.227.211.408.49.543.838.135.348.202.777.202 1.286v.355h-4.204v-.725h3.352c0-.307-.061-.582-.184-.823a1.387 1.387 0 00-.519-.572 1.447 1.447 0 00-.788-.21c-.334 0-.623.083-.867.249a1.631 1.631 0 00-.557.639c-.13.263-.196.545-.196.845v.483c0 .412.071.761.213 1.048.145.284.345.5.601.65.255.146.552.22.891.22.22 0 .419-.031.597-.093.179-.063.335-.158.465-.284.13-.127.231-.286.302-.475l.809.227a1.794 1.794 0 01-.429.724c-.202.206-.45.367-.746.483a2.76 2.76 0 01-.998.171zm5.906-5.569v.711h-2.827v-.711h2.827zm-2.003-1.306h.838v5.199c0 .236.034.414.103.532a.538.538 0 00.27.235c.111.037.228.056.351.056.093 0 .168-.004.227-.014l.142-.028.171.753a1.857 1.857 0 01-.625.099c-.237 0-.469-.051-.696-.153a1.377 1.377 0 01-.561-.465c-.147-.208-.22-.471-.22-.788v-5.426zm4.868 6.889c-.345 0-.659-.065-.941-.195a1.629 1.629 0 01-.671-.572c-.166-.251-.249-.554-.249-.909 0-.313.062-.566.185-.76.123-.197.288-.351.494-.462.206-.111.433-.194.682-.248.251-.057.503-.102.756-.135.331-.043.6-.075.806-.096.208-.024.36-.063.455-.117.097-.055.145-.15.145-.285v-.028c0-.35-.096-.623-.287-.817-.19-.194-.477-.291-.863-.291-.4 0-.714.088-.941.263a1.552 1.552 0 00-.48.561l-.795-.284c.142-.332.331-.59.568-.774a2.12 2.12 0 01.781-.391c.284-.076.564-.114.838-.114.175 0 .377.022.604.064.23.041.451.125.664.252.215.128.394.321.536.579.142.258.213.604.213 1.037V239h-.838v-.739h-.042a1.483 1.483 0 01-.284.38c-.133.135-.309.25-.53.345-.22.094-.488.142-.806.142zm.128-.753c.332 0 .611-.065.838-.195a1.336 1.336 0 00.696-1.154v-.767c-.035.042-.113.081-.234.117a4.047 4.047 0 01-.412.088 17.434 17.434 0 01-.803.107 3.164 3.164 0 00-.61.139 1.053 1.053 0 00-.455.28c-.114.123-.17.291-.17.504 0 .292.107.512.323.661.218.147.493.22.827.22zm4.74-2.656V239h-.838v-5.455h.81v.853h.071c.127-.277.322-.5.582-.668.26-.17.597-.256 1.009-.256.369 0 .692.076.969.228.277.149.492.376.646.682.154.303.231.686.231 1.15V239h-.838v-3.409c0-.429-.111-.762-.334-1.002-.222-.241-.528-.362-.916-.362a1.46 1.46 0 00-.717.174 1.247 1.247 0 00-.494.508c-.121.223-.181.493-.181.81zM132.179 251h-.923l2.67-7.273h.909l2.671 7.273h-.924l-2.173-6.122h-.057L132.179 251zm.341-2.841h3.721v.781h-3.721v-.781zm6.005 2.841v-5.455h.81v.824h.056c.1-.27.28-.489.54-.657.261-.168.554-.252.881-.252a7.197 7.197 0 01.44.014v.853a2.362 2.362 0 00-.195-.032 1.882 1.882 0 00-.316-.025c-.265 0-.502.056-.71.167-.206.109-.37.26-.491.454a1.23 1.23 0 00-.177.657V251h-.838zm6.435-5.455v.711h-2.827v-.711h2.827zm-2.003-1.306h.838v5.199c0 .236.034.414.103.532a.538.538 0 00.27.235c.111.037.228.056.351.056.093 0 .168-.004.227-.014l.142-.028.171.753a1.857 1.857 0 01-.625.099c-.237 0-.469-.051-.696-.153a1.377 1.377 0 01-.561-.465c-.147-.208-.22-.471-.22-.788v-5.426zM44.676 225.736l-.01 7.272-.852-.001-3.956-5.715h-.07l-.008 5.71-.88-.001.008-7.273.853.001 3.97 5.73h.07l.008-5.724.867.001zm3.926 7.391c-.526-.001-.979-.117-1.36-.35a2.338 2.338 0 01-.876-.981c-.203-.422-.304-.912-.303-1.471 0-.558.103-1.051.307-1.476.207-.429.493-.762.86-1.001.37-.241.801-.361 1.294-.36.284 0 .564.048.841.143.277.095.529.249.756.462.227.211.408.491.542.839.135.348.202.777.201 1.286v.355l-4.205-.005.001-.725 3.352.004c0-.307-.06-.582-.183-.824a1.394 1.394 0 00-.518-.572 1.457 1.457 0 00-.788-.211c-.334 0-.623.082-.867.248a1.637 1.637 0 00-.558.638 1.88 1.88 0 00-.197.845v.483c0 .412.07.761.211 1.048.145.284.344.501.6.651.255.147.552.221.89.221.221 0 .42-.03.598-.092.18-.063.335-.158.465-.283.13-.128.231-.286.303-.476l.809.229c-.086.274-.23.516-.43.724a2.11 2.11 0 01-.747.482 2.782 2.782 0 01-.998.169zm3.53 1.936l.01-7.5.81.001-.001.867h.1a7.01 7.01 0 01.255-.362c.112-.149.27-.282.477-.397.208-.118.49-.177.845-.177.46.001.864.116 1.214.346.35.23.623.556.82.978.195.421.293.919.292 1.492 0 .577-.1 1.078-.297 1.501-.196.422-.47.748-.817.979-.349.23-.75.344-1.205.343-.35 0-.63-.058-.841-.175a1.54 1.54 0 01-.486-.402 5.365 5.365 0 01-.263-.376h-.07l-.004 2.883-.838-.001zm.83-4.772c0 .412.06.776.18 1.091.12.312.297.558.529.736.231.175.515.263.852.263.35.001.642-.091.877-.275.237-.187.415-.438.534-.753.12-.317.182-.669.182-1.058a2.87 2.87 0 00-.176-1.037 1.609 1.609 0 00-.528-.736c-.234-.182-.53-.274-.884-.274-.341-.001-.628.086-.86.258-.232.17-.408.409-.526.717a2.943 2.943 0 00-.18 1.068zm6.872 2.864c-.346 0-.66-.066-.94-.196a1.615 1.615 0 01-.671-.573c-.166-.251-.248-.554-.248-.909 0-.313.063-.566.186-.76.123-.196.288-.35.494-.461a2.59 2.59 0 01.682-.248c.251-.056.503-.101.757-.134.331-.042.6-.074.806-.095.209-.023.36-.062.455-.116.097-.055.146-.149.146-.284v-.029c0-.35-.095-.622-.287-.817-.189-.194-.477-.292-.862-.292-.4-.001-.714.087-.942.262-.227.175-.387.361-.48.56l-.795-.285c.143-.331.332-.589.57-.773.239-.187.5-.317.78-.39.285-.075.565-.113.84-.113.174.001.375.022.603.065.23.041.45.125.664.253.215.128.393.321.535.579.142.259.212.604.212 1.038l-.005 3.593-.838-.001.001-.738h-.042a1.465 1.465 0 01-.285.379c-.133.135-.31.25-.53.344-.22.095-.489.142-.806.141zm.129-.753c.331.001.61-.064.838-.194a1.335 1.335 0 00.698-1.153v-.767c-.035.042-.113.081-.234.117a4 4 0 01-.412.088c-.154.024-.304.045-.451.063a24.78 24.78 0 00-.352.043 3.244 3.244 0 00-.61.137 1.063 1.063 0 00-.456.28c-.113.123-.17.291-.17.504 0 .292.106.512.322.661.217.147.493.221.827.221zm4.748-6.641l-.009 7.272-.838-.001.009-7.272.838.001zm1.526 7.274l.007-5.454.838.001-.007 5.454-.838-.001zm.434-6.363a.596.596 0 01-.422-.167.537.537 0 01-.174-.402c0-.156.058-.29.175-.401a.597.597 0 01.422-.166c.164 0 .303.056.42.167a.534.534 0 01.176.402c0 .156-.06.29-.178.401a.585.585 0 01-.419.166zm5.163 6.37l-.923-.001 2.68-7.269.909.001 2.661 7.276-.923-.001-2.166-6.125h-.057l-2.18 6.119zm.345-2.84l3.721.004v.782l-3.722-.005v-.781zm6.001 2.848l.007-5.454.81.001-.001.824h.057c.1-.27.28-.489.54-.657.26-.167.554-.251.881-.251.062 0 .139.002.231.004.092.003.162.006.21.011l-.002.852a2.428 2.428 0 00-.195-.032 1.875 1.875 0 00-.316-.025c-.265 0-.502.055-.71.166a1.223 1.223 0 00-.669 1.111l-.005 3.451-.838-.001zm6.442-5.446l-.001.71-2.827-.004.001-.71 2.827.004zm-2.001-1.31l.838.001-.007 5.199c0 .237.034.415.103.533.07.116.16.194.269.235.111.038.228.057.352.057.092 0 .168-.004.227-.014l.142-.028.17.753a1.857 1.857 0 01-.626.099 1.7 1.7 0 01-.695-.154 1.378 1.378 0 01-.561-.466c-.147-.208-.22-.471-.22-.788l.008-5.427zM204.483 222.509v-.782h5.454v.782h-2.286V229h-.881v-6.491h-2.287zm8.196 6.605c-.526 0-.979-.116-1.36-.348a2.338 2.338 0 01-.877-.98c-.204-.422-.306-.912-.306-1.471 0-.558.102-1.051.306-1.477a2.41 2.41 0 01.859-1.001c.369-.242.8-.363 1.293-.363.284 0 .564.048.841.142a2.1 2.1 0 01.757.462c.227.211.408.49.543.838.135.348.202.777.202 1.286v.355h-4.204v-.725h3.352c0-.307-.061-.582-.184-.823a1.387 1.387 0 00-.519-.572 1.447 1.447 0 00-.788-.21c-.334 0-.623.083-.867.249a1.631 1.631 0 00-.557.639c-.13.263-.196.545-.196.845v.483c0 .412.071.761.213 1.048.145.284.345.5.601.65.255.146.552.22.891.22.22 0 .419-.031.597-.093.179-.063.335-.158.465-.284.13-.127.231-.286.302-.475l.809.227a1.794 1.794 0 01-.429.724c-.202.206-.45.367-.746.483a2.76 2.76 0 01-.998.171zm4.012-5.569l1.307 2.231 1.307-2.231h.965l-1.761 2.728L220.27 229h-.965l-1.307-2.116-1.307 2.116h-.966l1.733-2.727-1.733-2.728h.966zm7.147 0v.711h-2.826v-.711h2.826zm-2.002-1.306h.838v5.198c0 .237.034.415.103.533a.538.538 0 00.27.235c.111.037.228.056.351.056.092 0 .168-.004.227-.014l.142-.028.171.753a1.857 1.857 0 01-.625.099c-.237 0-.469-.051-.696-.153a1.377 1.377 0 01-.561-.465c-.147-.208-.22-.471-.22-.788v-5.426zm3.263 6.761v-5.455h.838V229h-.838zm.426-6.364a.591.591 0 01-.422-.167.536.536 0 01-.174-.401c0-.156.058-.29.174-.401a.596.596 0 01.422-.167c.164 0 .303.056.419.167a.529.529 0 01.178.401c0 .156-.059.29-.178.401a.58.58 0 01-.419.167zm2.785-.909V229h-.838v-7.273h.838zm3.822 7.387c-.525 0-.979-.116-1.36-.348a2.338 2.338 0 01-.877-.98c-.204-.422-.306-.912-.306-1.471 0-.558.102-1.051.306-1.477a2.41 2.41 0 01.859-1.001c.37-.242.8-.363 1.293-.363.284 0 .565.048.841.142.277.095.53.249.757.462.227.211.408.49.543.838.135.348.203.777.203 1.286v.355h-4.205v-.725h3.352c0-.307-.061-.582-.184-.823a1.387 1.387 0 00-.519-.572 1.447 1.447 0 00-.788-.21c-.334 0-.623.083-.867.249a1.631 1.631 0 00-.557.639c-.13.263-.195.545-.195.845v.483c0 .412.071.761.213 1.048.144.284.344.5.6.65.255.146.553.22.891.22.22 0 .419-.031.597-.093.18-.063.335-.158.465-.284.13-.127.231-.286.302-.475l.809.227a1.794 1.794 0 01-.429.724c-.202.206-.45.367-.746.483a2.76 2.76 0 01-.998.171zm-25.163 14.045a3.11 3.11 0 01-1.044-.156 2.19 2.19 0 01-1.186-.938l.667-.468c.076.099.172.213.288.34.116.131.275.243.476.338.203.097.47.145.799.145.44 0 .803-.106 1.09-.319.286-.213.43-.547.43-1.002v-1.108h-.071c-.062.1-.15.223-.263.37a1.494 1.494 0 01-.483.387c-.208.111-.49.167-.845.167-.441 0-.836-.104-1.186-.313a2.192 2.192 0 01-.828-.909c-.201-.398-.302-.881-.302-1.449 0-.558.099-1.045.295-1.459.197-.417.47-.739.82-.966.351-.23.756-.345 1.215-.345.355 0 .637.06.845.178.211.116.372.249.483.398.114.146.201.267.263.362h.085v-.867h.81v5.611c0 .469-.107.85-.32 1.144a1.827 1.827 0 01-.852.65 3.23 3.23 0 01-1.186.209zm-.029-2.997c.337 0 .621-.077.853-.231.232-.154.408-.375.529-.664.12-.289.181-.634.181-1.037 0-.393-.059-.74-.178-1.04a1.554 1.554 0 00-.525-.707c-.232-.171-.519-.256-.86-.256-.355 0-.651.09-.887.27-.235.18-.411.422-.53.725a2.799 2.799 0 00-.174 1.008c0 .379.06.714.178 1.005.121.289.298.516.533.682.236.163.53.245.88.245zm5.526.966c-.346 0-.659-.065-.941-.195a1.616 1.616 0 01-.671-.572c-.166-.251-.249-.554-.249-.909 0-.313.062-.566.185-.76.123-.197.287-.351.493-.462.206-.111.434-.194.682-.248.251-.057.503-.102.757-.135.331-.043.6-.075.806-.096.208-.024.36-.063.454-.117.097-.055.146-.15.146-.285v-.028c0-.35-.096-.623-.288-.817-.189-.194-.477-.291-.863-.291-.4 0-.714.088-.941.263-.227.175-.387.362-.479.561l-.796-.284a1.9 1.9 0 01.569-.774 2.12 2.12 0 01.781-.391 3.23 3.23 0 01.838-.114c.175 0 .376.022.604.064.229.041.451.125.664.252.215.128.394.321.536.579.142.258.213.604.213 1.037V241h-.838v-.739h-.043a1.46 1.46 0 01-.284.38 1.64 1.64 0 01-.529.345 2.05 2.05 0 01-.806.142zm.128-.753c.331 0 .611-.065.838-.195a1.34 1.34 0 00.696-1.154v-.767c-.036.042-.114.081-.235.117a3.965 3.965 0 01-.411.088 18.073 18.073 0 01-.803.107 3.174 3.174 0 00-.611.139 1.05 1.05 0 00-.454.28c-.114.123-.171.291-.171.504 0 .292.108.512.323.661.218.147.494.22.828.22zm4.74-6.648V241h-.838v-7.273h.838zm2.373 0V241h-.838v-7.273h.838zm3.822 7.387c-.526 0-.979-.116-1.36-.348a2.34 2.34 0 01-.878-.98c-.203-.422-.305-.912-.305-1.471 0-.558.102-1.051.305-1.477.206-.428.493-.762.86-1.001.369-.242.8-.363 1.292-.363.284 0 .565.048.842.142.277.095.529.249.756.462.228.211.409.49.544.838.135.348.202.777.202 1.286v.355h-4.204v-.725h3.352c0-.307-.062-.582-.185-.823a1.385 1.385 0 00-.518-.572 1.453 1.453 0 00-.789-.21c-.333 0-.622.083-.866.249a1.634 1.634 0 00-.558.639c-.13.263-.195.545-.195.845v.483c0 .412.071.761.213 1.048.145.284.345.5.6.65.256.146.553.22.892.22.22 0 .419-.031.596-.093.18-.063.335-.158.465-.284.131-.127.231-.286.302-.475l.81.227a1.796 1.796 0 01-.43.724c-.201.206-.45.367-.746.483a2.75 2.75 0 01-.997.171zm3.533-.114v-5.455h.81v.824h.056c.1-.27.28-.489.54-.657.261-.168.554-.252.881-.252a7.197 7.197 0 01.44.014v.853a2.362 2.362 0 00-.195-.032 1.882 1.882 0 00-.316-.025c-.265 0-.502.056-.71.167a1.221 1.221 0 00-.668 1.111V241h-.838zm4.426 2.045a1.821 1.821 0 01-.61-.099l.213-.739c.203.052.383.071.54.057a.647.647 0 00.415-.209c.123-.123.236-.323.337-.6l.157-.427-2.017-5.483h.909l1.505 4.347h.057l1.506-4.347h.909l-2.315 6.25a2.385 2.385 0 01-.388.7 1.442 1.442 0 01-.536.416 1.667 1.667 0 01-.682.134zM46.179 495h-.923l2.67-7.273h.91l2.67 7.273h-.924l-2.173-6.122h-.057L46.18 495zm.34-2.841h3.723v.781H46.52v-.781zM52.526 495v-5.455h.81v.824h.056c.1-.27.28-.489.54-.657a1.59 1.59 0 01.88-.252 7.131 7.131 0 01.441.014v.853a2.428 2.428 0 00-.195-.032 1.876 1.876 0 00-.316-.025c-.265 0-.502.056-.71.167a1.226 1.226 0 00-.668 1.111V495h-.838zm3.72 0v-5.455h.81v.853h.071c.114-.291.297-.518.55-.679.254-.163.558-.245.913-.245.36 0 .66.082.899.245.241.161.43.388.564.679h.057c.14-.282.35-.506.629-.671.28-.169.614-.253 1.005-.253.487 0 .886.153 1.197.459.31.303.465.775.465 1.416V495h-.838v-3.651c0-.402-.11-.69-.33-.862-.22-.173-.48-.26-.778-.26-.384 0-.681.116-.892.348-.21.23-.316.521-.316.874V495H59.4v-3.736c0-.31-.1-.56-.302-.749-.201-.192-.46-.288-.778-.288-.217 0-.421.058-.61.174a1.314 1.314 0 00-.455.483c-.114.204-.17.439-.17.707V495h-.838zm12.556-4.233l-.753.213a1.417 1.417 0 00-.21-.366c-.09-.12-.213-.22-.37-.298a1.343 1.343 0 00-.6-.117c-.333 0-.611.077-.834.231-.22.151-.33.344-.33.579 0 .208.076.372.227.493.152.121.389.221.71.302l.81.199c.488.118.851.299 1.09.543.24.242.359.553.359.934 0 .313-.09.592-.27.838a1.792 1.792 0 01-.746.583c-.32.142-.69.213-1.115.213-.556 0-1.017-.121-1.381-.363-.365-.241-.595-.594-.693-1.058l.796-.199c.076.294.219.514.43.661.213.147.49.22.834.22.39 0 .7-.083.93-.249.233-.168.349-.369.349-.603a.634.634 0 00-.2-.476c-.132-.13-.335-.227-.61-.291l-.91-.213c-.499-.119-.866-.302-1.1-.551-.232-.251-.348-.564-.348-.941 0-.308.086-.58.26-.817a1.77 1.77 0 01.713-.557 2.505 2.505 0 011.03-.203c.54 0 .963.119 1.271.356.31.236.53.549.66.937zm5.778 4.361a2.22 2.22 0 01-.94-.195 1.623 1.623 0 01-.672-.572c-.166-.251-.249-.554-.249-.909 0-.313.062-.566.185-.76.123-.197.288-.351.494-.462.206-.111.433-.194.681-.248.251-.057.504-.102.757-.135.331-.043.6-.075.806-.096.208-.024.36-.063.454-.117.098-.055.146-.15.146-.285v-.028c0-.35-.096-.623-.287-.817-.19-.194-.478-.291-.863-.291-.4 0-.714.088-.941.263a1.55 1.55 0 00-.48.561l-.795-.284c.142-.332.331-.59.568-.774.239-.187.5-.318.781-.391.284-.076.563-.114.838-.114.175 0 .377.022.604.064.23.041.45.125.664.252.215.128.394.321.536.579.142.258.213.604.213 1.037V495h-.838v-.739h-.043a1.465 1.465 0 01-.284.38c-.132.135-.308.25-.529.345-.22.094-.489.142-.806.142zm.128-.753c.332 0 .61-.065.838-.195a1.337 1.337 0 00.696-1.154v-.767c-.035.042-.114.081-.234.117a3.986 3.986 0 01-.412.088 17.496 17.496 0 01-.803.107 3.165 3.165 0 00-.61.139 1.051 1.051 0 00-.455.28c-.114.123-.17.291-.17.504 0 .292.107.512.323.661.217.147.493.22.827.22zm4.74-2.656V495h-.838v-5.455h.81v.853h.07c.128-.277.322-.5.583-.668.26-.17.596-.256 1.008-.256.37 0 .693.076.97.228.277.149.492.376.646.682.154.303.231.686.231 1.15V495h-.838v-3.409c0-.429-.111-.762-.334-1.002-.222-.241-.528-.362-.916-.362-.268 0-.507.058-.717.174a1.25 1.25 0 00-.494.508 1.68 1.68 0 00-.181.81zm7.071 3.395c-.454 0-.856-.115-1.204-.345a2.328 2.328 0 01-.816-.98c-.197-.424-.295-.924-.295-1.502 0-.573.098-1.07.294-1.492.197-.421.47-.746.82-.976.351-.23.756-.345 1.215-.345.355 0 .636.06.842.178.208.116.367.249.476.398.111.146.198.267.259.362h.071v-2.685h.838V495h-.81v-.838h-.099c-.061.099-.15.225-.263.376a1.572 1.572 0 01-.486.402c-.211.116-.492.174-.842.174zm.114-.753c.336 0 .62-.088.852-.263a1.65 1.65 0 00.53-.735 3.03 3.03 0 00.18-1.09c0-.407-.059-.764-.177-1.069a1.551 1.551 0 00-.526-.717c-.232-.173-.518-.26-.86-.26-.354 0-.65.091-.887.274-.234.18-.41.425-.53.735a2.922 2.922 0 00-.173 1.037c0 .388.059.741.177 1.058.121.315.299.566.533.753.237.184.53.277.88.277zM46.179 507h-.923l2.67-7.273h.91l2.67 7.273h-.924l-2.173-6.122h-.057L46.18 507zm.34-2.841h3.723v.781H46.52v-.781zM52.526 507v-5.455h.81v.824h.056c.1-.27.28-.489.54-.657a1.59 1.59 0 01.88-.252 7.131 7.131 0 01.441.014v.853a2.428 2.428 0 00-.195-.032 1.876 1.876 0 00-.316-.025c-.265 0-.502.056-.71.167a1.226 1.226 0 00-.668 1.111V507h-.838zm3.72 0v-5.455h.81v.853h.071c.114-.291.297-.518.55-.679.254-.163.558-.245.913-.245.36 0 .66.082.899.245.241.161.43.388.564.679h.057c.14-.282.35-.506.629-.671.28-.169.614-.253 1.005-.253.487 0 .886.153 1.197.459.31.303.465.775.465 1.416V507h-.838v-3.651c0-.402-.11-.69-.33-.862-.22-.173-.48-.26-.778-.26-.384 0-.681.116-.892.348-.21.23-.316.521-.316.874V507H59.4v-3.736c0-.31-.1-.56-.302-.749-.201-.192-.46-.288-.778-.288-.217 0-.421.058-.61.174a1.314 1.314 0 00-.455.483c-.114.204-.17.439-.17.707V507h-.838zm10.908.114c-.493 0-.925-.118-1.296-.352a2.384 2.384 0 01-.867-.984c-.206-.421-.309-.913-.309-1.477 0-.568.103-1.064.31-1.488a2.38 2.38 0 01.866-.987 2.382 2.382 0 011.296-.352c.492 0 .923.118 1.292.352.372.234.661.563.867.987.208.424.313.92.313 1.488 0 .564-.105 1.056-.313 1.477a2.35 2.35 0 01-.867.984c-.369.234-.8.352-1.292.352zm0-.753c.374 0 .682-.096.923-.288a1.7 1.7 0 00.536-.756c.116-.313.174-.651.174-1.016 0-.364-.058-.704-.174-1.019a1.724 1.724 0 00-.536-.764c-.241-.194-.55-.291-.923-.291-.374 0-.682.097-.923.291-.242.195-.42.449-.537.764a2.927 2.927 0 00-.174 1.019c0 .365.058.703.174 1.016.116.312.295.564.537.756.241.192.549.288.923.288zm7.188-1.591v-3.225h.838V507h-.838v-.923h-.057a1.787 1.787 0 01-.596.706c-.27.192-.61.288-1.023.288-.34 0-.644-.075-.909-.224a1.559 1.559 0 01-.625-.682c-.151-.305-.227-.69-.227-1.154v-3.466h.838v3.41c0 .397.111.715.334.951.225.237.511.355.859.355.208 0 .42-.053.636-.159.218-.107.4-.27.547-.49.149-.221.223-.501.223-.842zm2.373 2.23v-5.455h.81v.824h.057c.1-.27.28-.489.54-.657a1.59 1.59 0 01.88-.252 7.137 7.137 0 01.44.014v.853a2.428 2.428 0 00-.195-.032 1.877 1.877 0 00-.316-.025c-.265 0-.502.056-.71.167a1.26 1.26 0 00-.49.454 1.227 1.227 0 00-.178.657V507h-.838zM47.97 521.159c-.405 0-.753-.052-1.044-.156a2.222 2.222 0 01-.728-.405 2.213 2.213 0 01-.458-.533l.667-.468c.076.099.172.213.288.341.116.13.274.242.476.337.203.097.47.145.799.145.44 0 .803-.106 1.09-.319.286-.213.43-.547.43-1.002v-1.108h-.071c-.062.1-.15.223-.263.37a1.5 1.5 0 01-.483.387c-.208.111-.49.167-.845.167a2.27 2.27 0 01-1.186-.313 2.189 2.189 0 01-.828-.909c-.201-.398-.302-.881-.302-1.449 0-.558.099-1.045.295-1.459.197-.417.47-.739.82-.966.35-.23.756-.345 1.215-.345.355 0 .637.06.845.178.21.116.372.249.483.398.114.146.201.267.263.362h.085v-.867h.81v5.611c0 .469-.107.85-.32 1.144-.21.296-.495.512-.852.65-.355.139-.75.209-1.186.209zm-.029-2.997c.337 0 .62-.077.853-.231.232-.154.408-.375.529-.664.12-.289.18-.634.18-1.037 0-.393-.058-.74-.177-1.04a1.558 1.558 0 00-.525-.707c-.232-.171-.519-.256-.86-.256-.355 0-.65.09-.887.27-.235.18-.411.422-.53.725a2.799 2.799 0 00-.174 1.008c0 .379.06.714.178 1.005.12.289.298.516.533.682.236.163.53.245.88.245zm5.526.966a2.22 2.22 0 01-.941-.195 1.622 1.622 0 01-.671-.572c-.166-.251-.249-.554-.249-.909 0-.313.062-.566.185-.76.123-.197.287-.351.493-.462.206-.111.434-.194.682-.248.251-.057.503-.102.757-.135.331-.043.6-.075.806-.096.208-.024.36-.063.454-.117.097-.055.146-.15.146-.285v-.028c0-.35-.096-.623-.288-.817-.19-.194-.477-.291-.863-.291-.4 0-.713.088-.94.263a1.55 1.55 0 00-.48.561l-.796-.284a1.9 1.9 0 01.569-.774c.239-.187.5-.318.78-.391.285-.076.564-.114.839-.114.175 0 .376.022.604.064.23.041.45.125.664.252.215.128.394.321.536.579.142.258.213.604.213 1.037V519h-.838v-.739h-.043a1.465 1.465 0 01-.284.38c-.132.135-.309.25-.529.345-.22.094-.489.142-.806.142zm.128-.753c.331 0 .61-.065.838-.195a1.336 1.336 0 00.696-1.154v-.767c-.036.042-.114.081-.234.117a3.994 3.994 0 01-.413.088 17.434 17.434 0 01-.802.107 3.165 3.165 0 00-.61.139 1.052 1.052 0 00-.455.28c-.114.123-.17.291-.17.504 0 .292.107.512.322.661.218.147.494.22.828.22zm4.74-6.648V519h-.838v-7.273h.838zm2.373 0V519h-.838v-7.273h.838zm3.822 7.387c-.526 0-.98-.116-1.36-.348a2.339 2.339 0 01-.878-.98c-.203-.422-.305-.912-.305-1.471 0-.558.102-1.051.305-1.477a2.41 2.41 0 01.86-1.001c.37-.242.8-.363 1.292-.363.285 0 .565.048.842.142.277.095.53.249.756.462.228.211.409.49.544.838.135.348.202.777.202 1.286v.355h-4.204v-.725h3.352c0-.307-.062-.582-.185-.823a1.385 1.385 0 00-.518-.572 1.45 1.45 0 00-.789-.21c-.333 0-.622.083-.866.249a1.63 1.63 0 00-.558.639c-.13.263-.195.545-.195.845v.483c0 .412.071.761.213 1.048.145.284.345.5.6.65.256.146.553.22.892.22.22 0 .419-.031.596-.093.18-.063.335-.158.465-.284.13-.127.231-.286.302-.475l.81.227a1.796 1.796 0 01-.43.724c-.201.206-.45.367-.746.483a2.758 2.758 0 01-.997.171zm3.533-.114v-5.455h.81v.824h.056c.1-.27.28-.489.54-.657a1.59 1.59 0 01.88-.252 7.127 7.127 0 01.441.014v.853a2.428 2.428 0 00-.195-.032 1.876 1.876 0 00-.316-.025c-.265 0-.502.056-.71.167a1.226 1.226 0 00-.668 1.111V519h-.838zm4.427 2.045a1.816 1.816 0 01-.611-.099l.213-.739c.203.052.383.071.54.057a.647.647 0 00.415-.209c.123-.123.235-.323.337-.6l.157-.427-2.018-5.483h.91l1.505 4.347h.057l1.506-4.347h.909l-2.315 6.25a2.368 2.368 0 01-.387.7 1.453 1.453 0 01-.537.416 1.67 1.67 0 01-.681.134zM141.389 594.001h-.704a1.468 1.468 0 00-.594-.921 1.594 1.594 0 00-.486-.238 1.937 1.937 0 00-.556-.08c-.353 0-.672.089-.958.267-.284.178-.51.44-.679.787-.167.346-.25.771-.25 1.275 0 .504.083.929.25 1.276.168.346.394.609.678.787.286.178.605.267.958.267.193 0 .379-.026.557-.079a1.62 1.62 0 00.485-.236 1.493 1.493 0 00.594-.923h.705c-.053.297-.15.563-.29.798a2.17 2.17 0 01-1.225.971 2.59 2.59 0 01-.826.128c-.497 0-.938-.121-1.324-.364a2.49 2.49 0 01-.912-1.034c-.221-.447-.332-.977-.332-1.591s.111-1.144.333-1.591a2.49 2.49 0 01.912-1.034 2.44 2.44 0 011.324-.363c.293 0 .569.043.826.128.26.085.494.21.702.375.208.163.383.362.523.597.14.233.236.499.289.798zm2.82 4.091c-.394 0-.74-.093-1.037-.281a1.92 1.92 0 01-.693-.787c-.165-.337-.247-.731-.247-1.182 0-.455.083-.851.247-1.19.167-.339.398-.602.694-.79a1.906 1.906 0 011.037-.281c.394 0 .738.094 1.034.281.297.188.528.451.693.79.166.339.25.736.25 1.191-.001.451-.084.844-.251 1.182a1.883 1.883 0 01-.693.786c-.296.188-.64.281-1.034.281zm0-.602c.299 0 .545-.076.739-.23.193-.153.336-.355.429-.605.093-.25.139-.521.139-.812 0-.292-.046-.564-.139-.816a1.381 1.381 0 00-.429-.611c-.193-.155-.439-.233-.738-.233-.3 0-.546.078-.739.233a1.376 1.376 0 00-.429.611c-.093.252-.14.523-.14.815 0 .292.047.563.139.813.093.25.236.451.429.605.194.153.44.23.739.23zm3.001.512v-4.364l.671.001-.001 4.363h-.67zm.341-5.091a.478.478 0 01-.338-.133.432.432 0 01-.139-.321c0-.125.047-.232.139-.321a.48.48 0 01.339-.134c.13 0 .242.045.335.134a.427.427 0 01.142.321.427.427 0 01-.142.321.468.468 0 01-.336.133zm2.228 2.467l-.001 2.625-.67-.001.001-4.363h.648l-.001.682h.057c.103-.222.258-.4.466-.534.209-.137.478-.205.807-.205.296 0 .554.061.776.182.221.12.393.301.517.546.123.242.184.549.184.92v2.773h-.671l.001-2.727c0-.343-.089-.61-.267-.802-.178-.193-.423-.289-.733-.289a1.156 1.156 0 00-.574.139.991.991 0 00-.395.406 1.337 1.337 0 00-.145.648zm-9.096 8.623a2.074 2.074 0 00-.247-.514 1.534 1.534 0 00-.832-.64 1.882 1.882 0 00-.58-.085c-.345 0-.658.089-.94.267-.283.178-.507.44-.674.787-.167.346-.25.771-.25 1.275 0 .504.084.929.253 1.276.168.346.396.609.684.787.288.178.612.267.972.267.333 0 .627-.071.88-.213.256-.144.455-.346.597-.608.144-.263.216-.573.216-.929l.216.046-1.75-.001v-.625l2.216.001v.625c0 .479-.102.896-.307 1.25a2.123 2.123 0 01-.841.824 2.533 2.533 0 01-1.227.289c-.516 0-.968-.121-1.358-.364a2.437 2.437 0 01-.909-1.034c-.216-.447-.324-.977-.324-1.591 0-.46.062-.874.185-1.241.125-.37.301-.684.529-.944.227-.259.496-.458.807-.596.31-.138.652-.207 1.025-.207.307 0 .593.046.858.139a2.293 2.293 0 011.528 1.759h-.727zm3.16 4.103c-.276 0-.527-.052-.752-.157a1.283 1.283 0 01-.537-.457 1.287 1.287 0 01-.199-.727c0-.25.049-.453.148-.608.098-.158.23-.281.395-.37.165-.089.346-.155.545-.198.201-.046.403-.082.605-.108.266-.034.481-.06.645-.077a.986.986 0 00.364-.094c.078-.043.116-.119.116-.227v-.023c.001-.28-.076-.498-.23-.653-.151-.155-.381-.233-.69-.233-.32 0-.571.07-.753.21a1.24 1.24 0 00-.383.449l-.637-.228c.114-.265.266-.471.455-.619.191-.149.4-.253.625-.312.227-.061.451-.091.671-.091.14 0 .301.017.483.051.183.032.36.1.531.202.172.102.315.257.429.463.113.207.17.483.17.83l-.001 2.875h-.67v-.591h-.034a1.206 1.206 0 01-.227.304 1.318 1.318 0 01-.424.275 1.626 1.626 0 01-.645.114zm.103-.603c.265 0 .488-.052.67-.156a1.06 1.06 0 00.557-.923v-.614c-.028.035-.091.066-.187.094a3.11 3.11 0 01-.33.071c-.123.019-.243.036-.361.051l-.281.034c-.174.023-.337.06-.488.111a.843.843 0 00-.364.224.573.573 0 00-.137.404c0 .233.087.409.259.528.174.118.395.176.662.176zm3.793-5.317l-.001 5.818h-.671l.001-5.818h.671zm1.898 0l-.001 5.818h-.67l.001-5.818h.67zm3.057 5.91c-.421 0-.784-.093-1.088-.279a1.87 1.87 0 01-.702-.784c-.163-.337-.244-.729-.244-1.176 0-.447.081-.841.244-1.182.165-.343.394-.61.688-.801a1.84 1.84 0 011.034-.289c.227 0 .452.038.673.113.222.076.424.199.605.37.182.168.327.392.435.67.108.279.162.622.162 1.029v.284l-3.364-.001v-.579h2.682c0-.246-.049-.466-.148-.659a1.102 1.102 0 00-.414-.457 1.162 1.162 0 00-.631-.168 1.2 1.2 0 00-.693.199c-.193.13-.342.301-.446.511-.104.21-.157.435-.157.676v.386c0 .33.057.609.171.838.115.228.275.401.48.52a1.4 1.4 0 00.713.177c.176 0 .335-.025.477-.074.144-.051.268-.127.372-.227.104-.103.185-.229.242-.381l.647.182c-.068.22-.182.413-.343.579-.162.165-.36.294-.597.387a2.212 2.212 0 01-.798.136zm2.826-.09l.001-4.364h.648v.659h.045c.08-.216.224-.391.432-.525.208-.135.443-.202.705-.202a7.016 7.016 0 01.352.011v.682a2.317 2.317 0 00-.157-.025 1.446 1.446 0 00-.252-.02c-.212 0-.402.044-.569.133a.983.983 0 00-.534.889v2.762h-.671zm3.541 1.637a1.466 1.466 0 01-.488-.08l.17-.591c.163.042.307.057.432.046a.52.52 0 00.332-.168c.099-.098.189-.258.27-.48l.125-.341-1.612-4.387.727.001 1.204 3.477h.045l1.205-3.477h.728l-1.854 5a1.877 1.877 0 01-.309.559c-.123.15-.266.261-.429.333a1.324 1.324 0 01-.546.108zM39.733 332h-.88a1.837 1.837 0 00-.743-1.151 1.995 1.995 0 00-.607-.298 2.434 2.434 0 00-.696-.099c-.44 0-.84.111-1.197.334-.355.222-.638.55-.849.983-.208.433-.312.965-.312 1.595 0 .629.104 1.161.312 1.594.211.433.494.761.85.984.357.222.756.334 1.196.334.241 0 .473-.034.696-.1.222-.066.425-.164.607-.295a1.857 1.857 0 00.742-1.154h.881a2.928 2.928 0 01-.362.998 2.72 2.72 0 01-1.53 1.215 3.285 3.285 0 01-1.034.159c-.62 0-1.172-.151-1.655-.454-.483-.303-.863-.734-1.14-1.293-.277-.558-.415-1.221-.415-1.988 0-.767.138-1.43.415-1.989.277-.559.657-.99 1.14-1.293.483-.303 1.035-.454 1.655-.454.367 0 .711.053 1.033.16.324.106.617.262.877.468.26.204.479.453.654.746.175.291.296.624.362.998zm2.148 1.719V337h-.839v-7.273h.838v2.671h.072c.127-.282.32-.506.575-.671.258-.169.601-.253 1.03-.253.371 0 .697.075.976.224.28.147.496.373.65.678.156.303.234.689.234 1.158V337h-.838v-3.409c0-.433-.112-.768-.337-1.005-.222-.239-.531-.359-.927-.359-.274 0-.52.058-.738.174a1.275 1.275 0 00-.512.508 1.654 1.654 0 00-.184.81zM46.95 337v-5.455h.838V337h-.838zm.426-6.364a.593.593 0 01-.423-.167.536.536 0 01-.174-.401c0-.156.058-.29.174-.401a.597.597 0 01.423-.167c.163 0 .303.056.419.167a.53.53 0 01.177.401.53.53 0 01-.177.401.58.58 0 01-.42.167zm2.785 3.083V337h-.838v-5.455h.81v.853h.07c.128-.277.322-.5.583-.668.26-.17.596-.256 1.008-.256.37 0 .693.076.97.228.277.149.492.376.646.682.154.303.23.686.23 1.15V337h-.837v-3.409c0-.429-.111-.762-.334-1.002-.222-.241-.528-.362-.916-.362-.268 0-.507.058-.718.174a1.248 1.248 0 00-.493.508 1.68 1.68 0 00-.181.81zm7.298 3.395c-.525 0-.979-.116-1.36-.348a2.34 2.34 0 01-.877-.98c-.204-.422-.305-.912-.305-1.471 0-.558.101-1.051.305-1.477a2.41 2.41 0 01.86-1.001c.369-.242.8-.363 1.292-.363.284 0 .565.048.842.142.277.095.529.249.756.462.227.211.408.49.543.838.135.348.203.777.203 1.286v.355h-4.205v-.725h3.352c0-.307-.061-.582-.184-.823a1.384 1.384 0 00-.519-.572 1.45 1.45 0 00-.788-.21c-.334 0-.623.083-.867.249a1.63 1.63 0 00-.557.639 1.88 1.88 0 00-.195.845v.483c0 .412.07.761.213 1.048.144.284.344.5.6.65.256.146.553.22.891.22.22 0 .42-.031.597-.093.18-.063.335-.158.465-.284.13-.127.23-.286.302-.475l.81.227a1.795 1.795 0 01-.43.724c-.201.206-.45.367-.746.483a2.758 2.758 0 01-.998.171zm7.397-4.347l-.753.213a1.417 1.417 0 00-.21-.366c-.09-.12-.212-.22-.368-.298a1.343 1.343 0 00-.6-.117c-.334 0-.613.077-.835.231-.22.151-.33.344-.33.579 0 .208.075.372.227.493.151.121.388.221.71.302l.81.199c.487.118.85.299 1.09.543.24.242.359.553.359.934 0 .313-.09.592-.27.838a1.792 1.792 0 01-.746.583c-.32.142-.691.213-1.115.213-.556 0-1.017-.121-1.381-.363-.365-.241-.596-.594-.693-1.058l.796-.199c.075.294.219.514.43.661.212.147.49.22.834.22.39 0 .7-.083.93-.249.232-.168.348-.369.348-.603a.634.634 0 00-.199-.476c-.132-.13-.336-.227-.61-.291l-.91-.213c-.5-.119-.866-.302-1.1-.551-.232-.251-.348-.564-.348-.941 0-.308.086-.58.259-.817a1.77 1.77 0 01.714-.557 2.505 2.505 0 011.03-.203c.54 0 .963.119 1.27.356.31.236.531.549.661.937zm3.648 4.347c-.525 0-.979-.116-1.36-.348a2.34 2.34 0 01-.877-.98c-.204-.422-.305-.912-.305-1.471 0-.558.101-1.051.305-1.477.206-.428.492-.762.86-1.001.369-.242.8-.363 1.292-.363.284 0 .565.048.841.142.278.095.53.249.757.462.227.211.408.49.543.838.135.348.203.777.203 1.286v.355h-4.205v-.725h3.352c0-.307-.061-.582-.184-.823a1.384 1.384 0 00-.519-.572 1.45 1.45 0 00-.788-.21c-.334 0-.623.083-.867.249a1.631 1.631 0 00-.557.639 1.88 1.88 0 00-.195.845v.483c0 .412.07.761.213 1.048.144.284.344.5.6.65.255.146.553.22.891.22.22 0 .42-.031.597-.093.18-.063.335-.158.465-.284.13-.127.23-.286.302-.475l.81.227a1.795 1.795 0 01-.43.724c-.201.206-.45.367-.746.483a2.758 2.758 0 01-.998.171zm6.758-.114h-.923l2.67-7.273h.91L80.59 337h-.924l-2.173-6.122h-.057L75.263 337zm.34-2.841h3.723v.781h-3.722v-.781zM81.61 337v-5.455h.81v.824h.056c.1-.27.28-.489.54-.657a1.59 1.59 0 01.88-.252 7.131 7.131 0 01.441.014v.853a2.428 2.428 0 00-.195-.032 1.876 1.876 0 00-.316-.025c-.265 0-.502.056-.71.167a1.226 1.226 0 00-.668 1.111V337h-.838zm6.434-5.455v.711h-2.826v-.711h2.826zm-2.002-1.306h.838v5.199c0 .236.034.414.103.532a.538.538 0 00.27.235c.11.037.228.056.351.056.093 0 .168-.004.227-.014l.142-.028.17.753a1.855 1.855 0 01-.624.099c-.237 0-.469-.051-.696-.153a1.379 1.379 0 01-.561-.465c-.147-.208-.22-.471-.22-.788v-5.426zM38.852 344a2.58 2.58 0 00-.309-.643 1.979 1.979 0 00-.45-.49 1.89 1.89 0 00-.59-.309 2.35 2.35 0 00-.725-.106c-.43 0-.822.111-1.175.334-.353.222-.633.55-.842.983-.208.433-.312.965-.312 1.595 0 .629.105 1.161.316 1.594.21.433.496.761.856.984.36.222.764.334 1.214.334.417 0 .784-.089 1.101-.267.32-.18.568-.433.746-.76.18-.329.27-.716.27-1.161l.27.057h-2.188v-.781h2.77v.781c0 .599-.128 1.12-.384 1.562a2.65 2.65 0 01-1.05 1.03c-.446.242-.957.362-1.535.362-.644 0-1.21-.151-1.697-.454-.485-.303-.864-.734-1.137-1.293-.27-.558-.404-1.221-.404-1.988 0-.576.076-1.093.23-1.552.157-.462.377-.855.66-1.179.285-.325.621-.573 1.01-.746a3.114 3.114 0 011.281-.259c.384 0 .741.058 1.073.174a2.878 2.878 0 011.548 1.236c.175.288.296.609.362.962h-.909zm3.952 5.128a2.22 2.22 0 01-.941-.195 1.623 1.623 0 01-.671-.572c-.166-.251-.249-.554-.249-.909 0-.313.062-.566.185-.76.123-.197.287-.351.493-.462.206-.111.433-.194.682-.248.251-.057.503-.102.757-.135.33-.043.6-.075.806-.096.208-.024.36-.063.454-.117.097-.055.146-.15.146-.285v-.028c0-.35-.096-.623-.288-.817-.19-.194-.477-.291-.863-.291-.4 0-.714.088-.94.263a1.55 1.55 0 00-.48.561l-.796-.284a1.9 1.9 0 01.568-.774c.24-.187.5-.318.782-.391.284-.076.563-.114.838-.114.175 0 .376.022.603.064.23.041.451.125.664.252.216.128.395.321.537.579.142.258.213.604.213 1.037V349h-.838v-.739h-.043a1.465 1.465 0 01-.284.38c-.133.135-.309.25-.53.345-.22.094-.488.142-.805.142zm.128-.753c.331 0 .61-.065.838-.195a1.337 1.337 0 00.696-1.154v-.767c-.036.042-.114.081-.235.117a3.994 3.994 0 01-.412.088 17.496 17.496 0 01-.802.107 3.165 3.165 0 00-.61.139 1.051 1.051 0 00-.455.28c-.114.123-.17.291-.17.504 0 .292.107.512.322.661.218.147.494.22.828.22zm4.74-6.648V349h-.838v-7.273h.837zm2.373 0V349h-.839v-7.273h.839zm3.822 7.387c-.526 0-.98-.116-1.36-.348a2.339 2.339 0 01-.878-.98c-.203-.422-.305-.912-.305-1.471 0-.558.102-1.051.305-1.477a2.41 2.41 0 01.86-1.001c.369-.242.8-.363 1.292-.363.284 0 .565.048.842.142.277.095.529.249.756.462.227.211.409.49.544.838.134.348.202.777.202 1.286v.355H51.92v-.725h3.353c0-.307-.062-.582-.185-.823a1.385 1.385 0 00-.518-.572 1.45 1.45 0 00-.789-.21c-.334 0-.622.083-.866.249a1.631 1.631 0 00-.558.639 1.88 1.88 0 00-.195.845v.483c0 .412.071.761.213 1.048.144.284.344.5.6.65.256.146.553.22.892.22.22 0 .419-.031.596-.093.18-.063.335-.158.465-.284.13-.127.231-.286.302-.475l.81.227a1.797 1.797 0 01-.43.724c-.201.206-.45.367-.746.483a2.757 2.757 0 01-.997.171zM57.4 349v-5.455h.81v.824h.056c.1-.27.28-.489.54-.657a1.59 1.59 0 01.88-.252 7.131 7.131 0 01.441.014v.853a2.428 2.428 0 00-.195-.032 1.876 1.876 0 00-.316-.025c-.265 0-.502.056-.71.167a1.226 1.226 0 00-.668 1.111V349H57.4zm4.426 2.045a1.815 1.815 0 01-.61-.099l.213-.739c.203.052.383.071.54.057a.648.648 0 00.415-.209c.123-.123.235-.323.337-.6l.157-.427-2.018-5.483h.91l1.505 4.347h.057l1.506-4.347h.909l-2.316 6.25a2.368 2.368 0 01-.387.7 1.453 1.453 0 01-.536.416 1.67 1.67 0 01-.682.134zM33 439.969V439h5.719c.51 0 .944.094 1.3.281.357.188.628.452.813.793.185.341.277.744.277 1.207 0 .438-.08.827-.238 1.168-.161.341-.39.61-.687.805-.297.195-.65.293-1.059.293v-.953c.227 0 .425-.056.594-.168.166-.115.297-.271.39-.469.094-.198.141-.423.141-.676 0-.278-.059-.515-.176-.711a1.116 1.116 0 00-.515-.445c-.23-.104-.51-.156-.84-.156H33zm8.14-4.551c0 .38-.071.725-.214 1.035-.146.31-.356.556-.63.738-.275.183-.608.274-1 .274-.343 0-.621-.068-.835-.203a1.443 1.443 0 01-.508-.543 2.865 2.865 0 01-.273-.75 9.146 9.146 0 01-.149-.832c-.047-.365-.082-.66-.105-.887-.026-.229-.07-.396-.13-.5-.059-.107-.163-.16-.312-.16h-.03c-.386 0-.686.105-.9.316-.213.209-.32.525-.32.949 0 .441.097.786.29 1.036.192.25.398.425.617.527l-.313.875c-.364-.156-.648-.365-.851-.625a2.346 2.346 0 01-.43-.859 3.57 3.57 0 01-.125-.922c0-.193.023-.414.07-.664a2.13 2.13 0 01.278-.731c.14-.237.352-.433.636-.59.284-.156.664-.234 1.14-.234H41v.922h-.813v.047c.13.062.27.166.419.312.148.146.274.34.378.582.105.242.157.538.157.887zm-.828-.141c0-.364-.071-.672-.214-.922a1.47 1.47 0 00-.555-.57 1.416 1.416 0 00-.715-.195h-.844c.047.039.09.125.13.258.036.13.068.281.097.453a19.61 19.61 0 01.117.883c.031.239.082.463.152.671.068.206.171.373.31.5.135.125.32.188.554.188.32 0 .562-.119.726-.356.162-.239.242-.542.242-.91zm2.938-4.292H35v-.89h.953v-.11a7.597 7.597 0 01-.398-.281 1.648 1.648 0 01-.438-.523c-.13-.23-.195-.539-.195-.93 0-.505.126-.951.379-1.336.252-.385.61-.686 1.074-.902.464-.216 1.01-.325 1.64-.325.636 0 1.187.109 1.653.325.464.216.823.515 1.078.898.253.383.379.824.379 1.324 0 .386-.064.694-.191.926-.13.232-.278.41-.442.535a5.676 5.676 0 01-.414.289v.078h3.172v.922zm-5.25-.906c.453 0 .853-.066 1.2-.199.343-.133.612-.327.808-.582.192-.255.289-.568.289-.938 0-.385-.102-.707-.305-.964a1.857 1.857 0 00-.828-.586 3.246 3.246 0 00-1.164-.2 3.14 3.14 0 00-1.14.196c-.342.127-.611.321-.81.582-.2.258-.3.582-.3.972 0 .375.095.69.285.946.188.255.45.448.79.578.335.13.727.195 1.175.195zm3.14-7.562c0 .38-.071.725-.214 1.035-.146.31-.356.556-.63.738-.275.182-.608.273-1 .273-.343 0-.621-.067-.835-.203a1.428 1.428 0 01-.508-.543 2.839 2.839 0 01-.273-.75 9.085 9.085 0 01-.149-.832c-.047-.364-.082-.66-.105-.886-.026-.23-.07-.396-.13-.5-.059-.107-.163-.161-.312-.161h-.03c-.386 0-.686.106-.9.317-.213.208-.32.525-.32.949 0 .44.097.785.29 1.035.192.25.398.426.617.528l-.313.875c-.364-.157-.648-.365-.851-.625a2.343 2.343 0 01-.43-.86 3.564 3.564 0 01-.125-.922c0-.192.023-.414.07-.664.044-.252.137-.496.278-.73a1.63 1.63 0 01.636-.59c.284-.156.664-.234 1.14-.234H41v.921h-.813v.047c.13.063.27.167.419.313.148.146.274.34.378.582.105.242.157.538.157.887zm-.828-.141c0-.365-.071-.672-.214-.922a1.456 1.456 0 00-.555-.57 1.417 1.417 0 00-.715-.196h-.844c.047.04.09.125.13.258.036.13.068.282.097.453a20.346 20.346 0 01.117.883c.031.24.082.464.152.672.068.206.171.372.31.5.135.125.32.188.554.188.32 0 .562-.119.726-.356.162-.239.242-.543.242-.91zm-2.921-5.214H41v.922h-6v-.891h.938v-.078a1.711 1.711 0 01-.735-.64c-.187-.287-.281-.657-.281-1.11 0-.406.083-.761.25-1.066a1.68 1.68 0 01.75-.711c.333-.169.755-.254 1.266-.254H41v.922h-3.75c-.471 0-.839.122-1.102.367-.265.245-.398.581-.398 1.008 0 .294.064.557.191.789.128.229.314.41.559.543.245.133.542.199.89.199zm3.734-8.028c0 .578-.128 1.077-.383 1.496a2.57 2.57 0 01-1.078.965c-.464.224-1.003.336-1.617.336-.615 0-1.156-.112-1.625-.336a2.652 2.652 0 01-1.102-.946c-.265-.406-.398-.88-.398-1.421 0-.313.052-.622.156-.926.104-.305.274-.582.508-.832.232-.25.539-.449.922-.598.383-.148.854-.223 1.414-.223h.39v4.625h-.796v-3.687c-.339 0-.641.068-.907.203a1.533 1.533 0 00-.629.57c-.153.245-.23.534-.23.868 0 .367.091.684.273.953.18.265.414.47.704.613.289.143.599.215.93.215h.53c.454 0 .838-.078 1.153-.235a1.68 1.68 0 00.715-.66c.161-.281.242-.608.242-.98 0-.242-.034-.461-.102-.656a1.403 1.403 0 00-.312-.512 1.421 1.421 0 00-.524-.332l.25-.891c.302.094.568.251.797.473.227.221.404.495.532.82.124.326.187.692.187 1.098zm-4.781-8.137l.234.828a1.526 1.526 0 00-.402.231 1.117 1.117 0 00-.328.406c-.086.172-.13.392-.13.66 0 .367.085.673.255.918.166.242.379.363.636.363.23 0 .41-.083.543-.25.133-.166.244-.427.332-.781l.22-.891c.13-.536.329-.936.597-1.199.265-.263.608-.394 1.027-.394.344 0 .651.099.922.297.27.195.484.468.64.82.157.351.235.76.235 1.226 0 .612-.133 1.119-.398 1.52-.266.401-.654.655-1.164.762l-.22-.875c.324-.084.566-.241.727-.473.162-.234.242-.54.242-.918 0-.43-.09-.771-.273-1.023-.185-.256-.406-.383-.664-.383a.697.697 0 00-.523.219c-.144.145-.25.369-.32.671l-.235 1c-.13.55-.332.954-.606 1.211-.276.256-.62.383-1.035.383-.338 0-.638-.095-.898-.285a1.941 1.941 0 01-.614-.785 2.757 2.757 0 01-.222-1.133c0-.594.13-1.06.39-1.398a2.1 2.1 0 011.032-.727zm4.781-4.013c0 .578-.128 1.077-.383 1.496a2.564 2.564 0 01-1.078.965c-.464.224-1.003.336-1.617.336-.615 0-1.156-.112-1.625-.336a2.643 2.643 0 01-1.102-.945c-.265-.406-.398-.88-.398-1.422 0-.312.052-.621.156-.926a2.3 2.3 0 01.508-.832c.232-.25.539-.449.922-.597.383-.149.854-.223 1.414-.223h.39v4.625h-.796v-3.688c-.339 0-.641.068-.907.204a1.526 1.526 0 00-.629.57c-.153.245-.23.534-.23.867 0 .367.091.685.273.953.18.266.414.47.704.614.289.143.599.214.93.214h.53c.454 0 .838-.078 1.153-.234.312-.159.55-.379.715-.66.161-.281.242-.608.242-.981 0-.242-.034-.461-.102-.656a1.412 1.412 0 00-.312-.512 1.421 1.421 0 00-.524-.332l.25-.89c.302.093.568.251.797.472.227.222.404.495.532.821.124.325.187.691.187 1.097zM54 442.703v1.016l-8-2.938v-1l8-2.937v1.015l-6.734 2.391v.062L54 442.703zm-3.125-.375v-4.094h.86v4.094h-.86zM54 435.723h-6v-.891h.906v-.062a1.447 1.447 0 01-.722-.594 1.75 1.75 0 01-.278-.969c0-.068.002-.152.004-.254a3.39 3.39 0 01.012-.23h.937c-.007.031-.02.103-.035.214a2.13 2.13 0 00-.027.348c0 .292.061.552.184.781a1.34 1.34 0 001.223.735H54v.922zm-6-7.078h.781v3.109H48v-3.109zm-1.438 2.203v-.922h5.72c.26 0 .455-.038.585-.114a.588.588 0 00.258-.296c.042-.123.063-.252.063-.387 0-.102-.006-.185-.016-.25l-.031-.156.828-.188c.023.063.047.15.07.262.026.112.04.254.04.426 0 .26-.057.515-.169.765a1.516 1.516 0 01-.512.617c-.229.162-.518.243-.867.243h-5.968zM48.5 418.57c-.263.086-.499.2-.707.34-.211.138-.39.304-.54.496-.148.19-.26.406-.339.649a2.577 2.577 0 00-.117.797c0 .474.122.905.367 1.293.245.388.605.696 1.082.925.477.229 1.061.344 1.754.344.693 0 1.277-.116 1.754-.348.477-.231.837-.545 1.082-.941.245-.396.367-.841.367-1.336 0-.458-.098-.862-.293-1.211a2.08 2.08 0 00-.836-.82c-.362-.198-.788-.297-1.277-.297l.062-.297v2.406H50v-3.047h.86c.658 0 1.231.141 1.718.422.487.279.865.664 1.133 1.157.266.489.398 1.052.398 1.687 0 .708-.166 1.331-.5 1.867-.333.534-.807.951-1.422 1.25-.614.297-1.343.446-2.187.446a5.364 5.364 0 01-1.707-.254 3.777 3.777 0 01-1.297-.727 3.171 3.171 0 01-.82-1.109 3.428 3.428 0 01-.285-1.41c0-.422.063-.816.191-1.18a3.176 3.176 0 011.36-1.703c.317-.193.67-.326 1.058-.399v1zm5.64-4.346c0 .38-.071.725-.214 1.035-.146.31-.356.556-.63.738-.275.182-.608.274-1 .274-.343 0-.621-.068-.835-.204a1.428 1.428 0 01-.508-.543 2.839 2.839 0 01-.273-.75 9.085 9.085 0 01-.149-.832c-.047-.364-.082-.66-.105-.886-.026-.23-.07-.396-.13-.5-.059-.107-.163-.16-.312-.16h-.03c-.386 0-.686.105-.9.316-.213.208-.32.525-.32.949 0 .44.097.785.29 1.035.192.25.398.426.617.528l-.313.875c-.364-.157-.648-.365-.851-.625a2.343 2.343 0 01-.43-.86 3.564 3.564 0 01-.125-.922c0-.192.023-.414.07-.664.044-.252.137-.496.278-.73a1.63 1.63 0 01.636-.59c.284-.156.664-.234 1.14-.234H54v.922h-.813v.046c.13.063.27.167.419.313.148.146.274.34.378.582.105.242.157.538.157.887zm-.828-.141c0-.365-.071-.672-.214-.922a1.463 1.463 0 00-1.27-.765h-.844c.047.039.09.125.13.257.036.131.068.282.097.453a20.346 20.346 0 01.117.883c.031.24.082.464.152.672.068.206.171.373.31.5.135.125.32.188.554.188.32 0 .562-.119.726-.356.162-.239.242-.543.242-.91zM46 408.869h8v.922h-8v-.922zm0-2.61h8v.922h-8v-.922zm8.125-4.204c0 .578-.128 1.077-.383 1.496a2.577 2.577 0 01-1.078.965c-.464.224-1.003.336-1.617.336-.615 0-1.156-.112-1.625-.336a2.652 2.652 0 01-1.102-.946c-.265-.406-.398-.88-.398-1.422 0-.312.052-.621.156-.925.104-.305.274-.582.508-.832.232-.25.539-.45.922-.598.383-.148.854-.223 1.414-.223h.39v4.625h-.796v-3.687c-.339 0-.641.068-.907.203a1.533 1.533 0 00-.859 1.437c0 .368.091.685.273.954.18.265.414.47.704.613.289.143.599.215.93.215h.53c.454 0 .838-.078 1.153-.235.312-.159.55-.379.715-.66.161-.281.242-.608.242-.98a2 2 0 00-.102-.657 1.408 1.408 0 00-.312-.511 1.408 1.408 0 00-.524-.332l.25-.891c.302.094.568.251.797.473.227.221.404.495.532.82.124.326.187.691.187 1.098zM54 398.168h-6v-.891h.906v-.062a1.442 1.442 0 01-.722-.594 1.746 1.746 0 01-.278-.969c0-.067.002-.152.004-.254a3.39 3.39 0 01.012-.23h.937c-.007.031-.02.103-.035.215a2.11 2.11 0 00-.027.347c0 .292.061.553.184.782.12.226.286.406.5.539.21.13.451.195.722.195H54v.922zm2.25-4.869a2.021 2.021 0 01-.11.672l-.812-.235a1.77 1.77 0 00.063-.593.71.71 0 00-.23-.457c-.136-.136-.356-.26-.661-.372l-.469-.171L48 394.361v-1l4.781-1.656v-.062L48 389.986v-1l6.875 2.547c.31.115.566.257.77.426.205.169.358.366.457.59.099.221.148.471.148.75zM252.705 298v-5.818h.704v2.591h3.102v-2.591h.705V298h-.705v-2.602h-3.102V298h-.704zm5.831 0v-4.364h.67V298h-.67zm.34-5.091a.478.478 0 01-.338-.133.432.432 0 01-.139-.321c0-.125.047-.232.139-.321a.479.479 0 01.338-.134c.131 0 .243.045.336.134a.427.427 0 01.142.321.427.427 0 01-.142.321.468.468 0 01-.336.133zm1.558 5.091v-4.364h.648v.682h.056c.091-.233.238-.414.441-.542.202-.131.446-.196.73-.196.288 0 .527.065.719.196.193.128.343.309.451.542h.046c.112-.225.279-.404.503-.537.223-.134.491-.201.804-.201.39 0 .709.122.957.366.248.242.372.62.372 1.134V298h-.67v-2.92c0-.322-.088-.553-.264-.691a.982.982 0 00-.623-.207c-.306 0-.544.093-.713.278a.998.998 0 00-.253.699V298h-.681v-2.989a.784.784 0 00-.242-.599.866.866 0 00-.622-.23.92.92 0 00-.489.139c-.149.093-.27.222-.363.386a1.143 1.143 0 00-.137.566V298h-.67zm8.237.102a1.78 1.78 0 01-.753-.156 1.295 1.295 0 01-.537-.457 1.298 1.298 0 01-.198-.728c0-.25.049-.452.147-.608.099-.157.23-.28.395-.369.165-.089.347-.155.546-.199.2-.045.402-.081.605-.108.265-.034.48-.059.645-.076.166-.019.287-.051.363-.094.078-.044.117-.12.117-.227v-.023c0-.28-.077-.498-.23-.654-.152-.155-.382-.233-.691-.233-.32 0-.571.071-.753.211-.181.14-.309.289-.383.449l-.636-.228c.113-.265.265-.471.454-.619.191-.15.4-.254.625-.313.227-.06.451-.09.671-.09.14 0 .301.017.482.051.184.032.361.099.532.201.172.103.315.257.429.463.113.207.17.483.17.83V298h-.67v-.591h-.034a1.195 1.195 0 01-.228.304c-.106.108-.247.2-.423.276a1.644 1.644 0 01-.645.113zm.102-.602c.266 0 .489-.052.671-.156a1.062 1.062 0 00.557-.924v-.613c-.029.034-.091.065-.188.094-.094.026-.204.05-.329.071a14.193 14.193 0 01-.642.085 2.5 2.5 0 00-.489.111.843.843 0 00-.364.224.572.572 0 00-.136.403c0 .233.086.41.259.529.174.117.394.176.661.176zm3.792-5.318V298h-.67v-5.818h.67zm2.512 5.92c-.276 0-.527-.052-.752-.156a1.283 1.283 0 01-.537-.457 1.29 1.29 0 01-.199-.728c0-.25.049-.452.148-.608.098-.157.23-.28.394-.369.165-.089.347-.155.546-.199a6.97 6.97 0 01.605-.108c.265-.034.48-.059.645-.076a.994.994 0 00.363-.094c.078-.044.117-.12.117-.227v-.023c0-.28-.077-.498-.23-.654-.152-.155-.382-.233-.69-.233-.321 0-.572.071-.753.211-.182.14-.31.289-.384.449l-.636-.228c.113-.265.265-.471.454-.619.192-.15.4-.254.625-.313.228-.06.451-.09.671-.09.14 0 .301.017.483.051.183.032.361.099.531.201.172.103.315.257.429.463.114.207.17.483.17.83V298h-.67v-.591h-.034a1.188 1.188 0 01-.227.304 1.32 1.32 0 01-.424.276 1.644 1.644 0 01-.645.113zm.103-.602c.265 0 .488-.052.67-.156a1.062 1.062 0 00.557-.924v-.613c-.028.034-.091.065-.188.094-.094.026-.204.05-.329.071a13.585 13.585 0 01-.642.085 2.533 2.533 0 00-.489.111.84.84 0 00-.363.224.572.572 0 00-.137.403c0 .233.086.41.259.529.174.117.395.176.662.176zm3.397 2.136a1.464 1.464 0 01-.489-.079l.171-.591c.162.042.306.057.431.045a.52.52 0 00.333-.167c.098-.099.188-.259.27-.48l.125-.341-1.614-4.387h.727l1.205 3.478h.045l1.205-3.478h.727l-1.852 5a1.907 1.907 0 01-.31.56c-.123.15-.266.26-.429.332a1.322 1.322 0 01-.545.108zm5.172-1.534a1.78 1.78 0 01-.753-.156 1.286 1.286 0 01-.536-.457 1.29 1.29 0 01-.199-.728c0-.25.049-.452.147-.608.099-.157.23-.28.395-.369.165-.089.347-.155.546-.199.2-.045.402-.081.605-.108.265-.034.48-.059.645-.076a1 1 0 00.363-.094c.078-.044.117-.12.117-.227v-.023c0-.28-.077-.498-.23-.654-.152-.155-.382-.233-.691-.233-.32 0-.571.071-.752.211-.182.14-.31.289-.384.449l-.636-.228c.113-.265.265-.471.454-.619.191-.15.4-.254.625-.313.227-.06.451-.09.671-.09.14 0 .301.017.483.051.183.032.36.099.531.201.172.103.315.257.429.463.113.207.17.483.17.83V298h-.67v-.591h-.034a1.172 1.172 0 01-.228.304c-.106.108-.247.2-.423.276a1.644 1.644 0 01-.645.113zm.103-.602c.265 0 .488-.052.67-.156a1.062 1.062 0 00.557-.924v-.613c-.029.034-.091.065-.188.094-.094.026-.204.05-.329.071a14.193 14.193 0 01-.642.085 2.533 2.533 0 00-.489.111.843.843 0 00-.364.224.576.576 0 00-.136.403c0 .233.086.41.259.529.174.117.395.176.662.176zm3.791-2.125V298h-.67v-4.364h.648v.682h.057a1.25 1.25 0 01.465-.534c.209-.136.478-.204.807-.204.296 0 .554.06.776.181.221.12.394.301.517.546.123.242.185.549.185.92V298h-.671v-2.727c0-.343-.089-.61-.267-.801-.178-.194-.422-.29-.733-.29a1.17 1.17 0 00-.574.139 1.004 1.004 0 00-.395.406 1.349 1.349 0 00-.145.648zm6.589 2.625h-.738l2.136-5.818h.727l2.137 5.818h-.739l-1.739-4.898h-.045L294.232 298zm.273-2.273h2.977v.625h-2.977v-.625zm4.804 2.273v-4.364h.648v.659h.045c.08-.215.224-.391.432-.525.208-.135.443-.202.704-.202a7.018 7.018 0 01.353.012v.681a2.363 2.363 0 00-.156-.025 1.572 1.572 0 00-.253-.02c-.212 0-.402.044-.569.133a1.025 1.025 0 00-.392.364.987.987 0 00-.142.526V298h-.67zm5.148-4.364v.569h-2.262v-.569h2.262zm-1.603-1.045h.671v4.159c0 .189.027.331.082.426a.432.432 0 00.216.188c.089.03.183.045.281.045.074 0 .135-.004.182-.011l.114-.023.136.602a1.4 1.4 0 01-.5.08 1.36 1.36 0 01-.557-.122 1.105 1.105 0 01-.448-.373c-.118-.166-.177-.376-.177-.63v-4.341zM256.682 304a2.074 2.074 0 00-.247-.514 1.593 1.593 0 00-.361-.392 1.497 1.497 0 00-.472-.247 1.87 1.87 0 00-.579-.086 1.73 1.73 0 00-.941.267 1.852 1.852 0 00-.673.787c-.167.347-.25.772-.25 1.276s.084.929.253 1.275c.168.347.397.609.685.787.287.178.611.267.971.267.334 0 .627-.071.881-.213.256-.144.454-.346.596-.608.144-.263.216-.572.216-.929l.216.046h-1.75v-.625h2.216v.625c0 .479-.102.896-.307 1.25a2.116 2.116 0 01-.841.824c-.356.193-.765.29-1.227.29-.515 0-.968-.122-1.358-.364a2.456 2.456 0 01-.909-1.034c-.216-.447-.324-.977-.324-1.591 0-.46.062-.874.185-1.242.125-.369.301-.683.528-.943.228-.259.497-.458.807-.596a2.486 2.486 0 011.026-.208c.307 0 .593.047.858.139a2.305 2.305 0 011.238.989c.14.231.237.488.29.77h-.727zm3.161 4.102a1.78 1.78 0 01-.753-.156 1.295 1.295 0 01-.537-.457 1.298 1.298 0 01-.199-.728c0-.25.05-.452.148-.608.099-.157.23-.28.395-.369.165-.089.347-.155.545-.199.201-.045.403-.081.606-.108.265-.034.48-.059.644-.076.167-.019.288-.051.364-.094.078-.044.117-.12.117-.227v-.023c0-.28-.077-.498-.231-.654-.151-.155-.381-.233-.69-.233-.32 0-.571.071-.753.211-.182.14-.309.289-.383.449l-.637-.228c.114-.265.266-.471.455-.619.191-.15.4-.254.625-.313.227-.06.451-.09.67-.09.141 0 .302.017.483.051.184.032.361.099.532.201.172.103.315.257.429.463.113.207.17.483.17.83V308h-.67v-.591h-.035a1.165 1.165 0 01-.227.304c-.106.108-.247.2-.423.276a1.644 1.644 0 01-.645.113zm.102-.602c.265 0 .489-.052.671-.156a1.07 1.07 0 00.557-.924v-.613c-.029.034-.091.065-.188.094-.095.026-.204.05-.329.071a14.858 14.858 0 01-.643.085 2.506 2.506 0 00-.488.111.843.843 0 00-.364.224.572.572 0 00-.136.403c0 .233.086.41.258.529.175.117.395.176.662.176zm3.792-5.318V308h-.67v-5.818h.67zm1.899 0V308h-.671v-5.818h.671zm3.057 5.909c-.42 0-.783-.093-1.088-.279a1.863 1.863 0 01-.702-.784 2.685 2.685 0 01-.244-1.176c0-.447.082-.841.244-1.182.165-.342.394-.609.688-.801.295-.193.64-.289 1.034-.289.227 0 .452.037.673.113.222.076.424.199.605.369.182.169.327.393.435.671.108.278.162.621.162 1.028v.284h-3.364v-.579h2.682c0-.246-.049-.466-.148-.659a1.111 1.111 0 00-1.045-.625 1.2 1.2 0 00-.693.199c-.193.13-.342.301-.446.511-.104.21-.156.436-.156.676v.387c0 .329.056.608.17.838.116.227.276.4.48.519.205.118.442.177.713.177.176 0 .335-.025.477-.074.144-.051.268-.127.373-.227.104-.103.184-.23.241-.381l.648.182a1.433 1.433 0 01-.344.579c-.161.165-.36.294-.597.387-.236.09-.502.136-.798.136zm2.827-.091v-4.364h.648v.659h.045c.08-.215.224-.391.432-.525.208-.135.443-.202.704-.202a7.018 7.018 0 01.353.012v.681a2.317 2.317 0 00-.157-.025 1.55 1.55 0 00-.252-.02c-.213 0-.402.044-.569.133a1.025 1.025 0 00-.392.364.987.987 0 00-.142.526V308h-.67zm3.541 1.636a1.464 1.464 0 01-.489-.079l.171-.591c.163.042.307.057.432.045a.514.514 0 00.332-.167c.099-.099.189-.259.27-.48l.125-.341-1.614-4.387h.728l1.204 3.478h.046l1.204-3.478h.727l-1.852 5a1.883 1.883 0 01-.309.56 1.17 1.17 0 01-.429.332 1.324 1.324 0 01-.546.108zM244.761 499.727V507h-.88v-7.273h.88zm2.491 3.992V507h-.838v-5.455h.809v.853h.071c.128-.277.322-.5.583-.668.26-.17.596-.256 1.008-.256.369 0 .693.076.97.228.277.149.492.376.646.682.154.303.231.686.231 1.15V507h-.838v-3.409c0-.429-.112-.762-.334-1.002-.223-.241-.528-.362-.916-.362-.268 0-.507.058-.718.174a1.245 1.245 0 00-.493.508c-.121.223-.181.493-.181.81zm7.071 3.395c-.455 0-.856-.115-1.204-.345a2.332 2.332 0 01-.817-.98c-.196-.424-.295-.924-.295-1.502 0-.573.099-1.07.295-1.492.197-.421.47-.746.821-.976a2.16 2.16 0 011.214-.345c.355 0 .636.06.842.178.208.116.367.249.475.398.112.146.198.267.26.362h.071v-2.685h.838V507h-.81v-.838h-.099a5.406 5.406 0 01-.263.376 1.575 1.575 0 01-.487.402c-.21.116-.491.174-.841.174zm.113-.753c.337 0 .621-.088.853-.263.232-.178.408-.423.529-.735.121-.315.181-.678.181-1.09 0-.407-.059-.764-.178-1.069a1.548 1.548 0 00-.525-.717c-.232-.173-.519-.26-.86-.26-.355 0-.651.091-.887.274a1.63 1.63 0 00-.529.735 2.922 2.922 0 00-.174 1.037c0 .388.059.741.177 1.058.121.315.298.566.533.753.236.184.53.277.88.277zm7.476-1.591v-3.225h.838V507h-.838v-.923h-.057a1.788 1.788 0 01-.597.706c-.27.192-.611.288-1.023.288-.34 0-.643-.075-.909-.224a1.562 1.562 0 01-.625-.682c-.151-.305-.227-.69-.227-1.154v-3.466h.838v3.41c0 .397.111.715.334.951.225.237.511.355.859.355.209 0 .421-.053.636-.159.218-.107.4-.27.547-.49.149-.221.224-.501.224-.842zm6.236-2.003l-.753.213a1.415 1.415 0 00-.209-.366c-.09-.12-.213-.22-.369-.298a1.349 1.349 0 00-.601-.117c-.333 0-.612.077-.834.231-.22.151-.33.344-.33.579 0 .208.075.372.227.493.151.121.388.221.71.302l.81.199c.488.118.851.299 1.09.543.239.242.359.553.359.934 0 .313-.09.592-.27.838a1.793 1.793 0 01-.746.583c-.32.142-.691.213-1.115.213-.556 0-1.017-.121-1.381-.363-.365-.241-.596-.594-.693-1.058l.796-.199c.075.294.219.514.429.661.213.147.492.22.835.22.39 0 .701-.083.93-.249.232-.168.348-.369.348-.603a.633.633 0 00-.199-.476c-.132-.13-.336-.227-.61-.291l-.91-.213c-.499-.119-.866-.302-1.1-.551-.232-.251-.348-.564-.348-.941 0-.308.086-.58.259-.817.175-.236.413-.422.714-.557a2.503 2.503 0 011.029-.203c.54 0 .964.119 1.272.356.31.236.53.549.66.937zm4.586-3.04l2.159 6.122h.085l2.159-6.122h.923L275.39 507h-.909l-2.671-7.273h.924zm7.443 7.401c-.346 0-.659-.065-.941-.195a1.616 1.616 0 01-.671-.572c-.166-.251-.249-.554-.249-.909 0-.313.062-.566.185-.76.123-.197.287-.351.493-.462.206-.111.434-.194.682-.248.251-.057.503-.102.757-.135.331-.043.6-.075.806-.096.208-.024.359-.063.454-.117.097-.055.146-.15.146-.285v-.028c0-.35-.096-.623-.288-.817-.189-.194-.477-.291-.863-.291-.4 0-.714.088-.941.263-.227.175-.387.362-.479.561l-.796-.284c.142-.332.332-.59.568-.774.24-.187.5-.318.782-.391a3.23 3.23 0 01.838-.114c.175 0 .376.022.603.064.23.041.451.125.665.252.215.128.394.321.536.579.142.258.213.604.213 1.037V507h-.838v-.739h-.043a1.46 1.46 0 01-.284.38 1.65 1.65 0 01-.529.345 2.05 2.05 0 01-.806.142zm.128-.753c.331 0 .61-.065.838-.195a1.34 1.34 0 00.696-1.154v-.767c-.036.042-.114.081-.235.117a3.932 3.932 0 01-.412.088 16.838 16.838 0 01-.802.107 3.174 3.174 0 00-.611.139 1.05 1.05 0 00-.454.28c-.114.123-.171.291-.171.504 0 .292.108.512.323.661.218.147.494.22.828.22zm4.74-6.648V507h-.839v-7.273h.839zm2.373 0V507h-.838v-7.273h.838zm3.822 7.387c-.526 0-.979-.116-1.361-.348a2.345 2.345 0 01-.877-.98c-.203-.422-.305-.912-.305-1.471 0-.558.102-1.051.305-1.477.206-.428.493-.762.86-1.001.369-.242.8-.363 1.292-.363.284 0 .565.048.842.142.277.095.529.249.756.462.228.211.409.49.544.838.135.348.202.777.202 1.286v.355h-4.204v-.725h3.352c0-.307-.062-.582-.185-.823a1.385 1.385 0 00-.518-.572 1.453 1.453 0 00-.789-.21 1.5 1.5 0 00-.866.249 1.626 1.626 0 00-.558.639c-.13.263-.195.545-.195.845v.483c0 .412.071.761.213 1.048.144.284.345.5.6.65.256.146.553.22.892.22.22 0 .419-.031.596-.093.18-.063.335-.158.465-.284.131-.127.231-.286.302-.475l.81.227a1.796 1.796 0 01-.43.724c-.201.206-.45.367-.746.483a2.755 2.755 0 01-.997.171zm3.907 1.931a1.814 1.814 0 01-.611-.099l.213-.739c.204.052.383.071.54.057a.647.647 0 00.415-.209c.123-.123.236-.323.338-.6l.156-.427-2.017-5.483h.909l1.506 4.347h.056l1.506-4.347h.909l-2.315 6.25a2.361 2.361 0 01-.387.7 1.453 1.453 0 01-.537.416 1.665 1.665 0 01-.681.134zM249.733 514h-.881a1.838 1.838 0 00-.742-1.151 1.997 1.997 0 00-.607-.298 2.44 2.44 0 00-.696-.099c-.441 0-.839.111-1.197.334-.355.222-.638.55-.849.983-.208.433-.312.965-.312 1.595 0 .629.104 1.161.312 1.594.211.433.494.761.849.984.358.222.756.334 1.197.334.241 0 .473-.034.696-.1.222-.066.425-.164.607-.295a1.855 1.855 0 00.742-1.154h.881a2.925 2.925 0 01-.362.998 2.71 2.71 0 01-.654.749c-.26.204-.552.359-.877.466a3.282 3.282 0 01-1.033.159c-.62 0-1.172-.151-1.655-.454-.483-.303-.863-.734-1.14-1.293-.277-.558-.415-1.221-.415-1.988 0-.767.138-1.43.415-1.989.277-.559.657-.99 1.14-1.293.483-.303 1.035-.454 1.655-.454.367 0 .711.053 1.033.16.325.106.617.262.877.468.261.204.479.453.654.746.175.291.296.624.362.998zm4.747 2.77v-3.225h.838V519h-.838v-.923h-.057a1.794 1.794 0 01-.596.706c-.27.192-.611.288-1.023.288-.341 0-.644-.075-.909-.224a1.556 1.556 0 01-.625-.682c-.152-.305-.228-.69-.228-1.154v-3.466h.839v3.41c0 .397.111.715.333.951.225.237.512.355.86.355.208 0 .42-.053.635-.159.218-.107.4-.27.547-.49.149-.221.224-.501.224-.842zm3.211-5.043V519h-.838v-7.273h.838zm3.907 1.818v.711h-2.827v-.711h2.827zm-2.003-1.306h.838v5.199c0 .236.035.414.103.532a.538.538 0 00.27.235c.112.037.229.056.352.056.092 0 .168-.004.227-.014l.142-.028.171.753a1.905 1.905 0 01-.625.099c-.237 0-.469-.051-.696-.153a1.377 1.377 0 01-.561-.465c-.147-.208-.221-.471-.221-.788v-5.426zm6.701 4.531v-3.225h.838V519h-.838v-.923h-.056a1.788 1.788 0 01-.597.706c-.27.192-.611.288-1.023.288-.341 0-.644-.075-.909-.224a1.562 1.562 0 01-.625-.682c-.151-.305-.227-.69-.227-1.154v-3.466h.838v3.41c0 .397.111.715.334.951.225.237.511.355.859.355.208 0 .42-.053.636-.159.218-.107.4-.27.547-.49.149-.221.223-.501.223-.842zm2.373 2.23v-5.455h.81v.824h.057c.099-.27.279-.489.54-.657.26-.168.554-.252.88-.252a7.106 7.106 0 01.441.014v.853a2.503 2.503 0 00-.196-.032 1.866 1.866 0 00-.316-.025c-.265 0-.502.056-.71.167a1.26 1.26 0 00-.49.454 1.23 1.23 0 00-.178.657V519h-.838zm5.842.114c-.526 0-.979-.116-1.36-.348a2.338 2.338 0 01-.877-.98c-.204-.422-.306-.912-.306-1.471 0-.558.102-1.051.306-1.477a2.41 2.41 0 01.859-1.001c.369-.242.8-.363 1.293-.363.284 0 .564.048.841.142.277.095.53.249.757.462.227.211.408.49.543.838.135.348.203.777.203 1.286v.355h-4.205v-.725h3.352c0-.307-.061-.582-.184-.823a1.387 1.387 0 00-.519-.572 1.447 1.447 0 00-.788-.21c-.334 0-.623.083-.867.249a1.631 1.631 0 00-.557.639c-.13.263-.196.545-.196.845v.483c0 .412.071.761.214 1.048.144.284.344.5.6.65.255.146.552.22.891.22.22 0 .419-.031.597-.093.18-.063.335-.158.465-.284.13-.127.231-.286.302-.475l.809.227a1.794 1.794 0 01-.429.724c-.202.206-.45.367-.746.483a2.76 2.76 0 01-.998.171zM248.852 526a2.57 2.57 0 00-.309-.643 1.956 1.956 0 00-1.04-.799 2.352 2.352 0 00-.725-.106c-.43 0-.822.111-1.175.334-.353.222-.633.55-.842.983-.208.433-.312.965-.312 1.595 0 .629.105 1.161.316 1.594.211.433.496.761.856.984.36.222.764.334 1.214.334a2.21 2.21 0 001.101-.267c.32-.18.568-.433.746-.76.18-.329.27-.716.27-1.161l.27.057h-2.188v-.781h2.77v.781c0 .599-.128 1.12-.384 1.562a2.643 2.643 0 01-1.051 1.03c-.445.242-.956.362-1.534.362-.644 0-1.21-.151-1.697-.454-.486-.303-.864-.734-1.137-1.293-.269-.558-.404-1.221-.404-1.988 0-.576.077-1.093.23-1.552.157-.462.377-.855.661-1.179.284-.325.62-.573 1.008-.746a3.118 3.118 0 011.282-.259c.384 0 .741.058 1.073.174a2.87 2.87 0 011.548 1.236c.175.288.296.609.362.962h-.909zm3.952 5.128c-.346 0-.66-.065-.941-.195a1.616 1.616 0 01-.671-.572c-.166-.251-.249-.554-.249-.909 0-.313.062-.566.185-.76.123-.197.287-.351.493-.462.206-.111.434-.194.682-.248.251-.057.503-.102.756-.135.332-.043.601-.075.807-.096.208-.024.359-.063.454-.117.097-.055.146-.15.146-.285v-.028c0-.35-.096-.623-.288-.817-.189-.194-.477-.291-.863-.291-.4 0-.714.088-.941.263-.227.175-.387.362-.479.561l-.796-.284c.142-.332.332-.59.568-.774.24-.187.5-.318.782-.391a3.23 3.23 0 01.838-.114c.175 0 .376.022.603.064.23.041.451.125.665.252.215.128.394.321.536.579.142.258.213.604.213 1.037V531h-.838v-.739h-.043a1.46 1.46 0 01-.284.38 1.65 1.65 0 01-.529.345 2.05 2.05 0 01-.806.142zm.128-.753c.331 0 .61-.065.838-.195a1.34 1.34 0 00.696-1.154v-.767c-.036.042-.114.081-.235.117a3.932 3.932 0 01-.412.088 16.838 16.838 0 01-.802.107 3.157 3.157 0 00-.611.139 1.05 1.05 0 00-.454.28c-.114.123-.171.291-.171.504 0 .292.108.512.323.661.218.147.494.22.828.22zm4.74-6.648V531h-.839v-7.273h.839zm2.373 0V531h-.839v-7.273h.839zm3.821 7.387c-.525 0-.978-.116-1.36-.348a2.345 2.345 0 01-.877-.98c-.203-.422-.305-.912-.305-1.471 0-.558.102-1.051.305-1.477.206-.428.493-.762.86-1.001.369-.242.8-.363 1.292-.363.284 0 .565.048.842.142.277.095.529.249.756.462.228.211.409.49.544.838.135.348.202.777.202 1.286v.355h-4.205v-.725h3.353c0-.307-.062-.582-.185-.823a1.385 1.385 0 00-.518-.572 1.453 1.453 0 00-.789-.21 1.5 1.5 0 00-.866.249 1.626 1.626 0 00-.558.639c-.13.263-.195.545-.195.845v.483c0 .412.071.761.213 1.048.144.284.344.5.6.65.256.146.553.22.891.22.221 0 .42-.031.597-.093.18-.063.335-.158.465-.284.13-.127.231-.286.302-.475l.81.227a1.796 1.796 0 01-.43.724c-.201.206-.45.367-.746.483a2.756 2.756 0 01-.998.171zM267.4 531v-5.455h.81v.824h.056c.1-.27.28-.489.54-.657.261-.168.554-.252.881-.252a7.197 7.197 0 01.44.014v.853a2.362 2.362 0 00-.195-.032 1.882 1.882 0 00-.316-.025c-.265 0-.502.056-.71.167-.206.109-.37.26-.491.454a1.23 1.23 0 00-.177.657V531h-.838zm4.426 2.045a1.821 1.821 0 01-.61-.099l.213-.739c.203.052.383.071.539.057a.647.647 0 00.416-.209c.123-.123.235-.323.337-.6l.156-.427-2.017-5.483h.91l1.505 4.347h.057l1.506-4.347h.909l-2.316 6.25a2.361 2.361 0 01-.387.7 1.442 1.442 0 01-.536.416 1.667 1.667 0 01-.682.134zM41.648 601.727V609h-.853l-3.963-5.71h-.07V609h-.881v-7.273h.852l3.977 5.725h.071v-5.725h.867zm3.253 7.401a2.22 2.22 0 01-.94-.195 1.624 1.624 0 01-.672-.572c-.166-.251-.248-.554-.248-.909 0-.313.061-.566.184-.76.123-.197.288-.351.494-.462.206-.111.433-.194.682-.248.25-.057.503-.102.756-.135.332-.043.6-.075.806-.096.209-.024.36-.063.455-.117.097-.055.145-.15.145-.285v-.028c0-.35-.096-.623-.287-.817-.19-.194-.477-.291-.863-.291-.4 0-.714.088-.941.263a1.55 1.55 0 00-.48.561l-.795-.284c.142-.332.331-.59.568-.774.24-.187.5-.318.781-.391.284-.076.564-.114.838-.114.176 0 .377.022.604.064.23.041.451.125.664.252.216.128.394.321.536.579.142.258.213.604.213 1.037V609h-.838v-.739h-.042a1.465 1.465 0 01-.284.38c-.133.135-.31.25-.53.345-.22.094-.488.142-.806.142zm.128-.753c.332 0 .611-.065.838-.195a1.337 1.337 0 00.696-1.154v-.767c-.035.042-.113.081-.234.117a3.998 3.998 0 01-.412.088 17.496 17.496 0 01-.803.107 3.165 3.165 0 00-.61.139 1.051 1.051 0 00-.455.28c-.114.123-.17.291-.17.504 0 .292.107.512.323.661.218.147.494.22.827.22zm6.274-4.83v.711h-2.826v-.711h2.826zm-2.003-1.306h.839v5.199c0 .236.034.414.102.532a.538.538 0 00.27.235c.112.037.229.056.352.056.092 0 .168-.004.227-.014l.142-.028.17.753a1.855 1.855 0 01-.624.099c-.237 0-.47-.051-.696-.153a1.378 1.378 0 01-.561-.465c-.147-.208-.22-.471-.22-.788v-5.426zm6.701 4.531v-3.225h.839V609H56v-.923h-.056a1.786 1.786 0 01-.597.706c-.27.192-.61.288-1.023.288-.34 0-.644-.075-.909-.224a1.558 1.558 0 01-.625-.682c-.151-.305-.227-.69-.227-1.154v-3.466h.838v3.41c0 .397.111.715.334.951.225.237.511.355.86.355.208 0 .42-.053.635-.159.218-.107.4-.27.547-.49.149-.221.223-.501.223-.842zm2.373 2.23v-5.455h.81v.824h.057c.1-.27.28-.489.54-.657a1.59 1.59 0 01.88-.252 7.127 7.127 0 01.44.014v.853a2.428 2.428 0 00-.195-.032 1.876 1.876 0 00-.316-.025c-.265 0-.502.056-.71.167a1.226 1.226 0 00-.668 1.111V609h-.838zm5.326.128a2.22 2.22 0 01-.94-.195 1.623 1.623 0 01-.672-.572c-.166-.251-.248-.554-.248-.909 0-.313.061-.566.184-.76.123-.197.288-.351.494-.462.206-.111.433-.194.682-.248.25-.057.503-.102.756-.135.331-.043.6-.075.806-.096.208-.024.36-.063.455-.117.097-.055.145-.15.145-.285v-.028c0-.35-.096-.623-.287-.817-.19-.194-.478-.291-.863-.291-.4 0-.714.088-.941.263a1.55 1.55 0 00-.48.561l-.795-.284c.142-.332.331-.59.568-.774.239-.187.5-.318.781-.391.284-.076.564-.114.838-.114.175 0 .377.022.604.064.23.041.45.125.664.252.215.128.394.321.536.579.142.258.213.604.213 1.037V609h-.838v-.739h-.042a1.465 1.465 0 01-.284.38c-.133.135-.31.25-.53.345-.22.094-.489.142-.806.142zm.128-.753c.332 0 .61-.065.838-.195a1.337 1.337 0 00.696-1.154v-.767c-.035.042-.113.081-.234.117a3.986 3.986 0 01-.412.088 17.496 17.496 0 01-.803.107 3.163 3.163 0 00-.61.139 1.051 1.051 0 00-.455.28c-.114.123-.17.291-.17.504 0 .292.107.512.323.661.218.147.493.22.827.22zm4.74-6.648V609h-.838v-7.273h.838zM73.029 609v-7.273h.88v3.239h3.879v-3.239h.88V609h-.88v-3.253H73.91V609h-.88zm7.289 0v-5.455h.838V609h-.838zm.426-6.364a.593.593 0 01-.423-.167.536.536 0 01-.174-.401c0-.156.058-.29.174-.401a.597.597 0 01.423-.167c.163 0 .303.056.419.167a.53.53 0 01.178.401.53.53 0 01-.178.401.58.58 0 01-.419.167zm5.81 2.131l-.752.213a1.42 1.42 0 00-.21-.366c-.09-.12-.213-.22-.37-.298a1.343 1.343 0 00-.6-.117c-.333 0-.611.077-.834.231-.22.151-.33.344-.33.579 0 .208.076.372.227.493.152.121.388.221.71.302l.81.199c.488.118.851.299 1.09.543.24.242.359.553.359.934 0 .313-.09.592-.27.838a1.793 1.793 0 01-.746.583c-.32.142-.691.213-1.115.213-.556 0-1.016-.121-1.381-.363-.365-.241-.596-.594-.693-1.058l.796-.199c.076.294.219.514.43.661.213.147.49.22.834.22.39 0 .7-.083.93-.249.233-.168.349-.369.349-.603a.634.634 0 00-.2-.476c-.132-.13-.336-.227-.61-.291l-.91-.213c-.499-.119-.866-.302-1.1-.551-.232-.251-.348-.564-.348-.941 0-.308.086-.58.26-.817a1.77 1.77 0 01.713-.557 2.505 2.505 0 011.03-.203c.54 0 .963.119 1.271.356.31.236.53.549.66.937zm3.734-1.222v.711H87.46v-.711h2.827zm-2.003-1.306h.838v5.199c0 .236.034.414.103.532.07.116.16.194.27.235.111.037.228.056.351.056.093 0 .168-.004.228-.014l.142-.028.17.753a1.857 1.857 0 01-.625.099c-.237 0-.469-.051-.696-.153a1.378 1.378 0 01-.561-.465c-.147-.208-.22-.471-.22-.788v-5.426zm5.42 6.875c-.492 0-.924-.118-1.296-.352a2.383 2.383 0 01-.866-.984c-.206-.421-.309-.913-.309-1.477 0-.568.103-1.064.309-1.488a2.38 2.38 0 01.866-.987 2.382 2.382 0 011.297-.352c.492 0 .923.118 1.292.352.372.234.66.563.867.987.208.424.312.92.312 1.488 0 .564-.104 1.056-.312 1.477a2.35 2.35 0 01-.867.984c-.37.234-.8.352-1.292.352zm0-.753c.375 0 .682-.096.924-.288.241-.192.42-.444.536-.756.116-.313.174-.651.174-1.016 0-.364-.058-.704-.174-1.019a1.723 1.723 0 00-.536-.764c-.242-.194-.55-.291-.923-.291-.374 0-.682.097-.924.291-.241.195-.42.449-.536.764a2.927 2.927 0 00-.174 1.019c0 .365.058.703.174 1.016.116.312.295.564.536.756.242.192.55.288.924.288zm3.752.639v-5.455h.81v.824h.056c.1-.27.28-.489.54-.657a1.59 1.59 0 01.88-.252 7.137 7.137 0 01.441.014v.853a2.518 2.518 0 00-.195-.032 1.877 1.877 0 00-.317-.025c-.265 0-.501.056-.71.167a1.26 1.26 0 00-.49.454 1.227 1.227 0 00-.177.657V609h-.838zm4.426 2.045a1.814 1.814 0 01-.611-.099l.213-.739c.204.052.384.071.54.057a.65.65 0 00.416-.209c.123-.123.235-.323.337-.6l.156-.427-2.017-5.483h.909l1.506 4.347h.057l1.505-4.347h.909l-2.315 6.25a2.361 2.361 0 01-.387.7 1.458 1.458 0 01-.536.416 1.67 1.67 0 01-.682.134zm-62.025 4.5a1.117 1.117 0 00-.518-.838c-.304-.198-.675-.298-1.116-.298-.321 0-.603.052-.845.156a1.36 1.36 0 00-.56.43 1.028 1.028 0 00-.2.621c0 .195.047.362.139.501.094.137.215.252.362.345.147.09.3.164.462.223.16.057.309.103.444.139l.738.199c.19.049.4.118.632.206.235.087.458.207.672.358.215.15.393.341.532.576.14.234.21.522.21.863 0 .393-.103.748-.31 1.065-.203.317-.501.569-.894.756-.39.187-.866.281-1.424.281-.521 0-.972-.084-1.353-.252a2.16 2.16 0 01-.895-.703 2.008 2.008 0 01-.366-1.048h.91c.023.275.115.502.276.682.164.177.37.31.618.398.251.085.521.127.81.127.336 0 .638-.054.905-.163.268-.111.48-.265.636-.462a1.09 1.09 0 00.234-.696c0-.241-.067-.438-.202-.589a1.47 1.47 0 00-.533-.369 5.548 5.548 0 00-.714-.249l-.894-.256c-.569-.163-1.018-.396-1.35-.699-.331-.303-.497-.7-.497-1.19 0-.407.11-.762.33-1.065.223-.306.521-.542.895-.71a3.013 3.013 0 011.26-.256c.47 0 .886.084 1.25.252.365.166.654.393.867.682.216.289.33.617.341.983h-.852zm4.573 5.569c-.526 0-.979-.116-1.36-.348a2.34 2.34 0 01-.877-.98c-.204-.422-.306-.912-.306-1.471 0-.558.102-1.051.306-1.477a2.41 2.41 0 01.86-1.001c.368-.242.8-.363 1.292-.363.284 0 .564.048.841.142.277.095.53.249.757.462.227.211.408.49.543.838.135.348.203.777.203 1.286v.355h-4.205v-.725h3.352c0-.307-.061-.582-.184-.823a1.384 1.384 0 00-.519-.572 1.45 1.45 0 00-.788-.21c-.334 0-.623.083-.867.249a1.63 1.63 0 00-.557.639 1.88 1.88 0 00-.196.845v.483c0 .412.071.761.214 1.048.144.284.344.5.6.65.255.146.552.22.89.22.221 0 .42-.031.598-.093.18-.063.334-.158.465-.284.13-.127.23-.286.302-.475l.81.227a1.795 1.795 0 01-.43.724c-.202.206-.45.367-.746.483a2.758 2.758 0 01-.998.171zm5.75 0c-.512 0-.953-.121-1.322-.363a2.36 2.36 0 01-.852-.997c-.199-.424-.298-.908-.298-1.453 0-.554.101-1.043.305-1.466.206-.427.492-.759.86-.998.369-.242.8-.363 1.292-.363.384 0 .73.071 1.037.214.308.142.56.34.756.596.197.256.319.554.366.895h-.838a1.3 1.3 0 00-.426-.661c-.218-.194-.511-.291-.88-.291-.328 0-.614.085-.86.256a1.664 1.664 0 00-.572.714 2.644 2.644 0 00-.202 1.076c0 .421.066.788.199 1.101.134.312.324.555.568.728.246.172.535.259.866.259.218 0 .416-.038.593-.114.178-.076.328-.185.451-.327.123-.142.211-.312.263-.511h.838a1.94 1.94 0 01-1.087 1.481 2.371 2.371 0 01-1.058.224zm5.741-5.569v.711h-2.826v-.711h2.826zm-2.002-1.306h.838v5.199c0 .236.034.414.103.532a.538.538 0 00.27.235c.11.037.228.056.351.056.092 0 .168-.004.227-.014l.142-.028.17.753a1.855 1.855 0 01-.624.099c-.237 0-.469-.051-.696-.153a1.379 1.379 0 01-.561-.465c-.147-.208-.22-.471-.22-.788v-5.426zM57.183 621v-5.455h.838V621h-.838zm.426-6.364a.593.593 0 01-.422-.167.536.536 0 01-.174-.401c0-.156.058-.29.174-.401a.597.597 0 01.422-.167c.163 0 .303.056.42.167a.53.53 0 01.177.401.53.53 0 01-.178.401.58.58 0 01-.419.167zm4.163 6.478c-.492 0-.925-.118-1.296-.352a2.383 2.383 0 01-.867-.984c-.206-.421-.309-.913-.309-1.477 0-.568.103-1.064.31-1.488.208-.424.496-.753.866-.987a2.381 2.381 0 011.296-.352c.492 0 .923.118 1.293.352.371.234.66.563.866.987.208.424.313.92.313 1.488 0 .564-.105 1.056-.313 1.477a2.35 2.35 0 01-.866.984c-.37.234-.8.352-1.293.352zm0-.753c.374 0 .682-.096.923-.288.242-.192.42-.444.536-.756.116-.313.175-.651.175-1.016 0-.364-.059-.704-.175-1.019a1.723 1.723 0 00-.536-.764c-.241-.194-.549-.291-.923-.291s-.682.097-.923.291c-.242.195-.42.449-.536.764a2.927 2.927 0 00-.175 1.019c0 .365.059.703.175 1.016.115.312.294.564.536.756.241.192.549.288.923.288zm4.589-2.642V621h-.838v-5.455h.81v.853h.07c.128-.277.323-.5.583-.668.26-.17.597-.256 1.008-.256.37 0 .693.076.97.228.277.149.492.376.646.682.154.303.231.686.231 1.15V621h-.838v-3.409c0-.429-.111-.762-.334-1.002-.222-.241-.528-.362-.916-.362-.267 0-.507.058-.717.174a1.249 1.249 0 00-.494.508 1.68 1.68 0 00-.181.81zM235 604h-2.244v-7.273h2.343c.706 0 1.31.146 1.812.437.501.289.886.704 1.154 1.247.267.539.401 1.186.401 1.938 0 .758-.135 1.41-.405 1.957a2.88 2.88 0 01-1.179 1.257c-.516.291-1.143.437-1.882.437zm-1.364-.781h1.307c.602 0 1.1-.116 1.495-.348.396-.232.69-.563.884-.991.195-.429.292-.939.292-1.531 0-.587-.096-1.092-.288-1.516a2.122 2.122 0 00-.859-.98c-.382-.23-.856-.344-1.424-.344h-1.407v5.71zm8.48.895c-.525 0-.978-.116-1.36-.348a2.345 2.345 0 01-.877-.98c-.203-.422-.305-.912-.305-1.471 0-.558.102-1.051.305-1.477.206-.428.493-.762.86-1.001.369-.242.8-.363 1.292-.363.284 0 .565.048.842.142.277.095.529.249.756.462.228.211.409.49.544.838.135.348.202.777.202 1.286v.355h-4.205v-.725h3.353c0-.307-.062-.582-.185-.823a1.385 1.385 0 00-.518-.572 1.453 1.453 0 00-.789-.21 1.5 1.5 0 00-.866.249 1.626 1.626 0 00-.558.639c-.13.263-.195.545-.195.845v.483c0 .412.071.761.213 1.048.144.284.344.5.6.65.256.146.553.22.891.22.221 0 .42-.031.597-.093.18-.063.335-.158.465-.284.13-.127.231-.286.302-.475l.81.227a1.796 1.796 0 01-.43.724c-.201.206-.45.367-.746.483a2.756 2.756 0 01-.998.171zm5.75 0c-.512 0-.952-.121-1.321-.363a2.358 2.358 0 01-.853-.997c-.198-.424-.298-.908-.298-1.453 0-.554.102-1.043.306-1.466.206-.427.492-.759.859-.998.369-.242.8-.363 1.293-.363.383 0 .729.071 1.036.214.308.142.56.34.757.596.196.256.318.554.366.895h-.838a1.297 1.297 0 00-.427-.661c-.217-.194-.511-.291-.88-.291-.327 0-.613.085-.86.256a1.667 1.667 0 00-.571.714 2.642 2.642 0 00-.203 1.076c0 .421.067.788.199 1.101.135.312.324.555.568.728.247.172.535.259.867.259.218 0 .415-.038.593-.114.177-.076.328-.185.451-.327a1.25 1.25 0 00.263-.511h.838a1.95 1.95 0 01-.352.87c-.185.256-.43.459-.735.611a2.371 2.371 0 01-1.058.224zm5.586 0c-.493 0-.925-.118-1.296-.352a2.377 2.377 0 01-.867-.984c-.206-.421-.309-.913-.309-1.477 0-.568.103-1.064.309-1.488.208-.424.497-.753.867-.987.371-.234.803-.352 1.296-.352.492 0 .923.118 1.292.352.372.234.661.563.867.987.208.424.312.92.312 1.488 0 .564-.104 1.056-.312 1.477a2.35 2.35 0 01-.867.984c-.369.234-.8.352-1.292.352zm0-.753c.374 0 .682-.096.923-.288.241-.192.42-.444.536-.756.116-.313.174-.651.174-1.016 0-.364-.058-.704-.174-1.019a1.727 1.727 0 00-.536-.764c-.241-.194-.549-.291-.923-.291s-.682.097-.924.291c-.241.195-.42.449-.536.764a2.927 2.927 0 00-.174 1.019c0 .365.058.703.174 1.016.116.312.295.564.536.756.242.192.55.288.924.288zm3.751.639v-5.455h.809v.824h.057c.1-.27.279-.489.54-.657.26-.168.554-.252.881-.252a7.096 7.096 0 01.44.014v.853a2.535 2.535 0 00-.195-.032 1.882 1.882 0 00-.316-.025 1.49 1.49 0 00-.711.167 1.26 1.26 0 00-.49.454 1.23 1.23 0 00-.177.657V604h-.838zm5.325.128c-.345 0-.659-.065-.941-.195a1.629 1.629 0 01-.671-.572c-.166-.251-.248-.554-.248-.909 0-.313.061-.566.184-.76.123-.197.288-.351.494-.462.206-.111.433-.194.682-.248.251-.057.503-.102.756-.135.332-.043.6-.075.806-.096.209-.024.36-.063.455-.117.097-.055.145-.15.145-.285v-.028c0-.35-.096-.623-.287-.817-.19-.194-.477-.291-.863-.291-.4 0-.714.088-.941.263a1.552 1.552 0 00-.48.561l-.795-.284c.142-.332.331-.59.568-.774.239-.187.5-.318.781-.391.284-.076.564-.114.838-.114.176 0 .377.022.604.064.23.041.451.125.664.252.216.128.394.321.536.579.142.258.213.604.213 1.037V604h-.838v-.739h-.042a1.483 1.483 0 01-.284.38 1.65 1.65 0 01-.529.345 2.056 2.056 0 01-.807.142zm.128-.753c.332 0 .611-.065.838-.195a1.336 1.336 0 00.696-1.154v-.767c-.035.042-.113.081-.234.117a3.989 3.989 0 01-.412.088 17.434 17.434 0 01-.803.107 3.164 3.164 0 00-.61.139 1.053 1.053 0 00-.455.28c-.113.123-.17.291-.17.504 0 .292.107.512.323.661.218.147.493.22.827.22zm6.274-4.83v.711h-2.826v-.711h2.826zm-2.003-1.306h.838v5.199c0 .236.035.414.103.532a.538.538 0 00.27.235c.112.037.229.056.352.056.092 0 .168-.004.227-.014l.142-.028.171.753a1.857 1.857 0 01-.625.099c-.237 0-.469-.051-.696-.153a1.377 1.377 0 01-.561-.465c-.147-.208-.221-.471-.221-.788v-5.426zm3.264 6.761v-5.455h.838V604h-.838zm.426-6.364a.595.595 0 01-.423-.167.536.536 0 01-.174-.401c0-.156.058-.29.174-.401a.6.6 0 01.423-.167c.163 0 .303.056.419.167a.532.532 0 01.178.401c0 .156-.06.29-.178.401a.581.581 0 01-.419.167zm6.407.909L275.007 604h-.852l-2.017-5.455h.909l1.506 4.347h.056l1.506-4.347h.909zm3.198 5.569c-.526 0-.979-.116-1.36-.348a2.338 2.338 0 01-.877-.98c-.204-.422-.306-.912-.306-1.471 0-.558.102-1.051.306-1.477a2.41 2.41 0 01.859-1.001c.369-.242.8-.363 1.293-.363.284 0 .564.048.841.142a2.1 2.1 0 01.757.462c.227.211.408.49.543.838.135.348.202.777.202 1.286v.355h-4.204v-.725h3.352c0-.307-.061-.582-.184-.823a1.387 1.387 0 00-.519-.572 1.447 1.447 0 00-.788-.21c-.334 0-.623.083-.867.249a1.631 1.631 0 00-.557.639c-.13.263-.196.545-.196.845v.483c0 .412.071.761.213 1.048.145.284.345.5.601.65.255.146.552.22.891.22.22 0 .419-.031.597-.093.179-.063.335-.158.465-.284.13-.127.231-.286.302-.475l.809.227a1.794 1.794 0 01-.429.724c-.202.206-.45.367-.746.483a2.76 2.76 0 01-.998.171zm-64.341 4.613h1.051l2.471 6.037h.086l2.471-6.037h1.051V616h-.823v-5.526h-.072L219.844 616h-.796l-2.272-5.526h-.071V616h-.824v-7.273zm11.069 7.387c-.525 0-.978-.116-1.36-.348a2.345 2.345 0 01-.877-.98c-.203-.422-.305-.912-.305-1.471 0-.558.102-1.051.305-1.477.206-.428.493-.762.86-1.001.369-.242.8-.363 1.292-.363.284 0 .565.048.842.142.277.095.529.249.756.462.228.211.409.49.544.838.135.348.202.777.202 1.286v.355h-4.205v-.725h3.353c0-.307-.062-.582-.185-.823a1.392 1.392 0 00-.518-.572 1.453 1.453 0 00-.789-.21 1.5 1.5 0 00-.866.249 1.626 1.626 0 00-.558.639c-.13.263-.195.545-.195.845v.483c0 .412.071.761.213 1.048.144.284.344.5.6.65.256.146.553.22.891.22.221 0 .419-.031.597-.093.18-.063.335-.158.465-.284.13-.127.231-.286.302-.475l.81.227a1.796 1.796 0 01-.43.724c-.201.206-.45.367-.746.483a2.756 2.756 0 01-.998.171zm5.906-5.569v.711h-2.827v-.711h2.827zm-2.003-1.306h.838v5.199c0 .236.035.414.103.532a.538.538 0 00.27.235c.111.037.229.056.352.056.092 0 .168-.004.227-.014l.142-.028.17.753a1.835 1.835 0 01-.625.099c-.236 0-.468-.051-.696-.153a1.383 1.383 0 01-.561-.465c-.146-.208-.22-.471-.22-.788v-5.426zm4.869 6.889c-.346 0-.66-.065-.941-.195a1.616 1.616 0 01-.671-.572c-.166-.251-.249-.554-.249-.909 0-.313.062-.566.185-.76.123-.197.287-.351.493-.462.206-.111.433-.194.682-.248.251-.057.503-.102.756-.135.332-.043.601-.075.807-.096.208-.024.359-.063.454-.117.097-.055.146-.15.146-.285v-.028c0-.35-.096-.623-.288-.817-.189-.194-.477-.291-.863-.291-.4 0-.714.088-.941.263-.227.175-.387.362-.479.561l-.796-.284c.142-.332.332-.59.568-.774.24-.187.5-.318.782-.391a3.23 3.23 0 01.838-.114c.175 0 .376.022.603.064.23.041.451.125.664.252.216.128.395.321.537.579.142.258.213.604.213 1.037V616h-.838v-.739h-.043a1.46 1.46 0 01-.284.38 1.65 1.65 0 01-.529.345 2.05 2.05 0 01-.806.142zm.128-.753c.331 0 .61-.065.838-.195a1.34 1.34 0 00.696-1.154v-.767c-.036.042-.114.081-.235.117a3.932 3.932 0 01-.412.088 16.838 16.838 0 01-.802.107 3.157 3.157 0 00-.611.139 1.053 1.053 0 00-.455.28c-.113.123-.17.291-.17.504 0 .292.108.512.323.661.218.147.494.22.828.22zm4.739-6.648V616h-.838v-7.273h.838zM243.36 616l-1.662-5.455h.881l1.179 4.177h.057l1.165-4.177h.894l1.151 4.162h.057l1.179-4.162h.881L247.48 616h-.824l-1.193-4.19h-.086l-1.193 4.19h-.824zm8.495.128c-.346 0-.66-.065-.941-.195a1.625 1.625 0 01-.672-.572c-.165-.251-.248-.554-.248-.909 0-.313.061-.566.184-.76.124-.197.288-.351.494-.462.206-.111.433-.194.682-.248.251-.057.503-.102.756-.135.332-.043.6-.075.806-.096.209-.024.36-.063.455-.117.097-.055.146-.15.146-.285v-.028c0-.35-.096-.623-.288-.817-.19-.194-.477-.291-.863-.291-.4 0-.714.088-.941.263a1.562 1.562 0 00-.48.561l-.795-.284c.142-.332.331-.59.568-.774.239-.187.5-.318.781-.391.285-.076.564-.114.839-.114.175 0 .376.022.603.064.23.041.451.125.664.252.216.128.394.321.537.579.142.258.213.604.213 1.037V616h-.838v-.739h-.043a1.483 1.483 0 01-.284.38 1.65 1.65 0 01-.529.345 2.05 2.05 0 01-.806.142zm.127-.753c.332 0 .611-.065.838-.195a1.336 1.336 0 00.697-1.154v-.767c-.036.042-.114.081-.235.117a3.989 3.989 0 01-.412.088 17.434 17.434 0 01-.802.107 3.157 3.157 0 00-.611.139 1.053 1.053 0 00-.455.28c-.113.123-.17.291-.17.504 0 .292.108.512.323.661.218.147.494.22.827.22zm3.902.625v-5.455h.81v.824h.057c.099-.27.279-.489.539-.657.261-.168.554-.252.881-.252a7.106 7.106 0 01.441.014v.853a2.503 2.503 0 00-.196-.032 1.874 1.874 0 00-.316-.025c-.265 0-.502.056-.71.167a1.221 1.221 0 00-.668 1.111V616h-.838zm5.842.114c-.526 0-.979-.116-1.36-.348a2.338 2.338 0 01-.877-.98c-.204-.422-.306-.912-.306-1.471 0-.558.102-1.051.306-1.477a2.41 2.41 0 01.859-1.001c.369-.242.8-.363 1.293-.363.284 0 .564.048.841.142a2.1 2.1 0 01.757.462c.227.211.408.49.543.838.135.348.202.777.202 1.286v.355h-4.204v-.725h3.352c0-.307-.061-.582-.185-.823a1.378 1.378 0 00-.518-.572 1.45 1.45 0 00-.788-.21c-.334 0-.623.083-.867.249a1.631 1.631 0 00-.557.639 1.87 1.87 0 00-.196.845v.483c0 .412.071.761.213 1.048.145.284.345.5.601.65.255.146.552.22.891.22.22 0 .419-.031.596-.093.18-.063.335-.158.466-.284.13-.127.23-.286.301-.475l.81.227a1.785 1.785 0 01-.43.724 2.088 2.088 0 01-.745.483 2.76 2.76 0 01-.998.171zm8.547 2.045c-.404 0-.752-.052-1.044-.156a2.232 2.232 0 01-.728-.405 2.235 2.235 0 01-.458-.533l.668-.468c.076.099.172.213.288.341.116.13.274.242.475.337.204.097.47.145.799.145.441 0 .804-.106 1.091-.319.286-.213.429-.547.429-1.002v-1.108h-.071a4.43 4.43 0 01-.262.37 1.516 1.516 0 01-.483.387c-.209.111-.49.167-.846.167-.44 0-.835-.104-1.186-.313a2.184 2.184 0 01-.827-.909c-.201-.398-.302-.881-.302-1.449 0-.558.098-1.045.295-1.459a2.27 2.27 0 01.82-.966c.35-.23.755-.345 1.215-.345.355 0 .636.06.845.178.21.116.371.249.483.398.113.146.201.267.263.362h.085v-.867h.809v5.611c0 .469-.106.85-.319 1.144a1.827 1.827 0 01-.852.65 3.236 3.236 0 01-1.187.209zm-.028-2.997c.336 0 .62-.077.852-.231a1.43 1.43 0 00.529-.664c.121-.289.182-.634.182-1.037 0-.393-.06-.74-.178-1.04a1.556 1.556 0 00-.526-.707c-.232-.171-.518-.256-.859-.256-.355 0-.651.09-.888.27-.234.18-.411.422-.529.725a2.799 2.799 0 00-.174 1.008c0 .379.059.714.178 1.005.12.289.298.516.532.682.237.163.531.245.881.245zm5.526.966c-.346 0-.66-.065-.941-.195a1.625 1.625 0 01-.672-.572c-.165-.251-.248-.554-.248-.909 0-.313.061-.566.184-.76.124-.197.288-.351.494-.462.206-.111.433-.194.682-.248.251-.057.503-.102.756-.135.332-.043.6-.075.806-.096.209-.024.36-.063.455-.117.097-.055.146-.15.146-.285v-.028c0-.35-.096-.623-.288-.817-.19-.194-.477-.291-.863-.291-.4 0-.714.088-.941.263-.227.175-.387.362-.479.561l-.796-.284c.142-.332.331-.59.568-.774.239-.187.5-.318.781-.391.285-.076.564-.114.839-.114.175 0 .376.022.603.064.23.041.451.125.664.252.216.128.394.321.537.579.142.258.213.604.213 1.037V616h-.838v-.739h-.043a1.483 1.483 0 01-.284.38 1.65 1.65 0 01-.529.345 2.05 2.05 0 01-.806.142zm.127-.753c.332 0 .611-.065.839-.195a1.34 1.34 0 00.696-1.154v-.767c-.036.042-.114.081-.235.117a3.989 3.989 0 01-.412.088 17.434 17.434 0 01-.802.107 3.157 3.157 0 00-.611.139 1.053 1.053 0 00-.455.28c-.113.123-.17.291-.17.504 0 .292.108.512.323.661.218.147.494.22.827.22zm4.74-6.648V616h-.838v-7.273h.838zm2.373 0V616h-.838v-7.273h.838zm3.822 7.387c-.525 0-.979-.116-1.36-.348a2.338 2.338 0 01-.877-.98c-.204-.422-.305-.912-.305-1.471 0-.558.101-1.051.305-1.477a2.41 2.41 0 01.859-1.001c.37-.242.801-.363 1.293-.363.284 0 .565.048.842.142.277.095.529.249.756.462.227.211.408.49.543.838.135.348.203.777.203 1.286v.355h-4.205v-.725h3.353c0-.307-.062-.582-.185-.823a1.387 1.387 0 00-.519-.572 1.447 1.447 0 00-.788-.21c-.334 0-.623.083-.866.249a1.626 1.626 0 00-.558.639c-.13.263-.195.545-.195.845v.483c0 .412.071.761.213 1.048.144.284.344.5.6.65.256.146.553.22.891.22.22 0 .419-.031.597-.093.18-.063.335-.158.465-.284.13-.127.231-.286.302-.475l.81.227a1.808 1.808 0 01-.43.724c-.201.206-.45.367-.746.483a2.756 2.756 0 01-.998.171zm3.534-.114v-5.455h.809v.824h.057c.1-.27.279-.489.54-.657.26-.168.554-.252.881-.252a7.096 7.096 0 01.44.014v.853a2.446 2.446 0 00-.195-.032 1.882 1.882 0 00-.316-.025 1.49 1.49 0 00-.711.167 1.26 1.26 0 00-.49.454 1.23 1.23 0 00-.177.657V616h-.838zm4.426 2.045a1.814 1.814 0 01-.611-.099l.213-.739c.204.052.384.071.54.057a.65.65 0 00.416-.209c.123-.123.235-.323.337-.6l.156-.427-2.017-5.483h.909l1.506 4.347h.057l1.506-4.347h.909l-2.316 6.25a2.361 2.361 0 01-.387.7 1.45 1.45 0 01-.536.416 1.67 1.67 0 01-.682.134zM143.134 507.668c-.012-.305-.126-.538-.344-.699-.216-.161-.5-.242-.852-.242-.258 0-.488.042-.691.125a1.252 1.252 0 00-.488.344.903.903 0 00-.216.497.67.67 0 00.065.401.82.82 0 00.256.275c.109.072.226.132.349.179.125.046.24.083.344.111l.574.159c.144.04.305.095.483.165s.345.166.502.287c.16.119.284.273.373.46.091.188.12.418.088.69a1.728 1.728 0 01-.347.853 1.998 1.998 0 01-.784.605c-.328.149-.715.224-1.162.224-.417 0-.77-.067-1.06-.201a1.458 1.458 0 01-.653-.563 1.446 1.446 0 01-.196-.838h.727a.81.81 0 00.159.545c.114.142.266.249.458.319.193.068.405.102.636.102.269 0 .515-.044.739-.131.223-.089.406-.212.548-.369a.982.982 0 00.253-.557c.023-.193-.012-.35-.105-.471a.995.995 0 00-.392-.296 4.13 4.13 0 00-.551-.199l-.694-.204c-.437-.131-.774-.318-1.011-.56-.237-.242-.333-.56-.29-.952.04-.325.162-.61.367-.852.206-.244.467-.434.781-.568.316-.137.66-.205 1.031-.205.375 0 .7.068.975.202.274.134.483.32.625.557.144.235.205.504.184.807h-.681zm3.093 4.423c-.411 0-.753-.097-1.026-.29a1.594 1.594 0 01-.588-.798c-.119-.339-.153-.726-.102-1.162.051-.443.178-.834.38-1.173a2.27 2.27 0 01.779-.799 2.018 2.018 0 011.068-.289c.307 0 .577.056.81.17.233.114.415.273.548.477.134.205.204.443.21.716h-.67a.901.901 0 00-.282-.528c-.157-.156-.382-.233-.676-.233-.261 0-.498.068-.71.204a1.581 1.581 0 00-.526.571 2.302 2.302 0 00-.261.861 2.12 2.12 0 00.057.881c.079.25.209.444.389.582.182.139.405.208.671.208.174 0 .335-.031.483-.091a1.159 1.159 0 00.65-.671h.671a1.81 1.81 0 01-.367.696 1.866 1.866 0 01-.642.489 2.029 2.029 0 01-.866.179zm5.659-1.875l.304-2.58h.67l-.511 4.364h-.671l.088-.739h-.045c-.125.222-.306.41-.543.566-.235.153-.517.23-.846.23-.273 0-.509-.06-.708-.179a1.054 1.054 0 01-.437-.546c-.093-.244-.118-.552-.074-.923l.327-2.773h.67l-.318 2.728c-.036.318.025.572.182.761.157.189.375.284.653.284a1.32 1.32 0 001.003-.52c.138-.176.223-.4.256-.673zm3.037-4.034l-.676 5.818h-.67l.676-5.818h.67zm.362 7.454l.704-6h.648l-.079.694h.079a5.57 5.57 0 01.236-.29c.102-.12.242-.226.42-.318.178-.095.409-.142.694-.142.367 0 .679.091.937.275.258.184.445.444.563.781.119.337.152.735.099 1.194a3.057 3.057 0 01-.375 1.201 2.212 2.212 0 01-.744.784c-.3.184-.631.276-.995.276-.28 0-.5-.046-.659-.139a1.043 1.043 0 01-.349-.321 4.698 4.698 0 01-.176-.301h-.057l-.27 2.306h-.676zm1.108-3.818c-.036.33-.021.62.045.872.066.25.185.446.355.588.171.141.39.211.659.211.281 0 .523-.074.728-.222.204-.15.369-.35.494-.602.125-.254.205-.536.241-.847a2.2 2.2 0 00-.045-.829 1.11 1.11 0 00-.352-.588c-.171-.146-.398-.219-.682-.219-.273 0-.51.069-.713.207a1.464 1.464 0 00-.489.574 2.542 2.542 0 00-.241.855zm6.366-2.182l-.065.569h-2.261l.065-.569h2.261zm-1.483-1.045h.671l-.486 4.159c-.021.189-.01.331.034.426a.36.36 0 00.196.188c.087.03.18.045.278.045.074 0 .135-.004.182-.011l.114-.023.071.602a1.618 1.618 0 01-.514.08 1.26 1.26 0 01-.543-.122.924.924 0 01-.403-.373c-.097-.166-.131-.376-.103-.63l.503-4.341zm4.938 3.625l.304-2.58h.67l-.511 4.364h-.671l.088-.739h-.045c-.125.222-.306.41-.543.566-.234.153-.517.23-.846.23-.273 0-.509-.06-.708-.179a1.06 1.06 0 01-.437-.546c-.093-.244-.118-.552-.074-.923l.327-2.773h.67l-.318 2.728c-.036.318.025.572.182.761.157.189.375.284.653.284a1.32 1.32 0 001.003-.52c.138-.176.224-.4.256-.673zm1.691 1.784l.511-4.364h.648l-.08.659h.046c.102-.215.266-.391.491-.525.226-.135.469-.202.73-.202a6.766 6.766 0 01.353.012l-.08.681a2.387 2.387 0 00-.409-.045 1.27 1.27 0 00-.582.133 1.184 1.184 0 00-.432.364 1.096 1.096 0 00-.208.526l-.318 2.761h-.67zm4.675.091c-.42 0-.772-.093-1.054-.279a1.569 1.569 0 01-.611-.784c-.123-.337-.159-.729-.107-1.176.051-.447.178-.841.38-1.182.205-.342.465-.609.781-.801a2.018 2.018 0 011.066-.289c.227 0 .448.037.662.113.214.076.401.199.562.369.163.169.281.393.355.671.076.278.09.621.043 1.028l-.031.284h-3.364l.063-.579h2.681a1.326 1.326 0 00-.068-.659.943.943 0 00-.361-.458 1.071 1.071 0 00-.613-.167c-.256 0-.49.067-.702.202-.21.134-.383.304-.517.511-.133.206-.211.42-.236.642l-.054.466c-.04.352-.017.637.068.855a.903.903 0 00.421.48c.193.1.429.151.707.151.178 0 .342-.025.492-.074.149-.051.281-.127.395-.227.115-.103.21-.23.284-.381l.622.182a1.667 1.667 0 01-.409.579c-.18.165-.394.294-.642.387a2.35 2.35 0 01-.813.136zM143.889 518a1.946 1.946 0 00-.179-.514 1.26 1.26 0 00-.727-.637 1.689 1.689 0 00-.563-.088c-.344 0-.672.089-.982.267a2.248 2.248 0 00-.785.787c-.212.347-.347.772-.406 1.276-.059.504-.027.929.094 1.275.121.347.312.609.574.787.261.178.572.267.932.267.333 0 .638-.071.914-.213.279-.144.508-.346.688-.608a2 2 0 00.329-.929l.208.046h-1.75l.079-.625h2.216l-.079.625a2.689 2.689 0 01-.446 1.253 2.498 2.498 0 01-.938.821c-.379.193-.799.29-1.261.29-.515 0-.954-.122-1.316-.364a2.069 2.069 0 01-.786-1.034c-.165-.447-.212-.977-.14-1.591.051-.46.16-.874.327-1.242.167-.369.378-.683.634-.943a2.658 2.658 0 011.926-.804c.307 0 .588.047.843.139.256.091.479.221.668.39.191.166.343.366.455.599.111.231.178.488.198.77h-.727zm2.693 4.102c-.277 0-.522-.052-.736-.156a1.093 1.093 0 01-.486-.457c-.11-.201-.149-.444-.116-.728.03-.25.104-.452.221-.608.118-.157.263-.28.438-.369.174-.091.363-.158.568-.202a6.72 6.72 0 01.616-.105c.267-.034.484-.06.651-.079a1.12 1.12 0 00.378-.094c.083-.044.131-.118.145-.224v-.023c.032-.279-.017-.495-.148-.651-.129-.157-.347-.236-.653-.236-.321 0-.583.071-.787.211a1.47 1.47 0 00-.446.449l-.606-.228c.144-.265.321-.471.529-.619a1.94 1.94 0 01.662-.313c.233-.06.459-.09.679-.09.14 0 .299.017.477.051.178.032.347.099.506.201a1 1 0 01.375.463c.089.207.113.483.074.83l-.336 2.875h-.67l.074-.591h-.034a1.387 1.387 0 01-.265.304c-.117.108-.268.2-.454.276a1.734 1.734 0 01-.656.113zm.164-.602c.266 0 .496-.052.691-.156.195-.104.349-.239.463-.404.113-.164.181-.338.202-.52l.071-.613a.475.475 0 01-.199.094 3.82 3.82 0 01-.336.071 15.722 15.722 0 01-.647.085 2.698 2.698 0 00-.503.111.975.975 0 00-.392.224.64.64 0 00-.182.403c-.028.233.036.41.193.529.159.117.372.176.639.176zm4.412-5.318l-.676 5.818h-.671l.676-5.818h.671zm1.898 0L152.38 522h-.67l.676-5.818h.67zm2.376 5.909c-.421 0-.772-.093-1.054-.279a1.569 1.569 0 01-.611-.784c-.123-.337-.159-.729-.108-1.176.051-.447.178-.841.381-1.182a2.29 2.29 0 01.781-.801 2.012 2.012 0 011.065-.289c.228 0 .448.037.662.113.214.076.402.199.563.369.163.169.281.393.355.671.076.278.09.621.043 1.028l-.032.284h-3.363l.062-.579h2.682c.03-.246.008-.466-.068-.659a.943.943 0 00-.361-.458 1.074 1.074 0 00-.614-.167 1.28 1.28 0 00-.701.202 1.68 1.68 0 00-.517.511c-.133.206-.212.42-.236.642l-.054.466c-.04.352-.017.637.068.855a.897.897 0 00.42.48c.194.1.429.151.708.151.178 0 .342-.025.491-.074a1.147 1.147 0 00.679-.608l.622.182a1.654 1.654 0 01-.409.579c-.18.165-.394.294-.642.387-.246.09-.517.136-.812.136zm2.84-.091l.511-4.364h.648l-.079.659h.045c.102-.215.266-.391.491-.525.226-.135.469-.202.731-.202a6.761 6.761 0 01.352.012l-.08.681a2.263 2.263 0 00-.409-.045 1.27 1.27 0 00-.582.133 1.2 1.2 0 00-.432.364 1.085 1.085 0 00-.207.526l-.319 2.761h-.67zm3.364 1.636a1.427 1.427 0 01-.483-.079l.245-.591c.157.042.297.055.42.04a.584.584 0 00.344-.174c.108-.102.216-.264.324-.485l.17-.341-1.096-4.37h.707l.798 3.486h.046l1.611-3.486h.747l-2.429 4.998a2.27 2.27 0 01-.384.565 1.33 1.33 0 01-.466.329c-.17.072-.355.108-.554.108zM129.688 436h-.739l2.812-5.818h.728l1.46 5.818h-.739l-1.165-4.898H132L129.688 436zm.536-2.273h2.978l-.071.625h-2.978l.071-.625zm4.54 2.273l.512-4.364h.647l-.079.659h.045a1.21 1.21 0 01.492-.525c.225-.135.468-.202.73-.202a6.761 6.761 0 01.352.012l-.079.681a2.336 2.336 0 00-.41-.045 1.27 1.27 0 00-.582.133 1.2 1.2 0 00-.432.364 1.095 1.095 0 00-.207.526l-.318 2.761h-.671zm5.667-4.364l-.065.569h-2.262l.066-.569h2.261zm-1.483-1.045h.671l-.486 4.159c-.021.189-.01.331.034.426a.36.36 0 00.196.188c.087.03.18.045.278.045.074 0 .135-.004.182-.011l.114-.023.071.602a1.618 1.618 0 01-.514.08 1.26 1.26 0 01-.543-.122.924.924 0 01-.403-.373c-.097-.166-.131-.376-.103-.63l.503-4.341zM147.71 432c-.04-.191-.1-.363-.179-.514a1.278 1.278 0 00-.728-.637 1.687 1.687 0 00-.562-.088c-.345 0-.673.089-.983.267-.309.178-.57.441-.784.787-.212.347-.348.772-.407 1.276-.058.504-.027.929.094 1.275.121.347.313.609.574.787.261.178.572.267.932.267.333 0 .638-.071.915-.213.278-.144.507-.346.687-.608.18-.263.29-.572.33-.929l.207.046h-1.75l.08-.625h2.216l-.08.625a2.689 2.689 0 01-.446 1.253 2.49 2.49 0 01-.938.821c-.378.193-.799.29-1.261.29-.515 0-.953-.122-1.315-.364a2.07 2.07 0 01-.787-1.034c-.165-.447-.211-.977-.139-1.591.051-.46.16-.874.326-1.242.167-.369.378-.683.634-.943.257-.259.55-.458.878-.596a2.653 2.653 0 011.048-.208c.307 0 .588.047.844.139.255.091.478.221.667.39.192.166.343.366.455.599.112.231.178.488.199.77h-.727zm2.692 4.102c-.277 0-.522-.052-.736-.156a1.093 1.093 0 01-.486-.457c-.109-.201-.148-.444-.116-.728.03-.25.104-.452.222-.608.117-.157.263-.28.437-.369a2.24 2.24 0 01.568-.202 6.74 6.74 0 01.617-.105c.267-.034.484-.06.65-.079.169-.019.295-.05.378-.094a.274.274 0 00.145-.224v-.023c.032-.279-.017-.495-.148-.651-.129-.157-.346-.236-.653-.236-.32 0-.583.071-.787.211a1.48 1.48 0 00-.446.449l-.605-.228a1.79 1.79 0 01.528-.619c.209-.15.429-.254.662-.313.233-.06.459-.09.679-.09.14 0 .299.017.477.051.178.032.347.099.506.201a1 1 0 01.375.463c.089.207.114.483.074.83l-.335 2.875h-.671l.074-.591h-.034a1.514 1.514 0 01-.719.58 1.727 1.727 0 01-.656.113zm.165-.602c.265 0 .495-.052.69-.156.195-.104.35-.239.463-.404a1.13 1.13 0 00.202-.52l.071-.613a.468.468 0 01-.199.094c-.098.026-.21.05-.335.071a15.058 15.058 0 01-.648.085 2.698 2.698 0 00-.503.111.975.975 0 00-.392.224.64.64 0 00-.182.403c-.028.233.036.41.194.529.159.117.372.176.639.176zm4.411-5.318l-.676 5.818h-.671l.677-5.818h.67zm1.898 0L156.2 436h-.67l.676-5.818h.67zm2.376 5.909c-.42 0-.772-.093-1.054-.279a1.569 1.569 0 01-.611-.784c-.123-.337-.159-.729-.108-1.176.052-.447.178-.841.381-1.182.205-.342.465-.609.781-.801a2.018 2.018 0 011.066-.289c.227 0 .448.037.662.113.214.076.401.199.562.369.163.169.281.393.355.671.076.278.09.621.043 1.028l-.031.284h-3.364l.062-.579h2.682a1.326 1.326 0 00-.068-.659.943.943 0 00-.361-.458 1.071 1.071 0 00-.613-.167c-.256 0-.49.067-.702.202-.21.134-.383.304-.517.511-.133.206-.211.42-.236.642l-.054.466c-.04.352-.017.637.068.855a.899.899 0 00.421.48c.193.1.429.151.707.151.178 0 .342-.025.492-.074.149-.051.281-.127.395-.227.115-.103.21-.23.284-.381l.622.182a1.667 1.667 0 01-.409.579c-.18.165-.394.294-.642.387-.247.09-.517.136-.813.136zm2.84-.091l.512-4.364h.647l-.079.659h.045c.103-.215.266-.391.492-.525.225-.135.469-.202.73-.202a6.828 6.828 0 01.352.012l-.079.681a2.336 2.336 0 00-.409-.045c-.213 0-.407.044-.583.133a1.2 1.2 0 00-.432.364 1.105 1.105 0 00-.207.526l-.318 2.761h-.671zm3.365 1.636a1.42 1.42 0 01-.483-.079l.244-.591c.157.042.297.055.42.04a.581.581 0 00.344-.174c.108-.102.216-.264.324-.485l.171-.341-1.097-4.37h.707l.799 3.486h.045l1.611-3.486h.747l-2.429 4.998a2.269 2.269 0 01-.383.565 1.349 1.349 0 01-1.02.437z"
          fill="#000"
        />
        <Path fill="#6D4F48" d="M301 329H329V348H301z" />
        <Path fill="#6D4F48" d="M322 347H328V372H322z" />
        <Path fill="#6D4F48" d="M323 406H329V453H323z" />
        <Path fill="#B5ABA7" d="M307 598H316V632H307z" />
        <Path stroke="#6D4F48" d="M321.5 560L321.5 586" />
        <Path stroke="#6D4F48" d="M325.5 560L325.5 586" />
        <Path
          d="M316.831 584.351l-5.818-.037.023-3.512.625.004-.018 2.807 1.966.013.016-2.625.625.004-.016 2.625 1.977.012.018-2.852.625.004-.023 3.557zm-4.33-5.218l1.791-1.034-1.778-1.057.005-.773 2.173 1.423 2.191-1.395-.005.773-1.7 1.034 1.687 1.057-.005.772-2.173-1.4-2.191 1.373.005-.773zm4.388-3.792l-4.363-.028.004-.671 4.363.028-.004.671zm-5.089-.374a.474.474 0 01-.135.337.43.43 0 01-.322.137.426.426 0 01-.32-.141.478.478 0 01-.132-.339.466.466 0 01.136-.334.425.425 0 01.322-.14.426.426 0 01.32.144.462.462 0 01.131.336zm.75-3.451l.568.004-.014 2.261-.569-.003.015-2.262zm-1.056 1.596l.004-.67 4.159.026c.19.001.332-.025.427-.079a.432.432 0 00.189-.215.85.85 0 00.047-.281 1.157 1.157 0 00-.01-.182l-.022-.114.603-.132a1.415 1.415 0 01-.049 1.056c-.083.18-.208.328-.375.447-.168.116-.378.173-.632.172l-4.341-.028zm2.235-7.347l.625.004-.017 2.546-.625-.004.017-2.546zm3.227-.874l-.511-.003-2.09-1.934a13.365 13.365 0 00-.639-.561 2.343 2.343 0 00-.515-.327 1.245 1.245 0 00-.51-.111.938.938 0 00-.882.54 1.29 1.29 0 00-.125.567c-.002.223.043.419.135.586.09.165.217.294.381.386.164.09.357.136.579.137l-.005.671a1.698 1.698 0 01-.896-.242 1.64 1.64 0 01-.598-.646 1.938 1.938 0 01-.21-.919c.002-.341.076-.642.222-.905a1.62 1.62 0 01.586-.615 1.53 1.53 0 01.817-.219c.214.001.423.041.627.12.202.077.428.211.676.402.247.189.549.452.904.787l1.39 1.316h.045l.018-2.704.625.004-.024 3.67z"
          fill="#000"
        />
        <Path stroke="#6D4F48" d="M309.5 576L309.5 598" />
        <Path stroke="#6D4F48" d="M309 597.5L316 597.5" />
        <Path stroke="#6D4F48" d="M316.5 597L316.5 632" />
        <Path fill="#6D4F48" d="M316 609H320V633H316z" />
        <Path fill="#6D4F48" d="M319 625H329V632H319z" />
        <Path stroke="#6D4F48" strokeWidth={3} d="M19 449.5L53 449.5" />
        <Path stroke="#74544D" strokeOpacity={0.42} d="M20.5 450L20.5 477" />
        <Path stroke="#74544D" strokeOpacity={0.42} d="M24.5 451L24.5 478" />
        <Path stroke="#74544D" strokeOpacity={0.42} d="M29.5 451L29.5 478" />
        <Path stroke="#74544D" strokeOpacity={0.42} d="M33.5 451L33.5 478" />
        <Path
          d="M48.163 471.39l-5.818.046-.028-3.511.625-.005.023 2.807 1.965-.016-.02-2.625.624-.005.021 2.625 1.977-.016-.022-2.852.625-.005.028 3.557zm-4.405-5.155l1.776-1.06-1.792-1.031-.007-.773 2.193 1.392 2.17-1.427.007.773-1.685 1.059 1.702 1.032.006.772-2.193-1.368-2.17 1.403-.007-.772zm4.333-3.855l-4.363.034-.006-.67 4.364-.035.005.671zm-5.093-.301a.476.476 0 01-.131.339.427.427 0 01-.32.142.429.429 0 01-.322-.136.478.478 0 01-.136-.337.469.469 0 01.13-.337.426.426 0 01.32-.144.425.425 0 01.322.139c.09.092.136.204.137.334zm.7-3.461l.568-.004.018 2.261-.569.005-.018-2.262zm-1.033 1.611l-.006-.67 4.16-.034c.189-.001.33-.03.425-.085a.427.427 0 00.185-.218.866.866 0 00.044-.281 1.182 1.182 0 00-.037-.296l.602-.141c.017.046.034.109.052.19.02.081.03.185.031.31.002.189-.038.375-.118.557a1.1 1.1 0 01-.368.452c-.166.119-.376.179-.63.181l-4.34.035zm2.562-4.975l.625-.005.02 2.545-.624.005-.02-2.545zm-3.037-3.19l5.818-.046.006.704-5.08.041v.034l.955 1.413-.716.005-.977-1.446-.006-.705z"
          fill="#000"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_3">
          <Path fill="#fff" d="M0 0H360V800H0z" />
        </ClipPath>
      </Defs>
    </Svg>
    </View>
    </ReactNativeZoomableView>
    </View>
    <View >
      <TouchableOpacity onPress={update} style={styles.submit}>
        <Text style={styles.buttontext}>Compute</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={reload} style={styles.reset}>
          <Text style={styles.buttontext}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={ handlesignout}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Home</Text>

      </TouchableOpacity>
      
      
      </View>
      </ImageBackground>
  </View>
  
  )
}

export default SvgComponent;

const styles = StyleSheet.create({
  button:{
    // login,map buttons
    backgroundColor: "#0782F9",
    width:'40%',
    padding:10,
    borderRadius:10,
    borderColor:'grey',
    borderWidth:2,
    alignItems:'center',
    marginTop:10,
    marginLeft:"30%",
    
  },
  submit: {
    marginTop: 0,
    backgroundColor: "#6D4F48",
    width: "30%",
    padding: 8,
    marginLeft:10,
    borderRadius:5,
    alignItems:'center',
  },
  reset: {
    marginTop: 2,
    backgroundColor: "#6D4F48",
    width: "30%",
    padding: 8,
    marginTop:-40,
    marginLeft:220,
    borderRadius:5,
    alignItems:'center',
    
    
  },
  button: {
    marginTop:'1%',
    backgroundColor: "#6D4F48",
    width: "30%",
    padding: 8,
    marginLeft:'32%',
   
    borderRadius:5,
    alignItems:'center',
    
    
  },
  buttontext: {
    color: "white",
    // fontWeight: "700",
    fontSize: 16,
  },
  container:{
   margin:0,
   padding:0,
   backgroundColor:'black',
   height:'100%',
   
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  map:{
    height:500,
    position :'absolute',
    //marginTop:100,
    marginTop:70,
  
   
    width:340,
    justifyContent: 'center',
  },
  buttonText:{
    color:'white',
    fontWeight:'700',
    fontSize:14,
},

});
