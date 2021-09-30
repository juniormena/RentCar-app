import homeCSS from "./Home.module.css";

function Home() {
  return (
    <section className={homeCSS.hero}>
      <div className="container">
        <img src="https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png" />
        <h1 className="display-1 text-bold">Build anything</h1>
        <h5 className="text-gray-soft text-regular">
          Themes built by or reviewed by Bootstrap's creators.
        </h5>
        <a
          className="button button-brand btn-lg mb-5 mb-lg-2"
          href="https://themes.getbootstrap.com/official-themes"
        >
          Why our themes?
        </a>
      </div>
    </section>
  );
}

export default Home;
