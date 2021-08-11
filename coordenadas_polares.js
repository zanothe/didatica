<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    
    </head>
    <body>
    <p>Pode ser confuso pensar em termos de coordenadas polares, qdo nos acostumamos com a funcao em termos x.
Criei a animacao, com propositos didaticos, para facilitar</p>

<div class="well"><h6>Mecanica</h6>
<p>angulo_teta = <span id="teta1"></span></p>
<p>radius = a(1 + cos( <span id="teta2"></span> )</p>

</div>
<div style="margin:auto;padding-top:15px;">Cardioide
        <svg onload="polar(this, 'card', true)" width="300" height="300">
        </svg>
            
        </div>
        
  <div style="margin:auto;padding-top:15px;"> Spiraal    
        <svg onload="polar(this, 'spiral', false)" width="300" height="300">
         </svg>
             
         </div>
   
   <div style="margin:auto;padding-top:15px;">Rosa de quatro folhas
        <svg onload="polar(this, 'rose', false)" width="300" height="300">
         </svg>
             
         </div>
    
    
    <div style="margin:auto;padding-top:15px;">Ameba
        <svg onload="polar(this, 'new', false)" width="300" height="300">
        
</svg></div>

    <script>
        function polar(el, graph, it) {
    var svg = el;
     var line1 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line1.setAttribute('x1', 0);                           
            line1.setAttribute('x2', 300);
            line1.setAttribute('y1', 150);
            line1.setAttribute('y2', 150);
            line1.setAttribute('stroke', '#999999');
            line1.setAttribute('stroke-width', 1.5);
            svg.appendChild(line1);                
 var line2 = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line2.setAttribute('x1', 150);                           
            line2.setAttribute('x2', 150);
            line2.setAttribute('y1', 0);
            line2.setAttribute('y2', 300);
            line2.setAttribute('stroke', '#999999');
            line2.setAttribute('stroke-width', 1.5);
            svg.appendChild(line2);            
 var rot = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            rot.setAttribute('x1', 150);                           
            rot.setAttribute('x2', 300);
            rot.setAttribute('y1', 150);
            rot.setAttribute('y2', 150);
            rot.setAttribute('stroke', '#000000');
            rot.setAttribute('stroke-width', 2);
            svg.appendChild(rot);          
        
    var i = 0;
    var flag=false;
    var j;
    var main=0;
    function gear() {  
     
        i++;        
        var radians = Math.abs(i/150);
        var teta = radians*57.2958;
        rot.setAttribute('transform', 'rotate('+ (-(radians*57.2958)) +' 150, 150)');
        
        switch(graph) {
                case "card" :
                        var len = 50*(1 + Math.cos(radians));                        
                        break;
                case "spiral" :
                        var len = 0.3*teta;
                        break;
                case "rose" :
                        var len = 100*(2*(Math.cos(radians)*Math.sin(radians)));
                        break;
                case "new" :
                        var len = 100*(2*(Math.cos(radians)*Math.sin(radians)));
                        len = Math.sqrt(Math.sqrt((100**4 + 50**4) - (2*(100**2)*(len**2))*(Math.cos(radians)**2-Math.sin(radians)**2)));
                        break;
                default :
                        var len = 100*(2*(Math.cos(radians)*Math.sin(radians)));
        }
               
                
           if(it) {
                   document.getElementById('teta1').innerHTML = teta;
                   document.getElementById('teta2').innerHTML = teta;
           }
                            
        var x = (len*Math.cos(radians));
        var y = (len*Math.sin(radians));     
        
       x < 0 ?
          x = 150+x : 
              x = 150+x;
       y < 0 ?                                   
            y = (150+Math.abs(y)) :
                y = (Math.abs(150-y));        
                
        var rand = Math.floor((Math.random()*(210-40)+40));
        
        var txt = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            txt.setAttribute('class', 'point');                           
            txt.setAttribute('xml:space', 'preserve');
            txt.setAttribute('font-size', '15');
            txt.setAttribute('fill', 'rgb('+rand+', '+rand+', 250');
            txt.setAttribute('font-family', 'sans-serif');
            txt.setAttribute('y', y);
            txt.setAttribute('x', x);
            var textNod = document.createTextNode('.');
            txt.appendChild(textNod);
            svg.appendChild(txt);          
        if(!(teta>=360)) {
            setTimeout(gear, 0.01);
        }
        else {i=0;console.log('ok '+svg.childNodes.lenght);
            for(j=0;j<svg.childNodes.lenght;j++) { 
                svg.childNodes[j].removeElement();   console.log(svg.childNodes[j].removeElement()); 
            }           
            setTimeout(polar, 1000, svg, graph, it)   
        }             
    }
    gear();
}
polar();
</script>
        
    </body>
</html>
