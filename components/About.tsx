import LazyLoad from "react-lazyload";

import { TransitionContainer } from ".";

const Profile = () => {
  return (
    <section className="profile">
      {/* <header>Profile</header> */}
      <LazyLoad height={200} once>
        <TransitionContainer>
          <article>1</article>
        </TransitionContainer>
      </LazyLoad>
      <LazyLoad height={200} once>
        <TransitionContainer>
          <article>2</article>
        </TransitionContainer>
      </LazyLoad>
      <LazyLoad height={200} once>
        <TransitionContainer>
          <article>3</article>
        </TransitionContainer>
      </LazyLoad>
      <LazyLoad height={200} once>
        <TransitionContainer>
          <article>4</article>
        </TransitionContainer>
      </LazyLoad>
      <LazyLoad height={200} once>
        <TransitionContainer>
          <article>5</article>
        </TransitionContainer>
      </LazyLoad>
      <LazyLoad height={200} once>
        <TransitionContainer>
          <article>6</article>
        </TransitionContainer>
      </LazyLoad>
    </section>
  );
};

export default Profile;
