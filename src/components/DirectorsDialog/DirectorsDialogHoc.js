import { compose } from "recompose";
import { graphql } from "react-apollo";

import { deleteDirectMutation } from "./mutations";
import { directorsQuery } from "../DirectorsTable/queries";

const withGraphqlDelete = graphql(deleteDirectMutation, {
  props: ({ mutate }) => ({
    deleteDirect: (id) =>
      mutate({
        variables: id,
        refetchQueries: [{ query: directorsQuery, variables: { name: "" } }],
      }),
  }),
});

export default compose(withGraphqlDelete);
