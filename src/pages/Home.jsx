import Banner from "../component/Banner";
import Category from "../component/Category";
import CategoryProducts from "../component/CategoryProducts";
import EditorPicks from "../component/EditorPicks";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category/>
      <EditorPicks/>
      <CategoryProducts/>
    </div>
  );
};

export default Home;
