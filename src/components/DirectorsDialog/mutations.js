import { gql } from "apollo-boost";

export const deleteDirectMutation = gql`
  mutation deleteDirect($id: ID) {
    deleteDirect(id: $id) {
      id
    }
  }
`;
