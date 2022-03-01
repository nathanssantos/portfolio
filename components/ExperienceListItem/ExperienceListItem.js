import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";

import Styles from "./Styles";

// interface ExpereinceListItemProps {
//   name: string;
//   image: string;
//   description: string;
//   url: string;
//   width: number;
//   height: number;
//   stack: string;
// }

const ExpereinceListItem = (props /* : ExpereinceListItemProps */) => {
  const { name, image, description, url, width, height, work, stack } = props;

  return (
    <Styles
      component="a"
      className="experience__list__item"
      href={url}
      target="_blank"
      rel="noreferrer"
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
