import { api } from '../../../utils/api';

export const signIn = async ({ email, password }) => {
  const { data } = await api.graphql(`
        mutation {
            signIn(email:"${email}",password:"${password}") {
                error{
                    statusCode
                    message
                }
                token
            }
        }
    `);
  console.log(data);
    // console.log()
//   console.log(error);
        // console.log(error,token);
  //   if()
};
