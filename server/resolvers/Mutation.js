export const Mutation = {
  signIn: (parent, args, context) => {
    const { email, password } = args;

    if (email !== 'contact@sor-seo.com' || password !== 'kodotag') {
      return { error: { statusCode: 401, message: 'invalid username or password whatever' }, token: null };
    } else {
      return {
        error: null,
        token: 'jwtoken',
      };
    }
  },
};
