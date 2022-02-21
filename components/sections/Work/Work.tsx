import Container from "@mui/material/Container";
import { FadeInContainer } from "../../";
import Styles from "./Styles";

const Work = () => {
  return (
    <Styles id="work">
      <Container maxWidth="lg">
        <div className="content">
          <header>
            <FadeInContainer lazyLoad>
              <h2>Work</h2>
            </FadeInContainer>
          </header>
          <FadeInContainer lazyLoad>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi modi
              corrupti et tempore eaque harum excepturi, enim sunt id delectus.
              Velit quis libero rem ducimus eligendi soluta dolore natus ullam a
              perferendis consectetur earum fugiat reprehenderit necessitatibus
              modi distinctio quasi cum, dignissimos dolor dolorum. Eum
              perspiciatis amet tempora expedita suscipit unde rem, nobis
              obcaecati recusandae, doloremque vel cum. Et, nemo. Ducimus
              architecto eos in facilis placeat est, deserunt veniam sunt,
              laudantium itaque quo, excepturi totam earum culpa officiis sit?
              Eaque, quia soluta minima placeat odit repellendus reiciendis,
              porro cumque repudiandae, temporibus omnis. Qui exercitationem
              sit, magnam perferendis, autem, officia molestias repellendus sint
              cumque dolore animi ea vel obcaecati nulla corrupti quod. In
              itaque facilis, placeat cumque eius ullam consequuntur iste quasi
              provident, optio sequi! Qui delectus voluptatibus veniam tempora
              soluta fugit accusantium illum ratione tenetur consequatur saepe
              molestias omnis, recusandae ipsam sequi itaque modi. Incidunt, ut
              quibusdam eveniet beatae totam laboriosam tenetur laudantium
              voluptate porro voluptatum unde atque quidem! Dolor reprehenderit
              enim esse tempora, est placeat exercitationem harum quibusdam
              quisquam consequatur rerum magnam ipsum quas alias magni illo rem
              corporis fuga animi facere dolorem, velit dolores? Dolores ex
              delectus totam quaerat dolor nemo saepe, facilis tempora excepturi
              non atque sed!
            </p>
          </FadeInContainer>
        </div>
      </Container>
    </Styles>
  );
};

export default Work;
