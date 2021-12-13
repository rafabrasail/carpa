// Do not touch here
var container = document.getElementById('canvas')
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );
const scene = new THREE.Scene();
// Do not touch here - code for render THREE into html tag


const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );



 //( window.innerWidth, window.innerHeight )



			//const geometry = new THREE.BoxGeometry();
      const radius = 7;
      const detail = 2; 
      const geometry = new THREE.DodecahedronGeometry(0.1, 1);
			const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
			const cube = new THREE.Mesh( geometry, material );
			scene.add( cube );

			camera.position.z = 5;

			const animate = function () {
				requestAnimationFrame( animate );

				cube.rotation.x += 0.05;
				cube.rotation.y += 0.01;

				renderer.render( scene, camera );
			};

			animate();