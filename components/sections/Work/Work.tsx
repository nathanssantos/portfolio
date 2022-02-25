import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import { FadeInContainer } from "../../";
import Styles from "./Styles";

interface WorkProps {
  repositories?: Repository[];
}

const Work = (props: WorkProps) => {
  const { repositories } = props;

  if (!repositories) return null;

  const data = repositories.sort((a, b) => {
    if (!a.stargazers_count || !b.stargazers_count) return 0;

    if (a.stargazers_count > b.stargazers_count) return -1;
    else if (a.stargazers_count < b.stargazers_count) return 1;

    return 0;
  });

  return (
    <Styles id="work">
      <Container maxWidth="lg">
        <div className="content">
          <header>
            <FadeInContainer lazyLoad>
              <h2>Some of My Personal Projects</h2>
            </FadeInContainer>
          </header>
          <div className="card-list">
            {data.map(
              ({ id, name, language, description, html_url }, index) => (
                <FadeInContainer lazyLoad key={`${id}`} offset={-200}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" component="div">
                        {name}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {language}
                      </Typography>
                      <Typography variant="caption">{description}</Typography>
                    </CardContent>
                    <CardActions
                      sx={{ display: "flex", justifyContent: "flex-end" }}
                    >
                      <a href={html_url} target="_blank" rel="noreferrer">
                        <IconButton size="small">
                          <GitHubIcon />
                        </IconButton>
                      </a>
                    </CardActions>
                  </Card>
                </FadeInContainer>
              )
            )}
          </div>
        </div>
      </Container>
    </Styles>
  );
};

export default Work;
