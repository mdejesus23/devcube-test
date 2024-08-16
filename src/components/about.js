import productElements from "./imageSlides";

const about = `
    <section class="about">
      <div class="about__container">
        <div class="greeting">
          <span class="dash">—</span>
          patisserie
          <span class="dash">—</span>
        </div>

        <h1>Lorem Ipsum</h1>

        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </article>

        <article>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </article>

        <div class="about__container-socials">
          <p>Follow Us</p>
          <img src="/images/long-dash.png" alt="long dash icon" />
          <img src="images/fb.png" alt="fb icons" />
          <img src="images/ig.png" alt="instagram icons" />
        </div>
      </div>

      <section class="about__container-slides">
        <div class="about__container-row">
          <ul class="about__container-cards">
          ${productElements}
          </ul>
        </div>
      </section>
    </section>
`;

export default about;
