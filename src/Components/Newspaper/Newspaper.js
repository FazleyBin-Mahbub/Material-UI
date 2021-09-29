import { CircularProgress, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import News from "../News/News";

const Newspaper = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=c7da5fec0fcd476f98fcb5d5add4a75c"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{  md: 3, xs: 4 }}>
          {articles.length === 0 ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          ) : (
            articles.map((article) => <News article={article} />)
          )}
        </Grid>
      </Box>
    </div>
  );
};

export default Newspaper;
