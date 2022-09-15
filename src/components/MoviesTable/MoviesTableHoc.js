import { withStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { graphql } from "react-apollo";

import { moviesQuery } from "./queries";
import { styles } from "./styles";

const withGraphQl = graphql(moviesQuery, {
  options: ({ name = "" }) => ({
    variables: { name },
  }),
});

export default compose(withStyles(styles), withGraphQl);
