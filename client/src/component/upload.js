
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import React from 'react';

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      filename
    }
  }
`;

export default () => {
  return (   
    <Mutation mutation={UPLOAD_FILE}>
      {uploadFile => (
        <input
        className="selectFile"
        type="file"
        // required
        onChange={({ target: { validity, files: [file] } }) =>
          validity.valid && uploadFile({ variables: { file } })
        }
       />
      )}
    </Mutation>
  );
}