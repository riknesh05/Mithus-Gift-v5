// App.jsx or Main.jsx
import Carousel from './Carousel';
import im1 from './assets/im1.jpg';
import im2 from './assets/im2.jpg';
// ... other imports

const giftData = [
  { Image: im1, title: "Posters" },
  { Image: im2, title: "Thread Arts" },
  // ...
];

const artData = [
  { Image: im5, title: "Preservations" },
  { Image: im6, title: "Wood Arts" },
  // ...
];

export default function App() {
  return (
    <>
      <h2>🎁 Gift Carousel</h2>
      <Carousel items={giftData} />

      <h2>🎨 Art Carousel</h2>
      <Carousel items={artData} />
    </>
  );
}
