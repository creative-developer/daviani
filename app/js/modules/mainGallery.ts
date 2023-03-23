import Konva from 'konva';
import { IFrame } from 'konva/lib/types';

const width = window.innerWidth;
const height = window.innerHeight;

Konva.angleDeg = false;
let angularVelocity = 6;
let angularVelocities: any[] = [];
let lastRotation = 0;
let controlled = false;
const numWedges = 25;
const angularFriction = 0.2;
let target: any;
let activeWedge: any;
let stage: any;
let layer: any;
let wheel: any;
let pointer: any;
let finished: boolean = false;

function getAverageAngularVelocity() {
  let total = 0;
  const len = angularVelocities.length;

  if (len === 0) {
    return 0;
  }

  for (let n = 0; n < len; n++) {
    total += angularVelocities[n];
  }

  return total / len;
}

function purifyColor(color: [number, number, number]) {
  const randIndex = Math.round(Math.random() * 3);
  color[randIndex] = 0;
  return color;
}

function getRandomColor() {
  const r = 100 + Math.round(Math.random() * 55);
  const g = 100 + Math.round(Math.random() * 55);
  const b = 100 + Math.round(Math.random() * 55);
  return purifyColor([r, g, b]);
}

function getRandomReward() {
  const mainDigit = Math.round(Math.random() * 9);
  return mainDigit + '\n0\n0';
}

function addWedge(n: number) {
  const s = getRandomColor();
  const reward = getRandomReward();
  let r = s[0];
  let g = s[1];
  let b = s[2];
  const angle = (2 * Math.PI) / numWedges;

  const endColor = 'rgb(' + r + ',' + g + ',' + b + ')';
  r += 100;
  g += 100;
  b += 100;

  const startColor = 'rgb(' + r + ',' + g + ',' + b + ')';

  const wedge = new Konva.Group({
    rotation: (2 * n * Math.PI) / numWedges,
  });

  const wedgeBackground = new Konva.Wedge({
    radius: 400,
    angle: angle,
    fillRadialGradientStartPoint: { x: 0, y: 0 },
    fillRadialGradientStartRadius: 0,
    fillRadialGradientEndPoint: { x: 0, y: 0 },
    fillRadialGradientEndRadius: 400,
    fillRadialGradientColorStops: [0, startColor, 1, endColor],
    fill: '#64e9f8',
    fillPriority: 'radial-gradient',
    stroke: '#ccc',
    strokeWidth: 2,
  });

  wedge.add(wedgeBackground);

  const text = new Konva.Text({
    text: reward,
    fontFamily: 'Calibri',
    fontSize: 50,
    fill: 'white',
    align: 'center',
    stroke: 'yellow',
    strokeWidth: 1,
    rotation: (Math.PI + angle) / 2,
    x: 380,
    y: 30,
    listening: false,
  });

  wedge.add(text);
  text.cache();

  // TODO: Check
  // wedge.rotate(wedge.rotation());

  wheel.add(wedge);
}
function animate(frame: IFrame) {
  // handle wheel spin
  const angularVelocityChange = (angularVelocity * frame.timeDiff * (1 - angularFriction)) / 1000;
  angularVelocity -= angularVelocityChange;

  // activate / deactivate wedges based on point intersection
  const shape = stage.getIntersection({
    x: stage.width() / 2,
    y: 100,
  });

  if (controlled) {
    if (angularVelocities.length > 10) {
      angularVelocities.shift();
    }

    angularVelocities.push(((wheel.rotation() - lastRotation) * 1000) / frame.timeDiff);
  } else {
    const diff = (frame.timeDiff * angularVelocity) / 1000;
    if (diff > 0.0001) {
      wheel.rotate(diff);
    } else if (!finished && !controlled) {
      if (shape) {
        const text = shape.getParent().findOne('Text').text();
        const price = text.split('\n').join('');
        alert('You price is ' + price);
      }
      finished = true;
    }
  }
  lastRotation = wheel.rotation();

  if (shape) {
    if (shape && (!activeWedge || shape._id !== activeWedge._id)) {
      pointer.y(20);

      new Konva.Tween({
        node: pointer,
        duration: 0.3,
        y: 30,
        easing: Konva.Easings.ElasticEaseOut,
      }).play();

      if (activeWedge) {
        activeWedge.fillPriority('radial-gradient');
      }
      shape.fillPriority('fill');
      activeWedge = shape;
    }
  }
}

export function mainGalleryInit() {
  stage = new Konva.Stage({
    container: 'container',
    width: width,
    height: height,
  });
  layer = new Konva.Layer();
  wheel = new Konva.Group({
    x: stage.width() / 2,
    y: 410,
  });

  for (let n = 0; n < numWedges; n++) {
    addWedge(n);
  }
  pointer = new Konva.Wedge({
    fillRadialGradientStartPoint: { x: 0, y: 0 },
    fillRadialGradientStartRadius: 0,
    fillRadialGradientEndPoint: { x: 0, y: 0 },
    fillRadialGradientEndRadius: 30,
    fillRadialGradientColorStops: [0, 'white', 1, 'red'],
    stroke: 'white',
    strokeWidth: 2,
    lineJoin: 'round',
    angle: 1,
    radius: 30,
    x: stage.width() / 2,
    y: 33,
    rotation: -90,
    shadowColor: 'black',
    shadowOffsetX: 3,
    shadowOffsetY: 3,
    shadowBlur: 2,
    shadowOpacity: 0.5,
  });

  // add components to the stage
  layer.add(wheel);
  layer.add(pointer);
  stage.add(layer);

  // bind events
  wheel.on('mousedown touchstart', function (evt: MouseEvent) {
    angularVelocity = 0;
    controlled = true;
    target = evt.target;
    finished = false;
  });
  // add listeners to container
  stage.addEventListener(
    'mouseup touchend',
    function () {
      controlled = false;
      angularVelocity = getAverageAngularVelocity() * 5;

      if (angularVelocity > 20) {
        angularVelocity = 20;
      } else if (angularVelocity < -20) {
        angularVelocity = -20;
      }

      angularVelocities = [];
    },
    false,
  );

  stage.addEventListener(
    'mousemove touchmove',
    function (evt: MouseEvent) {
      const mousePos = stage.getPointerPosition();
      if (controlled && mousePos && target) {
        const x = mousePos.x - wheel.getX();
        const y = mousePos.y - wheel.getY();
        const atan = Math.atan(y / x);
        const rotation = x >= 0 ? atan : atan + Math.PI;
        const targetGroup = target.getParent();

        wheel.rotation(rotation - targetGroup.startRotation - target.angle() / 2);
      }
    },
    false,
  );

  const anim = new Konva.Animation(animate, layer);

  // wait one second and then spin the wheel
  setTimeout(function () {
    anim.start();
  }, 1000);
}
