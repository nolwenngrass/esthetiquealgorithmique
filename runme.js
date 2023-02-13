function setup() {
    // put setup code here
    print('READ ME');
    createCanvas(300,300,WEBGL);
  }

  let noiseScale=0.02;
  
  function draw() {
    // put drawing code here
    background(0);
    for (let x=-300; x < width; x++) {
      let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
      stroke('red');
      line(x, mouseY+noiseVal*80-150, x, height);
    // describe(`horizontal wave pattern effected by mouse x-position & updating noise values and a rotating white torus.`);
    }
    rotateX(frameCount * 0.1);
    rotateY(frameCount * 0.1);
    rotateZ(frameCount * 0.1);
    torus(50, 20);
    noFill();
  }

  /* LINKS */
  /*
  Rendu 3D :
  WEBGL
  ex : createCanvas(x,y,WEBGL)

  Bruit :
  noise(x, [y], [z])
  https://p5js.org/reference/#/p5/noise

  Contour :
  stroke(value)
  https://p5js.org/reference/#/p5/stroke

  Ligne :
  line(x1, y1, x2, y2)
  https://p5js.org/reference/#/p5/line

  Tore :
  torus([radius], [tubeRadius], [detailX], [detailY])
  https://p5js.org/reference/#/p5/torus

  Rotations :
  https://p5js.org/reference/#/p5/rotationX
  https://p5js.org/reference/#/p5/rotationY
  https://p5js.org/reference/#/p5/rotationZ
  
  noFill() permet de retirer le background d'un élément */
  

  /* READ ME */
  /* What have you produced?
  I produced a torus rotating while when the mouse is moving on the screen, a wave of noise appears.
  – How would you describe your first independent coding experience (in relation to thinking, reading, copying, modifying, writing code, and so on)?
  The p5.js website offers a lot of information about what we can use and how, with examples and descriptions. So I first find this easy to use and very powerful (in the sense that we can do many things with simple lines of code).
  – How is the coding process different from, or similar to, reading and writing text?
  When we are coding, we have to imagine how what we write will look like and the eventual bugs. This works if we have a specific image in mind that we want to produce with code. We have to think the image like a code. When we read or write text, we also use our imagination to imagine elements of a story for example. The fact that we have to use our imagination is similar, but the way we do it and its result are different.
  – What does code and programming mean to you, and how does the assigned reading help you to further reflect on these terms?
  To me, code and programming are a mean to create various arts (games, work of art, painting, drawing, etc.). I already coded some fractals in Python during my "CPGE" years and that is when I realised that we could make a work of art with code. But to me, it's also a mean to create some games, websites and AI. We can create an entire visual with text, it's amazing.*/