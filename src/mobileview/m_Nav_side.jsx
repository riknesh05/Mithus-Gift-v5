import Search from "../Components/Search";
import Like from "../Components/like";
import Share from "../Components/share";
import new_arrivals_1 from '../assets/new_arrivals_1.svg';
import best_seller_1 from '../assets/best_seller_1.svg';
import occasions_1 from '../assets/occasions_1.svg';
import for_him_1 from '../assets/for_him_1.svg';
import for_her_1 from '../assets/for_her_1.svg';

function side() {
  return (
    <>
      <div className="bg-gray-300 w-2/3 m-h-full rounded-3xl p-4 shadow-lg absolute top-10 left-5 z-10">
        <Search />

        <ul className="navList [&>*]:border-b-2 [&>*]:m-2.5 [&>*]:p-2  border-neutral-200">
          <li className="navItem ">
            <a href="#">New Arrivals</a>
            <img src={new_arrivals_1} alt="" />
          </li>
          <li className="navItem ">
            <a href="#">Best Sellers</a>
            <img src={best_seller_1} alt="" />
          </li>
          <li className="navItem ">
            <a href="#">Occasions</a>
            <img src={occasions_1} alt="" />
          </li>
          <li className="navItem ">
            <a href="#">Gifts for Him</a>
            <img src={for_him_1} alt="" />
          </li>
          <li className="navItem ">
            <a href="#">Gifts for Her</a>
            <img src={for_her_1} alt="" />
          </li>
        </ul>
        <section className="flex items-center justify-around mt-4">
          <Like />
          <Share />
          <p>Like & Share 🎉</p>
        </section>
      </div>
    </>
  );
}

export default side;
