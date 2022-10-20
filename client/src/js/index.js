import _ from 'lodash';
import "./form";
import "./submit";
import Logo from '../images/rias.jpg';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

window.addEventListener('load', function () {
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());


