import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import { CardProps } from "@mui/material/Card";

import Styles from "./Styles";

// export interface ExpereinceListItemProps extends CardProps {
//   name: string;
//   image: string;
//   description: string;
//   href: string;
//   width: number;
//   height: number;
//   stack: string;
//   work: string;
//   component?: string;
//   target?: string;
//   rel?: string;
// }

const ExpereinceListItem = (props /* : ExpereinceListItemProps */) => {
  const {
    name,
    image,
    description,
    href,
    width,
    height,
    work,
    stack,
    target = "_blank",
    rel = "noreferrer",
  } = props;

  return (
    <Styles
      component="a"
      className="experience__list__item"
      href={href}
      target={target}
      rel={rel}
    >
      <Box className="experience__list__item__content">
        <Box className="experience__list__item__image">
          <Image src={image} alt={name} width={width} height={height} />
        </Box>
        <Box className="experience__list__item__text">
          <Typography variant="h6" className="experience__list__item__name">
            {name}
          </Typography>
          <Typography variant="caption">{description}</Typography>
          <Box className="experience__list__item__work">
            <Typography variant="caption">{work}</Typography>
          </Box>
          <Box className="experience__list__item__stack">
            <Typography variant="caption" color="text.secondary">
              {stack}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Styles>
  );
};

export default ExpereinceListItem;
