import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { IconButton } from "@mui/material";
import { Button, FadeInContainer } from "../../components";
import Styles from "./Styles";
import { Box } from "@mui/system";

interface ProjectsProps {
  repositories?: Repository[];
}

const Projects = (props: ProjectsProps) => {
  const { repositories } = props;

  if (!repositories) return null;

  const data = repositories.sort((a, b) => {
    if (!a.stargazers_count || !b.stargazers_count) return 0;

    if (a.stargazers_count > b.stargazers_count) return -1;
    else if (a.stargazers_count < b.stargazers_count) return 1;

    return 0;
  });

  return (
    <Styles id="projects">
      <Container maxWidth="lg">
        <div className="content">
          <header>
            <FadeInContainer lazyLoad>
              <h2>My Open Source Projects</h2>
            </FadeInContainer>
          </header>
          <div className="card-list">
            {data.map(
              (
                {
                  id,
                  name,
                  language,
                  description,
                  homepage,
                  html_url,
                  stargazers_count,
                },
                index
              ) => (
                <FadeInContainer lazyLoad key={`${id}`} delay={index * 100}>
                  <Card className="project-card">
                    <CardContent
                      component="a"
                      href={homepage}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Box className="project-card__header">
                        <Typography
                          component="div"
                          className="project-card__title"
                        >
                          {name}
                        </Typography>
                        <Box className="project-card__stargazers">
                          <StarBorderIcon />
                          <Typography color="text.secondary" variant="caption">
                            {stargazers_count}
                          </Typography>
                        </Box>
                      </Box>

                      <Box className="project-card__descripion">
                        <Typography variant="caption">{description}</Typography>
                      </Box>
                    </CardContent>
                    <CardActions className="project-card__actions">
                      <Typography color="text.secondary" variant="caption">
                        {language}
                      </Typography>

                      <IconButton
                        size="small"
                        component="a"
                        href={html_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </CardActions>
                  </Card>
                </FadeInContainer>
              )
            )}
          </div>
          <FadeInContainer lazyLoad delay={600}>
            <Button href="https://github.com/nathanssantos?tab=repositories">
              See All Projects
            </Button>
          </FadeInContainer>
        </div>
      </Container>
    </Styles>
  );
};

export default Projects;
