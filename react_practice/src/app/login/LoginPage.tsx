export const LoginPage = (): JSX.Element => {
  return (
    <div>
      <form>
        <label>
          Name:
          <input type="text">Name</input>
        </label>
        <button type="submit">Submit</button>
        <label>
          Password:
          <input type="text">Password</input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
